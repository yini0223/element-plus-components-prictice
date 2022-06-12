<template>
    <div>
        <!-- 省市区选择 -->
        <el-select clearable v-model="province" placeholder="请选择省份">
            <el-option
            v-for="item in areas"
            :key="item.code"
            :label="item.name"
            :value="item.code"
            />
        </el-select>
        <el-select clearable :disabled="!province" style="margin: 0 10px" v-model="city"  placeholder="请选择城市">
            <el-option
            v-for="item in selectCity"
            :key="item.code"
            :label="item.name"
            :value="item.code"
            />
        </el-select>
        <el-select clearable :disabled="!province || !city" v-model="area" placeholder="请选择区域">
            <el-option
            v-for="item in selectArea"
            :key="item.code"
            :label="item.name"
            :value="item.code"
            />
        </el-select>
    </div>
</template>
<script lang="ts" setup>
import {ref, watch} from "vue"
import allArea from "./china.json"

export interface AreaItem {
    name: string,
    code: string,
    children?:AreaItem[]
}

export interface Data {
    name: string,
    code: string,
}

// console.log(allArea)
// 省份数据
let province = ref<string>('')

// 城市数据
let city = ref<string>('')

// 区域数据
let area = ref<string>('')

// 所有数据
let areas = ref(allArea);
// let options = ref<array>([])

let selectCity = ref<AreaItem[]>([])
let selectArea = ref<AreaItem[]>([])

let emites = defineEmits(['change'])

// 监听选择的省份变化
watch(() => province.value, (val) => {
    if(val) {
        // 根据选择的省份code，找到它的下属城市数据
        let provinces = areas.value.find((item => item.code === province.value))!.children!;
        selectCity.value = provinces;
    }
    city.value = ""
    area.value = ""
})

// 监听城市变化
watch(() => city.value, (val) => {
    if(val) {
        let cities = selectCity.value.find((item => item.code === city.value))!.children!;
        // console.log(provinces)
        selectArea.value = cities;
    }
    area.value = ""
})

// 监听省市区选择，触发父组件回调，拿到选择的省市区数据
watch(() => area.value, (val)=> {
    if(val) {
        let provinceData:Data = {
            code: province.value,
            name: province.value && allArea.find((item) => item.code === province.value)!.name
        }
        let cityData:Data = {
            code: city.value,
            name: city.value && selectCity.value.find((item) => item.code === city.value)!.name
        }
        let areaData:Data = {
            code: val,
            name: val && selectArea.value.find((item) => item.code === val)!.name
        }
        emites('change', {
            province: provinceData,
            city: cityData,
            area: areaData
        })
    }
})
</script>
<style lang="less" scoped>

</style>