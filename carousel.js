//Carousel Script
// Store references to each carousel element
    const carousels = [
      { el: document.getElementById('carousel1'), index: 0 },
      { el: document.getElementById('carousel2'), index: 0 },
      { el: document.getElementById('carousel3'), index: 0 },
      { el: document.getElementById('carousel4'), index: 0 },
      { el: document.getElementById('carousel5'), index: 0 },
      { el: document.getElementById('carousel6'), index: 0 }

    ];

    // Function to move carousel slides
    function goToSlide(num, index) {
      const c = carousels[num - 1];     // Select the correct carousel
      c.index = index;                  // Update current index
      c.el.style.transform = `translateX(-${index * 100}%)`; // Shift slides horizontally
    }

//for Product Details    
const carousel = document.getElementById("carousel");
  const slides = carousel.querySelectorAll(".carousel-item");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length; // next slide (loop)
    showSlide(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length; // previous slide (loop)
    showSlide(current);
  });

  // Initialize first slide
  showSlide(current);

function blitz() { // Redirects to "Productdetails.html" after a 0.5s delay
    setTimeout(() => location.href = "Blitz1200.html", 500); 
    }

function candy() { // Redirects to "Productdetails.html" after a 0.5s delay
    setTimeout(() => location.href = "Candy800.html", 500); 
    }

function fun() { // Redirects to "Productdetails.html" after a 0.5s delay
    setTimeout(() => location.href = "Fun350r.html", 500); 
    }    

function econo() { // Redirects to "Productdetails.html" after a 0.5s delay
    setTimeout(() => location.href = "Econo800.html", 500); 
    }

function ecargo() { // Redirects to "Productdetails.html" after a 0.5s delay
    setTimeout(() => location.href = "Ecargo.html", 500); 
    }

function econoII() { // Redirects to "Productdetails.html" after a 0.5s delay
    setTimeout(() => location.href = "EconoII.html", 500); 
    }