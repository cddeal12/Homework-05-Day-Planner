// Declare variables for date, time, and elements on the page
date = new Date;
currentDate = date.getDate();
currentMonth = date.getMonth() + 1;
currentYear = date.getFullYear();
currentHour = date.getHours() + 1;

// When the page is Loaded...
// Display the current date
$("#currentDay").text(currentDate + "/" + currentMonth + "/" + currentYear);

// Change the style of the blocks to match Past Present or Future
function handleColor(hour) {

}

// Load any saved text from storage and apply it to the appropriate block of time

// When the save button is clicked...
// Save the entered text from the appropriate field, to be reapplied to the field on re-visit

