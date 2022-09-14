import { FSMeta } from "../typeing"
import { readMarkdownFile } from "./gen-meta"
import { DefaultTheme } from "vitepress/dist/node"

/**
 * TODO 生成sidebar元数据
 * @param file 笔记的首文件
 */
export const noteSidebar = (file: string) => {
    const noteSidebar: DefaultTheme.SidebarMulti = {}
    const fsMeta: FSMeta = readMarkdownFile(file)
    noteSidebar[fsMeta.relativePath!] = [
        {
            text: fsMeta.frontmatter!.noteTitle,
            items: [
                {
                    text: fsMeta.frontmatter!.title,
                    link: fsMeta.relativePath!
                }
            ]
        }
    ]

    // 读取所有同级目录下文件，和子文件夹
}