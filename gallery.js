var chico = ["UpperBidwell", "LowerBidwell", "WREC", "MadisonBearGarden", "Downtown"]
var currentIndex = 1000;    //make sure that the variable is not initialized with 0 to length

function shuffleGallery()
{
  var arrayLength = chico.length;
  var newIndex = 0;
  do {
    newIndex = Math.floor(Math.random() * (arrayLength));     //Courtesy of W3schools.com
  }
  while (currentIndex == newIndex);
  currentIndex = newIndex;
  console.log(chico[newIndex]);
}
