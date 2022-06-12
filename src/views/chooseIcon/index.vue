<template>
    <div>
        <choose-icon title="选择图标" v-model:visible="visible">
            选择图标
        </choose-icon>
    </div>
</template>

<script  lang="ts" setup>
// import chooseIcon from "../../components/chooseIcon/index.vue"
import {ref} from "vue"
let visible = ref(false)
</script>

<style lang="less" scoped>

</style>