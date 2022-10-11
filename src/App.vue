<!-- <script lang="ts">
</script> -->
<script setup lang="ts">
  import Learn from '/@/view/learn/index.vue'
  import { useMouse } from '/@/hooks/web/mouse'
  import { onMounted } from 'vue'

  const { x, y } = useMouse()
  onMounted(() => {
    console.log(1)
  })
</script>

<template>
  <main>
    <h1>{{ x }} -- {{ y }}</h1>
    <Learn foo="23" id="c" class="dd">
      <template #footer="{ user }">
        <div>{{ user }}</div>
      </template>
    </Learn>
  </main>
</template>

<style lang="scss">
  @import '/@/styles/index.scss';

  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
