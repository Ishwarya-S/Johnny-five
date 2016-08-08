var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var spdt = new five.Switch(8);
  var led = new five.Led(9);

  spdt.on("open", function() {
    led.off();
  });

  spdt.on("close", function() {
    led.on();
  });
});

