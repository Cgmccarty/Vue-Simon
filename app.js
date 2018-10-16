let app = new Vue ({

    el: "#app",

    data: {
        prompt: "We're about to start.",
        btnTap: 0,
        colors: ['red', 'blue', 'green', 'yellow'],
        sequence: [],
        tapped: '',
        userTapped: []

    },

    methods: {

        playSequence: function () {
            let self = this;
            self.prompt = "Pay attention!"
            let randomButton = Math.floor(Math.random() * 3);
              self.sequence.push(self.colors[randomButton]);


            let intervalId = setInterval(function () {


            if ( self.btnTap < self.sequence.length){
              self.highlight(self.sequence[self.btnTap]);
              self.btnTap++;
            } else {
                clearInterval(intervalId);
                self.btnTap = 0;
                self.prompt = "you try NOW";
                }

          }, 1000);
        },

        highlight: function (color) {

            let self = this;

            self.tapped = color;
            setTimeout(function() {
                self.tapped = '';
            }, 500);
        },

        makeActive: function (color) {
          let self = this;
          self.userTapped.push(color);
          self.highlight(color);

          if (self.userTapped.join("") === self.sequence.join("")) {
            self.userTapped = [];
            self.btnTap = 0;
            self.playSequence();

          } else {
            self.prompt = "LOSER";
          }
        }


    }

});
