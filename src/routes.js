import Vue from 'vue'
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/login.vue';
import ProductDetail from './components/productDetail.vue';
import Products from './components/products.vue';
import NotFound from './components/NotFound.vue';
import ReviewCreate from './components/reviewCreate.vue';
import SignUp from './components/signUp.vue';
import Orders from './components/orders.vue';
import store from './store.js';
Vue.use(VueRouter);

const routes = [
{path:'/',component: Home},
{path:'/account',component: Account, beforeEnter(to, from, next){
    if(store.state.token){next()}
    else{next('/signin')}
}},
{path:'/signin',component: Login},
{path:'/products',component: Products},
{path: '/products', component: Orders},
{path:'/products/:pk',component: ProductDetail,
children:[
    {path:'/review',component: ReviewCreate},
]},

{path:'/signup',component: SignUp},
{path:'/:invalidroute(.*)',component: NotFound},

]
export default new VueRouter ({mode: 'history', routes})