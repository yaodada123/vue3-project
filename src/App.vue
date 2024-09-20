<template>
  <div>
    <RouterView />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {reqLogin} from './api/user/index';
onMounted(() => {
  reqLogin({
    username: 'admin',
    password: '111111'
  }).then(res => {
    console.log(res);
    
  })
})
</script>

<style scoped>

</style>