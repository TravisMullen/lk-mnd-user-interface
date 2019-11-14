<template>
  <div class="header" :class="className">
    <div class="logo-container">
      <router-link to="/"><img alt="logo" src="../assets/likemindedttext.svg"></router-link>
    </div>

    <div class="nav">
      <router-link to="/company">Mission</router-link>
      <!-- <router-link to="/leadership">Leadership</router-link> -->
      <!-- <router-link to="/artists">Artists</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-icon',
  data () {
    return {
      className: 'loading'
    }
  },
  beforeRouteUpdate (to, from, next) {
    // just use `this`
    this.className = to.params.name
    next()
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/settings';
  .header {
    overflow: hidden;
    text-align: left;
    // display: flex;
    border-bottom: $primary-color solid 2px;
    padding: 16px;
    // justify-content: flex-start;
    // flex: 1 0 auto;
    // transition: transform 1s;
    transition: border-bottom-color 0.3s ease-out 1.0s;

    .nav {
      text-align: center;
    }

    .logo-container {
      transition: all 1s;
        tranform-origin: left;
        transform: translate(0);
      img {
        transition: all 1s;
        width: 10vw;
      }
        padding-bottom: 0;
    }
    // text-align: left;
    .loading & {
      .logo-container {
        transition: all 0.2s;
        // transform: rotate(0) translate(calc(50% - 20px),0);
        // img {
        //   transform: rotate(-180deg);
        // }
      }
    }
    .home & {
      .logo-container {
      padding-bottom: 20px;
    // //   flex: 1 0 90%;
          transform: translate(30vw,0);
        img {
          width: 40vw;
        }
      }

      // flex: 0 0 auto;
      border-bottom-color: transparent;
    }
  }

.nav {
  padding: 30px;
  // background-color: $primary-color;
  color: $primary-color;
  a {
    cursor: pointer;
    font-family: $anchor-font-family;
    font-size: 20px;
    display: inline-block;
    font-weight: bold;
    color: $primary-color;
    text-decoration: none;
    border: 4px solid $primary-color;
    border-radius: 4px;
    padding: 4px 6px;
    margin: 4px;
    &.router-link-exact-active {
      color: $secondary-color;
      border-color: $secondary-color;
    }
  }
}
</style>
