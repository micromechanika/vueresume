<template>
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
</template>

<script>
export default {
  name: 'MainInfo'
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
</style>
