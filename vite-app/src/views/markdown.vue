<script setup lang="ts">
import { onMounted } from 'vue';
import 'cherry-markdown/dist/cherry-markdown.css';
import Cherry from 'cherry-markdown/dist/cherry-markdown.core';

import Vditor from 'vditor';
import 'vditor/src/assets/less/index';
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
  const cherryInstance = new Cherry({
    id: 'markdown-container',
    value: '# welcome to cherry editor!',
  });
  const vditor = new Vditor('markdown-Vditor', {});
});
</script>
<template>
  <div id="markdown-container"></div>
  <div id="markdown-Vditor"></div>
</template>

<style scoped lang="scss">

</style>
