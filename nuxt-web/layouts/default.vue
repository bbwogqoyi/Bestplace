<template>
  <div class="flex flex-col h-screen">
    <div class="flex-grow">
      <NavBar/>
      <slot/>
    </div>
    <div class="flex-shrink-0">
      <Footer />
    </div>
  </div>
</template>