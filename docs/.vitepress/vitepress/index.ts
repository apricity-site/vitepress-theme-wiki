import {App, Component, Plugin} from "vue";

import Note from './Note.vue'

const components: Record<string, Component> = {
  Note
}

export default {
  install(app:App) {
    for (let key of Object.keys(components)) {
      app.component(key, components[key])
    }
  }
} as Plugin