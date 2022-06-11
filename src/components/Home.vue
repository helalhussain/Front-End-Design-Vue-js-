<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default{
  name:'Home',
  components:{
      Header,
      Footer
  }

}
</script>



<template>
   <Header/>
    <!-- *---------------------------------Home------------------* -->
    
  <!-- *---------------------------------Programe Section------------------* -->
    <div class="body-section">
        <div class="programe-bar"> 
            <div class="container">
                <h1>Programmes</h1>
            </div>
        </div>
        <div class="search-programe">
            <div class="container">
                <div class="searchBox">
                    <i class="fas fa-search"></i>
                    <input type = 'text' class="searchInput" placeholder="Type here to filter programmes and courses">
                  
                </div>
                <div class="solutions">
                  <h2>Blockchain Solutions</h2>
                    <div class="solutionCard">
                            <div class="card">
                                <img src = '../assets/image/networks.png' alt="img" width="40%">
                                <div class="cardText">
                                    <h3>Blockchain for
                                        Healthcare</h3>
                                        <h5>Christopher Nolan</h5>
                                        <p>mm/yy - mm/yy</p>
                                </div>
                            </div>
                    </div>
                </div>
           </div>
        </div>
    </div>

    <!-- *---------------------Footer Section-----------------* -->
 
<Footer/>
</template>


<style>

</style>