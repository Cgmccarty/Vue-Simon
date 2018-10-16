Vue.component('simonbuttons', {

    props: ['colorclass'],

    method: {

        // selected: function () {
        //   this.isActive = true;
        // }

    },

    template: '<button class="btn" v-bind:class="colorclass" v-on:click="$parent.selected()">&nbsp</button>'

});


let app = new Vue ({

    el: "#app",

    data: {
        turn: 1,
        color: ['red', 'blue', 'yellow', 'green'],
        order: [],
        isActive: '',
        sequence: ['', 'btn-warning', 'btn-success', 'btn-primary']

    },

    methods: {

        getRandomButton: function () {
            let randomButton = Math.floor(Math.random() * this.color.length);
            this.selected(this.color[randomButton]);
        },

        selected: function (item) {
            this.isActive = this.color[item];
            console.log(this.isActive);
        }
    }

});
