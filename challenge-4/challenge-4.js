// Challenge 4
/* The createEmitter function should create a new EvenEmitter and register "open" and "close" event listeners. The callbacks for those events should be onOpen and onClose arguments, respectively. The opened and closed methods should raise the "open" and "close" events on the EvenEmitter they will receive as emitter arguments. The callbacks should be invoked only once per emitter.
For example, after executing the following code, it print "Opened!" and then "Closed!":*/

// let emitter = createEmitter(
//   () => console.log("Opened!"),
//   () => console.log("Closed!")
// );

//Start code here :
const events = require("events");
const newEmitter = new events.EventEmitter();

function createEmitter(onOpen, onClose) {
  newEmitter.once("open", onOpen);
  newEmitter.once("close", onClose);
}

let emitter = createEmitter(
  () => console.log("Opened!"),
  () => console.log("Closed!")
);

function opened(emitter) {
  newEmitter.emit("open", emitter);
}

function closed(emitter) {
  newEmitter.emit("close", emitter);
}

opened(emitter);
closed(emitter);
