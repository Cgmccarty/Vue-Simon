Vue.component('simonbuttons', {

    props: ['colorclass'],

    method: {

    },

    template: '<button class="btn" v-bind:class="colorclass">&nbsp</button>'

});


let app = new Vue ({

    el: "#app",

    data: {
        turn: 1,
        color: ['danger', 'primary', 'warning', 'success'],
        order: []
    },

    methods: {
        getRandomButton: function () {
            let randomButton = Math.floor(Math.random() * this.color.length);
            if (this.color[randomButton])
        }
    }

});