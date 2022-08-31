

export type Post = {
  relativePath: string
  category: string | string[] | undefined
  tag:  string | string[] | undefined
  createTime: Date | undefined
}


export type BlogMeta = {
  categories: Record<string, Post[]>
  tags: Record<string, Post[]>
  archives: Record<string, Post[]>
  pages: Post[]
}

export type Note = {
  cover?: string // 封面图片
  title?: string // 标题
  topIndex?: number // 置顶顺序
  relativePath: string // 相对路劲
  desc?: string // 简介
  purpose?: string // 用途
}

export type NoteMeta = {
  categories: Record<string, Note[]>,
  baseCategories: Record<string, Record<string, Note[]>>,
  notes: Note[]
}

export type FSMeta = {
  file: string
  type: 'file' | 'dir'
  parent: string
  relativePath?: string
  children?: FSMeta[]
  frontmatter?: Record<string, any>
}