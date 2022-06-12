<template>
    <div>
        <!-- <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
            <el-menu-item index="1">
                <el-icon-menu />
                <span>导航1</span>
            </el-menu-item>
            <el-menu-item index="2">
                <el-icon-menu />
                <span>导航2</span>
            </el-menu-item>
        </el-menu> -->
        <m-menu :data="menuData" :router="true" :default-active="$route.path" :collapse="isCollapse"></m-menu>
    </div>
</template>

<script  lang="ts" setup>
let props = defineProps({
    isCollapse: {
        type: Boolean,
        default: false
    }
})
let emits = defineEmits(['update:isCollapse'])
let toggle = () => {
    emits('update:isCollapse', props.isCollapse)
}

let menuData = [
    {
        name: '首页',
        icon: 'HomeFilled',
        index: '/'
    },
    {
        name: '菜单组件',
        icon: 'Grid',
        index: '/menu',
        children: [
            {
               name: '一级或二级菜单',
                icon: 'Grid',
                index: '/menu', 
            },
            {
               name: '无线层级菜单',
                icon: 'Grid',
                index: '/infiniteMenu', 
            }
        ]
    },
    {
        name: '选择图标',
        icon: 'Select',
        index: '/chooseIcon'
    },
    {
        name: '选择省市区',
        icon: 'DeleteLocation',
        index: '/chooseArea'
    },
    {
        name: '趋势标记',
        icon: 'Flag',
        index: '/trend'
    },
    {
        name: '通知菜单',
        icon: 'Bell',
        index: '/notification'
    },
    {
        name: '动画进度条',
        icon: 'PieChart',
        index: '/progress'
    }
]
</script>

<style lang="less" scoped>

svg {
    width: 1em;
    height: 1em;
  }
</style>