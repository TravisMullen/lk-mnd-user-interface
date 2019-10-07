<template>
  <div v-once class="text-content">
    <HelloWorld :msg="release"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      release: process.env.VUE_APP_RELEASE
    }
  },
  components: {
    HelloWorld
  }
}
</script>
