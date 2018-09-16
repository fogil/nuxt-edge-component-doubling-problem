<template>
<div>
  <MinimalComponent />

  <div v-for="(section, i) in home.sections" :key="i">
    <div v-for="(item, j) in section.items"
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
      items: [],
      sections: [
        {items: []}
      ]
    }
  },

  computed: {
    home() {
      return S.home || {}
    },
  },
}
</script>