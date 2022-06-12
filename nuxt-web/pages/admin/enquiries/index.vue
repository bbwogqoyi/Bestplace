<script setup>
import helpers from '../../../utils/propertyHelpers'

const { data } = await useFetch('http://localhost:5001/enquiries')
</script>
<template>
  <div class="w-full bg-gray-100 py-2">
    <div class="w-full lg:w-4/5 mx-auto pb-10 bg-gray-100">
      <!-- Propert Listings -->
      <div class="flex flex-col px-4 mt-10 shadow overflow-hidden border border-gray-200 bg-white">
        <AdminNavBar tabName="enquiries" />

        <div class="flex flex-col px-4 overflow-hidden bg-white">

          <!-- Search + Action Button -->
          <div class="w-full flex justify-between my-8 pt-4">
            <!-- Searchbar -->
            <div class="flex w-64">
              <div class="w-2/12 flex justify-center items-center bg-white border rounded-tl-xl rounded-bl-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-gray-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                class="p-2 w-10/12 bg-gray-50 text-sm focus:outline-none border border-gray-300 rounded-tr-xl rounded-br-xl"
                type="text" placeholder="Search by Property Name ..." />
            </div>

            <!-- This is an example component -->
            <div class="relative inline-flex">
              <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
              <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option>Choose a color</option>
                <option>Red</option>
                <option>Blue</option>
                <option>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-gray-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>TEST</span>
                  </div>
                </option>
                <option>Black</option>
                <option>Orange</option>
                <option>Purple</option>
                <option>Gray</option>
                <option>White</option>
              </select>
            </div>

            <!-- New Property Button -->
            <!-- <button class="border border-green-500 bg-green-500 text-white rounded-sm font-bold py-4 px-6 mr-2 flex items-center">
      New Property
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </button> -->
          </div>

          <!-- Enquiry Table  -->
          <div class="">
            <table class="min-w-full divide-y divide-gray-200 table-fixed w-full">
              <thead class="">
                <tr>
                  <th scope="col"
                    class="lg:w-[30%] pr-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Property
                  </th>
                  <th scope="col"
                    class="w-[15%] hidden lg:table-cell px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    User Name
                  </th>
                  <th scope="col"
                    class="w-[30%] hidden lg:table-cell px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col"
                    class="w-[10%] hidden lg:table-cell px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Enquiry Date
                  </th>
                  <th scope="col"
                    class="w-[15%] px-6 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Property Cost
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="item in data" :key="item._key">
                  <td class="py-4 whitespace-nowrap">
                    <div class="flex flex-row justify-between items-center">
                      <div class="flex flex-col w-[85%] overflow-x-hidden">
                        <div class="text-sm font-semibold text-gray-700 mb-1 whitespace-normal break-words">
                          {{ `${item.property.address1}, ${item.property.city}` }}
                        </div>
                        <div class="text-xs font-semibold py-1 text-gray-400 w-max">
                          {{ `${item.property._key} | ${ helpers.getListingDateString(item.property.listingDate)}` }}
                        </div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </div>
                  </td>
                  <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span class="font-semibold">{{ `${item.user.firstname} ${item.user.lastname}` }}</span>
                  </td>
                  <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span class="font-semibold">{{ item.user.email }}</span>
                  </td>
                  <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span class="font-semibold">{{ helpers.getListingDateString(item.enquiryDate) }}</span>
                  </td> 
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-blue-600 font-semibold hover:text-indigo-900">
                      {{ helpers.getCurrencyString(item.property.purchasePrice) }}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="bg-white px-4 pt-6 pb-3 my-6 flex items-center justify-between border-t border-gray-400 sm:px-6">
            <div class="flex-1 flex justify-between sm:hidden">
              <a href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </a>
              <a href="#"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
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
                  <a href="#"
                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <!-- Heroicon name: solid/chevron-left -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                  <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                  <a href="#" aria-current="page"
                    class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    1
                  </a>
                  <a href="#"
                    class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                  </a>
                  <a href="#"
                    class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                    3
                  </a>
                  <span
                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a href="#"
                    class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                    8
                  </a>
                  <a href="#"
                    class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    9
                  </a>
                  <a href="#"
                    class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    10
                  </a>
                  <a href="#"
                    class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Next</span>
                    <!-- Heroicon name: solid/chevron-right -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
