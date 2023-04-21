// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

var currentDayEl = document.getElementById("currentDay");
currentDayEl.textContent = dayjs().format("dddd, MMMM D YYYY h:mm A");

var currentHour = dayjs().hour();
var saveBtn = document.getElementsByClassName("btn saveBtn col-2 col-md-1");
var timeBlock = document.getElementsByClassName(".time-block");
var timeBlockId = document.getElementsByClassName(".time-block").id;
var textArea = document.querySelector(".description");
var textAreaValue = textArea.value;


});


$(function() { 

});
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var saveBtns = document.querySelectorAll(".saveBtn");
  saveBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var hour = this.parentNode.getAttribute("id");
      var description = this.parentNode.querySelector(".description").value;
      localStorage.setItem(hour, description);
    });
  });







  
  

  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var hourEl = document.getElementById("hour-" + i);


  if (i < currentHour) {
    timeBlock.classList.add("past");
    timeBlock.classList.remove("present", "future");
  } else if (i === currentHour) {
    timeBlock.classList.add("present");
    timeBlock.classList.remove("past", "future");
  } else { (i > currentHour)
    timeBlock.classList.add("future");
    timeBlock.classList.remove("past", "present");
  }

   
 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var hourEl = document.getElementById("hour-" + i);
  var textArea = hourEl.querySelector(".description");
  var textAreaValue = localStorage.getItem("hour-" + i);
  textArea.value = textAreaValue;
  
    


  

  
  //
  // TODO: Add code to display the current date in the header of the page.
      

 
