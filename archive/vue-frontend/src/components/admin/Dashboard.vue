<script setup>
import { ref, computed, onMounted } from 'vue'

import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import PropertyListings from './PropertyListings.vue';
import Enquiries from './Enquiries.vue';

const router = useRouter()
const route = useRoute()
const store = useStore();

const showPropListings = computed(
  () => (route.params.activeTab ==  "" || route.params.activeTab ==  "index" )
)

const showEnquiries = computed(
  () => route.params.activeTab == "enquiries"
)

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
      <div class="bg-white">
        <nav class="flex flex-col sm:flex-row">
          <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" @click="$router.push('/admin/dashboard/index')" :class="{ 'text-blue-500 border-b-2 font-medium border-blue-500': showPropListings }" >
            Properties
          </button>
          <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" @click="$router.push('/admin/dashboard/enquiries')" :class="{ 'text-blue-500 border-b-2 font-medium border-blue-500': showEnquiries }" >
            Enquiries
          </button>
          <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" >
            Tab 3
          </button>
          <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" >
            {{ $route.params.activeTab }}
          </button>
        </nav>
      </div>

      <PropertyListings v-if="showPropListings" />
      <Enquiries v-if="showEnquiries" />
    </div>

    

    

  </div>
</div>
</template>

<style scoped>

</style>
