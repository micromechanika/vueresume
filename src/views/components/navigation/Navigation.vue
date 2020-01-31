<template>
  <div>
  <Burger/>
  <NavBar/>
  </div>
</template>

<script>
import NavBar from './NavBar'
import Burger from './Burger'
export default {
  name: 'Navigation',
  components: { NavBar, Burger },
  data () {
    return {}
  },
  methods: {
  },
  mounted () {

  },
  computed: {}
}
</script>

<style lang="scss">

</style>
