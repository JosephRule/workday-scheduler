
var loadOrInitalizeHours = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"))

    if (!schedule) {
        schedule = []
        for (var i = 6; i< 20; i++) {
            schedule.push({id: i, text: ""})
        }
    };

    return schedule;
}

var createHourRow = function(scheduleItem) {
    var rowEl = $("<div>")
        .addClass("row")
        .attr("data-id", scheduleItem.id);
    var hourEl = $("<div>")
        .addClass("col-1 hour time-block")
        .text(moment({hour:scheduleItem.id}).format("hha"));
    var textBoxEl = $("<textarea>")
        .addClass("col")
        .text(scheduleItem.text);
    var buttonEl = $("<button>")
        .addClass("col-1 saveBtn bi bi-save");
    var saveEl = $("<span>")
        .addClass("oi oi-task");


    buttonEl.append(saveEl);
    rowEl.append(hourEl, textBoxEl, buttonEl);

    $(".container").append(rowEl)
}


var createScheduler = function() {
    for (var i = 0; i<schedule.length; i++) {
        createHourRow(schedule[i])
    }
}

var checkTimeStatus = function(hour) {
    // given time from array & current time , is row class past present or future?
}


var updateJumboDate = function() {
    $(".date").text(moment().format("dddd MMMM Do"));
}


$(document).on("click", ".saveBtn", function() {
    rowEl = $(this)
        .parents()[0]
    id = rowEl.getAttribute("data-id")
    text = $(rowEl).children()[1].value

    schedule[id].text = text
    localStorage.setItem("schedule", JSON.stringify(schedule));
  });

schedule = loadOrInitalizeHours();
updateJumboDate();
createScheduler();

setInterval(function () {
    updateJumboDate();
     }, 1200000);