<template>
    <footer class="mainfooter green lighten-1">
        <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Favorite Foods</h5>
                <div class="socialIcons">
                    <a href="https://www.linkedin.com/in/thomasbscheffler/" target="_blank">LinkedIn</a>
                </div>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><router-link to="/"><span >Home</span></router-link></li>
                  <li><router-link to="about">About</router-link></li>
                  <li><router-link to="foods">Foods</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright green">
            <div class="container">
                <span class="white-text">
                     Images taken from various places on the internet. Website created as a learning experience
                </span>
            </div>
          </div>
    </footer>
</template>

<script>
export default {
    name: 'foot',
    data () {
        return {

        }
    }
}
</script>

<style scoped>

</style>
