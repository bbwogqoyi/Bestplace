<script setup>
import { ref, onMounted } from 'vue'

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore();

onMounted(() => {
  store.commit('setIsAuthenticated', true);
  //router.push('/admin/dashboard');
})

</script>

<template>

  <div class="w-full mx-auto bg-gray-100">
    <!-- Propert Listings -->
    <div class="flex flex-col px-4 overflow-hidden bg-white">
      <!-- Search + Action Button -->
      <div class="w-full flex justify-between my-8 pt-4">
        <!-- Searchbar -->
        <div class="flex w-64">
          <div class="w-2/12 flex justify-center items-center bg-white border rounded-tl-xl rounded-bl-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input class="p-2 w-10/12 bg-gray-50 text-sm focus:outline-none border border-gray-300 rounded-tr-xl rounded-br-xl" type="text" placeholder="Search by Property Name ..." />
        </div>

        <!-- New Property Button -->
        <button @click="$router.push('/admin/dashboard/property/new')" class="border border-green-500 bg-green-500 text-white rounded-sm font-bold py-4 px-6 mr-2 flex items-center">
          New Property
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      <!-- Listings Table  -->
      <div class="">
        <table class="min-w-full divide-y divide-gray-200 table-fixed w-full">
          <thead class="">
            <tr>
              <th scope="col" class="lg:w-[30%] pr-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Property Name
              </th>
              <th scope="col" class="w-[15%] lg:w-[10%] px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                # of Enquiries
              </th>
              <th scope="col" class="w-[20%] lg:w-[15%] px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <!-- <th scope="col" class="w-[15%] px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Progress
              </th> -->
              <th scope="col" class="w-[15%] hidden lg:table-cell px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" class="w-[10%] hidden lg:table-cell px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Listing Date
              </th>
              <th scope="col" class="w-[15%] px-6 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Cost Estimate
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <!-- Draft Row -->
            <tr>
              <td class="py-4 whitespace-nowrap">
                <div class="flex flex-row justify-between items-center">
                  <div class="flex flex-col w-[85%] overflow-x-hidden">
                    <div class="text-sm font-semibold text-gray-700 mb-1 whitespace-normal break-words">
                      Oliantsfontein, Gauteng
                    </div>
                    <div class="text-xs font-semibold py-1 text-gray-400 w-max">
                      15 Oct 2021
                    </div>
                    <!-- <div class="text-xs font-semibold border rounded-lg py-1 px-3 text-gray-400 bg-gray-100 w-max">
                      Email
                    </div> -->
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">-</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-4 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full uppercase bg-gray-100 text-gray-500">
                  Draft
                </span>
              </td>
              <!-- <td class="flex flex-col justify-center px-6 py-4 whitespace-nowrap">
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
              </td> -->
              <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">Private Seller</span>
              </td>
              <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">15 Oct 2021</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-blue-200 font-semibold hover:text-blue-700">R112 146.12</a>
              </td>
            </tr>

            <!-- Standby Row -->
            <tr>
              <td class="py-4 whitespace-nowrap">
                <div class="flex flex-row justify-between items-center">
                  <div class="flex flex-col w-[85%] overflow-x-hidden">
                    <div class="text-sm font-semibold text-gray-700 mb-1 whitespace-normal break-words">
                      Oliantsfontein, Gauteng
                    </div>
                    <div class="text-xs font-semibold py-1 text-gray-400 w-max">
                      15 Oct 2021
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">6</span> Records
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-4 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full uppercase bg-yellow-100 text-yellow-500">
                  Standby
                </span>
              </td>
              <!-- <td class="flex flex-col justify-center px-6 py-4 whitespace-nowrap">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-gray-400 text-xs">
                    N/A
                  </p>
                </div>
                <div class="w-full h-2 bg-yellow-200 rounded-full">
                  <div class="w-0 h-full text-center text-xs text-white bg-yellow-600 rounded-full">
                  </div>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <p class="text-yellow-400 font-semibold text-xs">
                    -
                  </p>
                </div>
              </td> -->
              <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">Repossessed</span>
              </td>
              <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">15 Oct 2021</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <p class="text-yellow-200 font-semibold">R112 146.12</p>
              </td>
            </tr>

            <!-- Distributing Row -->
            <tr>
              <td class="py-4 whitespace-nowrap">
                <div class="flex flex-row justify-between items-center">
                  <div class="flex flex-col w-[85%] overflow-x-hidden">
                    <div class="text-sm font-semibold text-gray-700 mb-1 whitespace-normal break-words">
                      Oliantsfontein, Gauteng
                    </div>
                    <div class="text-xs font-semibold py-1 text-gray-400 w-max">
                      15 Oct 2021
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">5</span> Records
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-4 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full uppercase bg-yellow-100 text-yellow-500">
                  Under Offer
                </span>
              </td>
              <!-- <td class="flex flex-col justify-center px-6 py-4 whitespace-nowrap">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-gray-400 text-xs">
                    75% Processed
                  </p>
                </div>
                <div class="w-full h-2 bg-blue-200 rounded-full">
                  <div class="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full">
                  </div>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <p class="text-blue-400 font-semibold text-xs">
                    192,00 
                  </p>
                </div>
              </td> -->
              <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">For Sale</span>
              </td>
              <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">15 Oct 2021</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-blue-600 font-semibold hover:text-indigo-900">R112 146.12</a>
              </td>
            </tr>

            <!-- Completed Row -->
            <tr>
              <td class="py-4 whitespace-nowrap">
                <div class="flex flex-row justify-between items-center">
                  <div class="flex flex-col w-[85%] overflow-x-hidden">
                    <div class="text-sm font-semibold text-gray-700 mb-1 whitespace-normal break-words">
                      Oliantsfontein, Gauteng
                    </div>
                    <div class="text-xs font-semibold py-1 text-gray-400 w-max">
                      15 Oct 2021
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">25</span> Records
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-4 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full uppercase bg-green-100 text-green-500">
                  Sold
                </span>
              </td>
              <!-- <td class="flex flex-col justify-center px-6 py-4 whitespace-nowrap">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-gray-400 text-xs">
                    100% Processed
                  </p>
                </div>
                <div class="w-full h-2 bg-blue-200 rounded-full">
                  <div class="w-full h-full text-center text-xs text-white bg-blue-600 rounded-full">
                  </div>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <p class="text-blue-400 font-semibold text-xs">
                    256,000
                  </p>
                </div>
              </td> -->
              <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">For Sale</span>
              </td>
              <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">15 Oct 2021</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-blue-600 font-semibold hover:text-indigo-900">R112 146.12</a>
              </td>
            </tr>

            <!-- Canceled Row -->
            <tr>
              <td class="py-4 whitespace-nowrap">
                <div class="flex flex-row justify-between items-center">
                  <div class="flex flex-col w-[85%] overflow-x-hidden">
                    <div class="text-sm font-semibold text-gray-700 mb-1 whitespace-normal break-words">
                      Oliantsfontein, Gauteng
                    </div>
                    <div class="text-xs font-semibold py-1 text-gray-400 w-max">
                      15 Oct 2021
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">0</span> Records
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-4 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full uppercase bg-red-100 text-red-500">
                  Canceled
                </span>
              </td>
              <!-- <td class="flex flex-col justify-center px-6 py-4 whitespace-nowrap">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-gray-400 text-xs">
                    23% Processed
                  </p>
                </div>
                <div class="w-full h-2 bg-red-200 rounded-full">
                  <div class="w-[23%] h-full text-center text-xs text-white bg-red-400 rounded-full">
                  </div>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <p class="text-red-300 font-semibold text-xs">
                    45,650
                  </p>
                </div>
              </td>-->
              <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">Auction</span>
              </td> 
              <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="font-semibold">15 Oct 2021</span>
              </td> 
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <p class="text-red-200 font-semibold hover:text-indigo-900">R12 146.12</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="bg-white px-4 pt-6 pb-3 my-6 flex items-center justify-between border-t border-gray-400 sm:px-6">
        <div class="flex-1 flex justify-between sm:hidden">
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </a>
          <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </a>
        </div>
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700">
              Showing
              <span class="font-medium">1</span>
              to
              <span class="font-medium">10</span>
              of
              <span class="font-medium">97</span>
              results
            </p>
          </div>
          <div>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Previous</span>
                <!-- Heroicon name: solid/chevron-left -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
              <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
              <a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                1
              </a>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                2
              </a>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                3
              </a>
              <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                8
              </a>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                9
              </a>
              <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                10
              </a>
              <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Next</span>
                <!-- Heroicon name: solid/chevron-right -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    

  </div>

</template>
