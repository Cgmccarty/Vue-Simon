Vue.component('simonbuttons', {

    props: ['colorclass', 'isActive'],

    method: {

        // selected: function () {
        //   this.isActive = true;
        // }

    },

  
    template: '<button class="btn" v-on:click="this.$parent.selected" v-bind:class="colorclass">&nbsp</button>'


});


let app = new Vue ({

    el: "#app",

    data: {

        turn: 1,
        color: ['btn-danger', 'btn-primary', 'btn-warning', 'btn-success'],
        order: [],
        isActive: false,
        sequence: ['danger', 'warning', 'success', 'primary']
    },

    methods: {

        getRandomButton: function () {
            let randomButton = Math.floor(Math.random() * this.color.length);
            return randomButton;
        },

        selected: function () {
            console.log(this.isActive);
            this.isActive = true;
        }
    }
  }

});
