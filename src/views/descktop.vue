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
import Navigation from './components/navigation/Navigation'
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
  mounted () {
    const container = document.querySelector('.svgContainer')
    const images = [...container.querySelectorAll('img[src$=".svg"]')]
    const imagesClassList = [].concat(...images.map(elt => [...elt.classList]))

    /**
       * @return {number}
       */
    function RandomV (el) {
      return Math.random() * (el)
    }

    /**
       * @return {number}
       */
    function Random (min, max) {
      let rand = min + Math.random() * (max + 1 - min)
      return Math.floor(rand)
    }

    // Animation Functions
    function makeEaseOut (timing) {
      return function (timeFraction) {
        return 1 - timing(1 - timeFraction)
      }
    }

    function makeEaseInOut (timing) {
      return function (timeFraction) {
        if (timeFraction < 0.5) { return timing(2 * timeFraction) / 2 } else { return (2 - timing(2 * (1 - timeFraction))) / 2 }
      }
    }

    function linear (timeFraction) {
      return timeFraction
    }

    // Engine Animation
    function animate (options) {
      let start = performance.now()

      function amate (time) {
        let timeFraction = (time - start) / options.duration
        let progress = options.timing(timeFraction)
        options.draw(progress)
        if (timeFraction < 1) requestAnimationFrame(amate)
      }

      requestAnimationFrame(amate)
    }

    let st = []

    function gS (cl) {
      const i = container.querySelector(`.${cl}`)
      const elStyle = window.getComputedStyle(i)
      let w = parseFloat(elStyle.width)
      let h = parseFloat(elStyle.height)
      let t = parseFloat(elStyle.top)
      let r = parseFloat(elStyle.right)

      let W = 0
      let H = 0
      let T = RandomV(t)
      let R = RandomV(r)

      return { i, w, h, t, r, W, H, T, R }
    }

    // eslint-disable-next-line no-undef
    function repositionProperty (e, p = { w, h, t, r }, P = { W, H, T, R }, ph = 'width', process) {
      let vP = p * 2
      P += vP * process
      let s = P >= p ? p : P
      e['style'][ph] = s + 'px'
    }

    function opacity (e, elOpacity, process) {
      e.style.opacity = 1 - elOpacity * process
    }

    function shake (e, process) {
      let magnitude = 16
      let X = Random(-magnitude * process, magnitude * process)
      let Y = Random(-magnitude * process, magnitude * process)
      e.style.transform = `translate( ${X}px, ${Y}px)`
    }

    function letsShake () {
      let x = Random(0, st.length - 1)
      let e = st[x]
      let image = e.i
      let elOpacity = 0.45

      animate({
        duration: 8e3,
        timing: makeEaseInOut(linear),
        draw: process => opacity(image, elOpacity, process)
      })

      animate({
        duration: 2e3,
        timing: makeEaseInOut(linear),
        draw: process => shake(image, process)
      })
    }

    function letsRotate () {
      let x = Random(0, st.length - 1)
      let e = st[x]
      let image = e.i
      let elOpacity = 0.45

      animate({
        duration: 5e3,
        timing: makeEaseInOut(linear),
        draw: process => opacity(image, elOpacity, process)
      })

      let counter = 1
      let tiltAngle = 1
      let magnitude = 16
      let numberOfShakes = 16
      let magnitudeUnit = magnitude / numberOfShakes

      function angularShake () {
        if (counter < numberOfShakes) {
          image.style.transform = 'rotate(' + 0 + 'deg)'
          magnitude -= magnitudeUnit
          let angle = magnitude * tiltAngle
          image.style.transform = 'rotate(' + angle + 'deg)'
          counter += 1
          tiltAngle *= -1
          requestAnimationFrame(angularShake)
        } else {
          image.style.transform = 'rotate(' + 0 + 'deg)'
        }
      };
      angularShake()
    }

    function init () {
      imagesClassList.forEach(i => {
        st.push(gS(i))
      })

      // Animation width
      animate({
        duration: 8e3,
        timing: makeEaseOut(linear),
        draw: (process) => {
          let x = Random(0, st.length - 1)
          let e = st[x]
          repositionProperty(e.i, e.w, e.W, 'width', process)
        }
      })

      // Animation height
      animate({
        duration: 8e3,
        timing: makeEaseOut(linear),
        draw: (process) => {
          let x = Random(0, st.length - 1)
          let e = st[x]
          repositionProperty(e.i, e.h, e.H, 'height', process)
        }
      })

      // Animation top
      animate({
        duration: 8e3,
        timing: makeEaseOut(linear),
        draw: (process) => {
          let x = Random(0, st.length - 1)
          let e = st[x]
          repositionProperty(e.i, e.t, e.T, 'top', process)
        }
      })

      // Animation right
      animate({
        duration: 8e3,
        timing: makeEaseOut(linear),
        draw: (process) => {
          let x = Random(0, st.length - 1)
          let e = st[x]
          repositionProperty(e.i, e.r, e.R, 'right', process)
        }
      })

      setInterval(letsShake, 5e3)
      setInterval(letsRotate, 7e3)
    }

    document.addEventListener('DOMContentLoaded', init, true)
  },
  beforeCreate () {
    this.$store.dispatch('Images')
  }
}

</script>
