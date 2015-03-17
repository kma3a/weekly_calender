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
}

Calender.prototype.findEventByName = function(eventName) {
	var foundEvent = false;
	for (var day in this.weekEvents) {
		this.weekEvents[day].forEach(function(event) {
			if(event.name === eventName) {
				return foundEvent = event;
			}
		}
	}
	return foundEvent;
}
Calender.prototype.viewEventsOnDay = function(day) {
	this.weekEvents[day].forEach(function(event) {
		event.viewEvent();
	})	
}
