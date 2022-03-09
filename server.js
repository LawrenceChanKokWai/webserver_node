const logEvents = require("./logEvents");
const EventEmitter = require("events");

class Emitter extends EventEmitter {}

//initalise the object
const emitter = new Emitter();

//add listener for the log event
emitter.on("log", (msg) => {
	logEvents(msg);
});

//setTimer
setTimeout(() => {
	//emit the event
	emitter.emit("log", "Log event emitted");
}, 2000);
