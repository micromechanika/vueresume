<template>
  <div class="desktop">
    <Navigation></Navigation>
    <div class="text">
      <div class="name">
        <h1>Dmytro</h1>
        <h2>Bilokhonov</h2>
      </div>
      <div class="developer">
        <h3>Full stack</h3>
        <h4>developer</h4>
      </div>
    </div>
    <div class="svgContainer" >
      <img v-for="(im, name, index) in Images" :key="index" :class="im.c" :src="im.p" />
    </div>
    <div class="nuxtLogo">
      <img src="../../public/img/nuxtLogo.svg" />
    </div>
  </div>
</template>

<style lang="scss" >
.desktop {
  font-size: 2vmax;
}

.text {
  position: fixed;
  top: 30%;
  left: 2.5em;
  z-index: 300;

  .name {
    margin: 0.4em 0.8em;
    h1,
    h2 {
      @include font-parameters;
      font-size: 3.3em;
      @include mQ($tablet) {
        font-size: 4.2em;
      }
      color: $black;
    }
  }

  .developer {
    margin: 0.4em 0.8em;
    h3,
    h4 {
      @include font-parameters;
      font-size: 2em;
      @include mQ($tablet) {
        font-size: 2.96em;
      }
    }
    h3 {
      color: $green;
    }
    h4 {
      color: $black;
    }
  }
}

.svgContainer {
  width: auto;
  height: 75em;
  position: fixed;
  top: 1.5em;
  right: 2em;
  font-size: 2.5vmin;

  img {
    position: absolute;
    opacity: 0.55;
  }

  /*svg props*/
  .angular {
    width: 6.4em;
    height: 1.6em;
    top: 0.92em;
    right: 21.2em;
  }

  .bootstrap {
    width: 3.2em;
    height: 3.2em;
    top: 25.76em;
    right: 4.96em;
  }

  .codeigniter {
    width: 2.6848em;
    height: 3.2em;
    top: 7.48em;
    right: 18.72em;
  }

  .css3 {
    width: 3.2em;
    height: 3.2em;
    top: 3.72em;
    right: 5.2em;
  }

  .debian {
    width: 3.2em;
    height: 3.2em;
    top: 3.72em;
    right: 14.68em;
  }

  .git {
    width: 3.2em;
    height: 3.2em;
    top: 14.84em;
    right: 9.4em;
  }

  .gulp {
    width: 3.2em;
    height: 3.2em;
    top: 14.84em;
    right: 0.08em;
  }

  .html {
    width: 3.2em;
    height: 3.2em;
    top: 0.12em;
    right: 0.2em;
  }

  .js {
    width: 3.2em;
    height: 3.2em;
    top: 22.4em;
    right: 0.16em;
  }

  .laravel {
    width: 3.2em;
    height: 3.2em;
    top: 11.25em;
    right: 4.8em;
  }

  .mongodb {
    width: 5.68em;
    height: 1.6em;
    top: 23.44em;
    right: 9.76em;
  }

  .mysql {
    width: 3.2em;
    height: 3.2em;
    top: 7.6em;
    right: 9.52em;
  }

  .node {
    width: 3.2em;
    height: 3.2em;
    top: 7.6em;
    right: 0.32em;
  }

  .nuxt {
    width: 3.2em;
    height: 3.2em;
    top: 0.44em;
    right: 9.8em;
  }

  .php {
    width: 3.2em;
    height: 3.2em;
    top: 18.4em;
    right: 4.92em;
  }

  .sass {
    width: 3.2em;
    height: 3.2em;
    top: 18.4em;
    right: 14.2em;
  }

  .vue {
    width: 3.2em;
    height: 3.2em;
    top: 11.28em;
    right: 13.84em;
  }
}

.nuxtLogo {
  position: fixed;
  bottom: 1em;
  right: 1em;

  img {
    width: 22.5em;
    height: auto;
  }
}
</style>

<script>
import { mapGetters } from 'vuex'
import Navigation from './components/Navigation'
export default {
  name: 'descktop',
  components: { Navigation },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {
    ...mapGetters(['Images'])
  },
  beforeCreate () {
    this.$store.dispatch('Images')
  }
}

</script>
