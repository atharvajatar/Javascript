
/*
Creating a function to choose the bg color with given conditions with event handler with the function
*/
document.getElementById('changeColorButton').addEventListener('click',
 function() {
  var customNumber = parseInt(document.getElementById('customNumber').value);
  var studentId = "200510624"; // my student number

  document.getElementById('studentId').innerText = studentId;

  if (customNumber < 0 || customNumber > 100) {
    document.body.style.backgroundColor = 'red';
  } else if (customNumber >= 0 && customNumber <= 20) {
    document.body.style.backgroundColor = 'green';
  } else if (customNumber > 20 && customNumber <= 40) {
    document.body.style.backgroundColor = 'blue';
  } else if (customNumber > 40 && customNumber <= 60) {
    document.body.style.backgroundColor = 'orange';
  } else if (customNumber > 60 && customNumber <= 80) {
    document.body.style.backgroundColor = 'purple';
  } else if (customNumber > 80 && customNumber <= 100) {
    document.body.style.backgroundColor = 'yellow';
  }
});
 /*function with event handler within for chosing a random number with predefined method math random to get a random
  number and runing the change color conditions to get the bg color */
  document.getElementById('changeRandomColorButton').addEventListener('click',
   function() {
  var randomInput = Math.floor(Math.random() * 100) + 1;
  document.getElementById('customNumber').value = randomInput;
  document.getElementById('changeColorButton').click();
});

//array for the images
var imageOptions = [ 
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg"
];

//creating options from the array mentioned to choose the image
var imageSelect = document.getElementById('imageSelect'); 
for (var i = 0; i < imageOptions.length; i++) {
  var option = document.createElement('option');
  option.text = imageOptions[i];
  imageSelect.add(option);
}

//event handlers
document.getElementById('imageSelect').addEventListener('change', function() {
  var selectedImage = document.getElementById('selectedImage');
  var selectedOption = imageSelect.options[imageSelect.selectedIndex].value;
  selectedImage.src = 'img/' + selectedOption;
});