<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import axios from 'axios'
export default{
  name:'Signup',
  components:{
      Header,
      Footer
  },
  data(){
      return { 
          email:'',
          password:'',
          rePassword:''

      }
  },
  methods:{
     async signupBtn(){
          console.warn("signupBtn",this.email,this.password,this.rePassword)
      let result = await axios.post("http://localhost:3000/signup",{
        email:this.email,
        password:this.password,
        rePassword:this.rePassword
      });
      console.warn(result);
      if(result.status==201){

            alert("Sign Up Done");
      }
      }
  }


}
</script>

<template>
<Header />
       <div class="main-body">
        <div class="signup"> 
            <div class="sign-info">
                <h2 style="margin-bottom:0px">Sign up </h2>
                <p> Start learning with your Blockchain Education!</p>
            </div>
            <div class="form">
                <div class="input-field">
                    <input type="text" v-model="email" required>
                    <label>E-mail</label>
                </div>
                <div class="input-field">
                    <input type="password" v-model="password" required>
                    <label>Password</label>
                </div>
                <div class="input-field">
                    <input type="password" v-model="rePassword" required>
                    <label>Re-enter Password</label>
                </div>
                 <div class="checkbox-field">
                    <input type = "checkbox">
                    <p style="margin-left:5px">Accept the <a href="#" style = 'color:#046EB6;'>Terms</a > and <a href="#"  style = 'color:#046EB6'>Privacy Policy</a></p>
                  </div>
             
                <button v-on:click="signupBtn" type="submit" class="submit-button">Sign up</button>
            </div>
            <div class="signup-footer">
                 <span>Already have an account?
                     <router-link  to="/">
                     <a class="activeLink">Sign In</a>
                     </router-link>
                     </span> 
            </div>
           
        </div>
    </div>
    <Footer/>
</template>