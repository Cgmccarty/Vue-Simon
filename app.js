let app = new Vue ({

    el: "#app",

    data: {
        prompt: "We're about to start.",
        turn: 0,
        sequence: ['red', 'green', 'blue', 'yellow', 'red,' ],
        tapped: ''

    },

    methods: {

        playSequence: function () {

            let self = this;
            self.prompt = "Pay attention!"
            
        },

        makeActive: function (color) {

            let self = this;

            self.tapped = color;
            setTimeout(function() {
                self.tapped = '';
            }, 300);
        }
    }

});
