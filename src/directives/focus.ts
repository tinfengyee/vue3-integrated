import type { App, Directive } from 'vue'

const focusDirective: Directive = {
  mounted(el) {
    el.focus()
  },
}

export function setupLoaingDirective(app: App) {
  app.directive('focus', focusDirective)
}

export default focusDirective
