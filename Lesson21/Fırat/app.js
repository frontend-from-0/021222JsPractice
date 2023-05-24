// Events to check that page is loaded (should be applıed to window object):
// DOMContentLoaded - DOM fully loaded
// load - all elements (including images and styles) are loaded

// DİFFERENT SOLVİNG OF THE PROBLEM
// window.addEventListener("load", () => {
//   // Select all images
//   const images = document.querySelectorAll("img");
//   // Select previous and next buttons
//   const previousButton = document.getElementById("prev-btn");
//   const nextButton = document.getElementById("next-btn");
//   // Select indicators
//   const indicators = document.getElementsByClassName("indicator");

//   let currentIndex = 0;

//   nextButton.addEventListener("click", () => {
//     images[currentIndex].classList.remove("active");
//     indicators[currentIndex].classList.remove("active");

//     currentIndex++;
//     if (currentIndex >= images.length) {
//       currentIndex = 0;
//     }

//     images[currentIndex].classList.add("active");
//     indicators[currentIndex].classList.add("active");
//   });

//   previousButton.addEventListener("click", () => {
//     images[currentIndex].classList.remove("active");
//     indicators[currentIndex].classList.remove("active");

//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = images.length - 1;
//     }

//     images[currentIndex].classList.add("active");
//     indicators[currentIndex].classList.add("active");
//   });
// });

window.addEventListener("load", () => {
  const images = document.querySelectorAll("img");
  const previousButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  const indicators = document.getElementsByClassName("indicator");

  let currentIndex = 0;

  function showImage(index) {
    images.forEach(function (image) {
      image.classList.remove("active");
    });
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove("active");
    }

    if (index >= 0 && index < images.length) {
      images[index].classList.add("active");
      indicators[index].classList.add("active");
      currentIndex = index;
    }
  }

  function showNextImage() {
    let newIndex = currentIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    showImage(newIndex);
  }

  function showPreviousImage() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    showImage(newIndex);
  }

  nextButton.addEventListener("click", () => {
    showNextImage();
  });
  previousButton.addEventListener("click", () => {
    showPreviousImage();
  });
  showImage(currentIndex);
  setInterval(showNextImage, 3000);
});

// Create application state to keep track of the current index
// Show images function
// Remove active class from all images
// For every element in images array call a function that removes "active" class
// Remove active class from all indicators
// Use loop to loop through all element of array
// Add active class to the current image and indicator
// images[]
// handle next click
// increase currentIndex. What happens if the current index is > than number of images that we have?
// handle previous click
// [image1, image2, image3]
// decrease currentIndex. What happens if the current index is < 0?
// if else condition
// Add event listeneters for button clicks
// Switch images after 3 seconds automatically using setInterval function
// Use 3000 value for 3 second delay
