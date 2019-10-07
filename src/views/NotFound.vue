<template>
  <div v-once class="not-found">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'not-found',
  data () {
    return {
      msg: 'Opps. The droid you are looking for are no longer here.'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
