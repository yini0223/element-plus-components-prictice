<template>
    <div class="common-layout">
        <el-container>

            <el-header>
                <nav-header></nav-header>
            </el-header>
            <el-container>
                <el-aside width="auto">
                    <nav-menu v-model:isCollapse="isCollapse"></nav-menu>
                </el-aside>
                <el-main>
                    <span @click="toggleMenu" class="expand-icon">
                        <el-icon-expand v-if="isCollapse"></el-icon-expand>
                        <el-icon-fold v-else></el-icon-fold>
                    </span>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import NavHeader from "../components/navHeader.vue";
import navMenu from "../components/navMenu.vue"
let isCollapse = ref(false);
let toggleMenu = () => {
    isCollapse.value = !isCollapse.value
}
</script>

<style lang="less" scoped>
.expand-icon {
    svg {
        width: 1em;
        height: 1em;
    }
}
</style>