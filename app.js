let app = new Vue ({

    el: "#app",

    data: {

        turn: 0,
        sequence: [],
        tapped: ''

    },

    methods: {

        playSequence: function () {

            let self = this;
        },

        makeActive: function (color) {

            let self = this;

            self.tapped = color;
            setTimeout(function() {
                self.currentButton = '';
            }, 300);
        }
    }

});
