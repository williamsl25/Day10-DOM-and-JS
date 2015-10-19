// var h3 = document.querySelectorAll('h3');
// var myH3 = [].slice.call(h3)
// myH3.forEach(function(currItem) {
//   console.log(currItem.innerHTML = "<h3> this will be the reading time </h3>")
//   });

// define average words read per minute
var wordsRead = 230;

// can't figure out how to get just a selection of text??? For ex, I want to be able to separate into time it takes to read first story then how long it takes to read 2nd story.  Currently, it totals all text content and gives time
var allText= document.body.textContent;

//make text into array
var textArr = allText.split(" ");
var readTime = function(array){
  var result = array.length/wordsRead;
  if(result < 1){
    return 1
  }
  return result;
  console.log(readTime)
}
var readTime = Math.round(readTime(textArr));
document.getElementById('time').innerHTML = readTime + " minutes";
