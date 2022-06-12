<template>
  <div>
    趋势标记
    <div class="trend-row">
      <!-- 父子组件传参的形式 -->
      <!-- <div><trend text="营业额"></trend></div> -->

      <!-- 插槽传参 -->
      <div>
        <trend>营业额</trend>
      </div>

      <div>
        <trend text="销售额" type="down"></trend>
      </div>
    </div>
    <el-divider>
      颜色反转
    </el-divider>
    <div class="trend-row">
      <div>
        <trend reverseIconColor>营业额</trend>
      </div>

      <div>
        <trend text="销售额" type="down" reverseIconColor></trend>
      </div>
    </div>

    <el-divider>
      文字颜色、趋势图标自定义
    </el-divider>
    <div class="trend-row">
      <div>
        <trend upTextColor="#fc1">营业额</trend>
      </div>

      <div>
        <trend text="销售额" type="down" downTextColor="#abc123"></trend>
      </div>
    </div>
    <!-- <el-icon><CaretTop /></el-icon> -->
    <div class="trend-row">
      <div>
        <trend upIcon="CaretTop">营业额</trend>
      </div>

      <div>
        <trend text="销售额" type="down" downIcon="CaretBottom"></trend>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.trend-row {
  display: flex;
  > div {
    margin-right: 10px;
  }
}
</style>