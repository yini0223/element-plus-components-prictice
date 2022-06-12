<template>
    <div>
        <!-- 选择城市 -->
        <choose-city @changeCity="changeCity" @changeProvince="changeProvince"></choose-city>
    </div>
</template>

<script lang="ts" setup>
// import {ref} from "vue"
let changeCity = (val) => {
    console.log('城市', val)
}

let changeProvince = (val) => {
    console.log('省份', val)
}

</script>

<style lang="less" scoped>

</style>