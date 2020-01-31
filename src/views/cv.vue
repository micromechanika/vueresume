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
import Navigation from './components/navigation/Navigation'
import Footer from './components/cvcomponents/Footer'
import MainInfo from './components/cvcomponents/MainInfo'
import Header from './components/cvcomponents/Header'

export default {
  name: 'cv',
  components: { Footer, Header, Navigation, MainInfo },
  data () {
    return {}
  },
  methods: {
    bounce: function (timeFraction) {
      // eslint-disable-next-line no-unused-vars
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    },
    makeEaseInOut: function (timing) {
      return function (timeFraction) {
        if (timeFraction < 0.5) { return timing(2 * timeFraction) / 2 } else { return (2 - timing(2 * (1 - timeFraction))) / 2 }
      }
    },
    makeEaseOut: function (timing) {
      return function (timeFraction) {
        return 1 - timing(1 - timeFraction)
      }
    },
    linear: function (timeFraction) {
      return timeFraction
    },
    quad: function (timeFraction) {
      return Math.pow(timeFraction, 2)
    },
    qubiq: function (timeFraction) {
      return Math.pow(timeFraction, 3)
    },
    easeOutLinear: function () {
      return this.makeEaseOut(this.linear)
    },
    animate: function (options) {
      let start = performance.now()

      function amate (time) {
        let timeFraction = (time - start) / options.duration
        let progress = options.timing(timeFraction)
        options.draw(progress)
        if (timeFraction < 1) requestAnimationFrame(amate)
      }

      requestAnimationFrame(amate)
    },
    animationEngineFunction: function (index) {
      switch (true) {
        case index % 2 === 0:
          return this.bounce
        case index % 3 === 0:
          return this.linear
        case index % 4 === 0:
          return this.makeEaseInOut(this.linear)
        case index % 5 === 0:
          return this.makeEaseInOut(this.bounce)
        case index % 6 === 0:
          return this.qubiq
        default:
          return this.quad
      }
    },
    animateText: function () {
      const cv = document.querySelector('.cv')
      const p = [...cv.querySelectorAll('p')]
      p.forEach((i, index) => {
        let text = i.outerHTML
        let to = text.length
        let from = 0

        const regex = /<(\/)??p>/ig

        text = text.replace(regex, '')

        this.animate({
          duration: 10e3,
          timing: this.animationEngineFunction(index),
          draw: progress => {
            let result = (to - from) * progress + from
            i.innerHTML = text.substr(0, Math.ceil(result))
          }
        })
      })
    },
    move: function (moveElement, parent, safeWidth, process) {
      let select = moveElement[0]
      let sel = window.getComputedStyle(select)
      let selectW = parseFloat(sel.width)

      switch (true) {
        case process < 0.5:
          select.style.width = selectW - (process * 4) + 'px'
          break
        default:
          parent.append(select)
          select.style.width = selectW < safeWidth ? selectW + (process * 4) + 'px' : safeWidth
          break
      }
    },
    footerMove: function () {
      const parent = document.querySelector('footer')
      const moveElement = [...parent.querySelectorAll('img')]
      let select = moveElement[0]
      let sel = window.getComputedStyle(select)
      const safeWidth = parseFloat(sel.width)

      this.animate({
        duration: 3e3,
        timing: this.easeOutLinear(),
        draw: process => this.move(moveElement, parent, safeWidth, process)
      })
    },
    footerBounce: function () {
      let footer = document.querySelector('.cv footer')
      let cv = document.querySelector('.cv')

      let cvH = window.getComputedStyle(cv)
      let fcH = window.getComputedStyle(footer)

      let to = parseFloat(cvH.height) + parseFloat(fcH.height) / 2

      this.animate({
        duration: 2e3,
        timing: this.makeEaseOut(this.bounce),
        // eslint-disable-next-line no-return-assign
        draw: process => footer.style.top = to * process + 'px'
      })
    }
  },
  computed: {},
  mounted () {
    this.animateText()
    this.footerMove()
    setInterval(this.footerMove, 3000)
    setTimeout(this.footerBounce(), 10e3)
  },
  beforeMount () {},
  beforeCreate () {},
  beforeUpdate () {}
}
</script>
