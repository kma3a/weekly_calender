var sget = require('sget');

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
Calender.prototype.deleteEvent = function(eventName, day) {
	var foundEvent = false;
	this.weekEvents[day].forEach(function(event){
		if (event.name === eventName) {
			return foundEvent = event;
		}
	})
	var eventIndex = this.weekEvents.indexOf(foundEvent);
	if (eventIndex === -1) {
		console.log(eventName + " was not found");
	} else {
		this.weekEvents.splice(eventIndex,1);
		console.log( eventName + " has been removed from " + day);
	}
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
	console.log("On " + day + " there is:");
	this.weekEvents[day].forEach(function(event) {
		event.viewEvent();
	})	
}

Calender.prototype.viewAllEvents = function() {
	for (var day in this.weekEvents) {
		this.viewEventsOnDay(day);
	}
}	

