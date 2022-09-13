import {App, Component, Plugin} from "vue";

import Note from './Note.vue'
import Blog from './Blog.vue'

const components: Record<string, Component> = {
  Note,
  Blog
}

export default {
  install(app:App) {
    for (let key of Object.keys(components)) {
      app.component(key, components[key])
    }
  }
} as Plugin