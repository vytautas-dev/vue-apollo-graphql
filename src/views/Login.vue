<!-------------------------------------------------SCRIPT---------------------------------------------------->
<script setup lang="ts">
import {userAuthStore} from "../stores/userAuthStore";

const userStore = userAuthStore();

const redirectToGoogleSSO = async () => {
  let timer: NodeJS.Timeout | null = null;
  const googleLoginURL = "http://localhost:5000/auth/google";
  const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
  );
  if (newWindow) {
    timer = setInterval(() => {
      if (newWindow.closed) {
        userStore.fetchUser();
        if (timer) clearInterval(timer);
      }
    }, 500);
  }
};

</script>

<!-------------------------------------------------TEMPLATE-------------------------------------------------->
<template>
  <h2>Login Page</h2>
  <button @click="redirectToGoogleSSO" v-if="!userStore.user">LOGIN WITH GOOGLE</button>
  <div v-else><p>{{userStore.user.username}}</p></div>
</template>

<!-------------------------------------------------STYLE----------------------------------------------------->
<style scoped>

</style>
