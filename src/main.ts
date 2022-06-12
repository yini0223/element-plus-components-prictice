import { createApp } from 'vue'
import router from "./router/index"
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine} from './utils/index'
import customComponents from "./components/index"

const app = createApp(App)

//全局注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    
    app.component(`el-icon-${toLine(key)}`, component)
}

  app.use(router)
  app.use(ElementPlus)
  app.use(customComponents)

app.mount('#app')
