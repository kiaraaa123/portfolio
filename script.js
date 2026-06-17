const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const timeline = document.querySelector("[data-timeline]");

if (timeline) {
  const tabs = timeline.querySelectorAll(".timeline-tab");
  const panels = timeline.querySelectorAll(".timeline-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const step = Number(tab.dataset.step);

      tabs.forEach((item) => item.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      tab.classList.add("active");
      panels[step].classList.add("active");
    });
  });
}

const journeyCards = document.querySelectorAll(".journey-card");

journeyCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("flipped");
    }
  });
});
