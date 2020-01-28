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
  beforeCreate () {}
}
</script>
