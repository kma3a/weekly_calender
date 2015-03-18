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

var workCal =  {
	myCal: new Calender(),
	getInput: function(message) {
		return sget(message).trim().toLowerCase();
	},
	menu: {
		1: this.myCal.viewAllEvents();
		2: this.myCal.viewEventsOnDay(getInput("What day would you like to view? "));
		3: this.addEvent();
		4: this.myCal.deleteEvent(getInput("What event would you like to delete?"),getInput("What day is that event on?"));
		5: this.myCal.findEventsByName(getInput("What is the name of the event you would like to see?")); 
	},
	addEvent: function() {
		var newEvent = new Event(this.getInput("What is the name of your event?"), this.getInput("What time is your event at?");
		this.myCal.addEvent(newEvent, this.getInput("What day does this event is on?");
	},
	startGame: function() {
		console.log("1- view all events\n2- view events on a day\n3- create and add event to a day\n4- remove event from day\n5- find events by name\6- exit the calender");
		userInput = this.getInput("What would you like to do?);
		if ( this.menu[userInput]) {
			this.menu[userInput];
			startGame();
		} else if (userInput === 6) {
			return this,exit();
		} else {
			console.log("Invalid Input try again");
			arguments.callee();
		}	
	},
	exit: function() {
		console.log("Thanks for playing");
	}
}
