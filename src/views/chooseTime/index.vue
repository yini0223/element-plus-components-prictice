<template>
    <div>
        <el-divider>选择时间</el-divider>
        <choose-time 
        @startChange="startChange" 
        @endChange="endChange"
        :startOptions="startOptions"
        :endOptions="endOptions"
        ></choose-time>

        <el-divider>选择日期</el-divider>
        <choose-date
          @startChange="startDateChange"
          @endChange="endDateChange"
          :startDateOptions="startDateOptions"
          :endDateOptions="endDateOptions"
        ></choose-date>
    </div>
</template>

<script lang="ts" setup>
interface endValue {
    startTime: string,
    endTime: string
}

let startChange = (val:string) => {
    console.log(val, '开始')
}
let endChange = (val:endValue) => {
    console.log(val, '结束')
}

let startOptions = {
    size: 'small'
}

let endOptions = {
    size: 'small'

}


let startDateChange = (val:string) => {
    console.log(val, '开始日期')
}
let endDateChange = (val:endValue) => {
    console.log(val, '结束日期')
}


let startDateOptions = {
    size: 'small',
    // 'value-format': 'YYYY-MM-DD hh:MM:ss'
}

let endDateOptions = {
    size: 'small',
    // 'value-format': 'YYYY-MM-DD hh:MM:ss'


}

</script>

<style lang="less" scoped>

</style>