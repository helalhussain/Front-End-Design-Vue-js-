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
                   <router-link  to="#">
                    <a class="activeLink"><h4>Profile</h4></a>
                    </router-link><hr/>
                  
                 </div>
                 <div>
                     <router-link  to="#">
                        
                    <a ><h4><i class="fa fa-sign-out fa-lg"></i>Logout</h4></a>
                    </router-link>
                      
                </div>
             </div>
    </div>
</template>
<style>

     
</style>