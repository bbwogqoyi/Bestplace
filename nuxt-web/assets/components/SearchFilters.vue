<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ 
//   msg: string 
// }>()

const count = ref(0)
</script>

<template>
  <div class="w-full bg-gradient-to-r from-[#021048] to-[#1e38a3]">
    <div class="w-full lg:w-4/5 mx-auto px-2 sm:px-4 pt-6 pb-10">
      <!-- Searchbar -->
      <div class="w-full my-2 flex ">
        <div class="hidden md:flex w-32 flex-grow-0 bg-white mr-0.5 rounded-l-lg">
          <label for="currency" class="sr-only">Currency</label>
          <select id="currency" name="currency" class="focus:ring-indigo-500 focus:border-indigo-500 h-full w-full  pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm">
            <option>For Sale</option>
            <option>To Rent</option>
            <option>Developments</option>
          </select>
        </div>

        <div class="flex flex-grow bg-white relative rounded-lg">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
          <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-12 py-2 sm:text-sm border-gray-300 rounded-l-lg md:rounded-l-none" placeholder="Search by City, Suburb.." />
        </div>
        
        <div class="w-28 items-center justify-center flex bg-[#007bfc] text-white cursor-pointer rounded-r-lg hover:bg-gradient-to-r hover:from-[#007bfc] hover:to-[#51b9ff]">
          <span class="font-semibold text-lg">Search</span>
        </div>
      </div>

      <!-- four column filter row -->
      <div class="flex flex-col w-full md:flex-row mt-4 items-center space-y-2 md:space-y-0">
        <div class="flex justify-between items-center w-full md:w-auto">
          <!-- Property Type -->
          <div class="text-left w-full md:w-1/2">
            <label for="propType" class="block text-sm font-medium text-white">Property Type</label>
            <div class="rounded-md shadow-sm md:mr-4">
              <div class="flex flex-grow-0 bg-white md:mr-0.5 rounded-lg ">
                <label for="propType" class="sr-only">Property Type</label>
                <select id="propType" name="propType" class="h-full w-full pl-2 pr-7 border-transparent bg-transparent text-gray-800 sm:text-sm">
                  <option>House</option>
                  <option>Apartment / Flat</option>
                  <option>Townhouse</option>
                  <option>Vacant Land / Plot</option>
                  <option>Commercial Property</option>
                  <option>Industrial Property</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Min Price -->
          <div class="text-left w-1/2 md:w-1/2 hidden md:block">
            <label for="minPrice" class="block text-sm font-medium text-white">Min Price</label>
            <div class="rounded-md shadow-sm md:mr-4">
              <div class="flex flex-grow-0 bg-white md:mr-0.5 rounded-lg">
                <label for="minPrice" class="sr-only">Min Price</label>
                <input type="text" id="minPrice" name="minPrice" class=" h-full w-full py-2.5 pl-2 pr-7 border-transparent bg-transparent Property Name text-gray-800 sm:text-sm" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between space-x-1 md:space-x-0 w-full md:w-auto">
          <!-- Min Price -->
          <div class="text-left w-1/2 block md:hidden">
            <label for="minPrice" class="block text-sm font-medium text-white">Min Price</label>
            <div class="rounded-md shadow-sm md:mr-4">
              <div class="flex flex-grow-0 bg-white md:mr-0.5 rounded-lg">
                <label for="minPrice" class="sr-only">Min Price</label>
                <input type="text" id="minPrice" name="minPrice" class=" h-full w-full py-2.5 pl-2 pr-7 border-transparent bg-transparent Property Name text-gray-800 sm:text-sm" />
              </div>
            </div>
          </div>

          <!-- Max Price -->
          <div class="text-left w-1/2 md:w-full">
            <label for="maxPrice" class="block text-sm font-medium text-white">Max Price</label>
            <div class="rounded-md shadow-sm md:mr-4">
              <div class="flex flex-grow-0 bg-white md:mr-0.5 rounded-lg">
                <label for="maxPrice" class="sr-only">Max Price</label>
                <input type="text" id="maxPrice" name="maxPrice" class=" h-full w-full py-2.5 pl-2 pr-7 border-transparent bg-transparent Property Name text-gray-800 sm:text-sm" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between space-x-1 md:space-x-0 w-full md:w-auto">
          <!-- Bedrooms -->
          <div class="text-left w-1/2 md:w-full">
            <label for="bedrooms" class="block text-sm font-medium text-white">Bedrooms</label>
            <div class="rounded-md shadow-sm md:mr-4">
              <div class="flex flex-grow-0 bg-white md:mr-0.5 rounded-lg">
                <label for="bedrooms" class="sr-only">Bedrooms</label>
                <input type="number" id="bedrooms" name="bedrooms" class=" h-full w-full py-2.5 pl-2 border-transparent bg-transparent Property Name text-gray-800 sm:text-sm" />
              </div>
            </div>
          </div>

          <!-- Bathrooms -->
          <div class="text-left w-1/2 md:hidden">
            <label for="bathrooms" class="block text-sm font-medium text-white">Bathrooms</label>
            <div class="rounded-md shadow-sm md:mr-4">
              <div class="flex flex-grow-0 bg-white md:mr-0.5 rounded-lg">
                <label for="bathrooms" class="sr-only">Bathrooms</label>
                <input type="number" id="bathrooms" name="bathrooms" class=" h-full w-full py-2.5 pl-2 border-transparent bg-transparent Property Name text-gray-800 sm:text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
