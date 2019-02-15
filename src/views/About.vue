<template>
  <div class="about">
    <div class="parallax-container">
      <div class="parallax"><img src="../assets/breakfast.jpg" width="100%" id="breakfast"></div>
    </div>  
    <div class="background-style valign-wrapper">
      <div class="container">
        <div>
          <AboutContent />
        </div>
      </div>
    </div>
    <div>
      <div class="parallax-container valign-wrapper">
        <div class="container">
          <h1 class="center-align white-text flow-text" id="food">FOOD</h1>
        </div>
        <div class="parallax">
          <img src="https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg
            " width="100%" >
        </div>
      </div>  
    </div>
    <div class="background-style1 valign-wrapper">
      <div class="container">
        <div>
          <AboutContent2 />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AboutContent from '@/components/AboutContent.vue';
import AboutContent2 from '@/components/AboutContent2.vue';
export default {
  name: 'about',
  components: {
    AboutContent,
    AboutContent2
  },
  data () {
    return {

    }
  },
  mounted() {
    console.log('mounted')
    M.AutoInit()
  },
}
</script>

<style scoped>
.about #food {
  font-size: 15em;
  font-weight: 800;
  -webkit-text-stroke-width: 10px;
  -webkit-text-stroke-color: black;
}
@media only screen and (max-width: 600px) {
  .about #food {
    font-size: 8em;
    font-weight: 800;
  }
}
.background-style1{
  background-color: lightgoldenrodyellow;
  height: 400px;
}
</style>
