import path from 'path'
import * as fs from "fs";
import * as lodash from 'lodash'

import markdownParser from "./markdown-parser";
import {postLink, warningIfNeed} from "./utils";
import {MarkdownItEnv} from "@mdit-vue/types";
import {BlogMeta, FSMeta, PageMeta} from "../typeing";
import {blogRoot, docsRoot} from "./paths";
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




/**
 * 该方法需要获取的数据
 * 1. 笔记两级分类
 */
export const genNoteMeta = () => {

}


export const genMeta = () => {
  // genBlogMeta();
  const blogFsTree = traverse(blogRoot)
  blogMetaGenerator(blogFsTree)
  // 遍历fsTree
  genNoteMeta();
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

  function metaTraverse(fsMetas?: FSMeta[]) {
    if (!fsMetas) return
    for (let fsMeta of fsMetas) {
      if (fsMeta.type === 'file') {
        blogPostAnalyse(fsMeta, meta)
      }else {
        metaTraverse(fsMeta.children)
      }
    }
  }
  metaTraverse(fsTree)
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
  } as PageMeta
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

genMeta()