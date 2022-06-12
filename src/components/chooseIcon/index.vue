<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="choose-icon-dialog-height">
    <el-dialog v-model="dialogVisible" :title="title">
      <div class="icon-container">
        <div
          class="icon-item"
          v-for="(item, index) in Object.keys(ElementPlusIconsVue)"
          :key="index"
          @click="clickItem(item)"
        >
          <div>
            <component :is="'el-icon-'+toLine(item)"></component>
          </div>
          <div>{{item}}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { toLine } from "../../utils/index";
import {useCopy} from "../../hooks/useCopy/index"
import { watch, ref } from "vue";
let props = defineProps({
  title: String,
  visible: Boolean
});
let emits = defineEmits(["update:visible"]);
let dialogVisible = ref<boolean>(props.visible);
// 点击按钮
let handleClick = () => {
  // console.log(props.visible)
  emits("update:visible", !props.visible);
  // console.log(props.visible)
};

//点击icon
let clickItem = (item:strig) => {
  let textHtml = `<el-icon-${toLine(item)} />`
  // 复制文本
  useCopy(textHtml)

  // 关闭弹框
  dialogVisible.value = false;

} 

watch(
  () => props.visible,
  val => {
    dialogVisible.value = val;
  }
);

watch(
  () => dialogVisible.value,
  val => {
    emits("update:visible", val);
  }
);
</script>

<style lang="less" scoped>
.icon-container {
  display: flex;
  // justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  // max-height: 400px;
  // overflow-y: auto;
  .icon-item {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    svg {
      width: 2em;
      height: 2em;
    }
  }
}
</style>
