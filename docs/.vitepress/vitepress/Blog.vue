<script lang="ts" setup>
import { provide, reactive } from "vue";

import metaInfo from "../../meta/blog.json";
import { blogInjectionKey } from "./context";

const meta = reactive(metaInfo);

provide(blogInjectionKey, {
  meta,
});
console.log(meta);
</script>
<template>
  <main>
    <ul>
      <li v-for="page in metaInfo.pages" :key="page.relativePath">
        <a>
          <h2></h2>
        </a>
      </li>
    </ul>
  </main>
</template>
