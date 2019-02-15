<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Foot />
  </div>
</template>

<script>
import Navbar from './components/Nav'
import Foot from './components/Footer'
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
  components: {
    Navbar,
    Foot
  },
  data () {
    return {

    }
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
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 500);
  });
  },
  beforeUpdate() {
    console.log('beforeUpdate')
    
  },
  updated() {
    console.log('updated')
  },
}
</script>


<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.background-style {
  background-color: lightgoldenrodyellow;
  margin-top: -42px;
  height: 500px;
}
.large-title {
  font-weight: 600;
}
</style>
