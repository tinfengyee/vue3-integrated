<script lang="ts" setup>
  import { reactive, ref } from 'vue'

  defineProps({
    foo: String,
    modelValue: String,
  })

  defineEmits(['update:modelValue'])

  const slotScope = reactive({
    name: 'xm',
    age: 25,
  })

  const count = ref(0)

  function increment() {
    count.value++
  }
</script>

<template>
  <div class="wrap">
    <h2>display: {{ foo }}</h2>
    <button @click="increment">{{ count }}</button>
    <slot name="footer" :user="slotScope"> footer </slot>
  </div>
</template>

<style lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
  }
</style>
