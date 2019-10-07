<template>
  <div v-once class="text-content">
    <article v-html="content"></article>
  </div>
</template>

<script>
export default {
  name: 'company',
  data () {
    return {
      content: require('@/assets/content.json').company
    }
  }
}
</script>
