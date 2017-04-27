var chico = [
  {description: "Upper Bidwell",
   picture: "http://bidwellpark.org/wp-content/uploads/2014/12/California-Poppies-in-Bidwell-Park.jpg",
   from: "bidwellpark.org"
  },
  {description: "Lower Bidwell",
   picture: "https://s-media-cache-ak0.pinimg.com/564x/66/ac/32/66ac32e8457e15a0675f219e77599eb5.jpg",
   from: "pinterest.com"
  },
  {description: "WREC",
   picture: "http://www.sasaki.com/media/files/02sanfranciscoca-state-university-chico-1.jpg",
   from: "sasaki.com"
  },
  {description: "Madison Bear Garden",
   picture: "https://www.downtownchico.com/webart/listings/headers/x71.jpg.pagespeed.ic.Uoa2c-Foc-.jpg",
   from: "downtownchico.com"
  },
  {description: "Downtown",
   picture: "http://www.downtownchico.com/webart/downtown-chico.jpg",
   from: "downtownchico.com"
  }
];

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
  document.getElementById("picture").src = chico[newIndex].picture;
  document.getElementById("caption").innerHTML = chico[newIndex].description;
  document.getElementById("source").innerHTML = "Courtesy of: " + chico[newIndex].from;
}
