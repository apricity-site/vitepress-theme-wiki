import path from "path";

/**
 * TODO watch docs目录
 * 遍历docs下的markdown目录。生成需要的sidebar配置
 */
export const docsRoot = path.resolve('./docs')
export const blogRoot = path.resolve(docsRoot, 'blog')
export const noteRoot = path.resolve(docsRoot, 'note')