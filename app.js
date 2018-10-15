Vue.component('simonbuttons', {

    props: ['colorclass'],

    method: {

    },

    template: '<button class="btn" v-bind:class="colorclass">&nbsp</button>'

});


let app = new Vue ({

    el: "#app",

    data: {

    },

    methods: {

    }

});
