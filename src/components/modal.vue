<template>
    <button @click="show">展示modal</button>
    <Modal v-model="value" title="标题" content="内容"></Modal>
</template>
<script setup lang="ts">
import Modal from './common/modal.vue'
import { ref } from 'vue'

let value = ref(false);

let show = ():void => {
    value.value = true;
}

</script>