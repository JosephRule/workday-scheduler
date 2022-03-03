var currentDayEl = document.querySelector("#currentDay")

var loadOrInitalizeHours = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"))

    if (!schedule) {
        schedule = []
        for (var i = 0; i< 24; i++) {
            schedule.push({hour: moment({hour:i}), text: ""})
        }
    };

    return schedule;
}

var createHourRow = function(hour) {
    // create a div with class row
    // append div col with hour text
    // append div col with
    // append button
}

var createScheduler = function() {
    for (var i = 0; i<schedule.length; i++) {
        createHourRow(schedule[i].hour)
    }
}

var checkTimeStatus = function(hour) {
    // given time from array & current time , is row class past present or future?
}

var saveText = function(event) {


}

var updateJumboDate = function() {
    currentDayEl.textContent = moment().format("dddd MMMM Do");
}

schedule = loadOrInitalizeHours();
updateJumboDate();
createScheduler();