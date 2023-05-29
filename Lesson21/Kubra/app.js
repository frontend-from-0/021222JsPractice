// Events to check that page is loaded (should be applıed to window object):
// DOMContentLoaded - DOM fully loaded
// load - all elements (including images and styles) are loaded
window.addEventListener('load',function(){
  // Select all images
  const images = document.querySelectorAll("img"); // Array of image
  // Select previous and next buttons
  const previousButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  // Select indicators
  const indicators = document.querySelectorAll('.indicator');
  // Create application state to keep track of the current index
  let currentIndex = 0;
  
  // Show images function
  function showImage() {
    // Remove active class from all images
    images.forEach((img) => {
      img.classList.remove('active');
    }); 
    // For every element in images array call a function that removes "active" class
    // Remove active class from all indicators
    indicators.forEach((indicator) => {
      indicator.classList.remove('active');
    });
    // Use loop to loop through all element of array

    // Add active class to the current image and indicator
    // images[]
      images[currentIndex].classList.add("active");  
      indicators[currentIndex].classList.add('active');
  };

  // handle next click
  function showNextImage() {
    // increase currentIndex. What happens if the current index is > than number of images that we have?
    currentIndex++;
    if(currentIndex >= images.length) {
      currentIndex = 0;
    };
    showImage(currentIndex);
  }

  // handle previous click
  function showPrevImage() {
    currentIndex--;
    if(currentIndex < 0){
      currentIndex = images.length - 1;
    };
    showImage(currentIndex);
    // [image1, image2, image3]
    // decrease currentIndex. What happens if the current index is < 0?
    // if else condition
  }

  // Add event listeneters for button clicks
  nextButton.addEventListener('click', showNextImage);
  previousButton.addEventListener('click', showPrevImage);
  

  // Switch images after 3 seconds automatically using setInterval function
  // Use 3000 value for 3 second delay
  
  let timer = setInterval(showNextImage, 3000);
});