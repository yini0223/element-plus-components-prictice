// 全局注册组件
import {App} from "vue"
import chooseArea from "./chooseArea/index.vue"
import chooseIcon from "./chooseIcon/index.vue"
import trend from "./trend/index.vue"
import notification from "./notification/index.vue"
import list from "./list/index.vue"
import menu from "./menu/index.vue"
import infiniteMenu from "./menu/menu"
import progress from "./progress/index.vue"
import chooseTime from "./chooseTime/index.vue"
import chooseDate from "./chooseDate/index.vue"
import chooseCity from "./chooseCity/index.vue"

// 引入要注册的组件
let components = [
    {
        name: 'choose-area',
        component: chooseArea
    },
    {
        name: 'choose-icon',
        component: chooseIcon
    },
    {
        name:'trend',
        component:trend
    },
    {
        name:'notification',
        component:notification
    },
    {
        name:'m-list',
        component:list
    },
    {
        name:'m-menu',
        component:menu
    },
    {
        name:'m-infinite-menu',
        component:infiniteMenu
    },
    {
        name:'m-progress',
        component:progress
    },
    {
        name:'choose-time',
        component:chooseTime
    },
    {
        name:'choose-date',
        component:chooseDate
    },
    {
        name:'choose-city',
        component:chooseCity
    },
]

export default {
    install(app:App){
        components.forEach(item => {
            app.component(item.name, item.component);
        })
    }
}