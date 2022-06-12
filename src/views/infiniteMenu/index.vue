<template>
  <div style="width: 200px">
    <m-infinite-menu :data="menuData" :defaultActive="'1'" :router="false"></m-infinite-menu>
  </div>
</template>

<script setup lang="ts">
let menuData = [
  {
    name: "导航1",
    icon: "Document",
    index: "/chooseIcon"
  },
  {
    name: "导航2",
    icon: "Document",
    index: "/chooseArea"
  },
  {
    name: "导航3",
    icon: "Document",
    index: "/trend",
    children: [
      {
        name: "导航3-1",
        icon: "Document",
        index: "3-1",
        children: [
          {
            name: "导航3-1-1",
            icon: "Document",
            index: "3-1-1",
            children: [
              {
                name: "导航3-1-1-1",
                icon: "Document",
                index: "3-1-1-1"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "导航4",
    icon: "Document",
    index: "/notification"
  }
];
</script>

<style lang="less" scoped>
</style>