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

  // Showcase Slider Functionality
  const slider = document.getElementById("showcase-slider");
  const leftBtn = document.getElementById("slide-left");
  const rightBtn = document.getElementById("slide-right");

  if (slider && leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -320, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      slider.scrollBy({ left: 320, behavior: "smooth" });
    });
  }
});
