/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let images = ['./assets/carousel/trees.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/mountains.jpeg', './assets/carousel/turntable.jpeg'];

function carouselMaker(attr){
  let carousel = document.createElement('div');
  let carouselLeft = document.createElement('div');
  let carouselImg1 = document.createElement('img');
  let carouselImg2 = document.createElement('img');
  let carouselImg3 = document.createElement('img');
  let carouselImg4 = document.createElement('img');
  let carouselRight = document.createElement('div');

  // let carouselImages = [];

  // attr.forEach(item => {
  //   carouselImages.push(item);
  //   console.log(item);
  // });

  carouselLeft.textContent = '<';
  carouselRight.textContent = '>';
  // carouselImg1.src = carouselImages[0 + carouselIndex];
  // carouselImg1.style.display = 'block';
  // carouselImg2.src = carouselImages[1 + carouselIndex];
  // carouselImg3.src = carouselImages[2 + carouselIndex];
  // carouselImg4.src = carouselImages[3 + carouselIndex];

  carousel.classList.add('carousel');
  carouselLeft.classList.add('left-button');
  carouselRight.classList.add('right-button');

  carousel.append(carouselLeft, carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselRight);

  carouselLeft.addEventListener('click', () => {
    moveCarousel('left');
    
  });

  carouselRight.addEventListener('click', () => {
    moveCarousel();
  });

  console.log(carousel);
  return carousel;

}

let carouselParent = document.querySelector('.carousel-container');
carouselParent.append(carouselMaker(images));

let carouselIndex = 0;

let carouselImages = document.querySelectorAll('.carousel img');

carouselImages[0].src = images[0 + carouselIndex];
carouselImages[0].style.display = 'block';
carouselImages[1].src = carouselImages[1 + carouselIndex];
carouselImages[2].src = carouselImages[2 + carouselIndex];
carouselImages[3].src = carouselImages[3 + carouselIndex];

function moveCarousel(arg){
  if(arg === 'left'){
    carouselIndex -= 1;
  } else {
    carouselIndex += 1;
  }

  console.log(carouselIndex);

}