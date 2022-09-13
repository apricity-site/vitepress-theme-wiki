import {Theme} from "vitepress";
import DefaultTheme from "vitepress/theme";
import Vitepress from "../vitepress";

export default {
  ...DefaultTheme,
  enhanceApp({ app, siteData }) {
    app.use(Vitepress)
  }
} as Theme