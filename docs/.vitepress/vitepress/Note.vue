<script lang="ts" setup>
import NoteCard from "./NoteCard.vue";
import meta from "../../meta/note.json";
import { ref } from "vue";
import { get } from "lodash";
import { Note } from "../../../typeing";
const currentBC = ref<undefined | null | string>(null);
const currentCategories = ref<Record<string, Record<string, Note[]>>>(
  meta.baseCategories
);

const handleBCToggle = (bc?: string) => {
  currentBC.value = bc;
  if (!bc) {
    currentCategories.value = meta.baseCategories;
  } else {
    currentCategories.value = {
      [bc]: get(meta.baseCategories, bc),
    };
  }
};
</script>
<template>
  <main class="note-home">
    <aside class="sider">
      <ul class="base-category-list">
        <li :class="[{ 'is-active': !currentBC }]">
          <span @click="handleBCToggle(null)"> 全部 </span>
        </li>
        <template v-for="bc in Object.keys(meta.baseCategories)" :key="bc">
          <li :class="[{ 'is-active': currentBC === bc }]">
            <span @click="handleBCToggle(bc)">
              {{ bc }}
            </span>
          </li>
        </template>
      </ul>
    </aside>
    <div class="content">
      <div
        v-for="bc in Object.keys(currentCategories)"
        class="base-category-card"
        :key="bc"
      >
        <div class="base-category-title">
          {{ bc }}
        </div>
        <div class="category-list">
          <div
            class="category-card"
            v-for="c in Object.keys(currentCategories[bc])"
            :key="c"
          >
            <div class="category-title">
              {{ c }}
            </div>
            <div class="note-list">
              <NoteCard
                :note="note"
                v-for="note in currentCategories[bc][c]"
                :key="note.realativePath"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
@media screen {
}

.note-home {
  display: flex;
  flex-direction: row;

  & > .sider {
    padding-left: 40px;
    margin-right: 12px;

    & > .base-category-list {
      width: 124px;
      li {
        position: relative;
        font-size: 14px;
        color: #1c1f21;
        line-height: 36px;
        margin-bottom: 12px;
        height: 36px;
        padding-left: 12px;
        border-radius: 4px;
        cursor: pointer;
        &:not(.is-active):hover {
          span {
            color: white;
            background-color: #40a9ff;
          }
        }

        span {
          display: inline-block;
          padding: 5px 7px;
          line-height: 16px;
          border-radius: 4px;
        }
      }

      .is-active {
        color: #1890ff;
      }
    }
  }

  & > .content {
    & > .base-category-card {
      .base-category-title {
        font-size: 16px;
        color: #1c1f21;
        line-height: 32px;
        font-weight: 700;
        margin-bottom: 16px;
      }

      .category-list {
        .category-card {
          .category-title {
            font-size: 16px;
            color: #37f;
            line-height: 24px;
            margin-bottom: 24px;
          }
        }
      }
    }
  }

  .content {
    flex-grow: 1;
  }
}
</style>
