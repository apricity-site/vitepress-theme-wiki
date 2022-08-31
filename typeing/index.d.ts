

export type PageMeta = {
  relativePath: string
  category: string | string[] | undefined
  tag:  string | string[] | undefined
  createTime: Date | undefined
}


export type BlogMeta = {
  categories: Record<string, PageMeta[]>
  tags: Record<string, PageMeta[]>
  archives: Record<string, PageMeta[]>
  pages: PageMeta[]
}

export type FSMeta = {
  file: string
  type: 'file' | 'dir'
  parent: string
  relativePath?: string
  children?: FSMeta[]
  frontmatter?: Record<string, any>
}