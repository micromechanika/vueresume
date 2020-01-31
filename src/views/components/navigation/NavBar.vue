<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="toggleNav" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
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
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['toggleNav'])
  },
  computed: mapState({
    isPanelOpen: function (store) {
      return store.isNavOpen
    }
  })
}
</script>
<style lang="scss">
  .slide-enter-active,
  .slide-leave-active
  {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
  }

  .sidebar-backdrop {
    /*background-color: rgba(0,0,0,.5);*/
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .sidebar-panel {
    overflow-y: auto;
    /*background-color: #130f40;*/
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 3rem 20px 2rem 20px;
    width: 300px;
  }
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
