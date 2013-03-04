app.service('DateTime', function() {
	this.getCurrentWeek = function() {
		return moment().week();
	};

	this.getCurrentYear = function() {
		return moment().years();
	};

	this.getCurrentDay = function() {
		return moment().day();
	};

	this.getDaysOfWeek = function(year, week, day) {
		return moment().years(year).week(week).day(day + 1).toDate();
	};

	this.getNextMonday = function() {
		var nextWeek = this.getCurrentWeek() + 1;
		return moment().week(nextWeek).day(1).toDate();
	};
});