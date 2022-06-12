<script setup>
import { ref, computed, onMounted } from 'vue'

import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const route = useRoute()
const store = useStore();

onMounted(() => {
  store.commit('setIsAuthenticated', true);
  //router.push('/admin/dashboard');
})

</script>

<template>
<div class="w-full bg-gray-100 py-2">
  <div class="w-full lg:w-4/5 mx-auto pb-10 bg-gray-100">
    <!-- Propert Listings -->
    <div class="flex flex-col px-4 mt-10 shadow overflow-hidden border border-gray-200 bg-white">
      <div class="bg-white p-10 text-center">
        New Component
      </div>

    </div>

 
  </div>
</div>
</template>
