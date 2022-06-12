<script setup>
import { defineProps, computed, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from "axios";

import statusEnum from '../utils/status_enum'
import helpers from '../utils/propertyHelpers'

const route = useRoute()

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
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20"
        fill="currentColor">
        <path
          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
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