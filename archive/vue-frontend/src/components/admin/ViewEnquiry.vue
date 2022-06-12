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
  <div class="w-full bg-gradient-to-r from-[#021048] to-[#1e38a3]">
    <div class="w-full lg:w-4/5 mx-auto px-2 sm:px-4 py-4">
      <div class="flex flex-row text-white">
        <div class="flex items-center cursor-pointer" @click="$router.push('/admin/dashboard/enquiries')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          <span class="text-sm hover:underline mr-3">Back to Enquiries</span> |
        </div>
      </div>
    </div>
  </div>
  <div class="w-full lg:w-4/5 mx-auto pb-10 bg-gray-100">
    <!-- Propert Listings -->
    <div class="flex flex-col p-8 mt-10 shadow overflow-hidden border border-gray-200 bg-white space-y-4">
      <div class="font-semibold text-4xl">Enquiry Details</div>
      <div class="">
        Enquiry:  {{ $route.params.index }}
      </div>

      <div class="flex space-x-6">
        <div class="w-1/2 space-y-2">
          <div class="font-semibold text-2xl mb-4">Property Info</div>
          <div  @click="$router.push('/property')" class="underline text-blue-700">
            Listing ID:  12345
          </div>
          <div class="">
            Location:  Olifantsfontein, Midrand, Gauteng
          </div>
          <div class="">
            Purchase Price: <strong>R 670 000</strong>
          </div>
          <div class="">
            Status: 
            <span class="px-4 py-0.5 inline-flex text-md font-semibold rounded-full uppercase bg-yellow-100 text-yellow-500">
              Under Offer
            </span>
          </div>
          <div class="">
            Type: Repossessed
          </div>
        </div>
        <div class="w-1/2 space-y-2 text-md">
          <div class="font-semibold text-2xl mb-4">Buyer Contact Details</div>
          <div class="">
            Name:  Nkosinathi Dube
          </div>
          <div class="">
            Email: nkosinathi.dube@yahoo.com
          </div>
          <div class="">
            Mobile: (+27) 82 322 0258
          </div>
        </div>
      </div>

      
    </div>

 
  </div>
</div>
</template>
