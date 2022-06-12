<template>
    <div>
        <!-- progress -->
        <el-progress :percentage="p" v-bind="$attrs"/>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

let props = defineProps({
    percentage: {
        type: Number,
        default: 0
    },
    // 进度条是否动态加载
    isAnimation: {
        type: Boolean,
        default: false
    },
    // 动画加载时间
    animarionTime: {
        type: Number,
        default: 3000
    }
})

let p = ref(0)

onMounted(() => {
    if(props.isAnimation) {
        //多久加载一次
        let t = Math.ceil(props.time / props.percentage);
        let timer = null;
        timer = setInterval(() => {
            p.value += 1;
            if(p.value >= props.percentage) {
                p.value = props.percentage;
                clearInterval(timer);
            }
        }, t)
    }else {
        p.value = props.percentage;
    }
})
</script>

<style lang="less" scoped>

</style>