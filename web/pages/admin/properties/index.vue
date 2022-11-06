<script setup>
import { ref } from 'vue'
import axios from "axios";
const router = useRouter();

// vars for the image upload
let singleFile = null;

const propertyDetails = ref({});

function onSingleFileChange (event) {
  singleFile = event.target.files[0];
}

const uploadSingleFile = async () => {
  try {
    const data = new FormData();
    data.append('file', singleFile)
    await axios.post('https://api.bestplace.co.za/properties', data, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
  } catch(e) {
    throw e 
  }
}


const uploadMultipleFiles = function() {
  try {
    const data = new FormData();
  
    for(let i=0; (multipleFiles!=null && i<multipleFiles.length); i+=1) {
      data.append('files', multipleFiles[i])
    }
    // isActive.value = true;

    axios.post('https://api.bestplace.co.za/upload', data, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
    .then(function(res) {
      if(res.status === 202) {
        console.log('files\n'+JSON.stringify(res.data))
        persistPropertyInfo(res.data.files, res.data.filesDir);
      }
    })
  } catch(e) {
    // isActive.value = false;
    throw e 
  }
}

const persistPropertyInfo = function(files, filesDir) {
   try {
    const data = propertyDetails.value;
    data['images'] = files;
    data['imagesDir'] = filesDir;

    axios.post('https://api.bestplace.co.za/properties', data, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
    .then(function(res) {
      if(res.status === 201) {
        console.log(res.data._id);
        router.push('/admin/');
      }
    })
  } catch(e) {
    throw e 
  }
}

</script>

<template>
  <div>
    <PropertyForm :property="propertyDetails" />

    <div class="w-full bg-gray-100 py-2">
      <div class="w-full lg:w-4/5 mx-auto pb-10 bg-gray-100">
        <div class="py-3 text-right space-x-4">
          <!-- @click="$router.push('/admin/')" -->
          <button @click="isLoading = !isLoading" type="button" class="hidden inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#007bfc] hover:bg-gradient-to-r hover:from-[#007bfc] hover:to-[#51b9ff] focus:outline-none ">
            <span class="font-medium text-lg">Update</span>
          </button>

          <button @click="uploadMultipleFiles" type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#007bfc] hover:bg-gradient-to-r hover:from-[#007bfc] hover:to-[#51b9ff] focus:outline-none ">
            <span class="font-medium text-lg">Add</span>
          </button>

          <button @click="router.push('/admin')" type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#fc1d00] hover:bg-gradient-to-r hover:from-[#fc1d00] hover:to-[#ff6b51] focus:outline-none ">
            <span class="font-medium text-lg">Cancel</span>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>
