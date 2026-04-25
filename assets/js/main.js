const BUSINESS = {
  name: "The Brother's Gym",
  phoneDisplay: "+91 95348 66694",
  phoneRaw: "+919534866694",
  whatsappRaw: "919534866694",
  whatsappMessage: "Hi, I want to join The Brother's Gym. Please share the details.",
  mapUrl: "https://maps.app.goo.gl/rqGLi2Bt9YrArmRo6",
  pricingPath: "data/pricing.json",
  reviewsPath: "data/reviews.json",
  transformationsPath: "data/transformations.json",
  fallbackContactLink: "contact.html#contact-details"
};

let isSubmittingForm = false;
let pricingCatalog = [];
let transformationsCatalog = [];

const FALLBACK_COMPONENTS = {
  "components/navbar.html": `
    <header class="site-header" id="site-header">
      <div class="container nav-shell">
        <a class="brand" href="index.html" aria-label="The Brother's Gym homepage">
          <span class="brand-mark">
            <img src="gym-logo.jpg" alt="The Brother's Gym logo">
          </span>
          <span class="brand-text">
            <strong>The Brother's Gym</strong>
            <small>Darbhanga, Bihar</small>
          </span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Primary">
          <a href="index.html" data-nav-link="home">Home</a>
          <a href="about.html" data-nav-link="about">About</a>
          <a href="pricing.html" data-nav-link="pricing">Pricing</a>
          <a href="contact.html" data-nav-link="contact">Contact</a>
          <a class="btn btn-primary nav-cta" href="contact.html#contact-form">Join Now</a>
        </nav>
      </div>
    </header>
  `,
  "components/footer.html": `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand footer-brand" href="index.html">
            <span class="brand-mark">
              <img src="gym-logo.jpg" alt="The Brother's Gym logo">
            </span>
            <span class="brand-text">
              <strong>The Brother's Gym</strong>
            <small>Darbhanga, Bihar</small>
            </span>
          </a>
          <p class="footer-copy">Affordable local fitness in Darbhanga with a focused workout setup, friendly trainers, and practical membership plans.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="about.html">About</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Visit Us</h3>
          <ul class="footer-links">
            <li>Allalpatti-Chowk, Laheriasarai</li>
            <li>Darbhanga, Bihar 846003</li>
            <li>Mon-Sat: Open 24 hours</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div>
          <h3>Inquiry</h3>
          <ul class="footer-links">
            <li><a data-phone-link href="#">Call the gym</a></li>
            <li><a data-whatsapp-link href="#">WhatsApp inquiry</a></li>
            <li><a href="${BUSINESS.mapUrl}" target="_blank" rel="noreferrer noopener">Open map</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>&copy; <span id="current-year"></span> The Brother's Gym. All rights reserved.</p>
      </div>
    </footer>
  `,
  "components/cta.html": `
    <section class="section cta-strip">
      <div class="container cta-layout reveal reveal-up">
        <div>
          <span class="section-tag">Ready to start?</span>
          <h2>Take the first step toward a stronger body.</h2>
          <p>Join The Brother's Gym today and start training with a motivating local crowd.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="pricing.html">See Membership</a>
          <a class="btn btn-outline" data-phone-link href="#">Call Now</a>
          <a class="btn btn-whatsapp" data-whatsapp-link href="#">WhatsApp</a>
        </div>
      </div>
    </section>
  `
};

const FALLBACK_REVIEWS = [
  {
    author: "Sony Singh",
    date: "31 July 2025",
    rating: 5,
    source: "Justdial",
    body: "Rated the gym 5 stars on the public business listing."
  },
  {
    author: "User",
    date: "27 July 2025",
    rating: 5,
    source: "Justdial",
    body: "Posted a recent 5-star public rating for The Brother's Gym."
  },
  {
    author: "CRP Jawan",
    date: "3 January 2025",
    rating: 5,
    source: "Justdial",
    body: "Shared a 5-star rating on the public listing for the gym."
  },
  {
    author: "Asif",
    date: "11 October 2024",
    rating: 5,
    source: "Justdial",
    body: "Recorded a 5-star rating on the gym's public profile."
  }
];

const FALLBACK_PRICING = [
  {
    id: "monthly",
    featured: false,
    showOnHome: true,
    theme: "outline",
    badge: "Starter",
    pageBadge: "Most accessible",
    title: "Monthly Plan",
    homeTitle: "Monthly",
    price: {
      amount: "Rs. 500",
      prefix: "",
      suffix: "/month"
    },
    homeDescription: "Perfect for members beginning their daily workout habit.",
    description: [
      "Full access to main gym area",
      "Suitable for daily local members",
      "Basic trainer guidance available"
    ],
    cta: {
      label: "Join Monthly",
      href: "contact.html#contact-form"
    }
  },
  {
    id: "quarterly",
    featured: true,
    showOnHome: true,
    theme: "primary",
    badge: "Best value",
    pageBadge: "Save more",
    title: "Quarterly Plan",
    homeTitle: "Quarterly",
    price: {
      amount: "Rs. 1,350",
      prefix: "",
      suffix: "/3 months"
    },
    homeDescription: "Save more while staying consistent over a longer routine.",
    description: [
      "Lower effective monthly cost",
      "Good for committed training",
      "Recommended for visible progress"
    ],
    cta: {
      label: "Choose Quarterly",
      href: "contact.html#contact-form"
    }
  },
  {
    id: "personal-training",
    featured: false,
    showOnHome: true,
    theme: "outline",
    badge: "Add-on",
    pageBadge: "Focused support",
    title: "Personal Training",
    homeTitle: "Personal Training",
    price: {
      amount: "Rs. 1,999",
      prefix: "From ",
      suffix: "/month"
    },
    homeDescription: "Extra hands-on support for focused goals and faster structure.",
    description: [
      "Goal-specific workout support",
      "Extra trainer attention",
      "Best for fat loss and routine structure"
    ],
    cta: {
      label: "Ask About PT",
      href: "contact.html#contact-form"
    }
  }
];

const FALLBACK_TRANSFORMATIONS = [
  {
    id: "transformation-1",
    image: "assets/images/transformations/transformation-1.jpg",
    alt: "Before and after transformation example for fat loss",
    caption: "Fat-loss focus with regular machine and cardio sessions"
  },
  {
    id: "transformation-2",
    image: "assets/images/transformations/transformation-2.jpg",
    alt: "Before and after transformation example for lean muscle gain",
    caption: "Lean muscle progress for members building strength slowly"
  },
  {
    id: "transformation-3",
    image: "assets/images/transformations/transformation-3.jpg",
    alt: "Before and after transformation example for strength and conditioning",
    caption: "Conditioning and body-shape improvement with trainer support"
  }
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function englishOnlyValue(value) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") {
    return value.en ?? value.default ?? "";
  }

  return value ?? "";
}

async function loadJsonData(path, fallbackData) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load ${path}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error(`Invalid JSON data for ${path}`);
    return data;
  } catch (error) {
    console.error(error);
    return fallbackData;
  }
}

async function loadComponent(targetId, path) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load ${path}`);
    target.innerHTML = await response.text();
  } catch (error) {
    target.innerHTML = FALLBACK_COMPONENTS[path] || "";
    console.error(error);
  }
}

function currentPageName() {
  const page = document.body.dataset.page;
  if (page) return page;
  const file = window.location.pathname.split("/").pop() || "index.html";
  return file.replace(".html", "").replace("index", "home");
}

function setActiveNav() {
  const page = currentPageName();
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    if (link.dataset.navLink === page) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function updateNavToggleLabel() {
  const header = document.getElementById("site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (!header || !toggle) return;

  const label = header.classList.contains("nav-open") ? "Close navigation" : "Open navigation";
  toggle.setAttribute("aria-label", label);
}

function initMobileNav() {
  const header = document.getElementById("site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!header || !toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    updateNavToggleLabel();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (!header.classList.contains("nav-open")) return;
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      updateNavToggleLabel();
    });
  });

  updateNavToggleLabel();
}

function applyContactLinks() {
  const telHref = `tel:${BUSINESS.phoneRaw}`;
  const whatsappHref = `https://wa.me/${BUSINESS.whatsappRaw}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    link.setAttribute("href", telHref);
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.setAttribute("href", whatsappHref);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer noopener");
  });

  document.querySelectorAll("[data-phone-text]").forEach((node) => {
    node.textContent = BUSINESS.phoneDisplay;
  });
}

function renderHomePricing(cards) {
  const container = document.getElementById("home-pricing-list");
  if (!container) return;

  const homeCards = cards.filter((card) => card.showOnHome !== false);

  container.innerHTML = homeCards.map((card, index) => `
    <article class="pricing-card${card.featured ? " featured" : ""} reveal reveal-up" ${index > 0 ? `data-delay="${index * 120}"` : ""}>
      <span class="pricing-badge">${escapeHtml(englishOnlyValue(card.badge))}</span>
      <h3>${escapeHtml(englishOnlyValue(card.homeTitle || card.title))}</h3>
      <p class="price">${escapeHtml(`${englishOnlyValue(card.price?.prefix)}${card.price?.amount || ""}`)}<span>${escapeHtml(englishOnlyValue(card.price?.suffix))}</span></p>
      <p>${escapeHtml(englishOnlyValue(card.homeDescription))}</p>
    </article>
  `).join("");
}

function renderPricingPage(cards) {
  const container = document.getElementById("pricing-page-list");
  if (!container) return;

  container.innerHTML = cards.map((card, index) => `
    <article class="pricing-card${card.featured ? " featured" : ""} reveal reveal-up" ${index > 0 ? `data-delay="${index * 120}"` : ""}>
      <span class="pricing-badge">${escapeHtml(englishOnlyValue(card.pageBadge || card.badge))}</span>
      <h3>${escapeHtml(englishOnlyValue(card.title))}</h3>
      <p class="price">${escapeHtml(`${englishOnlyValue(card.price?.prefix)}${card.price?.amount || ""}`)}<span>${escapeHtml(englishOnlyValue(card.price?.suffix))}</span></p>
      <ul class="plan-list">
        ${(englishOnlyValue(card.description) || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      <a class="btn ${card.theme === "primary" ? "btn-primary" : "btn-outline"} btn-block" href="${escapeHtml(card.cta?.href || BUSINESS.fallbackContactLink)}">${escapeHtml(englishOnlyValue(card.cta?.label))}</a>
    </article>
  `).join("");
}

function renderTransformations(items) {
  const container = document.getElementById("home-transformations-list");
  if (!container) return;

  container.innerHTML = items.map((item, index) => `
    <figure class="gallery-card reveal reveal-up" ${index > 0 ? `data-delay="${index * 120}"` : ""}>
      <img src="${escapeHtml(item.image || "")}" alt="${escapeHtml(englishOnlyValue(item.alt))}" loading="lazy">
      <figcaption>${escapeHtml(englishOnlyValue(item.caption))}</figcaption>
    </figure>
  `).join("");
}

function renderEditableContent() {
  renderHomePricing(pricingCatalog);
  renderPricingPage(pricingCatalog);
  renderTransformations(transformationsCatalog);
  document.dispatchEvent(new Event("components:loaded"));
}

async function loadEditableContent() {
  const [pricingData, transformationData] = await Promise.all([
    loadJsonData(BUSINESS.pricingPath, FALLBACK_PRICING),
    loadJsonData(BUSINESS.transformationsPath, FALLBACK_TRANSFORMATIONS)
  ]);

  pricingCatalog = pricingData;
  transformationsCatalog = transformationData;
  renderEditableContent();
}

async function loadReviews() {
  const container = document.getElementById("reviews-list");
  if (!container) return;

  try {
    const response = await fetch(BUSINESS.reviewsPath);
    if (!response.ok) throw new Error("Failed to load reviews");
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error("Invalid review data");
    renderReviews(container, data);
  } catch (error) {
    renderReviews(container, FALLBACK_REVIEWS);
    console.error(error);
  }
}

function renderReviews(container, reviews) {
  container.innerHTML = reviews.map((review) => {
    const body = englishOnlyValue(review.body);

    return `
      <article class="review-card reveal reveal-up">
        <div class="stars" aria-label="${escapeHtml(`${review.rating} star rating`)}">${"&#9733;".repeat(review.rating)}</div>
        <p>${escapeHtml(body)}</p>
        <div class="review-meta">
          <strong>${escapeHtml(review.author)}</strong>
          <span>${escapeHtml(review.date)} &bull; ${escapeHtml(review.source)}</span>
        </div>
      </article>
    `;
  }).join("");

  document.dispatchEvent(new Event("components:loaded"));
}

function updateFormStateText() {
  const submitButton = document.querySelector("[data-submit-label]");
  if (submitButton) {
    submitButton.textContent = isSubmittingForm ? "Sending..." : "Send Inquiry";
  }
}

function setFieldState(field, message) {
  const wrapper = field.closest(".form-field");
  const errorNode = wrapper?.querySelector(".error-text");
  if (!wrapper || !errorNode) return;
  wrapper.classList.toggle("has-error", Boolean(message));
  errorNode.textContent = message;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const responseNode = document.getElementById("form-response");

  const validators = {
    name: (value) => value.trim().length >= 2 ? "" : "Please enter your name.",
    email: (value) =>
      value.trim().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        ? "Enter a valid email address."
        : "",
    phone: (value) => /^[6-9]\d{9}$/.test(value.replace(/\D/g, "").slice(-10)) ? "" : "Enter a valid 10-digit mobile number.",
    message: (value) => value.trim().length >= 10 ? "" : "Please enter a short message."
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let hasError = false;

    Object.keys(validators).forEach((key) => {
      const field = form.elements[key];
      if (!field) return;
      const message = validators[key](field.value);
      setFieldState(field, message);
      if (message) hasError = true;
    });

    if (hasError) {
      if (responseNode) responseNode.textContent = "Please correct the highlighted fields.";
      return;
    }

    const formData = new FormData(form);

    if (formData.get("_honey")) {
      if (responseNode) responseNode.textContent = "Request blocked.";
      return;
    }

    isSubmittingForm = true;
    updateFormStateText();
    const submitButton = form.querySelector('button[type="submit"]');

    if (responseNode) responseNode.textContent = "Sending your inquiry...";
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      form.querySelectorAll(".form-field").forEach((field) => field.classList.remove("has-error"));
      form.querySelectorAll(".error-text").forEach((node) => {
        node.textContent = "";
      });

      if (responseNode) {
        responseNode.textContent = "Inquiry sent successfully. We will contact you soon.";
      }
    } catch (error) {
      console.error(error);
      if (responseNode) {
        responseNode.textContent = "Inquiry could not be sent. Please try again in a little while.";
      }
    } finally {
      isSubmittingForm = false;
      updateFormStateText();
      if (submitButton) submitButton.disabled = false;
    }
  });
}

function setCurrentYear() {
  const yearNode = document.getElementById("current-year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();
}

function setCanonical() {
  const link = document.getElementById("canonical-link");
  if (!link) return;
  link.setAttribute("href", window.location.origin + window.location.pathname);
}

function setOGUrl() {
  const meta = document.getElementById("og-url");
  if (!meta) return;
  meta.setAttribute("content", window.location.href);
}

function updateStructuredData() {
  const schemaNode = document.querySelector('script[type="application/ld+json"]');
  if (!schemaNode) return;

  try {
    const data = JSON.parse(schemaNode.textContent);
    data.name = BUSINESS.name;
    data.alternateName = BUSINESS.name;
    schemaNode.textContent = JSON.stringify(data, null, 6);
  } catch (error) {
    console.error("Failed to update structured data", error);
  }
}

async function bootstrap() {
  document.documentElement.lang = "en";

  await Promise.all([
    loadComponent("navbar", "components/navbar.html"),
    loadComponent("footer", "components/footer.html"),
    loadComponent("cta", "components/cta.html")
  ]);

  setActiveNav();
  initMobileNav();
  await loadEditableContent();
  applyContactLinks();
  setCanonical();
  setOGUrl();
  updateStructuredData();

  loadReviews();
  initContactForm();
  setCurrentYear();
  document.dispatchEvent(new Event("components:loaded"));
}

bootstrap();
