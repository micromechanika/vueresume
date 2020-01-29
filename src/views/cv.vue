<template>
  <div class="cv">
    <Navigation />
    <Header />
    <MainInfo />
    <Footer />
  </div>
</template>

<style lang="scss">
.cv {
  font-size: 2vmax;
  margin: 1em;
}
</style>

<script>
import Navigation from './components/Navigation'
import Footer from './components/cvcomponents/Footer'
import MainInfo from './components/cvcomponents/MainInfo'
import Header from './components/cvcomponents/Header'

export default {
  name: 'cv',
  components: { Footer, Header, Navigation, MainInfo },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  mounted () {
    function bounce (timeFraction) {
      // eslint-disable-next-line no-unused-vars
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
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

    function quad (timeFraction) {
      return Math.pow(timeFraction, 2)
    }

    function qubiq (timeFraction) {
      return Math.pow(timeFraction, 3)
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

    const animationEngineFunction = (index) => {
      switch (true) {
        case index % 2 === 0:
          return bounce
        case index % 3 === 0:
          return linear
        case index % 4 === 0:
          return makeEaseInOut(linear)
        case index % 5 === 0:
          return makeEaseInOut(bounce)
        case index % 6 === 0:
          return qubiq
        default:
          return quad
      }
    }

    function animateText () {
      const cv = document.querySelector('.cv')
      const p = [...cv.querySelectorAll('p')]

      p.forEach((i, index) => {
        let text = i.outerHTML
        let to = text.length
        let from = 0

        const regex = /<(\/)??p>/ig

        text = text.replace(regex, '')

        animate({
          duration: 10e3,
          timing: animationEngineFunction(index),
          draw: progress => {
            let result = (to - from) * progress + from
            i.innerHTML = text.substr(0, Math.ceil(result))
          }
        })
      })
    }

    window.addEventListener('DOMContentLoaded', animateText, true)
  },
  beforeCreate () {}
}
</script>
