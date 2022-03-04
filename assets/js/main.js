var currentDayEl = document.querySelector("#currentDay")
var scheduleContainerEl = document.querySelector("#scheduleContainer")

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

var createHourRow = function(scheduleItem) {
    console.log(scheduleItem.hour.format("hha"))
    rowEl = document.createElement('div');
    // add row id count with text so that we can update the saved array
    rowEl.classList = "row";

    hourEl = document.createElement("div");
    // add function call to update to past, present, future class
    hourEl.classList = "col-1 hour time-block";
    hourEl.textContent = scheduleItem.hour.format("hha");
    rowEl.appendChild(hourEl);

    textboxEl = document.createElement("textarea");
    textboxEl.classList = "col";
    textboxEl.textContent = scheduleItem.text;
    rowEl.appendChild(textboxEl);

    buttonEl = document.createElement("button");
    buttonEl.classList = "col-1 saveBtn bi bi-save";
    saveEl = document.createElement("span");
    saveEl.classList = 'oi oi-task';
    buttonEl.appendChild(saveEl);
    rowEl.appendChild(buttonEl);

    scheduleContainerEl.appendChild(rowEl);
}

var createScheduler = function() {
    for (var i = 0; i<schedule.length; i++) {
        createHourRow(schedule[i])
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