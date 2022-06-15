<script setup>
import { ref } from 'vue'
import axios from "axios";

definePageMeta({
  layout: "template-only",
});

const newAccount = ref({});

function signUp() {
  console.log(JSON.stringify(newAccount.value))
  axios.post('https://api.bestplace.co.za/accounts', newAccount.value, {
    headers: { 'Access-Control-Allow-Origin': '*' }
  })
  .then((res) => {
    console.log('response:'+res.status)
    if(res.status == 201) navigateTo({path: '/signin'});
  })
}
</script>

<template>
  <div class="min-h-screen bg-no-repeat bg-cover bg-center bg-img">
  	<div class="flex justify-end">
  		<div class="bg-white min-h-screen w-full md:w-1/2 flex justify-center items-center">
  			<div class="w-9/12 lg:w-3/5">
					<div>
						<span class="text-sm text-gray-900">Welcome back</span>
						<h1 class="text-2xl font-bold">Sign up for an account</h1>
					</div>
          <div class="my-3">
						<label class="block text-md mb-2" for="email">Firstname</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="firstname" placeholder="Firstname" v-model="newAccount.firstname">
          </div>
          <div class="my-3">
						<label class="block text-md mb-2" for="email">Lastname</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="lastname" placeholder="Lastname" v-model="newAccount.lastname">
          </div>
          <div class="my-3">
						<label class="block text-md mb-2" for="email">Email</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="Email" v-model="newAccount.email">
          </div>
          <div class="my-3">
						<label class="block text-md mb-2" for="phone">Phone Number</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="phone" placeholder="Phone Number" v-model="newAccount.phone">
          </div>
					<div class="my-3">
						<label class="block text-md mb-2" for="password">Password</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="Password" v-model="newAccount.password">
          </div>
					<div class="block">
						<button @click="signUp" class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Sign Up</button>
					</div>

          <div class="hidden">
						<div class="flex space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
              <img class="h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="GOOGLE">
							<button >Or sign-in with google</button>
						</div>
					</div>

          <div class="mt-2 flex justify-between items-center mx-1">
            <p class="">Already have an account?</p>
            <router-link to="/signin" class="cursor-pointer text-sm text-blue-600 font-semibold">Sign In</router-link>
          </div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<style>
.bg-img {
  background-image: url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
}
</style>