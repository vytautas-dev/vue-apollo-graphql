<script setup lang="ts">
</script>

<template>

<div>
  <nav>
    <RouterLink to="/"> Home </RouterLink>
    <RouterLink to="/login"> Login </RouterLink>
    <RouterLink to="/auth/success"> Login Success </RouterLink>
    <RouterLink to="/dashboard"> Dashboard </RouterLink>
  </nav>
</div>
  <RouterView />

</template>

<style scoped>

</style>
