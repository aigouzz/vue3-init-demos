<template>
    <button @click="show">展示modal</button>
    <Modal v-model="value" title="标题" :content="content"></Modal>
</template>
<script setup lang="ts">
import Modal from './common/modal.vue'
import { ref, RenderFunction } from 'vue'

let value = ref(false);
let content = function(h:any) {
    return h('div', {
        class: 'index__content'
    }, [
        h('span', {}, '这是content'), 
        h('span', {}, '这是第二个content')
    ]);
};
console.log(value)

let show = ():void => {
    value.value = true;
}

</script>