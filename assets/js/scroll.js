function revealOnScroll() {
  const revealItems = Array.from(document.querySelectorAll(".reveal")).filter((item) => !item.dataset.revealBound);
  if (!revealItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = entry.target.dataset.delay || "0";
      entry.target.style.setProperty("--delay", `${delay}ms`);
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px"
  });

  revealItems.forEach((item) => {
    item.dataset.revealBound = "true";
    observer.observe(item);
  });
}

function improveAnchorScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    if (link.dataset.scrollBound) return;
    link.dataset.scrollBound = "true";
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  revealOnScroll();
  improveAnchorScrolling();
});

document.addEventListener("components:loaded", () => {
  revealOnScroll();
  improveAnchorScrolling();
});
