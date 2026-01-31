// Scroll Animation Script
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
});

// Initialize Owl Carousel for Showcase Slider (after DOM and jQuery loaded)
$(document).ready(function () {
  // Showcase Slider with Owl Carousel
  $("#showcase-slider").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    navText: [
      '<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>',
      '<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>',
    ],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });

  // Custom navigation buttons
  $("#slide-left").click(function () {
    $("#showcase-slider").trigger("prev.owl.carousel");
  });

  $("#slide-right").click(function () {
    $("#showcase-slider").trigger("next.owl.carousel");
  });
});
