var chico = ["UpperBidwell", "LowerBidwell", "WREC", "MadisonBearGarden", "Downtown"]
var currentIndex = 1000;

function shuffleGallery()
{
  var arrayLength = chico.length;
  do {
    var newIndex = Math.floor(Math.random() * (arrayLength));     //Courtesy of W3schools.com
  }
  while (currentIndex == newIndex);
  currentIndex = newIndex;
  console.log(chico[newIndex]);
}
