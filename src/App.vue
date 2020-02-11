<template>
  <div id="app">
    <div class="container">
      <transition>
        <router-view/>
      </transition>
    </div>
  </div>
</template>

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

  @include print() {

    body {
      background: none !important;
    }

    #animation, .desktop, #burger, .sidebar, nav, footer, .links {
      display: none !important;
    }

    @page {
      size: A4 landscape;
      margin: 1cm;
    }

    * {
      font-size: 11px;
    }

  }
</style>
