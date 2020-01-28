<template>
  <address>
    <p>Kharkiv, Ukraine</p>
    <p>+38 (063) 84-6-84-30</p>
    <p>micromechanika@gmail.com</p>
  </address>
</template>

<script>
export default {
  name: 'Adress'
}
</script>

<style lang="scss">
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
</style>
