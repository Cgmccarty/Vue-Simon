let app = new Vue ({

    el: "#app",

    data: {

        prompt: "Press Start!",
        btnTap: 0,
        colors: ['red', 'blue', 'yellow', 'green'],
        sequence: [],
        tapped: '',
        userTaps: [],
        timer: 10

    },

    methods: {

        playSequence: function () {

            let self = this;
            self.disable('red');
            self.disable('blue');
            self.disable('yellow');
            self.disable('green');
            self.disable('start');
            self.prompt = 'Pay attention!';
            let randomButton = Math.floor(Math.random() * 4);
            self.sequence.push(self.colors[randomButton]);

            let intervalId = setInterval(function () {

                if (self.btnTap < self.sequence.length) {
                    self.highlight(self.sequence[self.btnTap]);
                    self.btnTap++;
                }
                else {
                    clearInterval(intervalId);
                    self.btnTap = 0;
                    self.enable('red');
                    self.enable('blue');
                    self.enable('yellow');
                    self.enable('green');
                    self.prompt = "NOW, you try!";

                    let intervalTwo = setInterval(function () {
                        if (self.timer > 0) {
                            self.timer--;
                        }
                        else {
                          clearInterval(intervalTwo);
                          self.prompt = 'LOSER! Press start to play again.';
                          self.userTaps = [];
                          self.btnTaps = 0;
                          self.sequence = [];
                          self.timer = 10;
                          self.enable('start');
                        }
                    }, 1000);
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
            self.userTaps.push(color);
            self.highlight(color);
            self.timer = 10;

            if (self.userTaps.join("") === self.sequence.join("")) {
                self.userTaps = [];
                self.btnTaps = 0;
                setTimeout(function() {
                    self.playSequence();
                }, 1000);
            }
            else if (self.userTaps.length == self.sequence.length) {
                self.prompt = 'LOSER! Press start to play again.';
                self.userTaps = [];
                self.btnTaps = 0;
                self.sequence = [];
                self.timer = 10;
                self.enable('start');
            }


        },

        disable: function (btnId) {
            document.getElementById(btnId).disabled = true;
        },

        enable: function (btnId) {
            document.getElementById(btnId).disabled = false;
        }


    }

});
