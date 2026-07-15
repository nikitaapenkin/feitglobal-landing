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
    "network.text": "FEIT develops priority trade links between Russia and the UAE, with extended routes across China, Kazakhstan, Central Asia, South-East Asia, Europe and other global origin markets.",
    "map.brazil": "Brazil",
    "map.argentina": "Argentina",
    "map.canada": "Canada",
    "map.russia": "Russia",
    "map.uae": "UAE",
    "map.china": "China",
    "map.eu": "EU",
    "map.kz": "Kazakhstan",
    "map.australia": "Australia",
    "map.dubai": "Dubai",
    "map.me": "Middle East",
    "map.ca": "Central Asia",
    "map.sea": "South-East Asia",
    "map.captionTop": "Priority corridor",
    "map.captionMain": "Russia ↔ UAE",
    "map.captionText": "with extended trade links across Asia, Europe and global origin markets",
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
  },
  ru: {
    "nav.about": "О компании",
    "nav.products": "Продукты",
    "nav.network": "География",
    "nav.why": "Почему FEIT",
    "nav.contact": "Контакты",
    "nav.cta": "Связаться",
    "hero.eyebrow": "Надежность. Международный опыт. Финансовая устойчивость.",
    "hero.title": "Международная торговля продовольственными и кормовыми товарами",
    "hero.text": "Соединяем поставщиков и покупателей зерновых, бобовых, масличных культур, масел и кормовой продукции через стратегический хаб в Дубае, ОАЭ.",
    "hero.primary": "Запросить предложение",
    "hero.secondary": "География торговли",
    "hero.card1Title": "Дубай",
    "hero.card1Text": "Физическое присутствие офиса",
    "hero.card2Title": "Глобально",
    "hero.card2Text": "Сеть поставок и спроса",
    "hero.card3Title": "Агро",
    "hero.card3Text": "Продовольственные и кормовые товары",
    "about.kicker": "О FEIT Global",
    "about.title": "Надежный партнер в международной аграрной торговле",
    "about.text1": "FEIT Global - международная торговая компания, которая соединяет глобальных поставщиков с покупателями по всему миру. Мы ориентированы на долгосрочные партнерства, гибкие торговые решения и надежное исполнение контрактов.",
    "about.text2": "Базируясь в Дубае, FEIT сочетает международный охват рынка с профессиональным присутствием в одном из самых связанных торговых центров мира.",
    "metrics.one": "Глобальная торговая сеть",
    "metrics.two": "Международные поставщики",
    "metrics.three": "Гибкие торговые решения",
    "metrics.four": "Финансовая устойчивость",
    "products.kicker": "Продуктовый портфель",
    "products.title": "Товары, с которыми мы работаем",
    "products.grainsTitle": "Зерновые",
    "products.grainsText": "Пшеница, ячмень, кукуруза, овес, гречиха.",
    "products.pulsesTitle": "Бобовые",
    "products.pulsesText": "Желтый горох и чечевица.",
    "products.oilseedsTitle": "Масличные",
    "products.oilseedsText": "Подсолнечник, рапс, лен, соя.",
    "products.oilsTitle": "Масла",
    "products.oilsText": "Подсолнечное, рапсовое и соевое масла.",
    "products.feedTitle": "Корма",
    "products.feedText": "Подсолнечный, рапсовый и соевый шрот/жмых, комбикорма.",
    "network.kicker": "Глобальная торговая сеть",
    "network.title": "Соединяем предложение и спрос по всему миру",
    "network.text": "FEIT развивает приоритетные торговые связи между Россией и ОАЭ, а также расширенную сеть маршрутов через Китай, Казахстан, Центральную и Юго-Восточную Азию, Европу и другие глобальные рынки происхождения.",
    "map.brazil": "Бразилия",
    "map.argentina": "Аргентина",
    "map.canada": "Канада",
    "map.russia": "Россия",
    "map.uae": "ОАЭ",
    "map.china": "Китай",
    "map.eu": "ЕС",
    "map.kz": "Казахстан",
    "map.australia": "Австралия",
    "map.dubai": "Дубай",
    "map.me": "Ближний Восток",
    "map.ca": "Центральная Азия",
    "map.sea": "Юго-Восточная Азия",
    "map.captionTop": "Приоритетный коридор",
    "map.captionMain": "Россия ↔ ОАЭ",
    "map.captionText": "с расширенной сетью торговых связей в Азии, Европе и глобальных рынках происхождения",
    "why.kicker": "Почему выбирают FEIT",
    "why.title": "Платформа для надежной товарной торговли",
    "why.oneTitle": "Сильная сеть поставщиков",
    "why.oneText": "Доступ к ключевым рынкам происхождения и аграрным экспортерам.",
    "why.twoTitle": "Конкурентное ценообразование",
    "why.twoText": "Коммерческая дисциплина и фокус на практичных устойчивых сделках.",
    "why.threeTitle": "Работа с малыми партиями",
    "why.threeText": "Гибкий подход к требованиям клиентов и объемам поставок.",
    "why.fourTitle": "Гибкая логистика",
    "why.fourText": "Планирование маршрутов между глобальными источниками поставок и рынками назначения.",
    "why.fiveTitle": "Фокус на клиента",
    "why.fiveText": "Решения под продукт, направление, сроки и платежные условия.",
    "why.sixTitle": "Гибкие условия оплаты",
    "why.sixText": "Структурированный подход к международным клиентам и партнерам.",
    "why.sevenTitle": "Финансовая устойчивость",
    "why.sevenText": "Профессиональное корпоративное присутствие для доверия банков и партнеров.",
    "why.eightTitle": "Долгосрочные партнерства",
    "why.eightText": "Ориентация на повторяемые деловые отношения, а не на разовые сделки.",
    "solutions.kicker": "Торговые решения",
    "solutions.title": "Индивидуальные решения для каждой сделки",
    "solutions.one": "Индивидуальная логистика",
    "solutions.two": "Поиск товара под запрос",
    "solutions.three": "Исполнение контрактов",
    "solutions.four": "Поддержка торгового финансирования",
    "solutions.five": "Управление рисками",
    "request.kicker": "Есть текущий заказ?",
    "request.title": "Запросить решение",
    "request.text": "Передайте параметры текущей потребности, и команда FEIT вернется с доступным решением в ближайшее время.",
    "form.name": "Имя",
    "form.company": "Компания",
    "form.country": "Страна",
    "form.email": "Email",
    "form.phone": "Телефон",
    "form.product": "Продукт",
    "form.productGrains": "Зерновые",
    "form.productPulses": "Бобовые",
    "form.productOilseeds": "Масличные",
    "form.productOils": "Масла",
    "form.productFeed": "Корма",
    "form.productOther": "Другое",
    "form.quantity": "Количество",
    "form.quantityPlaceholder": "например, 1 000 MT",
    "form.destination": "Назначение",
    "form.destinationPlaceholder": "Страна / порт",
    "form.message": "Сообщение",
    "form.submit": "Запросить решение",
    "office.kicker": "Офис в Дубае",
    "footer.text": "Соединяем глобальных поставщиков и покупателей по всему миру.",
    "footer.request": "Запрос",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия",
    "footer.copy": "© 2026 FEIT Global. Все права защищены.",
    "mail.subject": "Запрос FEIT Global",
    "mail.hello": "Здравствуйте, команда FEIT Global,",
    "mail.intro": "Просим рассмотреть текущий запрос.",
    "mail.message": "Сообщение:",
    "mail.note": "Открываем почтовый клиент с подготовленным запросом."
  }
};

const state = {
  lang: localStorage.getItem("feit-lang") || "en",
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
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === state.lang));
  });
  document.title = state.lang === "ru"
    ? "FEIT Global | Международная торговля продовольствием"
    : "FEIT Global | International Food Export Import Trade";
};

const applyTheme = () => {
  document.documentElement.dataset.theme = state.theme;
  document.querySelectorAll("[data-theme-control]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.themeControl === state.theme));
  });
};

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    localStorage.setItem("feit-lang", state.lang);
    applyLanguage();
  });
});

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
    state.lang === "ru" ? "С уважением," : "Best regards,"
  ].join("\n");

  note.textContent = t("mail.note");
  window.location.href = `mailto:info@feitglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
