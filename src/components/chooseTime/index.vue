<template>
  <div style="display: flex">
    <div>
      <el-time-select
        v-model="startTime"
        :max-time="endTime"
        class="mr-4"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      />
    </div>

    <div style="margin-left: 10px">
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="endTimeIsDisabled"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
let props = defineProps({
    // 开始时间占位内容
    startPlaceholder: {
        type: String,
        default: '开始时间'
    },
    // 默认开始时间的可选开始时间
    startTimeStart: {
       type: String,
        default: '00:00' 
    },
     // 默认开始时间的可选开始时间
    startTimeEnd: {
       type: String,
        default: '23:59' 
    },
    // 开始时间步进
    startStep: {
        type: String,
        default: '00:30' 
    },
    // 默认结束时间的可选开始时间
    endTimeStart: {
       type: String,
        default: '00:00' 
    },
    // 默认结束时间的可选结束时间
    endTimeEnd: {
       type: String,
        default: '23:59' 
    },
    // 结束时间步进
    endStep: {
        type: String,
        default: '00:15' 
    },
    // 结束时间展位内容
    endPlaceholder: {
        type: String,
        default: '结束时间'
    }
})

let startTime = ref<string>("");
let endTime = ref<string>("");
// 是否禁用结束时间
let endTimeIsDisabled = ref<boolean>(true)

// 定义监听事件
let emits = defineEmits(['startChange', 'endChange'])

//监听开始时间变化 
watch(() => startTime.value, (val) => {
    if(val === '') {
        endTime.value = '';
        endTimeIsDisabled.value = true;
    }else {
        // 选择开始时间才能选择结束时间
        endTimeIsDisabled.value = false;

        // 出发监听回调
        emits('startChange', val)
    }
})

// 监听结束时间变化
watch(() => endTime.value, (val) => {
    // console.log('111111')
    if(val) {
        // 出发监听回调
        emits('endChange', {
            startTime: startTime.value,
            endTime: val
        })
    }
})

</script>

<style lang="less" scoped>
</style>