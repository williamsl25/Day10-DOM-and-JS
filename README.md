
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
