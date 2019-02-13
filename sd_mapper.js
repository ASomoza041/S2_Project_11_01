"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author:  Alex A Somoza 
   Date:  2-12-19 

*/
//the variable thisTime sets it to the desired date/time.
var thisTime = new Date("February 12, 2019, 06:02:28");
var timeStr = thisTime.toLocaleString();

//The code below inserts the value of the thisTime varibale in the element with the id "timestamp".
document.getElementById("timeStamp").innerHTML = timeStr;

//The code below sets the variable named "thisHour" to the value of hours into the variable "thisTime"
var thisHour = thisTime.getHours();

//The code below sets the variable named "thisMonth" to the value of months into the variable "thisTime"
var thisMonth = thisTime.getMonth();

//The code below sets an eqition to solve which map number is needed.
var mapNum = (2 * thisMonth + thisHour) % 24;

// Thec code below creates HTML code where the vavlie of mapNum is added into the text string of html code. 
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

//The code below inserts the value of the imgStr varibale into the element with the id "planisphere".
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);