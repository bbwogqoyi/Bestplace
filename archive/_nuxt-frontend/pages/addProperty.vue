<script setup>
import { ref, computed, onMounted } from 'vue'

import axios from "axios";
let location = ref('');
let singleFile = null;
let multipleFiles = null;

function onSingleFileChange (event) {
  singleFile = event.target.files[0];
}

function onMultipleFilesChange (event) {
  multipleFiles = event.target.files;
}

const uploadSingleFile = async () => {
  try {
    const data = new FormData();
    data.append('file', singleFile)
    await axios.post('http://api.bestplace.co.za/properties', data, {
      headers: { 'content-type': 'multipart/form-data' }
    })
  } catch(e) {
    throw e 
  }
}

const uploadMultipleFiles = async () => {
   try {
    const data = new FormData();
    console.log(multipleFiles)
    for(let i=0; i<multipleFiles.length; i+=1) {
      console.log(multipleFiles[i])
      data.append('files', multipleFiles[i])
    }
    await axios.post('http://api.bestplace.co.za/properties', data)
  } catch(e) {
    throw e 
  }
}

// function onSubmit() {   
//   // upload file
//   let formData = new FormData()
//   console.log( uploads)
//   formData.append('images', uploads)
//   formData.append('name', location.value)
//   axios.post('http://api.bestplace.co.za/properties', formData, {
//     headers: { 'content-type': 'multipart/form-data' }
//   }).then((res) => {
//     console.log(res)
//   })
// }  



// import { useRouter, useRoute } from 'vue-router'
// import { useStore } from 'vuex'

// const router = useRouter()
// const route = useRoute()
// const store = useStore();

// onMounted(() => {
//   store.commit('setIsAuthenticated', true);
//   //router.push('/admin/dashboard');
// })

</script>

<template>
<div class="w-full bg-gray-100 py-2">
  <div class="w-full lg:w-4/5 mx-auto pb-10 bg-gray-100">
    <!-- Propert Listings -->
    <div class="flex flex-col px-8 py-10 mt-10 shadow overflow-hidden border border-gray-200 bg-white space-y-6">
      <div class="font-semibold text-4xl">Property Details</div>
      <div class="my-3">
				<label class="block text-md mb-2" for="location">General Location</label>
				<input v-model="location" class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="text"  name="location" placeholder="Sandhurst, Sandton, Gauteng">
      </div>
      <div class="flex space-x-6 ">
        <!-- Column -->
        <div class="w-1/2">
          <div class="text-left w-full my-3">
            <label class="block text-md mb-2" for="propType">Property Type</label>
            <div class="shadow-sm border-2 border-gray-400 rounded-md text-sm outline-none">
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
          <div class="my-3">
  					<label class="block text-md mb-2" for="purchase">Purchase Price</label>
  					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="number" min="0.00" step="0.01" name="purchase" placeholder="0.00">
          </div>
          <div class="my-3">
  					<label class="block text-md mb-2" for="rehab">Rehab Price</label>
  					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="number" min="0.00" step="0.01" name="rehab" placeholder="0.00">
          </div>
          <div class="my-3">
  					<label class="block text-md mb-2" for="investment">Total Investment</label>
  					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="number" min="0.00" step="0.01" name="investment" placeholder="0.00">
          </div>
          <div class="my-3">
  					<label class="block text-md mb-2" for="profit">Profit</label>
  					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="number" min="0.00" step="0.01" name="profit" placeholder="0.00">
          </div>
          <div class="my-3">
  					<label class="block text-md mb-2" for="rates">Rates And Taxes</label>
  					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" type="number" min="0.00" step="0.01" name="rates" placeholder="0.00">
          </div>
        </div>

        <!-- Column -->
        <div class="w-1/2">
          <div class="my-3">
  					<label class="block text-md mb-2" for="bedrooms">Number Of Bedrooms</label>
  					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" min="0" type="number" name="bedrooms" placeholder="0">
          </div>
          <div class="my-3">
  					<label class="block text-md mb-2" for="bathrooms">Number Of Bathrooms</label>
  					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none0" min="0" type="number" name="bathrooms" placeholder="0">
          </div>
          <div class="my-3">
  					<label class="block text-md mb-2" for="spaces">Number Of Garages/Parking Spaces</label>
  					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" min="0" type="number" name="spaces" placeholder="0">
          </div>
          <div class="my-3">
  					<label class="block text-md mb-2" for="flatlets">Number Of Flatlets</label>
  					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" min="0" type="number" name="flatlets" placeholder="0">
          </div>
          <div class="my-3">
  					<label class="block text-md mb-2" for="erfSize">Property Erf Size</label>
  					<input class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" min="0" type="number" name="erfSize" placeholder="0">
          </div>
        </div>
      </div>

      <div class="font-semibold text-4xl">Property Descriptors</div>
      <div class="my-3">
				<label class="block text-md mb-2" for="description">Description of Property</label>
        <textarea class="px-4 w-full border-2 border-gray-400 py-2 rounded-md text-sm outline-none" id="description" name="description" rows="4" placeholder="Start writing ..."></textarea>
      </div>

      <input id="files" name="files" type="file" multiple="multiple" @change="onMultipleFilesChange">

      <!-- <div class="mt-3">
        <label class="block text-md ">
          Property Pictures
        </label>
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-400 border-dashed rounded-md">
          <div class="space-y-1 text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label for="files" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <span>Upload a file</span>
                <input id="files" name="files" type="file" class="sr-only" multiple="multiple" @change="onMultipleFilesChange">
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
                

        </div>
      </div> -->
      
      <div class="py-3 bg-gray-50 text-right space-x-4">
        <button @click="$router.push('/admin/dashboard/')" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#007bfc] hover:bg-gradient-to-r hover:from-[#007bfc] hover:to-[#51b9ff] focus:outline-none ">
          <span class="font-medium text-lg">Update</span>
        </button>

        <button @click="uploadMultipleFiles" type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#007bfc] hover:bg-gradient-to-r hover:from-[#007bfc] hover:to-[#51b9ff] focus:outline-none ">
          <span class="font-medium text-lg">Add</span>
        </button>

        <button @click="$router.push('/admin/dashboard/')" type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#fc1d00] hover:bg-gradient-to-r hover:from-[#fc1d00] hover:to-[#ff6b51] focus:outline-none ">
          <span class="font-medium text-lg">Cancel</span>
        </button>
      </div>
    </div>


    
 
  </div>
</div>
</template>
