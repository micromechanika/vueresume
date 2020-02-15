<template>
  <main>
    <ModalWindow :link="selected"/>
    <div class="grid">
      <section>
        <h3>Personal</h3>
        <div class="info">
          <p>
            Hi, my name is Dmytro, I am a FS Develop and I'd like to cooperate
            with you. My goal to work on a cool project, with the possibility of
            relocating.
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
            programming, reading, biking, travelling, mountaing, orientering.
          </p>
        </div>
      </section>
      <section>
        <h3>Summary</h3>
        <div class="info">
          <p><b>Skills that I own :</b></p>
          <p>
            <span>Front-end :</span> "HTML5", "CSS3", "ES6", "SVG", "canvas", "JS - animation", "CSS - animation"
          </p>
          <p><span>Preprocessors & Bundler :</span> "Webpack", "Gulp", "SCSS"</p>
          <p>
            <span>Framework :</span> "Vue JS", "Angular^6", "NUXT", "Express JS", "Telegraf JS", "Codeignater", "Bootstrap"
          </p>
          <p><span>Languages :</span> "Turbo Pascal", "php", "JS", "Node JS"</p>
          <p><span>VCS :</span> "GIT"</p>
          <p><span>Databases :</span> "Firebase", "MySQL", "MongoDB"</p>
          <p><span>OOP Patterns :</span> "MVC", "MVVM", "MVP", "Singltone" </p>
          <p><span>Others tools :</span> "Debian"</p>
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
          <p v-for="(certificate, name, index) in Certifications" :key="index"
             @click.stop.self="toggleModal(),  selectCertificate(certificate.image)"
             @mouseenter.stop.self="toggleModal(), selectCertificate(certificate.image)" >
            <b>{{certificate.name}} : </b>{{certificate.course}}
          </p>
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
            Kharkiv Profesional polygraphic College, Maintenance of polygraphic
            machines and typographer
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
          <p>Ukrainian<span>Native</span></p>
          <p>Russian<span>Native</span></p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import ModalWindow from './ModalWindow'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'MainInfo',
  data () {
    return {
      selected: ''
    }
  },
  components: { ModalWindow },
  methods: {
    ...mapMutations(['toggleModal']),
    selectCertificate: function (select) {
      this.selected = select
    }
  },
  computed: {
    ...mapGetters(['Certifications'])
  },
  beforeCreate () {
    this.$store.dispatch('Certifications')
  }
}
</script>

<style lang="scss">
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
    width: 85%;
    @include mQ($tablet) {
      width: 30%;
    }
  }

  section {
    margin: 1em 0;

    .info {
      margin: 0.5em;
    }

    p {
      margin: 0.25em 0;
      padding: 0;
      font-style: normal;
      font-weight: normal;
      font-size: 1em;
      line-height: 150%;
      color: $black;
      @include mQ($tablet) {
        font-size: .64em;
      }
    }

    h3 {
      font-weight: 900;
      font-size: 1.4em;
      line-height: 1.08em;
      text-transform: uppercase;
      color: $black;
      padding: 0;
      margin: 0;
      @include mQ($tablet) {
        font-size: 0.9em;
      }
    }

    b {
      font-style: normal;
      font-weight: bold;
      font-size: 1em;
      line-height: 90%;
      color: $black;
      padding: 0;
      margin: 0;
      @include mQ($tablet) {
        font-size: 0.8em;
      }
    }

    span {
      padding: 0.5em;
      font-style: normal;
      font-weight: normal;
      font-size: 1em;
      line-height: 150%;
      color: $span;
      @include mQ($tablet) {
        font-size: 0.8em;
      }
    }
  }
}
</style>
