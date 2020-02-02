<template>
  <div class="links">
    <img v-for="(my, name, index) in Links" :key="index" :src="my.l" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ContactLinks',
  data () {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters(['Links'])
  },
  beforeCreate () {
    this.$store.dispatch('Links')
  }
}
</script>

<style lang="scss">
.links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 0 1.28em 0;
  padding: 0;

  img {
    width: auto;
    height: 0.75em;
    @include mQ($tablet) {
      height: 0.48em;
    }
  }
}
</style>
