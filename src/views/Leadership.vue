<template>
  <div v-once class="text-content">
    <article v-html="content"></article>
  </div>
</template>

<script>
export default {
  name: 'leadership',
  data () {
    return {
      content: require('@/assets/content.json').leadership
    }
  }
}
</script>
