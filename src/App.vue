<template>
  <div id="app" :class="view">
    <section class="page-header">
      <header-icon/>
    </section>
    <section class="page-body">
       <router-view/>
    </section>
    <div class="page-footer">
      <a href="mailto:info@likemindedmgmt.com">info@likemindedmgmt.com</a>
      <div class="label">(866) 830-4644</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderIcon from '@/components/Header.vue'

export default {
  name: 'home',
  computed: {
    view () {
      return this.$route.name
    }
  },
  components: {
    HeaderIcon
  }
}
</script>

<style lang="scss">

@import './assets/styles/fonts';
@import './assets/styles/settings';

$primary-color: #5a2a90 !default;
$secondary-color: #d4af37 !default;
$body-font-family: 'Avenir', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif !default;
$anchor-font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif !default;

body {
  overflow-y: scroll;
  border-top: 8px solid $primary-color;
  // border-bottom: 1px solid #ececec;
  margin: 0;
  background-color: $primary-color;
}
// .wrapper {
// }

#app {
  font-family: $body-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  background-color: #ececec;
  color: #2c3e50;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  // flex: 0 0 auto;

  .page-header,
  .page-footer {
      flex-shrink: 0;
  }

  .page-body {
      flex-grow: 1;
      // & > * {
      //   min-height: 70vh;
      // }
  }

  .page-footer {
    font-family: $anchor-font-family;
    background-color: $primary-color;
    color: #ececec;
    display: inline-flex;
    justify-content: space-between;
    a,
    .label {
      color: #ececec;
      text-decoration: none;
      display: block;
      text-align: right;
      padding: 4px 8px 0 8px;
    }
    padding-bottom: 4px;
  }
  .about {
    padding: 4px 32px 32px 16px;
  }
}
</style>
