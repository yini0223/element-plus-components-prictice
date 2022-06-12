<template>
    <div class="">
        <h2>通知菜单</h2>        
        <el-divider>默认显示</el-divider>
        <notification value="30"></notification>
        <notification :value="80" :maxValue="50"></notification>

        <el-divider>自定义图标</el-divider>
        <notification value="30" icon="ChatRound"></notification>

        <el-divider>显示小圆点</el-divider>
        <notification :is-dot="true"></notification>


        <el-divider>显示弹窗</el-divider>
        <notification value="30" :is-disabled="false">
            <m-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction"></m-list>
        </notification>

    </div>
</template>

<script lang="ts" setup>
import {list, actions} from "./data.ts"
// 点击那一条通知
let clickItem = (val:any) => {
    console.log(val)
}
// 点击操作
let clickAction = (val:any) => {
    console.log(val,'操作')

}
</script>
<style lang='less' scoped>
</style>