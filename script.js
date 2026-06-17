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

/* About section timeline */
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

      if (panels[step]) {
        panels[step].classList.add("active");
      }
    });
  });
}

/* Journey modal cards */
const modalOverlay = document.querySelector("[data-modal-overlay]");
const modalContent = document.querySelector("[data-modal-content]");
const modalClose = document.querySelector(".modal-close");
const modalTriggers = document.querySelectorAll("[data-modal]");

const journeyContent = {
  communications: `
    <p class="card-kicker">2016–2022</p>
    <h3>Communications + Web Content</h3>
    <p><strong>The Action Alliance | Communications Coordinator</strong></p>
    <p>This chapter built my foundation in writing, web content management, accessibility, campaign messaging, and cross-functional communication.</p>
    <ul>
      <li>Managed and updated WordPress website content, blogs, pages, and WooCommerce content.</li>
      <li>Supported a large-scale website redesign focused on accessibility and user experience.</li>
      <li>Created and edited campaign copy, newsletters, social content, and fundraising materials.</li>
    </ul>
    <ul class="modal-tools">
      <li>WordPress</li>
      <li>WooCommerce</li>
      <li>Copywriting</li>
      <li>Accessibility</li>
    </ul>
  `,
  content: `
    <p class="card-kicker">2022–2025</p>
    <h3>Digital Content + CMS Work</h3>
    <p><strong>SafetyChain Software + Intercept Health</strong></p>
    <p>This chapter expanded my work into CMS publishing, SEO, analytics, newsletters, social media management, and content workflows.</p>
    <ul>
      <li>Published and optimized blogs, landing pages, web pages, newsletters, and digital content.</li>
      <li>Worked across HubSpot, WordPress, Elementor, Wix, Shopify, and Google Analytics.</li>
      <li>Managed content for 11 social media accounts and increased engagement by 48%.</li>
    </ul>
    <ul class="modal-tools">
      <li>HubSpot</li>
      <li>SEO</li>
      <li>Google Analytics</li>
      <li>Newsletters</li>
    </ul>
  `,
  campaigns: `
    <p class="card-kicker">2025–Now</p>
    <h3>Campaign Operations + TPM Growth</h3>
    <p><strong>Capital One | Messaging Execution Specialist</strong></p>
    <p>This chapter brought together digital execution, QA, stakeholder coordination, documentation review, and project management.</p>
    <ul>
      <li>Support an average of 8 customer-facing digital campaigns per month across 14 lines of business.</li>
      <li>Review documentation, segmentation details, and content requirements to catch gaps before launch.</li>
      <li>Conduct QA across web, iOS, and Android while tracking stakeholder requests and launch readiness.</li>
    </ul>
    <ul class="modal-tools">
      <li>Campaign Ops</li>
      <li>QA Testing</li>
      <li>Workfront</li>
      <li>Project Management</li>
    </ul>
  `
};

function openJourneyModal(key) {
  if (!modalOverlay || !modalContent || !modalClose || !journeyContent[key]) return;

  modalContent.innerHTML = journeyContent[key];
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeJourneyModal() {
  if (!modalOverlay) return;

  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

if (modalOverlay && modalContent && modalClose) {
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openJourneyModal(trigger.dataset.modal);
    });
  });

  modalClose.addEventListener("click", closeJourneyModal);

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      closeJourneyModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeJourneyModal();
    }
  });
}
