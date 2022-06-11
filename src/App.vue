<script>

import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
export default{
  name:'App',
  components:{
    Signup,
    Signin
   
  }
};

</script>

<template>

     <router-view></router-view>
  
</template>

<style>
@import './assets/header.css';
@import './assets/home.css';
</style>
