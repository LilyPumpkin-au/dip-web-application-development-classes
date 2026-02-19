const bubbles = document.querySelectorAll(".bubble");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.5,
  },
);

bubbles.forEach((bubble) => {
  observer.observe(bubble);
});
