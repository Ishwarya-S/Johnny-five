var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var dare = [
    "01111100",
    "01000100",
    "01000100",
    "01111100",
    "01000010",
    "01000010",
    "01000010",
    "01111110"
];
  
  var matrix = new five.Led.Matrix({
   
    pins: {
      data: 2,
      clock: 3,
      cs: 4
    }
});

  matrix.on();

  var msg = "BLUETRONICS".split("");
  

  // Display each letter for 1 second
  function next() {
    var c;

    if (c = msg.shift()) {
      matrix.draw(c);
      setTimeout(next, 2000);
    }
  }

  next();

  this.repl.inject({
    matrix: matrix,
    // Type "dare()" in the REPL to
    // display a dare!
    dare: function() {
      matrix.draw(dare);
    }

  });
});
