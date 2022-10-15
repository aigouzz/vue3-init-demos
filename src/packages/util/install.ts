import type { Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      const name = 'U' + comp.__name.split('-').map((item:string) => {
        return item.substring(0,1).toUpperCase() + item.substring(1);
      }).join('')
      console.log(name)
      app.component(name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}
