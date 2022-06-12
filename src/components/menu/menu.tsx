import { defineComponent, PropType } from "vue";
// import { MenuItem } from "../../components/menu/type";
import { toLine } from "../../utils";
import * as Icons from "@element-plus/icons-vue"
import './menu.less'

export default defineComponent({
    props: {
        // 菜单数据
        data: {
            type: Array as PropType<any[]>,
            required: true
        },
        // 默认激活菜单
        defaultActive: {
            type: String,
            default: ""
        },
        // 是否启用 vue-router 模式
        router: {
            type: Boolean,
            default: false
        },
        // 自定义字段名
    name: {
        type: String,
        default: 'name'
    },
    index: {
        type: String,
        default: 'index'
    },
    icon: {
        type: String,
        default: 'icon'
    },
    children: {
        type: String,
        default: 'children'
    }
    },

    
    setup(props, ctx){

        let renderMenu = (data:any[]) => {
            return data.map((item:any) => {
                // item.i = `el-icon-${toLine(item[props.icon]!)}`;
                item.i = (Icons as any)[item[props.icon]!];


                let slots = {
                    title: () => {
                        return<>
                            <item.i />
                            <span>{item[props.name]}</span>
                        </>
                    }
                }

                if(item[props.children] && item[props.children].length){
                    return (
                        <el-sub-menu index={item[props.index]} v-slots={slots}>
                            {renderMenu(item[props.children])}
                        </el-sub-menu>
                    )
                }
                return(
                    <el-menu-item index={item[props.index]}>
                         <item.i />
                        <span>{item[props.name]}</span>
                    </el-menu-item>
                )
            })
        }
        return () => {
            return (
                <el-menu default-active={props.defaultActive} router={props.router}>
                    {renderMenu(props.data)}
                </el-menu>
            )
        }
    }
})