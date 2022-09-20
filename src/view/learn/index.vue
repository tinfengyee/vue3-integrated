<script lang="ts">
  import { reactive } from 'vue'

  export default {
    setup() {
      const state = reactive({
        count: 0,
      })
      return {
        state,
      }
    },
  }
</script>

<template>
  <div>Learn {{ state.count }}</div>
</template>
