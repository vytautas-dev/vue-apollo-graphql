<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Vue-Apollo-Graphql Training
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/login" label="Login" />
        <q-route-tab to="/dashboard" label="Books store" />
        <q-route-tab to="/create-book" label="Add Book" />
      </q-tabs>
    </q-header>

    <q-page-container class="window-width">
      <RouterView />
    </q-page-container>
  </q-layout>
</template>
