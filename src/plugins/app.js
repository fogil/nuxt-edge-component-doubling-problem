import Vue from 'vue'

let context = null
if (typeof window == "undefined") {
  context = global
} else {
  context = window
}

context.S = new Vue({})
