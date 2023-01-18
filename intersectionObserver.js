const shaker = document.querySelector(".sprite");

const options = {
  root: null,
  threshold: 0.9,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("animation");
    observer.unobserve(entry.target);
  });
}, options);

observer.observe(shaker);
