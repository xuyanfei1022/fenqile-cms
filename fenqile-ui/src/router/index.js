import Vue from 'vue'
import Router from 'vue-router'
import customerCon from "../components/customer/customer-con"
import editCustomer from "../pages/editCustomer"
import login from '../pages/login'
import home404 from '../pages/home404'
import lockScreen from '../pages/lockScreen'
import VueResource from 'vue-resource'
import info from '../pages/info'
import writeTable from '../pages/zxbd'
import email from '../pages/lnbox'
import echarts from '../pages/echarts'
import indexdata from '../pages/indexdata'
import productList from "../pages/productList"
import orderForm from "../pages/orderForm"
import editProduct from "../pages/editProduct"
import Pinformation from "../components/editProduct/information"
import price from "../components/editProduct/price"
import img from "../components/editProduct/img"
import fqlContentbodyRight from "../components/orderForm/fqlContentbodyRight"
import information from "../components/orderForm/information"
import payment from "../components/orderForm/payment"
import data from '../pages/tdata'
import basic from '../pages/basic'
import index from '../pages/index'
Vue.use(VueResource);
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      component:index,
      children:[
        {
          path:'data'  ,
          component:data
        },
        {
          path:'basic'  ,
          component:basic
        },
        {
          path: '',
          component:indexdata
        },
        {
          path: 'indexdata',
          component:indexdata
        },
        {
          path: 'customerCon',
          component: customerCon
        },
        {
          path: 'editCustomer',
          component: editCustomer
        },
        {
          path: 'info',
          component: info
        },
        {
          path: 'writeTable',
          component: writeTable
        },
        {
          path: 'email',
          component: email
        },
        {
          path: 'echarts',
          component:echarts
        },
        {
          path: 'productList',
          component:productList
        },
        {
          path: 'orderForm',
          component:orderForm,
          children:[
            {
              path: '',
              component:fqlContentbodyRight
            },
            {
              path: 'fqlContentbodyRight',
              component:fqlContentbodyRight
            },
            {
              path: 'information',
              component:information
            },
            {
              path: 'payment',
              component:payment
            }
          ]
        },
        {
          path: 'editProduct',
          component: editProduct,
          children:[
            {
              path: '',
              component:Pinformation
            },
            {
              path: 'information',
              component:Pinformation
            },
            {
              path: 'price',
              component: price
            },
            {
              path: 'img',
              component: img
            }

          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home404',
      component: home404
    },
    {
      path: '/lockScreen',
      component: lockScreen
    }

  ]
})
