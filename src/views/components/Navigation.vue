<template>
  <nav>
    <ul>
      <li><router-link to="descktop">Desktop</router-link></li>
      <li><router-link to="cv">CV</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {},
  mounted () {
    (function () {
      const nav = document.querySelector('nav')

      let count = 0
      let stoploop = false
      nav.style.left = -2.7 + 'em'

      let nc = window.getComputedStyle(nav)

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

      function makeEaseOut (timing) {
        return function (timeFraction) {
          return 1 - timing(1 - timeFraction)
        }
      }

      function bounce (timeFraction) {
        for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
          if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
          }
        }
      }

      function Random (min, max) {
        let rand = min + Math.random() * (max + 1 - min)
        return Math.floor(rand)
      }

      function lookNavbar () {
        let to = parseFloat(nc.left)
        animate({
          duration: 2e3,
          timing: makeEaseOut(bounce),
          draw: process => nav.style.left = process < 0.2 ? to - to * process + 'px' : -2.7 + 'em'
        })
      }

      function showNavbar (e) {
        let to = parseFloat(nc.left)

        switch (true) {
          case e.clientX < 100 || e.target.closest('nav'):
            stoploop = true
            animate({
              duration: 1e3,
              timing: makeEaseOut(bounce),
              draw: process => nav.style.left = nav.style.left !== 0 ? to - to * process + 'px' : 0 + 'px'
            })
            break
          default:
            stoploop = false
            nav.style.left = -2.7 + 'em'
            break
        }
      }

      function loop () {
        count += 1
        let rand = Random(1e3, 10e3)
        const shakeNavbar = setTimeout(() => {
          lookNavbar()
          loop(count)
        }, rand)
        count > 5 || !!stoploop ? clearTimeout(shakeNavbar) : shakeNavbar
      }

      loop()

      document.addEventListener('mousemove', showNavbar, true)
      document.addEventListener('click', showNavbar, true)
    })()
  }
}
</script>

<style lang="scss" >
nav {
  width: 3em;
  height: 100%;
  background: linear-gradient(to left, $span 40%, transparent 100%);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 1em;
    li {
      margin: 0.5em;
      padding: 0.5em;
      transform: rotate(90deg);
      &:hover {
        transform: rotate(0deg);
        transition: transform 0.5s ease-in-out;
      }
      a {
        @include font-parameters;
        font-size: 0.65em;
        &:link {
          color: #1a203c;
          text-decoration: none;
        }
        &:visited {
          color: $green;
          text-decoration: none;
        }
        &:hover {
          color: #df0000;
          text-decoration: underline;
        }
        &:active {
          color: $green;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
