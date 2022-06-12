<script setup>
import { ref } from 'vue'


</script>

<template>
  <div class="min-h-screen bg-no-repeat bg-cover bg-center bg-img">
  	<div class="flex justify-end">
  		<div class="bg-white min-h-screen w-full md:w-1/2 flex justify-center items-center">
  			<div class=" w-9/12 lg:w-3/5">
					<div>
						<h1 class="text-2xl font-bold">Forgot Your Password?</h1>
            <p class="text-base mt-2">
              We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!
            </p>
					</div>
          <div class="my-3">
						<label class="block text-md mb-2" for="email">Email</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="Email">
          </div>
					<div class="">
						<button class="mt-4 mb-3 w-full bg-red-500 hover:bg-red-400 text-white py-2 rounded-md transition duration-100">Reset Password</button>
					</div>

          <div class="mt-1 flex justify-between items-center">
            <p class="">Already have an account?</p>
            <router-link to="/signin" class="cursor-pointer text-sm text-blue-600">Sign In</router-link>
          </div>

          <div class="mt-2 flex justify-between items-center">
            <p class="">Don't have an account?</p>
            <router-link to="/signup" class="cursor-pointer text-sm text-blue-600">Sign up today</router-link>
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