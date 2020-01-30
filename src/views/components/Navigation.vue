<template>
    <nav>
      <ul>
        <li>
          <router-link to="descktop">Desktop</router-link>
        </li>
        <li>
          <router-link to="cv">CV</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      count: 0,
      stoploop: false,
      nav: null,
      nc: null,
      show: true
    }
  },
  methods: {
    makeEaseOut: function (timing) {
      return function (timeFraction) {
        return 1 - timing(1 - timeFraction)
      }
    },
    bounce: function (timeFraction) {
      // eslint-disable-next-line no-unused-vars
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return (
            -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) +
              Math.pow(b, 2)
          )
        }
      }
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
    showNavbar: function (e) {
      let to = parseFloat(this.nc.left)

      switch (true) {
        case e.clientX < 200 || e.target.closest('nav'):
          this.stoploop = true
          this.animate({
            duration: 1e3,
            timing: this.makeEaseOut(this.bounce),
            // eslint-disable-next-line no-return-assign
            draw: process => this.nav.style.left = this.nav.style.left !== 0 ? to - to * process + 'px' : 0 + 'px'
          })
          return
        default:
          this.stoploop = false
          this.nav.style.left = -2.7 + 'em'
      }
    },
    Random: function (min, max) {
      let rand = min + Math.random() * (max + 1 - min)
      return Math.floor(rand)
    },
    lookNavbar: function () {
      let to = parseFloat(this.nc.left)
      this.animate({
        duration: 2e3,
        timing: this.makeEaseOut(this.bounce),
        draw: process => (this.nav.style.left = process < 0.2 ? to - to * process + 'px' : -2.7 + 'em')
      })
    },
    loop: function () {
      this.count += 1
      let rand = this.Random(1e3, 10e3)
      this.shakeNavbar = setTimeout(() => {
        this.lookNavbar()
        this.loop(this.count)
      }, rand)
      // eslint-disable-next-line no-unused-expressions
      this.count > 5 || !!this.stoploop ? clearTimeout(this.shakeNavbar) : this.shakeNavbar
    }
  },
  mounted () {
    this.nav = document.querySelector('nav')
    this.nav.style.left = -2.7 + 'em'
    this.nc = window.getComputedStyle(this.nav)
    this.loop()
    document.addEventListener('mousemove', this.showNavbar, true)
    document.addEventListener('click', this.showNavbar, true)
  },
  computed: {}
}
</script>

<style lang="scss">
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
