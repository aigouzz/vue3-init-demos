import { App } from 'vue'
import components from './components/components'
import './base.scss'
import ElePlus from './element'
export * from './components'
export * from './hooks'
export * from './util'

export default {
  install(app: App): void{
    for(const item in ElePlus) {
      app.use(ElePlus[item as keyof typeof ElePlus])
    }
    components.forEach(item => {
      app.use(item)
    })
  }
}
