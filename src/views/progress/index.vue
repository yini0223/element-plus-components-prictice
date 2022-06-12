<template>
    <div>
        <m-progress :percentage="30" isAnimation></m-progress>
        <m-progress :percentage="30" status="success"></m-progress>
        <m-progress
            :text-inside="true"
            :stroke-width="24"
            :percentage="100"
            status="success"
            isAnimation
         />

         <m-progress type="circle" :percentage="25" />
         <m-progress type="circle" :percentage="55" isAnimation />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>

</style>