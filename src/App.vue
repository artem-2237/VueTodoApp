<template>
  <div id="app">
    <AppNav/>
    
    
    <router-view/>
  </div>
</template>

<style lang="sass">

</style>

<script>
import AppNav from '@/components/AppNav.vue'

export default {
  components: {AppNav}, 
  created: function() {
    this.$store.commit('loadCategoriesData')
  }
}
</script>
