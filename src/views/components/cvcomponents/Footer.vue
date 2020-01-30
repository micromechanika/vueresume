<template>
  <footer >
    <img v-for="(im, name, index) in Images" :key="index" :src="im.p" />
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Footer',
  computed: {
    ...mapGetters(['Images'])
  },
  mounted () {

  },
  beforeCreate () {
    this.$store.dispatch('Images')
  },
  beforeUpdate () {}
}
</script>

<style lang="scss">
  footer {
    left: 4em;
    right: 4em;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: absolute;

    &:before,
    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 5em;
      height: 1.44em;
      z-index: 10;
    }

    &:before {
      left: -1em;
      background: linear-gradient(to right, #ffffff 30%, transparent 100%);
    }

    &:after {
      right: -1em;
      background: linear-gradient(to left, #ffffff 30%, transparent 100%);
    }

    img {
      width: auto;
      height: 0.9em;
      @include mQ($tablet) {
        height: 1.44em;
      }
    }
  }
</style>
