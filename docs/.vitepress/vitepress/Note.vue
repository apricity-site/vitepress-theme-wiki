<script lang="ts" setup>
import NoteCard from './NoteCard.vue'
import meta from '../../meta/note.json'
import {ref} from "vue";
import {get} from "lodash";
const currentBC = ref<undefined | null | string>(null)
const currentCategories = ref(meta.categories)

const handleBCToggle = (bc?:string) => {
  currentBC.value = bc
  if (!bc) {
    currentCategories.value = meta.categories
  }else {
    currentCategories.value = get(meta.baseCategories, bc)
  }
}

</script>
<template>
  <main class="note-home">
    <aside>
      <ul class="base-category">
        <li>
          <span @click="handleBCToggle(null)" :class="[{'is-active': !currentBC}]">
           全部
          </span>
        </li>
        <li v-for="bc in Object.keys(meta.baseCategories)">
          <span @click="handleBCToggle(bc)" :class="[{'is-active': currentBC===bc}]">
            {{ bc }}
          </span>
        </li>
      </ul>
    </aside>
    <div class="content">
      <div v-for="c in Object.keys(currentCategories)" class="category">
        <div class="category-title">
          <span> {{ c }} </span>
        </div>
        <div class="note-list">
          <NoteCard :note="note" v-for="note in currentCategories[c]" />
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.note-home{
  display: flex;
  flex-direction: row;

  .base-category {
    li span {
      cursor: pointer;
    }
  }

  .content {
    flex-grow: 1;
  }
}
</style>