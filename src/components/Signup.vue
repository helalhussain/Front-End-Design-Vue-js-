<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default{
  name:'Signup',
  components:{
      Header,
      Footer
  }

}
</script>

<template>
<Header/>
       <div class="main-body">
        <div class="signup"> 
            <div class="sign-info">
                <h2 style="margin-bottom:0px">Sign up </h2>
                <p> Start learning with your Blockchain Education!</p>
            </div>
            <form class="form" >
                <div class="input-field">
                    <input type="text" required>
                    <label>E-mail</label>
                </div>
                <div class="input-field">
                    <input type="text" required>
                    <label>Password</label>
                </div>
                <div class="input-field">
                    <input type="text" required>
                    <label>Re-enter Password</label>
                </div>
                 <div class="checkbox-field">
                    <input type = "checkbox">
                    <p style="margin-left:5px">Accept the <a href="#" style = 'color:#046EB6;'>Terms</a > and <a href="#"  style = 'color:#046EB6'>Privacy Policy</a></p>
                  </div>
             
                <button type="submit" class="submit-button">Sign up</button>
            </form>
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