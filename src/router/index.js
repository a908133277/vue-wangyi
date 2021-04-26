import VueRouter from 'vue-router'

const  Category = ()=>import('./../views/Category.vue')
const  Goods = ()=>import('./../views/Goods.vue')
const  Details = ()=>import('./../views/Details.vue')
const  Home = ()=>import('./../views/Home.vue')
const  About = ()=>import('./../views/About.vue')
const  Car = ()=>import('./../views/Car.vue')
const Error = ()=>import('./../views/Error.vue')
const routes = [
    {
        path : '/category',
        name :'category',
        component : Category
    },
    {
        path :'/home',
        name:'home',
        component : Home
    },
    {
        path :'/car',
        name:'car',
        component :Car
    }
    ,
    {
        path :'/about',
        name:'about',
        component :About
    },
    {
        path :'/goods',
        name:'goods',
        component :Goods
    },
    {
        path:'/details',
        name:'details',
        component: Details
    },
    {
        path:'/error',
        component: Error
    },
    {
        path:'/',
        redirect: '/home'
    }
]
const router = new VueRouter({
    mode: 'history',
    routes, 
})
export default router