<template>
  <div class="cv">
    <Navigation></Navigation>
    <header>
      <section class="person">
        <div class="foto">
          <img src="../../public/img/foto/foto.png" />
        </div>
        <div class="cvname">
          <h3>Dmytro</h3>
          <h4>Bilokhonov</h4>
        </div>
      </section>
      <section class="contacts">

        <div class="links">
          <img v-for="(my,name,index) in Links" :key="index" :src="my.l"/>
        </div>

        <address>
          <p>Kharkiv, Ukraine</p>
          <p>+38 (063) 84-6-84-30</p>
          <p>micromechanika@gmail.com</p>
        </address>

      </section>
    </header>

    <main>
      <div class="grid">
        <section>
          <h3>Personal</h3>
          <div class="info">
            <p>
              Hello, my name is Dimitri, I am a strong Junior JS Develop and I'd
              like to cooperate with you. I have already successfully completed
              several orders, and now I want to join the team for a set of
              experience.
            </p>
          </div>
          <div class="info">
            <p>
              <b>Personal qualities:</b>
              responsibility, pursuit of new knowledge, punctuality,
              purposefulness, decency, diligence, sociability, work in team.
            </p>
          </div>
          <div class="info">
            <p>
              <b>Hobbies:</b>
              reading, biking, travelling, mountaing, orientering.
            </p>
          </div>
        </section>
      </div>
      <div class="grid">
        <section>
          <h3>Professional experience</h3>
          <div class="info">
            <p><span> Oct. 2018 – Present</span></p>
            <p>Full stack developer, Freelance</p>
          </div>
          <div class="info">
            <p><span>Aug. 2013 – Aug. 2015</span></p>
            <p>"FeldmanEcopark", master instructor of rope-road</p>
          </div>
          <div class="info">
            <p><span>Sep. 2011 – Aug. 2013</span></p>
            <p>"FactorDruk", prienter</p>
          </div>
        </section>
        <section>
          <h3>Certificates</h3>
          <div class="info">
            <p><b>SoloLearn:</b> JavaScript Tutorial course</p>
            <p><b>MongoDB Universiry:</b> MongoDB Basics</p>
          </div>
        </section>
      </div>
      <div class="grid">
        <section>
          <h3>Education</h3>

          <div class="info">
            <b>Higher education:</b>
            <p><span>2004 – 2011</span></p>
            <p>
              NAU "Kharkiv Aviation InstituteI", Aircraft engine production
              technologies
            </p>
          </div>

          <div class="info">
            <b>Secondary technical education:</b>
            <p><span>2003 – 2004</span></p>
            <p>
              Kharkiv Profesional polygraphic College, Maintenance of
              polygraphic machines and typographer
            </p>
          </div>

          <div class="info">
            <b>Additional education:</b>
            <p><span>May 2018 – Oct. 2018</span></p>
            <p>Easycode Frontend (js)</p>
          </div>

          <div class="info">
            <p><span>Fab. 2016 – Apr.</span></p>
            <p>2017 SourceIT web-programing (php)</p>
          </div>
        </section>
        <section>
          <h3>Languages</h3>
          <div class="info">
            <p>English <span>Intermediate</span></p>
          </div>
        </section>
      </div>
    </main>

      <footer >
        <img v-for="(im, name, index) in Images" :key="index" :src="im.p" />
      </footer>

  </div>
</template>

<style lang="scss" >
.cv {
  font-size: 2vmax;
  margin: 1em;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5em;
  @include mQ($tablet) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .person {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @include mQ($tablet) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .foto {
      margin: 1em 0;
      @include mQ($tablet) {
        margin: 0 2.56em 0 0;
      }

      img {
        display: block;
        height: 10em;
        width: 10em;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .cvname {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1em 0;
      @include mQ($tablet) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
      }

      h3,
      h4 {
        @include font-parameters;
        color: $black;
        font-size: 2.4em;
        line-height: 100%;
        letter-spacing: 0.02em;
      }
    }
  }

  .contacts {
    width: 8em;
    margin: 1em 0;
    @include mQ($tablet) {
      margin: 0;
    }

    .links {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 0 0 1.28em 0;
      padding: 0;

      img {
        width: auto;
        height: 0.48em;
      }
    }

    address {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      font-style: normal;

      @include mQ($tablet) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      p {
        font-weight: 300;
        font-size: 0.68em;
        line-height: 0.92em;
        letter-spacing: 0.01em;
        color: $black;
        margin: 0.5em;
        padding: 0;
      }
    }
  }
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5vmin;
  padding-bottom: 1em;
  @include mQ($tablet) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 2.5vmin;
  }

  .grid {
    width: 65%;
    @include mQ($tablet) {
      width: 28%;
    }
  }

  section {
    margin: 0.5em 0;
    .info {
      margin: 0.5em;
    }

    p {
      margin: 0.25em 0;
      padding: 0;
      font-style: normal;
      font-weight: normal;
      font-size: 0.64em;
      line-height: 150%;
      color: $black;
    }

    h3 {
      font-weight: 900;
      font-size: 0.9em;
      line-height: 1.08em;
      text-transform: uppercase;
      color: $black;
      padding: 0;
      margin: 0;
    }

    b {
      font-style: normal;
      font-weight: bold;
      font-size: 0.8em;
      line-height: 90%;
      color: $black;
      padding: 0;
      margin: 0;
    }

    span {
      padding: 0.5em;
      font-style: normal;
      font-weight: normal;
      font-size: 0.8em;
      line-height: 150%;
      color: $span;
    }
  }
}

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

<script>
import { mapGetters } from 'vuex'
import Navigation from './components/Navigation'

export default {
  name: 'cv',
  components: { Navigation },
  data () {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters(['Images', 'Links'])
  },
  beforeCreate () {
    this.$store.dispatch('Images')
    this.$store.dispatch('Links')
  }
}
</script>
