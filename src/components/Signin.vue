<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default{
  name:'Signin',
  components:{
      Header,
      Footer
  },
    data(){
        return {
         
                email:'',
                password:''
           
        }
    },
      methods: {
        async signinBtn() {
            this.error=[];
            console.warn("signinBtn", this.email, this.password);
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                email: this.email,
                password: this.password
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            // statusFnc(result){
            //     console.log(result);
            // }

            // .then(res => res.json())
            // .then(data => obj = data)
            // .then(() => console.log(obj))

            fetch("http://127.0.0.1:3000/signin", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.status == 400) {
                       console.log('bad request OR password incorrect OR Invalid Email')
                        alert('Success');
                 

                    }
                })
                .catch(error => console.log('error', error));


        }
    }
 
  
}


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
                    <input type="text" v-model="email" required>
                    <label>E-mail</label>
                    <span style="color:red">{{ emailError }}</span>
                </div>
                <div class="input-field">
                    <input type="password" v-model="password" id="passField" required>
                    <label>Password</label>
                    <span style="color:red">{{ passError }}</span>
                </div>
                 <div class="checkbox-field">
                    <input type = "checkbox">
                    <p style="margin-left:5px">Keep me signed in</p>
                    <a href="#" class="activeLink">Forgot your password?</a>
                  </div>
           
                <button v-on:click="signinBtn" type="submit" class="submit-button">Sign In</button>
           
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