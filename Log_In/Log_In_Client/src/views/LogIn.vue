<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');

function handleLogin() {
    errorMessage.value = '';
    if(username.value || password.value) {
        
    } else {
        errorMessage.value = 'Please enter both username and password.';
    }
}
</script>

<template>
<section class="login-section">
    <h1>Log In</h1>
    <form @submit.prevent="handleLogin">

        <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username"/>
        </div>
        
        <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password"/>
        </div>

        <button type="submit">Log In</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
</section>
</template>



<style scoped>

</style>