Vue.component('simonbuttons', {

    props: ['colorclass', 'isActive'],

    method: {

    },

    template: '<button class="btn" v-on:click="selected()" v-bind:class="colorclass">&nbsp</button>'

});


let app = new Vue ({

    el: "#app",

    data: {
        //turn: 1,
        color: ['danger', 'primary', 'warning', 'success'],
        sequence: ['danger', 'warning', 'success', 'primary']
        //order: [],
        //active: ''
    },

    methods: {

        selected: function(item){
          this.active= item;

        //getRandomButton: function () {
            //let randomButton = Math.floor(Math.random() * this.color.length);
            //this.selected (randomButton);
        //}

        //start: function(){



        //}

    }
  }

});
