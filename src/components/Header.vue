 <script>
 export default {
    data(){
    return {
        show:false
    }
}    

}
 </script>
 
<template>
     <div class="header">
             <div class="container navigation" >
                <div class="navLogo">
                    <img class="logo" src="../assets/image/logo.png">
                    <h4> Blockchain
                        Education</h4>
                 </div>
                    <ul>
                        <li>
                            <a href="#" class="active">English(En-GB)   <span class="material-icons">keyboard_arrow_down</span></a>  
                        </li>
                        <li>
                            <a href="#">Continue learning
                            <img src = '../assets/image/icon_return.png' alt="img" class="returnIcon">
                            </a>
                        </li>
                        <li>
                            <a v-on:click="show=!show" href="#">
                            <img src = '../assets/image/icon_user.png'  alt="img" class="userIcon" >
                        </a>
                        </li>
                    </ul>
                    <a  href="javascript:void(0);"   class="icon" onclick="myFunction()">
                           <i class="fas fa-bars"></i>
                    </a>
             </div>
             <div v-if="show" class="profileCheck">
                 <div style="margin-bottom:10px">
                   <router-link  to="/">
                    <a class="activeLink"><h4>Sign in</h4></a>
                    </router-link>
                     <p>Already have an account?</p>
                 </div>
                 <div>
                     <router-link  to="/signup">
                    <a ><h4>Sign up</h4></a>
                    </router-link>
                        <p>You don't have an account?</p>
                </div>
             </div>
    </div>
</template>
<style>
/* -------------------- Basic Setup --------------------- */
@import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@200;400;500&display=swap'); 
:root {
    --backgroundColor:#ffffff
    --headingColor:#000000;
    --paragraphColor: #000000;
    --buttonBgColor:  #046EB6;
    --highlightText: #069C84;
    --textLink:#3366CC;
    --pragFontSize:20px;
    --h1:60px;
    --h2:42px;
    --h3:36px;
    --h4:30px;
    --h5:24px;
    --h6:20px;
  }
* {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Rokkitt', serif;
}

body,
form,
fieldset,
ol,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0;
}

img {
    border: 0;
    /* vertical-align: bottom; */
}

a {
    text-decoration:none;
    color: #000000;
    font-size: 22px;
    font-weight: 200;
    transform: all .5s ease-in-out;
}
.activeLink{
    color: #046EB6;
}
a:hover {
    text-decoration: none;
    color:  var(--highlightText);
    transform: all .5s ease-in-out ;
}
/* ------------------- Defaults ------------------- */

html {
    height: 100%;
    overflow: auto;
    overflow-y: scroll;
}

body {
    height: 100%;
    background: var(--backgroundColor);
    color: var(--paragraphColor);
    box-sizing: border-box;
}


/* ------------------ Typography ------------------- */

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0 0 1rem;
}

p,
ul,
ol {
    font-size: var(--pragFontSize);
}
p{
    font-weight: 300;
}
ul {
    margin: 0 ;
    list-style: none;
}

h1 {
    font-size:var(--h1);
    font-weight: 200;
}

h2 {
    font-size: var(--h2);
    font-weight: 400;
}

h3 {
    font-size: var(--h3);
    font-weight: 500;
}

h4 {
    font-size: var(--h4);
    font-weight: 400;
}

h5 {
    font-size: var(--h5); 
    font-weight: 200;
}

h6 {
    font-size: var(--h6);
    font-weight: 400;
}

label {
    color: rgb(128, 128, 128);
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 10px;
    transition: all 0.2s ease 0s;
    font-size: 18px;
}

/* ------------------ Header Menu ------------------- */
.navLogo {
    display: inline-flex;
    width: 220px;
    align-items: center;
}
.navLogo h4 {
    font-size: 26px;
    font-weight: 500;
    line-height: 26px;
    margin-left: 10px;
    margin-top: 22px;
    margin-bottom: 0;
}
.header {
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 5px rgb(216 226 239 / 60%);
}
.container {
    margin-left: 6%;
    margin-right: 6%;
}
.navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: all .25s ease-in-out;
    height: 100px;
}
.navigation ul {
    display: flex;
    align-items: center;
    transition: all .25s ease-in-out;
}
.navigation li {
    padding: 5px 20px;
}
.navigation li a {
    display: flex;
    align-items: center;
}
.returnIcon {
    margin: 0px 10px -4px;
    width: 20px;
}
.userIcon {
    width: 20px;
    border-radius: 50%;
    background: #F3F3F3;
    padding: 6px;
    margin: 0px 0px -5px;
}
span.material-icons {
  
    font-size: 28px;
    color: #7f7f7f;
}

.navigation  li a.active {
    color: var(--highlightText);
  }
  
  .navigation  .icon {
    display: none;
  }

@media screen and (max-width: 736px) {
    .container {
        margin-left: 15px;
        margin-right: 15px;
    }

    .navigation ul{
        display: none;
    }

    .navigation .icon {
        display: block;
      }
      
      .showMenu {
        height: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: -150px;
        padding-bottom: 30px;
        transition: all .25s ease-in-out;
    }
     .showMenu ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        margin-left: -130px;
        margin-top: 250px;
        border-top: 1px solid #d8e2ef;
        transition: all .25s ease-in-out;
        width: 100%;
    }
    .showMenu li {
        padding: 5px 20px;
        margin-top: 10px;
    }
  }
  
  

/* ------------------ Header Menu End ------------------- */
/* ------------------ Footer Menu ------------------- */
.footer {
    background: #2B325C;
    color: #ffffff;
    padding: 50px 0px;
}
.footer-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
}

.footer ul li a {
    color: #ffffff;
    line-height: 35px;
}
.footer ul li a:hover {
    color: var(--highlightText);
    line-height: 35px;
}
.fa{
    font-weight: 400;
    color: white;
    font-size: 40px;
    margin-right: 6px;
}
.fa:hover{
    font-weight: 400;
    color: var(--highlightText);
    font-size: 40px;
    margin-right: 6px;
}

@media screen and (max-width:600px) {
    .foot-menu {
        margin: 30px 0;
    }
    .footer-body {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        align-content: flex-start;
        flex-wrap: nowrap;
    }
}
/*-------------------------- footer end --------------------------*/

/* Sign up section */
.sign-info{
    text-align: center;
    padding:20px 0 ;
}
.main-body {
    background: #D8E2EF;
    padding: 5% 0;
}
.signup {
    margin: 0 auto;
    width: 430px;
    transform: translate(10px, 10px);
    height: 470px;
    background: rgb(255, 255, 255);
    padding: 25px 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #a9a9a9;
}
.signin .checkbox-field a {
    padding-left: 45px;
}
@media screen and (max-width:600px) {
.signup {
    margin: 0 auto;
    width: 300px;
    transform: translate(0px, 0px);
    height: 505px;
    background: rgb(255, 255, 255);
    padding: 25px 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #a9a9a9;
}
}
/* Sign in section */


.signin {
    margin: 0 auto;
    width: 430px;
    transform: translate(10px, 10px);
    height: 420px;
    background: rgb(255, 255, 255);
    padding: 25px 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #a9a9a9;
}
@media screen and (max-width:600px) {
    .signin {
        margin: 0 auto;
        width: 348px;
        transform: translate(0px, 0px);
        height: 420px;
        background: rgb(255, 255, 255);
        padding: 25px 15px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px #a9a9a9;
    }
}
/* input  */
.checkbox-field {
    display: flex;
    align-items: baseline;
}
input[type="text"], input[type="password"] {
    width: 92%;
    height: 30px;
    padding: 5px 15px;
    margin-bottom: 5px;
    border: 1px solid #d8e2ef;
    border-radius: 3px;
    transition: 0.2s ease-in;
    outline: none;
}
input[type="checkbox"] {
    width: 18px;
}

input::-webkit-input-placeholder {
    transition: 0.2s ease-in;
}

input[type="text"]:focus, input[type="password"]:focus {
    height: 30px;
    padding: 5px 15px;
    transition: 0.2s ease-in;
    border: 1px solid #c3d5ec;
    outline: none;    
}

.input-field {
    position: relative;
    margin: 10px 2.5px 20px 2.5px;
}

label {
    color: rgb(128, 128, 128);
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 10px;
    transition: 0.2s;
}
input:focus ~ label, input:valid ~ label {
    top: -10px;
    left: 15px;
    font-size: small;
    color: var(--highlightText);
    background-color:#fff;
    padding:0 5px 0 5px;
}
/* button */
button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background: #046EB6;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin: 10px 0px 5px;
}

.signup-footer{
    text-align: center;
    margin-top: 1px;
}
.signup-footer span {
    font-size: 18px;
    color: rgb(128, 128, 128);
}
/* ------ProfileCheck */
.profileCheck {
    position: absolute;
    display: block;
    padding: 25px;
    background: white;
    border-radius: 10px;
    top: 16%;
    right: 8%;
    transform: translate(8%, 6%);
    border: 1px solid #D8E2EF;
}
.profileCheck p {
    margin-bottom: 0;
}

.profileCheck h4 {
    margin-bottom: 0;
    font-size: 25px;
}
@media screen and (max-width:600px) {
    .profileCheck {
        position: absolute;
        display: block;
        padding: 25px;
        background: white;
        border-radius: 10px;
        top: 16%;
        right: 8%;
        transform: translate(8%, 6%);
    }
}
</style>