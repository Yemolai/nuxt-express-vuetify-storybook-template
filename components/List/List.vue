<template>
  <ul class="list">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style>
.list {
  padding: 0;
}
</style>
