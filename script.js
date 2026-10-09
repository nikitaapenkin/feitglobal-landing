const header = document.querySelector("[data-header]");
const form = document.querySelector("[data-inquiry-form]");
const note = document.querySelector("[data-form-note]");

const translations = {
  en: {
    "nav.about": "About",
    "nav.products": "Products",
    "nav.network": "Network",
    "nav.why": "Why FEIT",
    "nav.contact": "Contact",
    "nav.cta": "Contact us",
    "hero.eyebrow": "Reliable. International. Financially strong.",
    "hero.title": "International Food Export Import Trade",
    "hero.text": "Connecting global suppliers and customers in grains, pulses, oilseeds, oils and feed products through a strategic hub in Dubai, UAE.",
    "hero.primary": "Request a quote",
    "hero.secondary": "Explore network",
    "hero.card1Title": "Dubai",
    "hero.card1Text": "Physical office presence",
    "hero.card2Title": "Global",
    "hero.card2Text": "Supply and demand network",
    "hero.card3Title": "Agri",
    "hero.card3Text": "Food and feed commodities",
    "about.kicker": "About FEIT Global",
    "about.title": "Your trusted partner in global agricultural trade",
    "about.text1": "FEIT Global is a trusted international agricultural commodities trading company connecting global suppliers with customers worldwide. We focus on long-term partnerships, flexible trading solutions and reliable execution for food and feed commodities.",
    "about.text2": "Based in Dubai, FEIT combines international market reach with a professional presence in one of the world's most connected trade hubs.",
    "metrics.one": "Global Trading Network",
    "metrics.two": "International Suppliers",
    "metrics.three": "Flexible Trading Solutions",
    "metrics.four": "Financial Capacity",
    "products.kicker": "Product portfolio",
    "products.title": "Products We Trade",
    "products.grainsTitle": "Grains",
    "products.grainsText": "Wheat, barley, maize, oat, buckwheat.",
    "products.pulsesTitle": "Pulses",
    "products.pulsesText": "Yellow peas and lentils.",
    "products.oilseedsTitle": "Oilseeds",
    "products.oilseedsText": "Sunflower, rapeseed, flaxseed, soybean.",
    "products.oilsTitle": "Oils",
    "products.oilsText": "Sunflower oil, rapeseed oil, soybean oil.",
    "products.feedTitle": "Feed",
    "products.feedText": "Sunflower meal, rapeseed meal, soybean meal and compound feed.",
    "network.kicker": "Global trade network",
    "network.title": "Connecting Supply and Demand Worldwide",
    "network.text": "FEIT develops priority trade links with extended routes across China, Kazakhstan, Central Asia, South-East Asia, Europe, Latin America and other global origin markets.",
    "map.brazil": "Brazil",
    "map.argentina": "Argentina",
    "map.canada": "Canada",
    "map.uae": "UAE",
    "map.china": "China",
    "map.eu": "EU",
    "map.kz": "Kazakhstan",
    "map.latam": "Latin America",
    "map.australia": "Australia",
    "map.dubai": "Dubai",
    "map.me": "Middle East",
    "map.ca": "Central Asia",
    "map.sea": "South-East Asia",
    "map.captionTop": "Global network",
    "map.captionMain": "Sustainable trade links",
    "map.captionText": "across Asia, Europe, Latin America and other global markets",
    "why.kicker": "Why work with FEIT",
    "why.title": "Built for reliable commodity trade",
    "why.oneTitle": "Strong Supplier Network",
    "why.oneText": "Access to relevant origin markets and agricultural exporters.",
    "why.twoTitle": "Competitive Pricing",
    "why.twoText": "Commercial discipline focused on practical and sustainable deals.",
    "why.threeTitle": "Small Order Acceptance",
    "why.threeText": "Flexible approach for different customer requirements and volumes.",
    "why.fourTitle": "Flexible Logistics",
    "why.fourText": "Route planning across global supply origins and destination regions.",
    "why.fiveTitle": "Client-Centric Approach",
    "why.fiveText": "Solutions shaped around product, destination, timing and payment needs.",
    "why.sixTitle": "Flexible Payment Terms",
    "why.sixText": "Structured trade approach for international customers and partners.",
    "why.sevenTitle": "Financial Strength",
    "why.sevenText": "Professional corporate presence supporting trust with banks and partners.",
    "why.eightTitle": "Long-Term Partnerships",
    "why.eightText": "Focused on repeatable business relationships rather than one-off transactions.",
    "solutions.kicker": "Trading solutions",
    "solutions.title": "Tailored Solutions for Every Trade",
    "solutions.one": "Individual logistics",
    "solutions.two": "Custom sourcing",
    "solutions.three": "Contract execution",
    "solutions.four": "Trade financing support",
    "solutions.five": "Risk management",
    "request.kicker": "Have a current order?",
    "request.title": "Request Solution",
    "request.text": "Share your current requirement and FEIT will get back to you with an available solution shortly.",
    "form.name": "Name",
    "form.company": "Company",
    "form.country": "Country",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.product": "Product",
    "form.productGrains": "Grains",
    "form.productPulses": "Pulses",
    "form.productOilseeds": "Oilseeds",
    "form.productOils": "Oils",
    "form.productFeed": "Feed",
    "form.productOther": "Other",
    "form.quantity": "Quantity",
    "form.quantityPlaceholder": "e.g. 1,000 MT",
    "form.destination": "Destination",
    "form.destinationPlaceholder": "Country / port",
    "form.message": "Message",
    "form.submit": "Request solution",
    "office.kicker": "Dubai office",
    "footer.text": "Connecting global suppliers and customers worldwide.",
    "footer.request": "Request",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms",
    "footer.copy": "© 2026 FEIT Global. All rights reserved.",
    "mail.subject": "FEIT Global request",
    "mail.hello": "Hello FEIT Global team,",
    "mail.intro": "Please review my current order request.",
    "mail.message": "Message:",
    "mail.note": "Opening your email client with a prepared request."
  }
};

const state = {
  lang: "en",
  theme: localStorage.getItem("feit-theme") || "dark"
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

const t = (key) => translations[state.lang][key] || translations.en[key] || key;

const applyLanguage = () => {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.placeholder);
  });
  document.title = "FEIT Global | International Food Export Import Trade";
};

const applyTheme = () => {
  document.documentElement.dataset.theme = state.theme;
  document.querySelectorAll("[data-theme-control]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.themeControl === state.theme));
  });
};

document.querySelectorAll("[data-theme-control]").forEach((button) => {
  button.addEventListener("click", () => {
    state.theme = button.dataset.themeControl;
    localStorage.setItem("feit-theme", state.theme);
    applyTheme();
  });
});

updateHeader();
applyLanguage();
applyTheme();
window.addEventListener("scroll", updateHeader, { passive: true });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const subject = `${t("mail.subject")}: ${data.get("product") || ""}`;
  const body = [
    t("mail.hello"),
    "",
    t("mail.intro"),
    "",
    `${t("form.name")}: ${data.get("name") || ""}`,
    `${t("form.company")}: ${data.get("company") || ""}`,
    `${t("form.country")}: ${data.get("country") || ""}`,
    `${t("form.email")}: ${data.get("email") || ""}`,
    `${t("form.phone")}: ${data.get("phone") || ""}`,
    `${t("form.product")}: ${data.get("product") || ""}`,
    `${t("form.quantity")}: ${data.get("quantity") || ""}`,
    `${t("form.destination")}: ${data.get("destination") || ""}`,
    "",
    t("mail.message"),
    data.get("message") || "",
    "",
    "Best regards,"
  ].join("\n");

  note.textContent = t("mail.note");
  window.location.href = `mailto:info@feitglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
