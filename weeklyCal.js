function Event(name) {
	this.name = name;
}

function Calender() {
	this.weekEvents= { monday:[], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: []}
}

Calender.prototype.addEvent = function(event, day) {
	this.weekEvents[day].push(event);
}}
