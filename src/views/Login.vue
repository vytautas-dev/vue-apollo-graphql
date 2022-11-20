<!-------------------------------------------------SCRIPT---------------------------------------------------->
<script setup lang="ts">
import { userAuthStore } from "../stores/userAuthStore";

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

    <q-btn
      color="primary"
      label="Sign in with Google"
      @click="redirectToGoogleSSO"
      v-if="!userStore.user"
    />

    <q-item v-ripple q-pa-md v-else>
      <q-item-section avatar>
        <q-avatar color="primary" text-color="white">
          {{ userStore.user.username[0] }}
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ userStore.user.username }}</q-item-label>
        <q-item-label caption lines="1">{{
          userStore.user.email
        }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-page>
</template>

<!-------------------------------------------------STYLE----------------------------------------------------->
<style scoped></style>
