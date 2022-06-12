<template>
  <el-popover v-model:visible="visible" placement="bottom-start" :width="430" trigger="click">
    <template #reference>
      <div class="result" @click="visible = true">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{ 'rotate180': visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="contanair">
      <el-row>
        <el-col :span="9">
          <el-radio-group v-model="radio">
            <el-radio-button label="按城市" />
            <el-radio-button label="按省份" />
          </el-radio-group>
        </el-col>
        <el-col :offset="1" :span="14">
          <el-select 
          @change="changeSelect"
            placeholder="请搜索城市"
            v-model="selectValue"
            filterable
            clearable
            :filter-method="filterMethod">
            <el-option
              v-for="item in options"
              :key="item.id" 
              :label="item.name" 
              :value="item.id"
            />
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radio == '按城市'">
        <div class="city">
          <div class="city-item" @click="clickChat(item)" v-for="(item, index) in Object.keys(cities)" :key="index">{{item}}</div>
        </div>
        <el-scrollbar max-height="300px">
          <div class="city-box">
            <div class="box-item" v-for="(item, index) in Object.keys(cities)" :key="index" :id="item">
              <div class="box-item-left">{{item}}:</div>
              <div class="box-item-right">
                <div
                  class="item-right-item"
                  v-for="(item1) in cities[item]"
                  :key="item1.id"
                  @click="clickItem(item1)"
                >{{item1.name}}</div>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </template>
      
      <template v-else>
        <div class="province">
          <div
            class="province-item"
            v-for="(item, index) in Object.keys(provinces)"
            :key="index"
            @click="clickChat(item)"
          >{{ item }}</div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(item, index) in Object.values(provinces)" :key="index">
            <template v-for="(item1, index1) in item" :key="index1">
              <el-row style="margin-bottom: 10px;" :id="item1.id">
                <el-col :span="3">{{ item1.name }}:</el-col>
                <el-col :span="21" class="province-name">
                  <div
                    class="province-name-item"
                    v-for="(item2, index2) in item1.data"
                    :key="index2"
                  >
                    <div @click="clickProvince(item2)">{{ item2 }}</div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref,onMounted } from "vue";
import city from "./lib/city";
import { CityItem } from "./type"
import province from './lib/province.json'


// 默认城市
let result = ref<string>("请选择");
// 控制弹出层的显示
let visible = ref<boolean>(false);

let radio = ref<string>("按城市");

// 下拉框显示城市的数据
let options = ref<City[]>([])

// 选中的下拉城市
let selectValue = ref<string>("");

// 按城市的城市数据
let cities = ref(city.cities);
// 所有省份的数据
let provinces = ref(province)
// 所有的城市数据
let allCity = ref<City[]>([])

// 分发事件
let emits = defineEmits(['changeCity', 'changeProvince'])

// 点击每个城市
let clickItem = (item: City) => {
  // 给结果赋值
  result.value = item.name
  // 关闭弹出层
  visible.value = false
  emits('changeCity', item)
}

let clickProvince = (item:string ) => {
  // 给结果赋值
  result.value = item
  // 关闭弹出层
  visible.value = false
  emits('changeProvince', item)
}

// 点击城市字母
let clickChat = (item:string) => {
  let el = document.getElementById(item);
  // scrollIntoView会滚动元素的父容器，元素的顶端将和其所在滚动区的可视区域的顶端对齐
  if(el) el.scrollIntoView()
}

// 自定义搜索过滤
let filterMethod = (val: string) => {
  let values = Object.values(cities.value).flat(2)
  if (val === '') {
    options.value = values
  } else {
    if (radio.value === '按城市') {
      // 中文和拼音一起过滤
      options.value = values.filter(item => {
        return item.name.includes(val) || item.spell.includes(val)
      })
    } else {
      // 中文过滤
      options.value = values.filter(item => {
        return item.name.includes(val)
      })
    }
  }
}

// 下拉框选择
let changeSelect = (val: number) => {
  console.log(val, '1111111')
  if(val) {
    let city = allCity.value.find(item => item.id === val)!
    result.value = city.name
    if (radio.value === '按城市') {
      emits('changeCity', city)
    } else {
      emits('changeProvince', city.name)
    }
  }else {
    result.value = '请选择'

  }
  
}
onMounted(() => {
  // 获取下拉框的城市数据
  let values = Object.values(cities.value).flat(2)
  allCity.value = values
  options.value = values
})
</script>

<style lang="less" scoped>
.result {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
}
.rotate180 {
  transform: rotate(180deg);
}
svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 4px;
  transition: all 0.25s linear;
}
.contanair {
  padding: 6px;
}
.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    border: 1px solid #e5e5e5;
    margin-bottom: 8px;
      cursor: pointer;

  }
}
.city-box {
  // margin-bottom: 20px;
  padding-top: 10px;
  .box-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    &-left {
      width: 30px;
    }
    &-right {
      flex: 1;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
    .item-right-item {
      padding: 3px 6px;
      margin-right: 8px;
      border: 1px solid #e5e5e5;
      margin-bottom: 8px;
      cursor: pointer;
    }
  }
}
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .city-name-item,
  .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
}   
</style>