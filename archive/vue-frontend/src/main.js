import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import store from './store'
import router from './router'

// router.beforeEach((to, from, next) => {
//   const isAuthRoute = to.name == 'SignIn' || to.name == 'SignUp'
//   if (!isAuthRoute && ! store.state.isAuthenticated){
//     const nextRoute = to.name == 'SignUp' ? to.name : 'SignIn'
//     next({ name: nextRoute })
//   }
//   else next()

//   // const canAccess = store.state.isAuthenticated;
//   // if (!canAccess) return '/signin'
// })

createApp(App)
.use(store)
.use(router)
.mount('#app');
