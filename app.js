Vue.component('simonbuttons', {

    props: ['colorclass', 'active'],

    method: {
      selected: function(item){
        this.active= item;

      }

    },

    template: '<button class="btn" v-on:click="selected(colorclass)" v-bind:class="colorclass">&nbsp</button>'

});


let app = new Vue ({

    el: "#app",

    data: {
        turn: 1,
        color: ['danger', 'primary', 'warning', 'success'],
        order: [],
        active: ''
    },

    methods: {
        getRandomButton: function () {
            let randomButton = Math.floor(Math.random() * this.color.length);
            this.selected (randomButton);
        }

    }

});
