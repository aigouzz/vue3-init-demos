import toast from './index.vue'
import { createGlobalNode, removeGlobalNode } from '~/util'

interface toastApiType {
  message?: string
  duration?: number
  type?: string
}

// 函数式调用
export function UToast(options: toastApiType) {
  const duration = options.duration
  if (!options.message) return
  options.duration = duration ? duration : 1000
  const { vnode, div } = createGlobalNode(toast as any, options)

  setTimeout(() => {
    removeGlobalNode(div)
  }, options.duration + 300)
  return vnode
}

export default UToast
