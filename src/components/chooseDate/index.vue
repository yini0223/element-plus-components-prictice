<template>
    <div style="display:flex">
        <!-- 选择日期 -->
        <div style="margin-right: 10px">
            <el-date-picker
                v-model="startDate"
                type="date"
                :disabled-date="startDateDisabled"
                :placeholder="startDatePlaceholder"
                v-bind="$attrs.startDateOptions"
            />
        </div>
        <div>
            <el-date-picker
                v-model="endDate"
                type="date"
                :placeholder="endDatePlaceholder"
                :disabled="endDateDisabled"
                :disabled-date="endDateDisabledDate"
                v-bind="$attrs.endDateOptions"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

let props = defineProps({
    startDatePlaceholder: {
        type: String,
        default: '开始日期'
    },
    endDatePlaceholder: {
        type: String,
        default: '开始日期'
    },
    // 是否禁用今天之前的日期
    disabledToday: {
        type: Boolean,
        default: true
    }
})

let startDate = ref<Date | null>(null)
let endDate = ref<Date | null>(null)

let endDateDisabled = ref<boolean>(true)

let startDateDisabled = ((time:Date) => {
    return time.getTime() < Date.now() - 60 * 60 * 1000 * 24
})

let endDateDisabledDate = (time:Date) => {
    if(startDate.value) {
        return time.getTime() < startDate.value.getTime()
    }
}

let emits = defineEmits(['startChange', 'endChange'])

watch(() => startDate.value, (val) => {
    if(val){
        endDateDisabled.value = false;
        emits('startChange', val)
    }else {
        endDate.value = null;
        endDateDisabled.value = true;
    }
})

watch(() => endDate.value, (val) => {
    if(val) {
        emits('endChange', {
            startDate: startDate.value,
            endDate: val
        })

    }
})

</script>

<style lang="less" scoped>

</style>