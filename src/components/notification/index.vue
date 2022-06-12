<template>
    <div>
        <el-popover
            placement="bottom"
            :width="300"
            :disabled="isDisabled"
            trigger="click"
        >
            <!-- 弹出框的内容 -->
            <template #default>
                <!-- 采用插槽实现内容自定义 -->
                <slot></slot>
            </template>
            <template #reference>
              <el-badge :style="{cursor: !isDisabled ? 'pointer': 'auto'}" :value="value" class="item" :is-dot="isDot" :max="maxValue">
                <component :is="`el-icon-${toLine(icon)}`"></component>
              </el-badge>
            </template>
        </el-popover>
        

    </div>
</template>

<script lang="ts" setup>
import {toLine} from "../../utils/index"
let props = defineProps({
    icon: {
        type: String,
        default: 'Bell'
    },
    value: {
        type: [String, Number],
        default: null
    },
    isDot: {
        type: Boolean,
        default: false
    },
    maxValue: {
        type: Number
    },
    // 是否弹框
    isDisabled: {
        type: Boolean,
        default: true
    }
})
</script>
<style lang='less' scoped>
</style>