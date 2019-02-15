import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foods: [
      { 
        name: 'Pizza', 
        recipe: 'https://www.allrecipes.com/recipe/48727/mikes-homemade-pizza/',
        img: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        alt: 'Pizza pic',
        restaurant: 'https://www.dellsmoosejaw.com/'
      },
      { 
        name: 'Fries', 
        recipe: 'https://www.foodrepublic.com/recipes/basic-baked-french-fries-recipe/',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fries_2.jpg/1200px-Fries_2.jpg',
        alt: 'French Fry Pic',
        restaurant: 'https://bestfrenchfriesfoodtruck.com/'
      },
      { 
        name: 'Ice Cream', 
        recipe: 'https://barefeetinthekitchen.com/homemade-ice-cream-recipe/',
        img: 'http://www.copyrightfreephotos.com/media/81743108_dc94aad38e.jpg',
        alt: 'Ice Cream pic',
        restaurant: 'http://www.luvitfrozencustard.com/'
      },
      { 
        name: 'Fried Chicken', 
        recipe: 'https://www.foodnetwork.com/recipes/fried-chicken-recipe10-3381583',
        img: 'https://ak0.picdn.net/shutterstock/videos/30258550/thumb/1.jpg?ip=x480',
        alt: 'Fried Chicken pic',
        restaurant: 'http://www.marylandfriedchickenmb.com/'
      }
    ]
  },
  mutations: {},
  actions: {}
});
