forEach loop ex
// Create an array.
var numbers = [10, 11, 12];

// Call the addNumber callback function for each array element.

var sum = 0;
numbers.forEach(
    function addNumber(value) { sum += value; }
);
document.write(sum);
// Output: 33


titleDiv.textContent = "Here is the Title"
<!-- "Here is the Title" -->
titleDiv
<title>​Here is the Title​</title>​

titleDiv.innerHTML = "Helllo"
<!-- "Helllo" -->
titleDiv
<!-- <title>​Helllo​</title>​ -->
document.querySelectorAll('div').innerHtml = "";
""
titleDiv
<!-- <title>​Helllo​</title>​ -->


<!-- how to change something in the HTML with javascript: -->
var h1 = document.querySelectorAll('h1');
var myH1 = [].slice.call(h1)
myH1.forEach(function(currItem) {
  console.log(currItem.innerHTML = "<h1> this is the h1 </h1>")
  });
