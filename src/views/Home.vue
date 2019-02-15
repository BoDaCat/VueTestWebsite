<template>
  <div class="home">
    <div class="parallax-container">
      <div class="parallax"><img src="../assets/appetizer-bowl-delicious-1640772.jpg"  ></div>
    </div>  
    <div class="background-style valign-wrapper">
      <div class="container">
        <div>
          <HomeContent/>
        </div>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/HbcSd2S4ip70y0ln/4k-traditional-mexican-food-and-beer-taking-tortilla_b3hvdox3_thumbnail-full01.png"  ></div>
    </div> 
    <div class="background-style valign-wrapper">
      <div class="container">
        <HomeContent2/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/HomeContent.vue';
import HomeContent2 from '@/components/HomeContent2.vue';

export default {
  name: "home",
  components: {
    HomeContent,
    HomeContent2
  },
  beforeCreate() {
    console.log('beforecreate')
  },
  created() {
    console.log('created')
    
  },
  beforeMount() {
    console.log('beforeMount')
    
  },
  mounted() {
    console.log('mounted')
    M.AutoInit()
  },
  beforeUpdate() {
    console.log('beforeUpdate')
    
  },
  updated() {
    console.log('updated')
  },
};
</script>

<style scoped>
  .parallax-container {
    height: 500px;
  }
  .parallax-container img {
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  }
</style>
