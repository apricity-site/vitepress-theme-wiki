import {Theme} from "vitepress";
import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  enhanceApp({ app, siteData }) {
    console.log(app)
    console.log(siteData.value)
  }
} as Theme