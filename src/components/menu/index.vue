<template>
    <div>
        <!-- 
            该组件用于一级或二级的导航菜单
         -->
        <el-menu
            :default-active="defaultActive"
            :router="router"
            v-bind="$attrs"
            class="el-menu-vertical-demo"
        >
        <!-- 
            v-bind="$attrs"
            $attrs 接收除了props定义的数据以外的父组件传得数据
         -->
        <template v-for="(item, i) in data" :key="i">
            <el-menu-item 
                v-if="!item[children] || !item[children].length"
                :index="item[index]"
            >
                <component :is="`el-icon-${toLine(item[icon])}`"></component>
                <span>{{item[name]}}</span>
            </el-menu-item>
            <el-sub-menu :index="item[index]" v-if="item[children] && item[children].length">
                <template #title>
                    <component :is="`el-icon-${toLine(item[icon])}`"></component>
                    <span>{{item[name]}}</span>
                </template>
                <el-menu-item 
                    v-for="(item1, index1) in item[children]" 
                    :key="index1"
                    :index="item1[index]"
                >
                    <component :is="`el-icon-${toLine(item1[icon])}`"></component>
                    <span>{{ item1[name] }}</span>
                </el-menu-item>
            </el-sub-menu>
        </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue"
// import { MenuItem } from "./type.ts"  自定义字段名就不好定义字段,适合字段名固定的
import { toLine } from "../../utils/index"

let props = defineProps({
    // 菜单数据
    data: {
        // type: Array as PropType<MenuItem[]>,
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
})

console.log(props.data)
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
svg {
    width: 1em;
    height: 1em;
    margin-right: 4px;
  }
</style>