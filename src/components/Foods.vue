<template>
    <div class="foods">
        <div class="row container">
            <div class="center-align">
                <ul >
                    <li v-for="food in foods" :key="food.name">
                        <div class="col s12 m2 l4"></div>
                        <div class="col s12 m8 l6 card amber darken-1 card-style">
                            <div class="card-content white-text">
                            <span class="card-title">Card Title</span>
                            <p class="center-align">{{food.name}}</p>
                            <img :src="food.img" :alt="food.alt" width="300px" class="card-image-style">
                            </div>
                            <div class="card-action">
                                <ul>
                                    <li class="btn-style">
                                        <a :href="food.recipe" class="white-text btn green" target="_blank">Best Recipe</a>
                                    </li>
                                    <li class="btn-style">
                                        <a :href="food.restaurant" class="white-text btn green">Best Restaurant</a>
                                    </li>
                                </ul>
                            
                            </div>
                        </div>
                        <div class="col s12"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'foods',
    computed: {
    foods () {
      return this.$store.state.foods
    }
  },
}
</script>

<style scoped>
.card-style{
    width: 300px;
    margin: 10px;
}
.btn-style{
    margin: 5px;
}
@media only screen and (max-width: 600px) {
  .card-image-style {
    width: 200px;
  }
}
</style>
