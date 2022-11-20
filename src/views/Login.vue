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
  <q-page padding>
    <h4>Login Page</h4>
    <Container>
      <q-btn color="primary" label="Sign in with Google" @click="redirectToGoogleSSO" v-if="!userStore.user" />
      <div v-else><p>{{userStore.user.username}}</p></div>
    </Container>
  </q-page>
</template>

<!-------------------------------------------------STYLE----------------------------------------------------->
<style scoped>

</style>
