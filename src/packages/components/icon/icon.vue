<template>
  <i class="u-icon" :style="style">
    <slot name="default" v-if="$slots.default"></slot>
    <svg v-else aria-hidden="true">
      <use :xlink:href="name"></use>
    </svg>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isNumber } from '~/util'

interface Props {
  name?: string
  size?: string | number
  color?: string
}

const props = defineProps<Props>()
const name = computed(() => '#' + props.name)
const style = computed(() => {
  return {
    fontSize: isNumber(props.size) ? props.size + 'px' : props.size,
    color: props.color
  }
})
</script>

<style lang="scss" scoped>
.u-icon {
  display: inline-flex;
  fill: currentColor;
  font-size: inherit;
  color: inherit;
  vertical-align: -0.15em;
  :deep(svg) {
    width: 1em;
    height: 1em;
  }
}
</style>
