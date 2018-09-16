let context = null
if (typeof window == "undefined") {
  context = global
  context.Vue = require('vue')
} else {
  context = window
}

context.S = new Vue({})
