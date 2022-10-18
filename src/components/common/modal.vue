<template>
    <Teleport to="body">
        <div v-if="modelValue" class="modal">
            <div
             class="mask"
             @click="maskClose && !loading && handleCancel()"
             ></div>
            <div class="modal__main">
                <div class="modal__title line line--b">
                    <span>{{ title || t("r.title") }}</span>
                    <span
                        v-if="close"
                        :title="t('r.close')"
                        class="close"
                        @click="!loading && handleCancel()"
                        >✕</span>
                </div>
                <div class="modal__content">
                    <Content v-if="typeof content === 'function'" :render="content" />
                    <slot v-else>
                        {{ content }}
                    </slot>
                </div>
                <div class="modal__btns line line--t">
                    <button :disabled="loading" @click="handleConfirm">
                        <span class="loading" v-if="loading"> ❍ </span>{{ t("r.confirm") }}
                    </button>
                    <button @click="!loading && handleCancel()">
                        {{ t("r.cancel") }}
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<script setup lang="ts">
import { Teleport } from 'vue';

interface Props{
    modelValue: boolean,
    content: any,
    title: string,
    close: boolean,
    maskClose?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    modelValue: false,
    content: '',
    close: true,
    maskClose: true
});
const emits = defineEmits<{
    (e: 'update:modelValue', modalValue: boolean) : void
}>()

let loading = false;

const handleCancel = () => {
    emits('update:modelValue', false);
};

const handleConfirm = () => {
    emits('update:modelValue', false);
};

const t = (name:string) => {
    if(name === 'r.cancel') {
        return '取消';
    } else if(name === 'r.confirm'){
        return '确定';
    } else {
        return '关闭';
    }
}

</script>
<style lang="scss">
.modal{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    .mask{
        background: rgba(0, 0, 0, .3);
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .modal__main{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        width: 300px;
        height: 300px;
    }
    .close{
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 5px;
    }
    .modal__title{
        line-height: 40px;
        font-size: 16px;
    }
    .modal__content{
        line-height: 40px;
        height: 220px;
    }
    .modal__btns{
        display: flex;
        button{
            flex: 1;
            display: block;
            height: 38px;
            line-height: 38px;
            background: green;
            border: 1px solid #ddd;
            color: #fff;
        }
    }
}
</style>