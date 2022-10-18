<script setup>
import { ref } from 'vue'
const router = useRouter();

const isLoading = ref(false);
let multipleFiles = null;

const props = defineProps({
  property: Object,
});

function onMultipleFilesChange (event) {
  multipleFiles = event.target.files;
}
</script>

<template>
<div>
  <!-- Loading Graphic Section -->
  <div class="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900 opacity-90"
  :class="[isLoading ? 'block' : 'hidden']">
    <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl ">
    	<div class="flex items-center justify-between">
    		<div class="flex items-center">
    			<svg xmlns="http://www.w3.org/2000/svg"
    				class="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
    				viewBox="0 0 24 24" stroke="currentColor">
    				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
    					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    			</svg>
    			<div class="flex flex-col ml-3">
    				<div class="font-medium leading-none text-xl">Add new property</div>
    				<p class="text-sm text-gray-600 leading-none mt-1 text-center">
              Please be patient while we complete this task
    				</p>
    			</div>
    		</div>
    	</div>
      <div class="flex justify-center items-center h-full">
        <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="">
      </div>
    </div>
  </div>
  <!-- End -->

  <!-- Property Info Section -->
  <div class="w-full bg-gray-100 py-2">
    <div class="w-full lg:w-4/5 mx-auto pb-10 bg-gray-100">
      <!-- Propert Listings -->
      <div class="flex flex-col px-8 py-10 mt-10 shadow overflow-hidden border border-gray-200 bg-white space-y-6">
        <div class="font-semibold text-4xl">Property Details</div>
        <div class="my-3 flex flex-col md:flex-row md:space-x-6">
          <!-- Address -->
          <div class="w-full md:w-1/2">
            <p class="font-semibold text-2xl">Location Info</p>
            <div class="my-3">
    					<label class="block text-md mb-2" for="address1">Address Line 1</label>
    					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="text" name="address1" placeholder="Address Line 1" v-model="property.address1">
            </div>
            <div class="my-3">
    					<label class="block text-md mb-2" for="address2">Address Line 2</label>
    					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="text" name="address2" placeholder="Address Line 1" v-model="property.address2">
            </div>
            <div class="my-3">
    					<label class="block text-md mb-2" for="city">City/Town</label>
    					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="text" name="city" placeholder="City/Town" v-model="property.city">
            </div>
            <div class="my-3">
    					<label class="block text-md mb-2" for="province">Province</label>
    					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="text"  name="province" placeholder="Province" v-model="property.province">
            </div>
            <div class="my-3">
    					<label class="block text-md mb-2" for="postalCode">Postal Code</label>
    					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="number" min="0000" step="1" name="postalCode" placeholder="0000" v-model="property.postalCode">
            </div>
          </div>
          <!-- Description -->
          <div class="w-full md:w-1/2">
            <p class="font-semibold text-2xl">Property Description</p>
            <div class="my-3">
      				<label class="block text-md mb-2" for="description">Description of Property</label>
              <textarea class="px-4 w-full h-96 border-2 border-gray-400 py-2 rounded-md text-sm outline-none" id="description" name="description" rows="4" placeholder="Start writing ..." v-model="property.description"></textarea>
            </div>
          </div>
        </div>

        <div class="my-3 flex flex-col md:flex-row md:space-x-6">
          <!-- Costs Info -->
          <div class="w-full md:w-1/2">
            <!-- <div class="text-left w-full my-3">
              <label class="block text-md mb-2" for="propType">Property Type</label>
              <div class="rounded-md shadow-sm border-2 border-gray-400 text-sm outline-none">
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
            </div> -->
            <!-- Money Input Field
              <div>
                <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span class="text-gray-500 sm:text-sm"> $ </span>
                  </div>
                  <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00">
                  <div class="absolute inset-y-0 right-0 flex items-center">
                    <label for="currency" class="sr-only">Currency</label>
                    <select id="currency" name="currency" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                      <option>USD</option>
                      <option>CAD</option>
                      <option>EUR</option>
                    </select>
                  </div>
                </div>
              </div>
            -->
            <p class="font-semibold text-2xl">Costs Info</p>
            <div class="my-3">
              <label class="block text-md mb-2" for="purchase">Purchase Price</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm"> R </span>
                </div>
                <input type="text" name="purchase" id="purchase" class="border-2 border-gray-400 py-2 rounded-md text-sm outline-none block w-full pl-7 pr-12 sm:text-sm" placeholder="0.00" v-model="property.purchasePrice">
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <span class="text-gray-500 sm:text-sm py-0 pl-2 pr-7"> ZAR </span>
                </div>
              </div>
            </div>
            <!-- <div class="my-3">
    					<label class="block text-md mb-2" for="purchase">Purchase Price</label>
    					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="number" min="0.00" step="0.01" name="purchase" placeholder="0.00" v-model="property.purchasePrice">
            </div> -->
            <div class="my-3">
              <label class="block text-md mb-2" for="rehab">Rehab Price</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm"> R </span>
                </div>
                <input type="text" name="rehab" id="rehab" class="border-2 border-gray-400 py-2 rounded-md text-sm outline-none block w-full pl-7 pr-12 sm:text-sm" placeholder="0.00" v-model="property.rehabPrice">
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <span class="text-gray-500 sm:text-sm py-0 pl-2 pr-7"> ZAR </span>
                </div>
              </div>
            </div>
            <div class="my-3">
              <label class="block text-md mb-2" for="rates">Rates And Taxes</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm"> R </span>
                </div>
                <input type="text" name="rates" id="rates" class="border-2 border-gray-400 py-2 rounded-md text-sm outline-none block w-full pl-7 pr-12 sm:text-sm" placeholder="0.00" v-model="property.ratesAndTaxes">
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <span class="text-gray-500 sm:text-sm py-0 pl-2 pr-7"> ZAR </span>
                </div>
              </div>
            </div>
            <div class="my-3">
              <label class="block text-md mb-2" for="resellPrice">Estimated Reselling Price</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm"> R </span>
                </div>
                <input type="text" name="resellPrice" id="resellPrice" class="border-2 border-gray-400 py-2 rounded-md text-sm outline-none block w-full pl-7 pr-12 sm:text-sm" placeholder="0.00" v-model="property.resellPrice">
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <span class="text-gray-500 sm:text-sm py-0 pl-2 pr-7"> ZAR </span>
                </div>
              </div>
            </div>
            <div class="my-3">
              <label class="block text-md mb-2" for="rental">Estimated Rental In The Area</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm"> R </span>
                </div>
                <input type="text" name="rental" id="rental" class="border-2 border-gray-400 py-2 rounded-md text-sm outline-none block w-full pl-7 pr-12 sm:text-sm" placeholder="0.00" v-model="property.rental">
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <span class="text-gray-500 sm:text-sm py-0 pl-2 pr-7"> ZAR </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Property Specifications -->
          <div class="w-full md:w-1/2">
            <p class="font-semibold text-2xl">Property Specifications</p>
            <div class="my-3">
    					<label class="block text-md mb-2" for="erfSize">Property Erf Size</label>
    					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" min="0" type="number" name="erfSize" placeholder="0" v-model="property.erfSize">
            </div>
            <div class="my-3">
    					<label class="block text-md mb-2" for="bedrooms">Number Of Bedrooms</label>
    					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" min="0" type="number" name="bedrooms" placeholder="0" v-model="property.numOfBeds">
            </div>
            <div class="my-3">
    					<label class="block text-md mb-2" for="bathrooms">Number Of Bathrooms</label>
    					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none0" min="0" type="number" name="bathrooms" placeholder="0" v-model="property.numOfBaths">
            </div>
            <div class="my-3">
    					<label class="block text-md mb-2" for="spaces">Number Of Garages/Parking Spaces</label>
    					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" min="0" type="number" name="spaces" placeholder="0" v-model="property.numOfParkingSpaces">
            </div>
            <div class="my-3">
    					<label class="block text-md mb-2" for="flatlets">Number Of Flatlets</label>
    					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" min="0" type="number" name="flatlets" placeholder="0" v-model="property.numOfFlatlets">
            </div>
          </div>
        </div>

        <div class="w-full space-y-4">
          <p class="font-semibold text-2xl ">Property Images</p>
          <input id="files" name="files" type="file" multiple="multiple" @change="onMultipleFilesChange" 
          class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 file:outline-none">
        </div>
        
      </div>
    </div>
  </div>
</div>
</template>
