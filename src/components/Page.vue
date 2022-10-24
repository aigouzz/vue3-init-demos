<template>
  <div class="page">
    <el-scrollbar class="slider">
      <div v-if="props.title" class="title">
        <h1>{{ title }}</h1>
      </div>
      <div class="content">
        <div
          v-for="(tab, index) in components"
          :key="index"
          class="menu-li"
          :class="tab.__name === currentTab.__name ? 'current-tab' : ''"
          @click="switchTab(tab)"
        >
          {{ tab.__name }}
        </div>
      </div>
    </el-scrollbar>
    <el-scrollbar class="container">
      <router-view></router-view>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import { markRaw, reactive } from 'vue'
import { RouterView } from 'vue-router'
import router from '../router'

interface Props {
  title?: string
  components: any[]
}

const props = defineProps<Props>()

const currentTab = reactive({
  __name: props.components[0].__name
})

const switchTab = (tab: any) => {
  const name = '/page/' + (tab.__name.indexOf('-') > 0 ? tab.__name.split('-').reduce((prev:string, item:string) => {
    return prev + item.charAt(0).toUpperCase() + item.substring(1)
  }) : tab.__name)
  currentTab.__name = tab.__name
  router.push(name)
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: start;
  height: 100vh;
  .slider {
    text-align: center;
    width: 200px;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    min-height: 100vh;
    .title {
      margin-bottom: 10px;
    }
    .menu-li {
      height: 40px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
    }
  }
  .container {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  .current-tab {
    color: rgb(30, 128, 255);
  }
}
</style>
