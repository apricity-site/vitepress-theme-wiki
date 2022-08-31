<script lang="ts" setup>
import {defineProps, PropType} from "vue";
import {Note} from "../../../typeing";

defineProps({
  note: {
    type: Object as PropType<Note>
  }
})

</script>
<template>
  <div class="note-card">
    <div class="top-con">
      <a :title="note.title" :href="note.relativePath" class="icon"
         style="background-image:url(https://img.mukewang.com/wiki/5e785b4009607da700840084.jpg);"
      ></a>
      <div class="text"><a :title="note.title" :href="note.relativePath">
        {{ note.title }}
      </a>
      </div>
      <div class="bottom-con">
        {{ note.desc }}
      </div>
      <div class="hover-con">
        {{ note.purpose }}
      </div>
    </div>
  </div>
</template>