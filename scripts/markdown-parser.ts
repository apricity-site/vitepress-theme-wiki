import MarkdownIt from 'markdown-it'
import {MarkdownRenderer} from "vitepress";
import {frontmatterPlugin} from "@mdit-vue/plugin-frontmatter";

const createMarkdownParser = (): MarkdownRenderer => {
  const mdParser = MarkdownIt()
  mdParser.use(frontmatterPlugin)
  return mdParser
}

export default createMarkdownParser()