<template>
  <div class="trend">
      <!-- 趋势标记 -->
      
      <div class="trend-text" :style="{color: textColor}">
          <!-- 插槽方式 -->
          <!-- 判断是否以插槽的形式传值 -->
         <slot v-if="slot.default"></slot>
         <!-- 父子传参方式 -->
          <div v-else>{{text}}</div>
          
        </div>

      <div class="trend-icon">
          <component :is="`el-icon-${toLine(upIcon)}`" :style="{color: !reverseIconColor ? upIconColor : '00ff00'}" v-if="type === 'up'"></component>
          <component :is="`el-icon-${toLine(downIcon)}`" :style="{color: !reverseIconColor ? downIconColor: 'ff0000'}" v-if="type === 'down'"></component>
          <!-- <el-icon-arrowup :style="{color: !reverseIconColor ? upIconColor : '00ff00'}" v-if="type === 'up'" />
          <el-icon-arrowdown :style="{color: !reverseIconColor ? downIconColor: 'ff0000'}" v-if="type === 'down'" /> -->
      </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, computed} from "vue";
import { toLine } from "../../utils/index"

let props = defineProps({
    // 趋势标记，判断上升（up)还是下降（down）
    type: {
        type: String,
        default: 'up'
    },
    text: {
        type: String,
        default: ''
    },
    // 上升图标
    upIcon: {
        type: String,
        default: 'ArrowUp'
    },
    // 下降图标
    downIcon: {
        type: String,
        default: 'ArrowDown'
    },
    upIconColor: {
        type: String,
        default: '#ff0000'
    },
    downIconColor: {
        type: String,
        default: '#00ff00'
    },
    // 颜色反转标志，如果设置了想自定义则不能设置颜色反转；颜色反转即把up和down的默认颜色交换
    reverseIconColor: {
        type: Boolean,
        default: false
    },
    upTextColor: {
        type: String,
        default: '#666'
    },
    downTextColor: {
        type: String,
        default: '#666'
    },

})

// 获取插槽内容
let slot = useSlots()

// 判断文字颜色
let textColor = computed(() => {
    return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<style lang="less" scoped>
.trend {
    display: flex;
    align-items: center;
    .trend-text {
        font-size: 12px;
        margin-right: 5px;
    }
    .trend-icon {
        svg {
            width: .8em;
            height: .8em;
        }
    }
}
</style>