<script setup>
import { ref, computed } from 'vue'
import axios from "axios";
import statusEnum from '../utils/status_enum'
import helpers from '../utils/propertyHelpers'

const route = useRoute()
const id = route.query.id;
const property = ref({});
const loggedInUser = ref(null);
const isAuthenticated = computed(
  () => (loggedInUser.value !== null && loggedInUser.value !== undefined)
);
const imgIndex = ref(0);
const images = ref([]);
const imagesDir = ref('');

const getPreviewLink = computed(() => {
  if(images.value.length) {
    const path = `${imagesDir.value}/${(images.value[imgIndex.value]['id'])}`;
    return `https://bestplace.co.za/static/${path}`;
  }
  
  return 'https://placeholder.pics/svg/800x400/DEDEDE/555555/loading...';
})

onBeforeMount(() => {
  axios.get(`https://api.bestplace.co.za/properties/${id}`)
    .then(function (res) {
      if (res.status === 200) {
        property.value = res.data;
        images.value = res.data.images;
        imagesDir.value = res.data.imagesDir;
      }
    })

  const user = localStorage.getItem('user')
  if (user) {
    loggedInUser.value = JSON.parse(user)
  }
})
</script>

<template>
  <div class=" bg-gray-50">
    <div class="w-full bg-gradient-to-r from-[#021048] to-[#1e38a3]">
      <div class="w-full lg:w-4/5 mx-auto px-2 sm:px-4 py-4">
        <div class="flex flex-row text-white">
          <div class="flex items-center cursor-pointer" @click="$router.push('/')">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span class="text-sm hover:underline mr-3">Back to Results</span> |
          </div>
        </div>
      </div>
    </div>

    <!-- lightbox -->
    <div class="w-full lg:w-4/5 mx-auto bg-gray-100 border-2">
      <div class="flex justify-between items-center">
        <div
          class="hidden md:flex justify-center items-center h-32 w-16 rounded-tr-full rounded-br-full bg-gray-200  hover:bg-gray-400"
          @click="imgIndex = (--imgIndex)%images.length">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <img class="h-96" :src="getPreviewLink" />
        <div
          class="hidden md:flex justify-center items-center h-32 w-16 rounded-tl-full rounded-bl-full bg-gray-200 hover:bg-gray-400"
          @click="imgIndex = (++imgIndex)%images.length">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div class="w-full mx-auto px-2 sm:px-4 py-4 bg-gray-800">
        <div class="flex flex-row justify-between text-white">
          <div class="flex items-center cursor-pointer space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-sm hover:underline mr-3">Photos</span>
          </div>
          <div class="text">
            {{ `${ imgIndex+1 } of ${images.length}` }}
          </div>
        </div>
      </div>
    </div>

    <!-- info -->
    <div class="w-full lg:w-4/5 mx-auto my-8 ">
      <div class="flex flex-col md:flex-row justify-between space-y-4 md:space-x-8 md:space-y-0">
        <div class="w-full md:w-3/5 space-y-8">
          <!-- Property Summary -->
          <div class="border shadow-md p-8 bg-white">
            <p class="w-full font-bold text-2xl text-gray-700 leading-tight mb-6">{{ `${property.city}, ${property.province}` }}</p>
            <!-- Costs -->
            <div class="space-y-2 mb-4">
              <div>
                <p class="block text-sm uppercase font-semibold text-gray-400">Purchase Price</p>
                <p class="block font-bold text-2xl text-gray-700">{{ helpers.getCurrencyString(property.purchasePrice)
                }}</p>
              </div>
              <div>
                <p class="block text-sm uppercase font-semibold text-gray-400">Rehab Price</p>
                <p class="block font-bold text-2xl text-gray-700">{{ helpers.getCurrencyString(property.rehabPrice) }}
                </p>
              </div>
              <div>
                <p class="block text-sm uppercase font-semibold text-gray-400">Total Investment</p>
                <p class="block font-bold text-2xl text-gray-700">{{
                    helpers.calculateTotalInvestment(property.purchasePrice, property.rehabPrice)
                }}</p>
              </div>
              <div>
                <p class="block text-sm uppercase font-semibold text-gray-400">Estimated Selling Price</p>
                <p class="block font-bold text-2xl text-gray-700">
                  {{ helpers.calculateTotalInvestment(property.purchasePrice, property.rehabPrice) }}
                </p>
              </div>
              <!-- 
              <div class="border-t border-[#021048] w-1/2"></div>

              <div>
                <p class="block text-sm uppercase font-semibold text-gray-400">Profit</p>
                <p class="block font-bold text-2xl text-gray-700">745 000</p>
              </div> 
            -->
            </div>

            <!-- Icons -->
            <div class="flex space-x-6 py-2 text-gray-700">
              <!-- Bedrooms -->
              <div class="flex items-center">
                <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z">
                  </path>
                </svg>
                <p><span class="text-gray-900 font-bold">{{ property.numOfBeds }}</span></p>
              </div>

              <!-- Bathrooms -->
              <div class="flex items-center">
                <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z">
                  </path>
                </svg>
                <p><span class="text-gray-900 font-bold">{{ property.numOfBaths }}</span></p>
              </div>

              <!-- Parking/Garage Spaces -->
              <div class="flex items-center">
                <svg class="h-8 w-8 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path class="text-gray-500 fill-current"
                      d="M17.5,10 L18,11 L18,17 C18,17.5522847 17.5522847,18 17,18 L15,18 C14.4477153,18 14,17.5522847 14,17 L14,16 L6.02142334,16 L6.00817346,17.0130777 C6.00101753,17.5602153 5.5554433,18 5.00825897,18 L3,18 C2.44771525,18 2,17.5522847 2,17 L2,11 L2.5,10 L1,10 C1,8.8954305 1.8954305,8 3,8 L3,9 L4.4472136,6.10557281 C4.78599762,5.42800475 5.47852386,5 6.23606798,5 L13.763932,5 C14.5214761,5 15.2140024,5.42800475 15.5527864,6.10557281 L17,9 L17,8 C18.1045695,8 19,8.8954305 19,10 L17.5,10 Z M3,11.236068 L3,17 L5.00825897,17 L5.03441666,15 L15,15 L15,17 L17,17 L17,11.236068 L14.6583592,6.5527864 C14.4889672,6.21400238 14.1427041,6 13.763932,6 L6.23606798,6 C5.85729592,6 5.5110328,6.21400238 5.34164079,6.5527864 L3,11.236068 Z M4.80603027,10 L5.23706055,9 L14.7866211,9 L15.2627563,10 L4.80603027,10 Z M13.5,12 L15.5,12 C15.7761424,12 16,12.2238576 16,12.5 C16,12.7761424 15.7761424,13 15.5,13 L13.5,13 C13.2238576,13 13,12.7761424 13,12.5 C13,12.2238576 13.2238576,12 13.5,12 Z M4.5,12 L6.5,12 C6.77614237,12 7,12.2238576 7,12.5 C7,12.7761424 6.77614237,13 6.5,13 L4.5,13 C4.22385763,13 4,12.7761424 4,12.5 C4,12.2238576 4.22385763,12 4.5,12 Z"
                      fill="none" fill-rule="nonzero" />
                  </g>
                </svg>
                <p><span class="text-gray-900 font-bold">{{ property.numOfParkingSpaces }}</span></p>
              </div>

              <!-- Eff Area -->
              <div class="flex items-center">
                <svg class="h-6 w-6 text-gray-700 mr-3 stroke-current" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" fill="none">
                  <path
                    d="M1.5 8.5C1.5 7.94772 1.94772 7.5 2.5 7.5H16.5C17.0523 7.5 17.5 7.94772 17.5 8.5V21.5C17.5 22.0523 17.0523 22.5 16.5 22.5H2.5C1.94772 22.5 1.5 22.0523 1.5 21.5V8.5Z"
                    stroke="#5C6576" />
                  <line x1="1" y1="3.5" x2="18" y2="3.5" />
                  <line x1="21.5" y1="7" x2="21.5" y2="23" />
                  <line x1="17.5" y1="2.5" x2="17.5" y2="4.5" stroke-linecap="round" />
                  <line x1="20.5" y1="7.5" x2="22.5" y2="7.5" stroke-linecap="round" />
                  <line x1="20.5" y1="22.5" x2="22.5" y2="22.5" stroke-linecap="round" />
                  <line x1="1.5" y1="2.5" x2="1.5" y2="4.5" stroke-linecap="round" />
                </svg>
                <p><span class="text-gray-900 font-bold">{{ property.erfSize }}</span></p>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="border shadow-md p-8 bg-white" v-if="helpers.showDescription(property.description)">
            <div class="flex flex-col">
              <div class="mb-1">
                <p class=" text-xl uppercase font-semibold text-gray-700">Description</p>
              </div>
              <p class="text-gray-600 text-justify break-words whitespace-pre-line">
                {{ property.description }}
              </p>
            </div>
          </div>

          <!-- Property Overview -->
          <div class="border shadow-md p-8 bg-white">
            <div class="flex flex-col">
              <div class="mb-1">
                <p class=" text-xl uppercase font-semibold text-gray-700">Property Overview</p>
              </div>
              <table class="table-fixed">
                <thead>
                  <tr>
                    <th class="w-1/2 py-2"></th>
                    <th class="w-1/2 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-gray-100">
                    <td class="py-4 px-2">Type of Property</td>
                    <td class="py-4 px-2">House</td>
                  </tr>
                  <tr>
                    <td class="py-4 px-2">Listing Number</td>
                    <td class="py-4 px-2">{{ property._key }}</td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="py-4 px-2">Listing Date</td>
                    <td class="py-4 px-2">{{ helpers.getListingDateString(property.listingDate) }}</td>
                  </tr>
                  <tr>
                    <td class="py-4 px-2">Erf Size</td>
                    <td class="py-4 px-2">{{ property.erfSize }} m<sup>2</sup></td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="py-4 px-2">Rates and Taxes</td>
                    <td class="py-4 px-2">{{ helpers.getCurrencyString(property.ratesAndTaxes) }}</td>
                  </tr>
                  <tr>
                    <td class="py-4 px-2">Flatlet(s)</td>
                    <td class="py-4 px-2">{{ property.numOfFlatlets }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="w-full md:w-2/5">
          <ContactAgentForm :propertyId='id' :isAuthenticated='isAuthenticated' :loggedInUser='loggedInUser' />
        </div>

      </div>

    </div>
  </div>
</template>