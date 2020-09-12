// Declare variables for date, time, and elements on the page
var date = new Date;
var currentDate = date.getDate();
var currentMonth = date.getMonth() + 1;
var currentYear = date.getFullYear();
var currentHour = date.getHours() + 1;

// variable array of all text rows and all buttons
var nineToFive = jQuery.makeArray(document.querySelectorAll("input.description"));
console.log(nineToFive);
var nineToFiveSave = jQuery.makeArray(document.querySelectorAll("div.saveBtn"));
console.log(nineToFiveSave);


// When the page is Loaded...
    // Display the current date
$("#currentDay").text(currentDate + "/" + currentMonth + "/" + currentYear);

    // Change the style of the blocks to match Past Present or Future
for (i=0; i<nineToFive.length; i++) {
  var indexHour = i+10;
  if (indexHour < currentHour) {
    nineToFive[i].classList.add("past");
     } else if (indexHour == currentHour) {
    nineToFive[i].classList.add("present");
  } else if (indexHour > currentHour) {
    nineToFive[i].classList.add("future");
     };
 };

    // Load any saved text from storage and apply it to the appropriate block of time



// When the save button is clicked...
    // Save the entered text from the appropriate field, to be reapplied to the field on re-visit
