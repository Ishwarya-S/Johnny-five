var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Plug the Touch module into the
  // Grove Shield's D4 jack. Use
  // the Button class to control.
  var touch = new five.Button(11);

  // Plug the LED module into the
  // Grove Shield's D6 jack. See
  // grove-led for more information.
  var led = new five.Led(6);

  // The following will turn the Led
  // on and off as the touch is
  // pressed and released.
  touch.on("press", function() {
    led.off();
  });

  touch.on("release", function() {
    led.on();
  });
});

