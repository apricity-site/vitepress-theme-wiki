import {UserConfig} from "vitepress";

const config: UserConfig = {
  title: 'wiki',
  description: 'apricity\'s personal wiki',
  themeConfig: {
    siteTitle: false,
    logo: '/logo.svg',
    nav: [
      { text: 'Note', link: '/note/index' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/...' }
    ],
    sidebar: [
      {
        "text": "spring batch",
        "link": "/blog/2021/spring-batch/01-getting-start",
        "items": [
          {
            "text": "入门",
            "link": "/blog/2021/spring-batch/01-getting-start"
          }
        ]
      }
    ]
  }
}

export default  config