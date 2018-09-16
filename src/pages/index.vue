<template>
<div>
  <MinimalComponent />

  <div v-for="(section, i) in home" :key="i">
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
      sections: [
        {items: []}
      ]
    }
  },

  data() {return {

  }},

  computed: {
    home() {
      return S.home || {}
    }
  },
}
</script>