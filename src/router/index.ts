import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"
// import home from '../views/home.vue'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../views/home.vue'),
        children: [
            {
                path: '/chooseIcon',
                component: () => import('../views/chooseIcon/index.vue'),

            },
            {
                path: '/chooseArea',
                component: () => import('../views/chooseArea/index.vue'),

            },
            {
                path: '/trend',
                component: () => import('../views/trend/index.vue'),

            },
            {
                path: '/notification',
                component: () => import('../views/notification/index.vue'),

            },
            {
                path: '/menu',
                component: () => import('../views/menu/index.vue'),

            },
            {
                path: '/infiniteMenu',
                component: () => import('../views/infiniteMenu/index.vue'),

            },
            {
                path: '/progress',
                component: () => import('../views/progress/index.vue'),

            },
            {
                path: '/chooseTime',
                component: () => import('../views/chooseTime/index.vue'),

            },
            {
                path: '/chooseCity',
                component: () => import('../views/chooseCity/index.vue'),

            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
  })
  
  export default router