<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    prefix: {
      type: String,
      default: '#icon-'
    },
    name: String,
    //接受父组件传递颜色
    color: {
        type: String,
        default: ''
    },
    //接受父组件传递过来的图标的宽度
    width: {
        type: String,
        default: '16px'
    },
    //接受父组件传递过来的图标的高度
    height: {
        type: String,
        default: '16px'
    }
  })
</script>

<style scoped></style>