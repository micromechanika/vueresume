<template>
  <div class="shadow" @click="toggleModal" v-if="isModalShow" >
    <img v-for="(certificate, name, index) in Certifications" :key="index"  :src="certificate.image" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ModalWindow',
  methods: {
    ...mapMutations(['toggleModal'])
  },
  computed: {
    ...mapGetters(['Certifications']),
    ...mapState({
      isModalShow: function (store) {
        return store.isModal
      }
    })
  },
  beforeCreate () {
    this.$store.dispatch('Certifications')
  }
}
</script>

<style lang="scss">
  .shadow {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 1000;
    background-color: $shadow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      img{
        width: auto;
        height: 25em;
      }
  }

</style>
