<template>
  <div id="app">
<!--     <div id="nav" class="navbar  navbar-dark">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <section id="header" class="fixed-top">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container-fluid">
               <router-link to="/"><div class="navbar-brand" href="#">
                <img class="logo horizontal-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/horizontal-logo.svg" alt="forecastr logo">
              </div></router-link> 
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse float-right"  id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                     <router-link to="/">Home</router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link to="/admin">Admin</router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link to="/admin-dashboard">Admin Dashboard</router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link to="/user">User</router-link> 
                  </li>
                
            
         
                  
                </ul>
              </div>
            </div>
          </nav>
    </section>

    <router-view></router-view>

       <section id="footer">


        <div class="footer navbar-dark bg-dark text-white fixed-bottom" >
            <p class="text-center">&copy;Copyright Reserved By <a href="hassanshahriar.info" style="color:azure; text-decoration:none;">Hassan Shahriar</a>
        </p>
        </div>

    </section>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFF;

  margin-bottom: 40px;
}

#nav {
  padding: 30px;
  

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  data() {
    return{
      menu:false,

    }
    
  },
}
</script>
