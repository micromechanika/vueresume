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
    padding-top: 1em;
    padding-bottom: 1em;
    @include mQ($tablet) {
      padding-top: 0;
      padding-bottom: 0;
    }
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
      left: -3.5em;
      background-image: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.71));
      @include mQ($tablet) {
        right: -1em;
      }
    }

    &:after {
      right: -3.5em;
      background-image: linear-gradient(to left, #ffffff, rgba(255, 255, 255, 0.71));
      @include mQ($tablet) {
        right: -1em;
      }
    }

    img {
      width: auto;
      height: 1.44em;
    }
  }
</style>
