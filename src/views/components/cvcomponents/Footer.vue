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
    (function (prop) {
      function makeEaseOut (timing) {
        return function (timeFraction) {
          return 1 - timing(1 - timeFraction)
        }
      }

      function linear (timeFraction) {
        return timeFraction
      }

      function bounce (timeFraction) {
        for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
          if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
          }
        }
      }

      const properties = {
        parentSelector: 'footer',
        moveElements: 'img',
        duration: 2e3,
        timing: linear
      }

      Object.assign(properties, prop)

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

      // Draw function
      function move (moveElement, parent, safeWidth, process) {
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
      }

      // Initial function
      function init () {
        const parent = document.querySelector(properties.parentSelector)
        const moveElement = [...parent.querySelectorAll(properties.moveElements)]
        let select = moveElement[0]
        let sel = window.getComputedStyle(select)
        const safeWidth = parseFloat(sel.width)

        animate({
          duration: properties.duration,
          timing: properties.timing,
          draw: process => move(moveElement, parent, safeWidth, process)
        })
      }

      document.addEventListener('load', () => {
        let footer = document.querySelector('.cv footer')
        footer.style.display = 'none'
        setInterval(init, 3000)
      }, true)
    })({
      duration: 3e3,
      timing: easeOutLinear()
    })

    function makeEaseOut (timing) {
      return function (timeFraction) {
        return 1 - timing(1 - timeFraction)
      }
    }

    function linear (timeFraction) {
      return timeFraction
    }

    function bounce (timeFraction) {
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }

    function quad (timeFraction) {
      return Math.pow(timeFraction, 2)
    }

    function easeOutLinear () {
      return makeEaseOut(linear)
    }

    function easeOutBounce () {
      return makeEaseOut(bounce)
    }

    function easeOutQuad () {
      return makeEaseOut(quad)
    }

    setTimeout(() => {
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

      let footer = document.querySelector('.cv footer')
      let cv = document.querySelector('.cv')
      footer.style.display = 'flex'

      let cvH = window.getComputedStyle(cv)
      let fcH = window.getComputedStyle(footer)

      let to = parseFloat(cvH.height) + parseFloat(fcH.height) / 2

      animate({
        duration: 2e3,
        timing: makeEaseOut(bounce),
        draw: process => footer.style.top = to * process + 'px'
      })
    }, 10e3)
  },
  beforeCreate () {
    this.$store.dispatch('Images')
  }
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
