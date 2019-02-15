<template>
    <div>
        <div class="navbar-fixed">
            <nav class="green lighten-1">
                <div class="container nav-wrapper">
                    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul>
                        <router-link :to="{ name: 'home' }">
                            <li><img src="../assets/food-icon.png" alt="icon" width="60px"></li>
                            <li class="hide-on-med-and-down"><span ><h5 class="flow-text" id="siteTitle">Favorite Foods</h5></span></li>
                        </router-link>
                    </ul>     
                    <ul class="right hide-on-med-and-down">
                        <li ><router-link to="/"><span>Home</span></router-link></li>
                        <li><router-link to="about">About</router-link></li>
                        <li><router-link to="foods">Foods</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <!-- <img src="../../assets/stars.jpg"> -->
      </div>
      <!-- <a href="#user"><img class="circle" src="../../assets/profile.jpg"></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a> -->
      <h3 class="white-text side-title">Menu</h3>
    </div></li>
    <li ><router-link to="/"><span>Home</span></router-link></li>
    <li><router-link to="about">About</router-link></li>
    <li><router-link to="foods">Foods</router-link></li>
    </ul>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data () {
        return {

        }
    }
}
</script>

<style scoped>
#siteTitle {
    font-size: 2.2em;
    font-weight: 700;
    margin-left: 20px;
}
.sidenav .router-link-exact-active{
    border-left: 5px solid;
    border-color: green;
}
</style>
