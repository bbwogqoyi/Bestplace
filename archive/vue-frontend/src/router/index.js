import { createRouter, createWebHistory } from "vue-router";

import SignInForm from '../components/auth/SignInForm.vue'
import SignUpForm from '../components/auth/SignUpForm.vue'
import ForgotPassword from '../components/auth/ForgotPassword.vue'

import Home from '../components/Home.vue'
import PropertyOverview from '../components/PropertyOverview.vue'

import AdminSignInForm from '../components/auth/AdminSignInForm.vue'
import Dashboard from '../components/admin/Dashboard.vue'
import AddNewProperty from '../components/admin/AddNewProperty.vue'

import Enquiries from '../components/admin/Enquiries.vue'
import PropertyListings from '../components/admin/PropertyListings.vue'
import FormLayouts from '../components/admin/FormLayouts.vue'
import ViewEnquiry from '../components/admin/ViewEnquiry.vue'


const routes = [
  { path: '/', name:"Home", component: Home },
  { path: '/signin', name:"SignIn", component: SignInForm },
  { path: '/signup', name:"SignUp", component: SignUpForm },
  { path: '/reset', name:"ResetPwd", component: ForgotPassword },

  { path: '/property', name:"Property", component: PropertyOverview },
  { path: '/demo', component: FormLayouts },

  { path: '/admin/dashboard/:activeTab?', name:"Dashboard", component: Dashboard, props: true },
  { path: '/admin/dashboard/view/enquiry/:index', component: ViewEnquiry, props: true },
  { path: '/admin/dashboard/property/new', component: AddNewProperty },
  { path: '/admin', component: AdminSignInForm, children : [
      { path: 'user', component: Dashboard, },
      { path: 'property', component: Dashboard, },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;