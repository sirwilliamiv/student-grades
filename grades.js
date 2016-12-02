// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
//
//
//
// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?

// Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var a =[];
var b =[];
var c =[];
var d =[];
var f =[];
var highestGrade =0;
var lowestGrade = 101;

for (var i = 0; i < scores.length; i++) {


    if(scores[i] > highestGrade) {
      highestGrade = scores[i];
      // console.log(highestGrade)
    }
    if(scores[i]  < lowestGrade) {
       lowestGrade = scores[i];
    }

    if(scores[i] >= 91 && scores[i] <= 100) {
        a.push(scores[i]);
    }
    if (scores[i] >= 81 && scores[i] <= 90) {
        b.push(scores[i]);
    }
    if (scores[i] >= 71 && scores[i] <= 80) {
        c.push(scores[i]);
    }
    if (scores[i] >= 61 && scores[i] <= 70) {
        d.push(scores[i]);
    }
    if (scores[i] >= 50 && scores[i] <= 60) {
        f.push(scores[i]);
    }
  }

  console.log("There are " + a.length + " A grades")
  console.log("There are " + b.length + " B grades")
  console.log("There are " + c.length + " C grades")
  console.log("There are " + d.length + " D grades")
  console.log("There are " + f.length + " F grades")
  console.log("The highest grade is " + highestGrade)
  console.log("The lowest grade is " + lowestGrade)
