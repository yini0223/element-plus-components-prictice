<template>
  <div class="list-tab-pover">
    <el-tabs>
      <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
        <el-scrollbar max-height="230px">
          <div class="container" v-for="(item1, index1) in item.content" :key="index1" @click="clickItem(item1, index1)">
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="small" :src="item1.avatar" />
            </div>
            <div class="content">
                <div class="title">
                    <div>{{item1.title}}</div>
                    <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{item1.tag}}</el-tag>
                </div>
                <div class="desc" v-if="item1.desc">{{item1.desc}}</div>
                <div class="desc" v-if="item1.time">{{item1.time}}</div>
            </div>
          </div>
          
        </el-scrollbar>
        <div class="actions">
              <div class="action-item" v-for="(item2, index2) in actions" :key="index2" @click="clickAction(item2, index2)">
                  <div class="item-icon">
                      <component :is="`el-icon-${toLine(item2.icon)}`"></component>
                  </div>
                  <div>{{item2.text}}</div>
              </div>
          </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { PropType} from "vue";
import { toLine } from "../../utils/index"
import { ListOptions, ActionOptions, ListItemListItem } from "./type.ts";

let props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
});

let emits = defineEmits(['clickItem', 'clickAction'])

let clickItem = (item:ListItem, index:number)=> {
    emits('clickItem', {item, index})
}
let clickAction = (item:ActionOptions, index:number)=> {
    emits('clickAction', { item, index})
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
      background: #e6f6f6;
  }
  .avatar {
    margin-right: 10px;
  }
  .content {
    flex: 1;
    // display: flex;
    // align-items: center;
  }
  .desc {
    font-size: 12px;
    // line-height: 20px;
    color: #999;
  }
  .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
}
.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e5e5e5;
    // padding-top: 10px;
    // padding-bottom: 10px;
    height: 50px;
    .action-item {
        width: 50%;
        // line-height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:nth-child(1) {
            border-right: 1px solid #e5e5e5;
        }
    }
    svg {
        width: 1.5em;
        height: 1.5em;
    }
}
</style>