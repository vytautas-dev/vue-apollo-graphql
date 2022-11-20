<script setup lang="ts">
</script>

<template>

<div>
  <nav>
    <RouterLink to="/"> Home </RouterLink>
    <RouterLink to="/login"> Login </RouterLink>
    <RouterLink to="/dashboard"> Dashboard </RouterLink>
    <a href="http://localhost:5000/auth/logout" @click="">Logout</a>
  </nav>
</div>
  <RouterView />

</template>

<style scoped>

</style>
