<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    (function (prop) {
      const use = {
        test: regexp => regexp.test(window.navigator.userAgent),
        get browser () {
          switch (true) {
            case this.test(/edge/i):
              return 'edge'
            case this.test(/edg/i):
              return 'chromium based edge (dev or canary)'
            case this.test(/opr/i) && !!window.opr:
              return 'opera'
            case this.test(/chrome/i) && !!window.chrome:
              return 'chrome'
            case this.test(/trident/i):
              return 'ie'
            case this.test(/firefox/i):
              return 'firefox'
            case this.test(/safari/i):
              return 'safari'
            default:
              return 'other'
          }
        }
      }

      const dotCount = {
        get make () {
          let w = innerWidth
          let h = innerHeight
          let square = w * h
          let dotes = Math.round(Math.sqrt(square) / 10)
          return dotes
        }
      }

      const particles = []

      const properties = {
        bgcolor: '#000000',
        dotColor: '#ff1189',
        dotRadius: 2,
        dotCount: dotCount.make,
        dotLife: 30,
        maxV: 0.5,
        lineLength: dotCount.make,
        lineWidth: 0.4,
        lineColor: '#ff1189',
        cW: use.browser !== 'firefox' ? innerWidth : 600,
        cH: use.browser !== 'firefox' ? innerHeight : 600
      }

      Object.assign(properties, prop)

      const body = document.querySelector('body')
      body.setAttribute('style', '  margin: 0;padding: 0;border: 0;min-width: 300px;min-height: 300px;')

      const div = document.createElement('div')
      div.setAttribute('id', 'animation')
      div.setAttribute('style', `position: absolute;top: 0;left: 0;z-index: -1000;font-size: 0;margin: 0;padding: 0;border: 0;width: 100%;height: 100%;background-color: ${properties.bgcolor};`)
      body.appendChild(div)

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      div.appendChild(canvas)

      let w = canvas.width = properties.cW
      let h = canvas.height = properties.cH

      window.onresize = function () {
        w = canvas.width = properties.cW
        h = canvas.height = properties.cH
      }

      function Random (min, max) {
        return parseFloat(min + Math.random() * (max + 1 - min).toFixed(3))
      }

      function RandomV () {
        return parseFloat((Math.random() * (properties.maxV * 2) - properties.maxV).toFixed(3))
      }

      function RandomL () {
        return Math.random() * properties.dotLife * 60
      }

      function bildDotes () {
        let i = 0
        while (i !== properties.dotCount) {
          let vX = RandomV()
          let vY = RandomV()
          let life = RandomL()
          let x = Random(0, w)
          let y = Random(0, h)
          let parties = { x, y, vX, vY, life }
          particles.push(parties)
          i++
        }
      }

      function rePosition (d) {
        // eslint-disable-next-line no-unused-expressions,no-mixed-operators
        d.x + d.vX > w && d.vX > 0 || d.x + d.vX < 0 && d.vX < 0 ? d.vX *= -1 : d.vX
        // eslint-disable-next-line no-mixed-operators,no-unused-expressions
        d.y + d.vY > h && d.vY > 0 || d.y + d.vY < 0 && d.vY < 0 ? d.vY *= -1 : d.vY
        d.x += d.vX
        d.y += d.vY
      }

      function reLife (d) {
        if (d.life < 1) {
          d.x = Random(0, w)
          d.y = Random(0, h)
          d.vX = RandomV()
          d.vY = RandomV()
          d.life = RandomL()
        }
        d.life--
      }

      function line (i, j) {
        let x1, y1, x2, y2, length, opacity
        x1 = ~~i.x
        y1 = ~~i.y
        x2 = ~~j.x
        y2 = ~~j.y

        let x = x2 - x1
        let y = y2 - y1
        length = ~~Math.sqrt(x * x + y * y).toFixed(3) * 1
        if (length < properties.lineLength) {
          opacity = 0.8 - length / properties.lineLength
          ctx.lineWidth = properties.lineWidth
          ctx.globalAlpha = opacity
          ctx.strokeStyle = properties.lineColor
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
        }
      }

      function lines (d) {
        const cl = d.length
        let i = 0
        ctx.beginPath()
        while (i !== cl) {
          let j = i
          rePosition(d[i])
          reLife(d[i])
          while (j !== cl) {
            line(d[i], d[j])
            j++
          }
          i++
        }
        ctx.closePath()
        ctx.stroke()
      }

      function dote (d) {
        ctx.beginPath()
        ctx.arc(d.x, d.y, properties.dotRadius, 0, Math.PI * 2)
        ctx.fillStyle = properties.dotColor
        ctx.closePath()
        ctx.fill()
      }

      function dotes (d) {
        let i = 0
        const count = d.length
        while (i !== count) {
          dote(d[i])
          i++
        }
      }

      function linear (timeFraction) {
        return timeFraction
      }

      function animate (options) {
        ctx.drawImage(canvas, 0, 0)
        let start = performance.now()

        function amate (time) {
          let timeFraction = (time - start) / options.duration
          let progress = options.timing(timeFraction)
          options.draw(progress)
          if (timeFraction < 1) requestAnimationFrame(amate)
        }

        requestAnimationFrame(amate)
      }

      function draw () {
        ctx.clearRect(0, 0, w, h)
        dotes(particles)
        lines(particles)
      }

      function init () {
        bildDotes()
        animate({
          duration: Infinity,
          timing: linear,
          draw: draw
        })
      }

      init()
    })({
      bgcolor: '#ffffff',
      dotColor: '#00C58E',
      dotRadius: 1.3,
      dotLife: 30,
      maxV: 0.5,
      lineWidth: 0.4,
      lineColor: '#2E495E'
    })
  }
}
</script>
<style lang="scss">

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Segoe UI, Quicksand, Source Sans Pro, BlinkMacSystemFont, Roboto,
    Helvetica Neue, Arial, sans-serif;
    font-style: normal;
    background: $white;
  }

  #animation {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    min-width: 300px;
    max-width: 1440px;
    margin: 0 auto;
  }
</style>
