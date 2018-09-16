<template>
<div>
  <MinimalComponent />

  <div v-for="(section, i) in pg.sections" :key="i">
    <div v-for="(item, j) in hamburger(section)"
      :key="`${i}-${j}`"
    >
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {
    MinimalComponent: require('~/components/MinimalComponent.vue').default,
  },

  async fetch(context) {
    S.home = {
      sections: [
        {items: []}
      ]
    }
  },

  methods: {
    hamburger(section) {
      return []
    },

  },

  computed: {
    pg() {
      return S.home || {}
    },
  },
}
</script>