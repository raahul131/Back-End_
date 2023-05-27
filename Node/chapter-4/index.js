const logEvents = require("./logEvent");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// Initialize object
const myEmitter = new MyEmitter();

// add listener for the lof event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //Emmit event
  myEmitter.emit("log", "log event emmited!");
}, 2000);
