// Events to check that page is loaded (should be applıed to window object):
// DOMContentLoaded - DOM fully loaded
// load - all elements (including images and styles) are loaded
window.addEventListener('load',function(){
  // Select all images
  const images= document.querySelectorAll("img"); // Array of image
  // Select previous and next buttons
  const previousButton = document.getElementById("prev-btn");
  const nextButton =document.getElementById("next-btn");
  // Select indicators
  const indicators = document.getElementsByClassName('indicator');


  // Create application state to keep track of the current index
  let currentIndex = 0;

  // Show images function
  function showImage(index) {
    // Remove active class from all images
    images.forEach(removeActive);

    function removeActive() {
        images.classList.remove("active");
      }
    // For every element in images array call a function that removes "active" class

    // Remove active class from all indicators
    // Use loop to loop through all element of array
    if (index >= 0 && index < images.length) {
    // Add active class to the current image and indicator
    // images[]
    images[index].classList.add("active");
    }
  }

  // handle next click
  function showNextImage() {
    // increase currentIndex. What happens if the current index is > than number of images that we have?
    currentIndex++;
    if (currentIndex>2){
      currentIndex=0;
    };
    showImage(currentIndex);
    return currentIndex;
  }

  // handle previous click
  function showPrevImage() {
    // [image1, image2, image3]
    // decrease currentIndex. What happens if the current index is < 0?
    currentIndex--;
    if (currentIndex<0){
      currentIndex=2;
    };
    showImage(currentIndex);
    return currentIndex;
    // if else condition
  }

  // Add event listeneters for button clicks
  previousButton.addEventListener("click", showPrevImage());
  nextButton.addEventListener("click", showNextImage());

  // Switch images after 3 seconds automatically using setInterval function
  // Use 3000 value for 3 second delay
  setInterval(showNextImage(), 30000);
});