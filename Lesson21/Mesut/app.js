// Events to check that page is loaded (should be applied to window object):
// DOMContentLoaded - DOM fully loaded
// load - all elements (including images and styles) are loaded
window.addEventListener("load", function () {
  // Select all images
  const images = [...document.querySelectorAll("img")]; // Array of image
  // Select previous and next buttons
  const previousButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  // Select indicators
  const indicators = [...document.getElementsByClassName("indicator")];

  // Create application state to keep track of the current index
  let currentIndex = 0;
  console.log(currentIndex);

  // Show images function
  function showImage(index) {
    // Remove active class from all images

    // For every element in images array call a function that removes "active" class
    images.forEach(image => image.classList.remove("active"));

    // Remove active class from all indicators
    indicators.forEach(indicator => indicator.classList.remove("active"));
    // Use loop to loop through all element of array
    indicators[index % indicators.length].classList.add("active");
    images[index % images.length].classList.add("active");
    // Add active class to the current image and indicator
    // images[]
  }

  // handle next click
  function showNextImage() {
    // increase currentIndex. What happens if the current index is > than number of images that we have?
    currentIndex++;
    showImage(currentIndex);
  }

  // handle previous click
  function showPrevImage() {
    currentIndex--;
    showImage(currentIndex);
    // [image1, image2, image3]
    // decrease currentIndex. What happens if the current index is < 0?
    // if else condition
  }

  // Add event listeners for button clicks
nextButton.addEventListener("click", showNextImage);
  previousButton.addEventListener("click", showPrevImage);
  setInterval(showNextImage, 3000);
  
 
  // Switch images after 3 seconds automatically using setInterval function
  // Use 3000 value for 3 second delay
});
