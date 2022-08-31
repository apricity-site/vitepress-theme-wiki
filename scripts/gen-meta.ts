import path from 'path'
import * as fs from "fs";
import * as lodash from 'lodash'

import markdownParser from "./markdown-parser";
import {postLink, warningIfNeed} from "./utils";
import {MarkdownItEnv} from "@mdit-vue/types";
import {BlogMeta, FSMeta, Note, NoteMeta, Post} from "../typeing";
import {blogRoot, docsRoot, noteRoot} from "./paths";
import {isDate, isUndefined} from "lodash";


export const readMarkdownFile = (file: string): FSMeta => {
  const env: MarkdownItEnv = {}
  const parentDir = path.resolve(file, '../')
  markdownParser.render(fs.readFileSync(file).toString(), env)
  return {
    file,
    type: 'file',
    parent: parentDir,
    relativePath: postLink(file),
    frontmatter: env.frontmatter
  };
}

/**
 * 遍历生成信息
 * @param file
 */
export const traverse = (file: string): FSMeta[] => {
  const result: FSMeta[] = []
  const stat = fs.statSync(file)
  if (stat.isFile() && file.endsWith('.md')) {
    result.push(readMarkdownFile(file))
  }else {
    for (let subFile of fs.readdirSync(file)) {
      const subFilePath = path.resolve(file, subFile)
      if (fs.statSync(subFilePath).isFile()) {
        result.push(readMarkdownFile(subFilePath))
      }else {
        result.push({
          type: 'dir',
          file: subFilePath,
          parent: file,
          children: traverse(subFilePath)
        })
      }
    }
  }
  return result
}

function metaTraverse(callback: (fsMeta: FSMeta) => void, fsMetas?: FSMeta[]) {
  if (!fsMetas) return
  for (let fsMeta of fsMetas) {
    if (fsMeta.type === 'file') {
      callback(fsMeta)
    }else {
      metaTraverse(callback, fsMeta.children)
    }
  }
}

/**
 *
 *
 * 该方法需要获取的数据
 * 1. 根据创建日期排序的文章列表
 * 2. 所有分类信息
 * 3. 所有标签信息
 * 4. 归档信息
 *
 * post: true 标识这是一篇文章而不是章节或者页面 只会读取文章的分类标签等信息
 *
 */
export const blogMetaGenerator = (fsTree: FSMeta[]) => {
  const meta: BlogMeta = {
    archives: {
      unArchived: []
    },
    categories: {},
    tags: {},
    pages: []
  }

  metaTraverse((fs) => blogPostAnalyse(fs, meta), fsTree)
  const sortable = meta.pages.filter(p => !isUndefined(p.createTime))
  const unSortable = meta.pages.filter(p => isUndefined(p.createTime))
  sortable.sort((a, b) => {
    if (isDate(a.createTime) && isDate(b.createTime)) {
      return b.createTime.getTime() - a.createTime.getTime()
    }
    return 0
  })
  meta.pages = [...sortable, ...unSortable]

  const metaContent = `
${JSON.stringify(meta, null, 2)} 
  `
  fs.writeFileSync(path.resolve(docsRoot, 'meta', 'blog.json'), metaContent, {
    encoding: 'utf-8'
  })
}

export const blogPostAnalyse = (fsMeta: FSMeta, meta: BlogMeta) => {
  const { frontmatter, relativePath } = fsMeta
  if (!frontmatter!.post) return
  // post 首页
  const pageMeta = {
    relativePath: relativePath!,
    category: frontmatter?.category,
    tag:  frontmatter!.tag,
    title:  warningIfNeed(
      frontmatter!.title,
      isUndefined(frontmatter!.title),
      `【${fsMeta.file}】没有文章标题`),
    createTime: frontmatter!.createTime
  } as Post
  meta.pages.push(pageMeta)

  // resolve category
  if (pageMeta.category) {
    if (Array.isArray(pageMeta.category)) {
      for (const c of pageMeta.category) {
        meta.categories[c] ? meta.categories[c].push(pageMeta) : (meta.categories[c] = [pageMeta])
      }
    }else {
      meta.categories[pageMeta.category] ?
        meta.categories[pageMeta.category].push(pageMeta) :
        (meta.categories[pageMeta.category] = [pageMeta])
    }
  }

  // tag
  if (pageMeta.tag) {
    if (Array.isArray(pageMeta.tag)) {
      for (const t of pageMeta.tag) {
        meta.tags[t] ? meta.tags[t].push(pageMeta) : (meta.tags[t] = [pageMeta])
      }
    }else {
      meta.tags[pageMeta.tag] ?
        meta.tags[pageMeta.tag].push(pageMeta) :
        (meta.tags[pageMeta.tag] = [pageMeta])
    }
  }

  // archive
  if (pageMeta.createTime) {
    const year = pageMeta.createTime.getFullYear() + ""
    meta.archives[year] ?
      meta.archives[year].push(pageMeta) :
      (meta.archives[year] = [pageMeta])
  }else {
    meta.archives.unArchived.push(pageMeta)
  }
}

/**
 * baseCategory: java
 * category: spring
 * @param fsMeta
 * @param meta
 */
export const noteAnalyse = (fsMeta: FSMeta, meta: NoteMeta) => {
  const { frontmatter, relativePath } = fsMeta
  if (frontmatter && frontmatter.note) {
    const note: Note = {
      title: frontmatter.title,
      cover: frontmatter.cover,
      topIndex: frontmatter.topIndex,
      relativePath: relativePath as string,
      desc: frontmatter.desc,
      purpose: frontmatter.purpose
    }

    meta.notes.push(note)

    if (frontmatter.baseCategory) {
      if (!meta.baseCategories[frontmatter.baseCategory]) {
        meta.baseCategories[frontmatter.baseCategory] = {}
      }
      if (!meta.baseCategories[frontmatter.baseCategory][frontmatter.category]) {
        meta.baseCategories[frontmatter.baseCategory][frontmatter.category] = []
      }
      if (!meta.categories[frontmatter.category]) {
        meta.categories[frontmatter.category] = []
      }
      meta.baseCategories[frontmatter.baseCategory][frontmatter.category].push(note)
      meta.categories[frontmatter.category].push(note)
    }
  }
}

/**
 * 该方法需要获取的数据
 * 1.  全部 + 两级分类 + 未分类
 */
export const noteMetaGenerator = (fsTree: FSMeta[]) => {
  const meta: NoteMeta = {
    baseCategories: {},
    categories: {},
    notes: []
  }
  metaTraverse((fs) => noteAnalyse(fs, meta), fsTree)
  const metaContent = `
${JSON.stringify(meta, null, 2)} 
  `
  fs.writeFileSync(path.resolve(docsRoot, 'meta', 'note.json'), metaContent, {
    encoding: 'utf-8'
  })

}

export const genMeta = () => {
  const blogFsTree = traverse(blogRoot)
  blogMetaGenerator(blogFsTree)

  const noteFsTree = traverse(noteRoot)
  // 遍历fsTree
  noteMetaGenerator(noteFsTree);
}

genMeta()