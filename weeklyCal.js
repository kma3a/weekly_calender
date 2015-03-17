function Event(name, time) {
	this.name = name;
	this.time = time;
}

Event.prototype.viewEvents = function() {
	console.log(this.name + " is at " + this.time);	
}

function Calender() {
	this.weekEvents= { monday:[], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: []}
}

Calender.prototype.addEvent = function(event, day) {
	this.weekEvents[day].push(event);
}}
