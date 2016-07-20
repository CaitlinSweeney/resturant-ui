angular.module('MilliwaysRestaurant')
    .factory('milliFood', [milliFood, milliPlates, milliDrinks])

//milliFood encompasses the foodItems (ingredients) list. It is currently complete.
​
    function milliFood () {
        var mFood = this;
​
        var foodItems = [{
            name: 'lunar cow',
            calories: 5000,
            vegan: false,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'lettuce',
            calories: 1000,
            vegan: true,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'space veggies',
            calories: 4000,
            vegan: true,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'cephalopod',
            calories: 1000,
            vegan: false,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'chocolate cream cheese',
            calories: 700,
            vegan: false,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'star butter',
            calories: 800,
            vegan: false,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'lunar cow milk',
            calories: 1000,
            vegan: false,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'vodka',
            calories: 200,
            vegan: true,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'venusian lime',
            calories: 50,
            vegan: true,
            glutenFree: true,
            citrusFree: false,
        },{
            name: 'jupiter razzberry',
            calories: 150,
            vegan: true,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'grapefruit grenadine',
            calories: 250,
            vegan: true,
            glutenFree: true,
            citrusFree: true,
        },{
            name: 'stellar goldschlager',
            calories: 1250,
            vegan: true,
            glutenFree: false,
            citrusFree: true,
        },{
            name: 'laser lemon',
            calories: 1250,
            vegan: true,
            glutenFree: true,
            citrusFree: false,
        },]
        return foodItems;
    };

//milliFood encompasses the foodItems (ingredients) list. It is currently complete.

function milliPlates() {
   console.log('milliwaysMenu Loaded')
​
   var menuItems = [{
       name: 'Ameglion Major Cow',
       ingredients: ['lunar cow','lettuce','space veggies' ],
       description: 'Milkyway-ish',
       price: 100000
   },{
       name: 'Odyssey Octopus',
       ingredients: ['cephalopod','star butter'],
       flavor: 'Squishy',
       price: 1300
   },{
       name: 'Stardust Cheesecake',
      ingredients: ['chocolate cream cheese','star butter','lunar cow milk'],
       flavor: 'Out of this world',
       price: 400
   },{
       name: 'Cosmic Cookies',
       ingredients: ['star butter','lunar cow milk'],
       flavor: 'Poppin',
       price: 1300
   }]

   var menuTitle = "Lunch & Dessert"
​
   // whatever you share, you will return in your factory
   return {
       menuItems;
     }
function milliDrinks(){
   var drinkItems = [{
       name: 'Pan-Galactic Gargle Blaster',
       description: 'An alcoholic beverage invented by ex-President of the Universe Zaphod Beeblebrox, considered by the Guide to be the "Best Drink in Existence". Its effects are similar to "having your brains smashed in by a slice of lemon wrapped round a large gold brick".',
       price: 55.555,
       ingredients: ['vodka','venusian lime','jupitar razzberry','grapefruit grenadine','stellar goldschlager','laser lemon'],
   },{
       name: 'Milky Way Milk',
       description: 'Locally sourced from a free-range cosmic dairy.',
       price: 2,
       ingredients: ['lunar cow milk'],
   },{
       name: 'Venusian Vodka',
       description: '',
       price: 10,
       ingredients: ['vodka','venusian lime'],
   },{
       name: 'Jupiter Jazz Liqueur',
       description: '',
       price: 15.42,
       ingredients: ['jupitar razzberry','grapefruit grenadine'],
  }]

  }
}
