<script setup>
import { defineProps, ref, toRefs } from 'vue'
import axios from "axios";

const props = defineProps({
  isAuthenticated: Boolean,
  loggedInUser: Object,
  propertyId: String
});

const { loggedInUser, propertyId } = toRefs(props)
const newEnquiry = ref({});

function submitEnquiry(e) {
  e.preventDefault()

  let enquiryOptions = {}

  for(let key in newEnquiry.value) {
    if(key!='message') {
      enquiryOptions[key] = newEnquiry.value[key]
    }
  }

  let enquiry = { 
    'userId': loggedInUser.value.id,
    'propertyId': propertyId.value,
    'enquiryOptions': enquiryOptions, 
    'message': newEnquiry.value.message
  }

  axios.post('http://localhost:5001/enquiries', enquiry)
  .then((res) => {
    console.log('response:'+res.status)
    if(res.status == 201) navigateTo({path: '/'});
  })
}

</script>

<template>

<div class="flex dark:bg-gray-900 border shadow-md bg-white">
  <div class="container mx-auto" v-if="isAuthenticated">
    <div class="max-w-md mx-auto bg-white md:px-5 rounded-md shadow-sm">
      <div class="text-center">
        <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact</h1>
        <p class="text-gray-400 dark:text-gray-400">Fill up the form below to send us a message.</p>
      </div>
      <form @submit="submitEnquiry" class="m-7 space-y-4">
        <!-- Leads -->
        <div class="flex justify-between mb-6">
          <div>
            <input type="checkbox" name="name" id="name" placeholder="John Doe" v-model="newEnquiry.agent"/>
            <label for="name" class="ml-2 text-sm text-gray-600 dark:text-gray-400">Agent</label>
          </div>
          <div>
            <input type="checkbox" name="name" id="name" placeholder="John Doe" v-model="newEnquiry.betterBond"/>
            <label for="name" class="ml-2 text-sm text-gray-600 dark:text-gray-400">Better Bond</label>
          </div>
          <div>
            <input type="checkbox" name="name" id="name" placeholder="John Doe" v-model="newEnquiry.contractor"/>
            <label for="name" class="ml-2 text-sm text-gray-600 dark:text-gray-400">Contractor</label>
          </div>
        </div>

        <!-- Contact info -->
        <div class="space-y-1">
          <div class="flex justify-between">
            <label for="name" class="text-sm text-gray-600 dark:text-gray-400">Full Name:</label>
            <span class="text-gray-700 dark:text-gray-400">{{ `${loggedInUser.firstname} ${loggedInUser.lastname}` }}</span>
            <!-- <input type="text" name="name" id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" /> -->
          </div>
          <div class="flex justify-between">
            <label for="email" class="text-sm text-gray-600 dark:text-gray-400">Email Address:</label>
            <span class="text-gray-700 dark:text-gray-400">{{ loggedInUser.email }}</span>
            <!-- <input type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" /> -->
          </div>
          <div class="flex justify-between">
            <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Phone Number:</label>
            <span class="text-gray-700 dark:text-gray-400">{{ loggedInUser.phone || "None" }}</span>
            <!-- <input type="text" name="phone" id="phone" placeholder="+27 (72) 123-4567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" /> -->
          </div>
        </div>

        <!-- Message & Submit Button -->
        <div class="space-y-1">
          <div>
            <label for="message" class="block my-3 text-xl text-center font-semibold text-gray-700 dark:text-gray-200">Your Message</label>
            <textarea rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="newEnquiry.message" required ></textarea>
          </div>
          <div>
            <button type="submit" class="w-full px-3 py-3 rounded-md text-white bg-[#007bfc] bg-gradient-to-r hover:from-[#007bfc] hover:to-[#51b9ff] focus:outline-none" >Send Message</button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="container mx-auto max-w-md my-6 bg-white md:px-5" v-if="!isAuthenticated">
    <p class="text-2xl pb-3 font-semibold text-center">Please login to submit an enquiry</p>
    <div class="space-y-2 mt-4">
      <div class="flex justify-between">
        <p class="">Don't have an account?</p>
        <router-link to="/signup" class="cursor-pointer text-sm text-blue-600 font-semibold">Sign up today</router-link>
      </div>
      <div class="flex justify-between">
        <p class="">Already have an account?</p>
        <router-link to="/signin" class="cursor-pointer text-sm text-blue-600 font-semibold">Sign In</router-link>
      </div>
    </div>
  </div>
</div>
</template>

