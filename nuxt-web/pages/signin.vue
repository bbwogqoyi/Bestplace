<script setup>
import { ref } from 'vue'
import axios from "axios";

definePageMeta({
  layout: "template-only",
});

const account = ref({});

function signIn() {
  axios.post('http://api.bestplace.co.za/accounts/signin', account.value)
  .then((res) => {
    if(res.status == 200) {
      console.log('response:'+ JSON.stringify(res.data))
      localStorage.setItem('user', JSON.stringify(res.data));
      document.cookie=`user=${JSON.stringify(res.data)}; path=/`
      navigateTo({path: '/'});
    }
  })
}
</script>

<template>
  <div class="min-h-screen bg-no-repeat bg-cover bg-center bg-img">
  	<div class="flex justify-end">
  		<div class="bg-white min-h-screen w-full md:w-1/2 flex justify-center items-center">
  			<div class=" w-9/12 lg:w-3/5">
					<div>
						<span class="text-sm text-gray-900">Welcome back</span>
						<h1 class="text-2xl font-bold">Sign in to your account</h1>
					</div>
          <div class="my-3">
						<label class="block text-md mb-2" for="email">Email</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="Email" v-model="account.email">
          </div>
					<div class="my-3">
						<label class="block text-md mb-2" for="password">Password</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="Password" v-model="account.password">
          </div>
					<div class="flex justify-between">
						<div>
							<input class="cursor-pointer" type="checkbox" name="rememberme">
							<span class="text-sm pl-1">Remember Me</span>
						</div>
            <router-link to="/" class="cursor-pointer text-sm text-blue-700 hover:underline font-semibold">
              Forgot password?
            </router-link>
					</div>
					<div class="">
						<button @click="signIn" class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Sign In</button>
					</div>

          <div class="block">
						<div class="flex space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
              <img class="h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="GOOGLE">
							<button >Or sign-in with google</button>
						</div>
					</div>

          <div class="mt-2 flex justify-between items-center">
            <p class="">Don't have an account?</p>
            <router-link to="/signup" class="cursor-pointer text-sm text-blue-600 font-semibold">Sign up today</router-link>
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