const EventEmiter = require("events");

const emitter = new EventEmiter();

emitter.on("greet", () => {
  console.log("Hello this is the great event");
});

emitter.emit("great");

setInterval(() => {
  emitter.emit("tick");
}, 2000);

emitter.on("tick", () => {
  console.log("Tick event occured.");
});


