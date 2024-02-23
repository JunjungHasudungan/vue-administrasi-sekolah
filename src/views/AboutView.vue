<template>
  <div>
    
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import axios from 'axios';

  const dataRole = ref([]);

  onMounted(()=> {

  });

  const getDataRole = async()=> {
    await axios.get('');
  }
</script>