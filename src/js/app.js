import { createMap } from "./utils";

window.initMap = function () {
  const observerOptions = {
    rootMargin: "400px",
    threshold: 0,
  };

  const mapElem = document.getElementById("map");

  const observer = new IntersectionObserver((entries, observer) => {
    const isIntersecting =
      typeof entries[0].isIntersecting === "boolean" ? entries[0].isIntersecting : entries[0].intersectionRatio > 0;
    if (isIntersecting) {
      createMap();
      observer.unobserve(mapElem);
    }
  }, observerOptions);

  observer.observe(mapElem);
};
