<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import axios from 'axios'
export default {
    name: 'Signup',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            email: '',
            password: '',
            rePassword: ''

        }
    },
    methods: {
        async signupBtn() {
            console.warn("signupBtn", this.email, this.password, this.rePassword);
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                email: this.email,
                password: this.password,
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:3000/signup", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
                push({name:home});
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
                    <input type="password" v-model="password" id="passField" required>
                    <label>Password</label>
                </div>
                <div class="input-field">
                    <input type="password" v-model="rePassword"   id="passField" required>
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