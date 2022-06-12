<template>
    <div style="display: flex;justify-content: space-around;">
        <div>
         <el-divider>默认数据键名</el-divider>

        <m-menu :data="menuData" :defaultActive="'1'" :router="false"></m-menu>

        </div>
        <div>
         <el-divider>自定义数据键名</el-divider>

            <m-menu 
          :data="menuData1" 
          :defaultActive="'1'" 
          :router="false"
          name="a"
          index="c"
          icon="b"
          children="d"
        ></m-menu>
        </div>
        

    </div>
</template>

<script setup lang="ts">
let menuData = [
    {
        name: '选择图标',
        icon: 'document',
        index: '1'
    },
    {
        name: '选择省市区',
        icon: 'document',
        index: '2'
    },
    {
        name: '趋势标记',
        icon: 'document',
        index: '3'
    }
]
let menuData1 = [
    {
        a: '选择图标',
        b: 'document',
        c: '/chooseIcon',
        d: [
            {
                a: '选择图标1-1',
                b: 'document',
                c: '/chooseIcon1-1',
            }
        ]
    },
    {
        a: '选择省市区',
        b: 'document',
        c: '/chooseArea'
    },
    {
        a: '趋势标记',
        b: 'document',
        c: '/trend'
    }
]
</script>

<style lang="less" scoped>

</style>