import { App } from 'vue'
import components from './components/components'
import './base.scss'
export * from './components'
export * from './element'
export * from './hooks'
export * from './util'

export default {
  install(app: App): void{
    components.forEach(item => {
      app.use(item)
    })
  }
}
