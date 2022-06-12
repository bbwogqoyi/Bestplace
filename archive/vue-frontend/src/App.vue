<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from './components/NavBar.vue';
import GenericFooter from './components/GenericFooter.vue';

import { useStore } from 'vuex'
const store = useStore();


</script>

<template>

  <div class="w-full h-screen">
    <NavBar v-if="store.state.isAuthenticated" />
    <router-view />
    <GenericFooter v-if="store.state.isAuthenticated" class="bottom-0"/>
  </div>

  

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
