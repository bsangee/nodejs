//Import events module

var events = require('events');

//Create an Event emitter object

var eventEmitter = new events.EventEmitter();

//Create an event handler as follows:

var connectHandler = function connected() {

	console.log("connection successful.");

	//Fire the data received event
	eventEmitter.emit("data_recevied");
	console.log("Fired data recevied event handler");
}

//Bind the connection event with the handler

eventEmitter.on("connection", connectHandler);

//Bind the data_recevied with an anonymous function
eventEmitter.on("data_recevied", function() {
	console.log("data received successfully");
});

//Fire the connection event
eventEmitter.emit("connection");

console.log("Program Ended");
 
