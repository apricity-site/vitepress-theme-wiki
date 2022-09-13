import {DefaultTheme, UserConfig} from "vitepress";

const config: UserConfig = {
  title: 'wiki',
  description: 'apricity\'s personal wiki',
  themeConfig: {
    siteTitle: false,
    logo: '/logo.svg',
    nav: [
      { text: 'Note', link: '/note/index' },
      { text: 'Blog', link: '/blog/index' }
    ],
    sidebar: {
      '/note/kafka/index': [
        {
          text: "Kafka",
          items: [
            {
              text: "入门",
              link: "/note/kafka/index"
            }
          ]
        }
      ]
    }
  }
}

export default  config