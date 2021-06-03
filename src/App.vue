<template>
  <div>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }  
  },
  computed: {
    searchText() {
      return this.$store.state.searchText
    }
  },
  methods: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
html {
  font-family: 'Open Sans', sans-serif;
}
</style>

<style lang="sass" scoped>

main
  transition: 0.8s  

  
</style>
