<script setup>
import { defineProps, computed, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import statusEnum from '../utils/status_enum'
import helpers from '../utils/propertyHelpers'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  id: String,
  city: String,
  province: String,
  purchasePrice: Number,
  rehabPrice: Number,
  status: Number,
  numOfEnquiries: Number,
  listingDate: String
});

const { id, purchasePrice, rehabPrice, listingDate } = toRefs(props);

function editProperty(id) {
  console.log(`Editing Property #${id}`)
  router.push({ path:'/admin/properties/edit', query: {id} })
}

function deleteProperty(id) {
  alert(`Deleting Property #${id}`)
}

</script>

<template>
<tr>
  <td class="py-4 whitespace-nowrap">
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-col w-[85%] overflow-x-hidden">
        <div class="text-sm font-semibold text-gray-700 mb-1 whitespace-normal break-words">
          {{ `${city}, ${province}` }}
        </div>
        <div class="text-xs font-semibold py-1 text-gray-400 w-max">
          {{ helpers.getListingDateString(listingDate) }}
        </div>
        <!-- 
        <div class="text-xs font-semibold border rounded-lg py-1 px-3 text-gray-400 bg-gray-100 w-max">
          Email
        </div> 
        -->
      </div>
      

      <!-- floating context menu -->
      <span title="Open context menu">
        <VDropdown :distance="-10" :skidding="20" :triggers="['focus', 'click']" :popperHideTriggers="['hover']">
          <!-- This will be the popover reference (for the events and position) -->
          <button class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border-transparent rounded-md  focus:ring-opacity-40 dark:focus:ring-opacity-40 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none group ">
            <!-- 
            <span class="mx-1">Actions</span>
            <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
            </svg> 
            -->
            
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-hover:border-black border-b-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
           
          </button>

          <!-- Dropdown menu -->
          <template #popper>
            <div class="w-56 py-0 overflow-hidden bg-white rounded-md shadow-xl drop-shadow-xl dark:bg-gray-800 ">
              <div class="cursor-pointer group">
                <a @click="editProperty(id)" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                  Edit
                </a>
              </div>
              <div class="cursor-pointer group">
                <a @click="deleteProperty(id)" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white border-transparent border-l-4 group-hover:border-red-600 group-hover:bg-gray-100">
                  Delete
                </a>
              </div>
            </div>
          </template>
        </VDropdown>
      </span>
      
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    <span class="font-semibold">{{ numOfEnquiries }}</span>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <span
      class="px-4 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full uppercase bg-gray-100 text-gray-500">
      {{ statusEnum.getStatusDescription(status) }}
    </span>
  </td>
  <!-- 
  <td class="flex flex-col justify-center px-6 py-4 whitespace-nowrap">
    <div class="flex items-center justify-between mb-1">
      <p class="text-gray-400 text-xs">
        N/A
      </p>
    </div>
    <div class="w-full h-2 bg-blue-200 rounded-full">
      <div class="w-0 h-full text-center text-xs text-white bg-blue-600 rounded-full">
      </div>
    </div>
    <div class="flex items-center justify-between mt-1">
      <p class="text-blue-400 font-semibold text-xs">
        -
      </p>
    </div>
  </td> 
  -->
  <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    <span class="font-semibold">Private Seller</span>
  </td>
  <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    <span class="font-semibold">{{ helpers.getListingDateString(listingDate) }}</span>
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
    <a href="#" class="font-semibold text-blue-700">
      {{ helpers.calculateTotalInvestment(purchasePrice, rehabPrice) }}
    </a>
  </td>
</tr>
</template>