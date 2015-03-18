var sget = require('sget');

function Event(name, time) {
	this.name = name;
	this.time = time;
}

Event.prototype.viewEvents = function() {
	console.log(this.name + " is at " + this.time);	
}

function Calender() {
	this.weekEvents= { "monday":[], "tuesday": [], "wednesday": [], "thursday": [], "friday": [], "saturday": [], "sunday": []}
}

Calender.prototype.addEvent = function(event, day) {
	if(!this.weekEvents[day]) {
		console.log("day is not found");
	} else {
		this.weekEvents[day].push(event);
	}
}
Calender.prototype.deleteEvent = function(eventName, day) {
	var foundEvent = false;
	this.weekEvents[day].forEach(function(event){
		if (event.name === eventName) {
			return foundEvent = event;
		}
	})
	var eventIndex = this.weekEvents[day].indexOf(foundEvent);
	if (eventIndex === -1) {
		console.log(eventName + " was not found");
	} else {
		this.weekEvents[day].splice(eventIndex,1);
		console.log( eventName + " has been removed from " + day);
	}
}
Calender.prototype.findEventByName = function(eventName) {
	var foundEvent = false;
	var foundDay;
	for (var day in this.weekEvents) {
		this.weekEvents[day].forEach(function(event) {
			if(event.name === eventName) {
				foundDay = day
				return foundEvent = event;
			}
		})
	}
	if (foundEvent) {
		console.log("On "+ foundDay+ " there is " +foundEvent.viewEvents());
	} else {
		console.log( eventName + " was not found");
	}
}
Calender.prototype.viewEventsOnDay = function(day) {
	if (!this.weekEvents[day]) {
		console.log("day is not found");
	} else {
		console.log("On " + day + " there is:");
		this.weekEvents[day].forEach(function(event) {
			event.viewEvents();
		})	
	}
}	

Calender.prototype.viewAllEvents = function() {
	for (var day in this.weekEvents) {
		this.viewEventsOnDay(day);
	}
}

function WorkCal(myCal) {
	this.myCal= myCal;
}
function getInput(message) {
		return sget(message).trim().toLowerCase();
	};
	
WorkCal.prototype.startGame = function() {
	
		console.log("1- view all events\n2- view events on a day\n3- create and add event to a day\n4- remove event from day\n5- find events by name\n6- exit the calender");
		userInput = getInput("What would you like to do?");
		switch(userInput) {
			case "1": 
				this.myCal.viewAllEvents();
				this.startGame();
				break;
			case "2": 
				this.myCal.viewEventsOnDay(getInput("What day would you like to view? "));
				this.startGame();
				break;
			case "3": 
				var newEvent = new Event(getInput("What is the name of your event?"), getInput("What time is your event at?"));
				this.myCal.addEvent(newEvent, getInput("What day does this event is on?"));
				this.startGame();
				break;
	
				break;
			case "4":
				this.myCal.deleteEvent(getInput("What event would you like to delete?"),getInput("What day is that event on?"));
				this.startGame();
				break;
			case "5": 
				this.myCal.findEventByName(getInput("What is the name of the event you would like to see?"));
				this.startGame();
				break;
	
				break;
			case "6": 
				this.exit();
				break;
			default:
				console.log("Invalid Input try again");
				this.startGame();
				break;
	
		}	
};
WorkCal.prototype.exit = function() {
		console.log("Thanks for playing");
	};

myWorkCal = new WorkCal(new Calender);
myWorkCal.startGame();	


