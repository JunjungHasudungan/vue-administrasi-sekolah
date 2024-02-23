<template>
    <div class="header">
        <h1 :class="{'text-success': numberDefault == 5, 'text-primary': numberDefault != 5}">
            This is an about Greeting
        </h1>
        <div class="gap-2 d-flex in-line">
            <h2> Number: </h2>
            <h2 class="text-primary">{{ numberDefault }}</h2>
        </div>
            <h3 v-if="numberDefault == 5"> warna berubah</h3>
        <div class="">
            <button class="m-2 btn btn-primary btn-sm" @click="increment()">Increment</button>
            <button class="btn btn-success btn-sm" @click="decrement()">Decrement</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";  
    import Counter from "../pages/Counter.vue";

    const numberDefault = ref(0);

    const increment = () => {
        numberDefault.value++
    }

    const decrement = ()=> {
        numberDefault.value--
    }
    
</script>