<template>
    <div>
        <choose-area @change="changeArea"></choose-area>
    </div>
</template>
<script lang="ts" setup>
// import chooseArea from "../../components/chooseArea/index.vue"
let changeArea = (val) => {
    console.log(val)
}
</script>
<style lang="less" scoped>

</style>