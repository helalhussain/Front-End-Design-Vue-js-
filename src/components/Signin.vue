<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default{
  name:'Signin',
  components:{
      Header,
      Footer,
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        signinBtn(){
            alert("success")
        }
    }
 
  
}}
</script>



<template>
   <Header/>
    <!-- *---------------------------------Signup------------------* -->
    <div class="main-body">
        <div class="signin"> 
            <div class="sign-info">
                <h2 style="margin-bottom:0px"> Sign In  </h2>
                <p> Your Blockchain Education Account!</p>
            </div>
            <div class="form" >
                <div class="input-field">
                    <input type="text" required>
                    <label>E-mail</label>
                </div>
                <div class="input-field">
                    <input type="text" required>
                    <label>Password</label>
                </div>
                 <div class="checkbox-field">
                    <input type = "checkbox">
                    <p style="margin-left:5px">Keep me signed in</p>
                    <a href="#" class="activeLink">Forgot your password?</a>
                  </div>
              <router-link  to="/home">
                <button v-on:click="signinBtn" type="submit" class="submit-button">Sign In</button>
             </router-link>
            </div>
            <div class="signup-footer">
                 <span>You don't have account? 
                       <router-link  to="/signup">
                     <a class="activeLink">Sign Up</a>
                     </router-link>
                     </span> 
            </div>
           
        </div>
    </div>
    <!-- *---------------------Footer Section-----------------* -->
 
<Footer/>
</template>