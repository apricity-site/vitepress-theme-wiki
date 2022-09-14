<script lang="ts" setup>
import {PropType} from "vue";
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
         style="background-image:url(/img/ts.png);"
      ></a>
      <div class="text"><a :title="note.title" :href="note.relativePath">
        {{ note.title }}
      </a>
      </div>
      <div class="bottom-con">
        {{ note.desc }}
      </div>
      <!--<div class="hover-con">
        {{ note.purpose }}
      </div>-->
    </div>
  </div>
</template>
<style lang="scss">
.note-card {
  margin-right: 42px;
  margin-bottom: 26px;
  width: 278px;
  position: relative;

  .top-con {
    margin-bottom: 8px;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;

    .icon {
      width: 42px;
      height: 42px;
      display: block;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
    }

    .text {
      padding-left: 12px;
      width: 222px;
      a {
        display: block;
        font-weight: 700;
        font-size: 16px;
        color: #1c1f21;
        line-height: 24px;
        cursor: pointer;
        margin-bottom: 2px;
      }
    }
  }

  .bottom-con {
    font-size: 12px;
    color: #909090;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>