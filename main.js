// var h3 = document.querySelectorAll('h3');
// var myH3 = [].slice.call(h3)
// myH3.forEach(function(currItem) {
//   console.log(currItem.innerHTML = "<h3> this will be the reading time </h3>")
//   });

// define average words read per minute
var wordsRead = 230;

// can't figure out how to get just a selection of text??? For ex, I want to be able to separate into time it takes to read first story then how long it takes to read 2nd story.  Currently, it totals all text content and gives time
// var allText= document.body.textContent;
// // string
// //make text into array
// var textArr = allText.split(" ");
// var readTime = function(array){
//   var result = array.length/wordsRead;
//   if(result < 1){
//     return 1
//   }
//   return result;
//   console.log(readTime)
// }
// var readTime = Math.round(readTime(textArr));
// document.getElementById('time').innerHTML = readTime + " minutes";
// *********************************************
var story1 = document.getElementById('story1');
// story2.textContent => returns the text of story2

//make text into array
var story1Arr = story1.textContent.split(" ");
// thanks to Paul Draper on stackOverflow for the tip about how to remove whitespace from an array http://stackoverflow.com/questions/20668872/remove-whitespace-only-array-elements
story1Arr= story1Arr.filter(function(str) {
    return /\S/.test(str);
});
var readTime = function(array){
  var result = array.length/wordsRead;
  if(result < 1){
    return 1
  }
  return result;
  console.log(readTime)
}
var readTime = Math.round(readTime(story1Arr));
document.getElementById('time1').innerHTML = readTime + " minutes";


// ****************************************
var story2 = document.getElementById('story2');
// story2.textContent => returns the text of story2

//make text into array
var story2Arr = story2.textContent.split(" ");
// thanks to Paul Draper on stackOverflow for the tip about how to remove whitespace from an array http://stackoverflow.com/questions/20668872/remove-whitespace-only-array-elements
story2Arr= story2Arr.filter(function(str) {
    return /\S/.test(str);
});
var readTime = function(array){
  var result = array.length/wordsRead;
  if(result < 1){
    return 1
  }
  return result;
  console.log(readTime)
}
var readTime = Math.round(readTime(story2Arr));
document.getElementById('time2').innerHTML = readTime + " minutes";
