<script setup>
import { toRefs, computed } from 'vue'
import helpers from '../utils/propertyHelpers'

const props = defineProps({
  id: String,
  city: String,
  province: String,
  purchasePrice: Number,
  numOfBeds: Number,
  numOfBaths: Number,
  numOfParkingSpaces: Number,
  erfSize: Number,
  description: String,
  images: Array
});

const { id, images } = toRefs(props);

const previewLink = computed(() => {
  const path = (images.value[0]['path']).substring(8).replace('\\','/');
  return `url( https://api.bestplace.co.za/${path} )`;
})

</script>

<template>
  <!-- {{ `url( https://api.bestplace.co.za/${ (images[0]['path']).substring(8).replace('\\','/') } )`}} -->
  <div class="w-full lg:w-4/5 mx-auto my-5">
    <div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-80 mx-2 md:border-2 cursor-pointer" @click="$router.push(`/property?id=${id}`)">
      <!-- image -->
      <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
        <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
          :style="{ 'background-image': previewLink }" style="background-blend-mode: multiply;">
        </div>
        <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
          <div>
            <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">{{ province }}</h3>
            <h4 class="w-full text-xl text-gray-100 leading-tight">{{ city }}</h4>
          </div>
        </div>
        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>

      <!-- info -->
      <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
        <div class="p-8 md:pr-18 md:pl-14 -md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none border-2 md:border-0">
          <div class="hidden md:flex md:flex-row space-x-4 items-baseline">
            <h3 class="font-bold text-2xl text-gray-700">{{ province }}</h3>
            <h4 class="text-xl text-gray-400">{{ city }}</h4>
          </div>
          
          <!-- <p class="text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque
            perspiciatis quod sapiente quidem, vero consectetur quae iure error tempore reprehenderit unde veritatis
            fugit iusto nemo amet. Assumenda, quam facilis.</p>
          <a class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href="">
            <span>Conocer más de Amanee</span>
            <span class="text-xs ml-1">&#x279c;</span>
          </a> -->

          <!-- Costs -->
          <div>
            <!-- <p class="hidden md:block text-sm uppercase font-semibold text-gray-400">Purchase Price</p> text-gray-700  #0d63c9 text-[#021048] -->
            <p class="hidden md:block font-bold text-2xl #0d63c9 text-[#1e38a3]">{{ helpers.getCurrencyString(purchasePrice) }}</p>
          </div>
          <div class="mb-1 max-h-28 break-words whitespace-pre overflow-hidden">
            <p class="text-sm uppercase font-semibold text-gray-400" v-if="helpers.showDescription(description)">Description</p>
            <p class="text-gray-600 text-justify break-words whitespace-pre-wrap">{{ description }}</p>
          </div>
          <!-- Icons -->
          <div class="flex flex-col">
            <div class="flex space-x-6 py-4 text-gray-700">
              <!-- Bedrooms -->
              <div class="flex items-center">
                <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                </svg>
                <p><span class="text-gray-900 font-bold">{{ numOfBeds }}</span></p>
              </div>

              <!-- Bathrooms -->
              <div class="flex items-center">
                <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
                </svg>
                <p><span class="text-gray-900 font-bold">{{ numOfBaths }}</span></p>
              </div>

              <!-- Parking/Garage Spaces -->
              <div class="flex items-center">
                <svg class="h-8 w-8 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path class="text-gray-500 fill-current" d="M17.5,10 L18,11 L18,17 C18,17.5522847 17.5522847,18 17,18 L15,18 C14.4477153,18 14,17.5522847 14,17 L14,16 L6.02142334,16 L6.00817346,17.0130777 C6.00101753,17.5602153 5.5554433,18 5.00825897,18 L3,18 C2.44771525,18 2,17.5522847 2,17 L2,11 L2.5,10 L1,10 C1,8.8954305 1.8954305,8 3,8 L3,9 L4.4472136,6.10557281 C4.78599762,5.42800475 5.47852386,5 6.23606798,5 L13.763932,5 C14.5214761,5 15.2140024,5.42800475 15.5527864,6.10557281 L17,9 L17,8 C18.1045695,8 19,8.8954305 19,10 L17.5,10 Z M3,11.236068 L3,17 L5.00825897,17 L5.03441666,15 L15,15 L15,17 L17,17 L17,11.236068 L14.6583592,6.5527864 C14.4889672,6.21400238 14.1427041,6 13.763932,6 L6.23606798,6 C5.85729592,6 5.5110328,6.21400238 5.34164079,6.5527864 L3,11.236068 Z M4.80603027,10 L5.23706055,9 L14.7866211,9 L15.2627563,10 L4.80603027,10 Z M13.5,12 L15.5,12 C15.7761424,12 16,12.2238576 16,12.5 C16,12.7761424 15.7761424,13 15.5,13 L13.5,13 C13.2238576,13 13,12.7761424 13,12.5 C13,12.2238576 13.2238576,12 13.5,12 Z M4.5,12 L6.5,12 C6.77614237,12 7,12.2238576 7,12.5 C7,12.7761424 6.77614237,13 6.5,13 L4.5,13 C4.22385763,13 4,12.7761424 4,12.5 C4,12.2238576 4.22385763,12 4.5,12 Z" fill="none" fill-rule="nonzero"/>
                  </g>
                </svg>
                <p><span class="text-gray-900 font-bold">{{ numOfParkingSpaces }}</span></p>
              </div>

              <!-- Eff Area -->
              <div class="flex items-center">
                <svg class="h-6 w-6 text-gray-700 mr-3 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M1.5 8.5C1.5 7.94772 1.94772 7.5 2.5 7.5H16.5C17.0523 7.5 17.5 7.94772 17.5 8.5V21.5C17.5 22.0523 17.0523 22.5 16.5 22.5H2.5C1.94772 22.5 1.5 22.0523 1.5 21.5V8.5Z" stroke="#5C6576"/>
                  <line x1="1" y1="3.5" x2="18" y2="3.5"/>
                  <line x1="21.5" y1="7" x2="21.5" y2="23" />
                  <line x1="17.5" y1="2.5" x2="17.5" y2="4.5" stroke-linecap="round"/>
                  <line x1="20.5" y1="7.5" x2="22.5" y2="7.5" stroke-linecap="round"/>
                  <line x1="20.5" y1="22.5" x2="22.5" y2="22.5" stroke-linecap="round"/>
                  <line x1="1.5" y1="2.5" x2="1.5" y2="4.5" stroke-linecap="round"/>
                </svg>
                <p><span class="text-gray-900 font-bold">{{ erfSize }}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

