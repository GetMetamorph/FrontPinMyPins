<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
</style>
<template>

  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="PinMyPins Logo"
          class="shrink mr-2"
          contain
          src="./assets/pmp.png"
          transition="scale-transition"
          width="40"
        />

        <span style="font: 1.5em 'Ubuntu', sans-serif;">Pin My Pin's</span>
        <span><router-link to="./" style="color:white; margin-left: 1.5em;">
        Home</router-link></span>
        <span><router-link to="/addItem" style="color:white; margin-left: 1.5em;">
        Add Item</router-link>
        </span>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
