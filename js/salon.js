const KEYS = {
  bookings: "owp-bookings",
  members: "owp-members",
  session: "owp-session",
  reviews: "owp-reviews",
  dogs: "owp-dogs",
  analytics: "owp-analytics",
  finance: "owp-finance",
  calendar: "owp-calendar",
  region: "owp-region",
  email: "owp-work-email",
  lang: "owp-lang",
  content: "owp-content",
  bdayRequests: "owp-bday-requests",
};

const I18N = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navCalendar: "Calendar",
    navReviews: "Reviews",
    navFaq: "FAQ",
    navEstimate: "Estimate",
    bookNow: "Book now",
    langLabel: "Language",
    heroTitle: "Gentle at-home grooming",
    heroSlogan: "For all your grooming needs and furry friends necessities.",
    heroProof: "At-home care · Florida",
    statHome: "At home",
    statHomeNote: "We come to you",
    statOff: "$10 off",
    statOffNote: "Your first visit",
    statEs: "Español",
    statEsNote: "We speak Spanish",
    groomingKicker: "Grooming",
    groomingTitle: "Grooming services",
    packages: "Packages",
    packagesTitle: "Tailored for every pup",
    pricesFor: "Prices for",
    haircutNote: "If a short-hair breed requires a haircut, long-hair pricing will apply.",
    howKicker: "How we work",
    howTitle: "A calm visit, start to finish",
    how1Title: "Request a day",
    how1Body: "Tell us the pup, the service, and a time that works at home.",
    how2Title: "We come to you",
    how2Body: "Grooming happens in your space — less stress, no salon wait.",
    how3Title: "Happy walk-out",
    how3Body: "Points for the club, a bow if they want one, and a date for next time.",
    bdayKicker: "This month",
    bdayTitle: "Birthday doggies",
    bdayEmpty: "Birthday pups will appear here as they’re added.",
    bdaySubmitTitle: "Submit a birthday",
    bdaySubmitHelp: "We’ll review it before it appears on the site.",
    sendForReview: "Send for review",
    bdaySent: "Sent for review — we’ll add them after we check the details.",
    owner: "Owner",
    calKicker: "Calendar",
    calSuffix: "activity & food",
    calAlerts: "Activity alerts",
    noActivities: "No activities posted for this month yet.",
    chooseTime: "Choose a time",
    preferredTime: "Preferred time",
    availAppointments: "Appointments available",
    slotTaken: "Taken",
    slotPast: "Past",
    shopKicker: "Seasonal",
    shopTitle: "Holiday accessories & foods",
    reviewsKicker: "Testimonials",
    reviewsTitle: "Google & Yelp",
    reviewsEmpty: "Google and Yelp reviews will appear here as they’re posted.",
    faqKicker: "FAQ",
    faqTitle: "Have a question? We’re here to help.",
    faq1q: "Do you come to my home?",
    faq1a: "Yes. Oh Wau, Patitas! is at-home pet care in St. Lucie County and nearby.",
    faq2q: "What’s included in a visit?",
    faq2a: "Bath & Blow-Out, breed-specific haircuts, and add-ons like nails, ears, teeth, and a berry facial. Pick what you need when you book.",
    faq3q: "Is grooming okay for anxious pets?",
    faq3a: "Home visits are often calmer. Tell us about temperament in the notes and we’ll go gently.",
    faq4q: "Do I need to agree to anything before booking?",
    faq4a: "Yes. There’s a short grooming disclosure to check before a request is sent.",
    clubTitle: "Rewards club",
    pointsTitle: "Your points",
    yourName: "Your name",
    email: "Email",
    phone: "Phone",
    joinClub: "Join the club",
    memberEmpty: "Join the club for points on every visit. 20 points to start, 10 more each booking. 100 points = $10 off.",
    welcomeClub: "Welcome to the club — 20 points are waiting.",
    emailTaken: "That email is already in the club.",
    bookTitle: "Request a booking",
    bookModalHelp: "Choose a service and add-ons, then send a request.",
    dogName: "Dog’s name",
    area: "Area",
    service: "Service",
    servicesPick: "Services",
    addOns: "Add-ons",
    preferredDate: "Preferred date",
    notes: "Notes",
    notesPh: "Temperament, haircut, anything we should know",
    pickService: "Please pick at least one service or add-on.",
    disclosureAgree: "I have read and agree to the grooming disclosure.",
    disclosureBody:
      "Disclosure: I understand grooming involves bathing, clipping, and handling. I confirm my pet is reasonably healthy, current on vaccines as required, and I accept that coats, skin, and behavior can affect the result. Oh Wau, Patitas! is not liable for pre-existing conditions revealed during grooming. I agree to be present or reachable during an at-home visit.",
    sendRequest: "Send request",
    upcoming: "Upcoming",
    noVisits: "No visits yet. Book on the website or in the app — they share this list.",
    dateTbd: "Date TBD",
    close: "Close",
    footerNote: "Oh Wau, Patitas! · Pet Center · Florida ·",
    callText: "Call / text",
    emailUs: "Email",
    whatsapp: "WhatsApp",
    messageUs: "Message us",
    appLink: "App",
    officeLink: "Office",
    adminLink: "Admin",
    popular: "Popular",
    startingAt: "Starting at",
    birthday: "Birthday",
    accessory: "accessory",
    food: "food",
    points: "points",
    visits: "visits",
    miaAsk: "Ask Mia",
    miaName: "Mia",
    miaRole: "Your helper",
    miaClose: "Close",
    miaSend: "Send",
    miaInput: "Ask about fees, calendar, or booking",
    miaHi: "Hi — I’m Mia. I can help with fees, the calendar, or booking a visit.",
    miaChipFees: "Fees",
    miaChipCal: "Calendar",
    miaChipBook: "Book",
    miaChipServices: "Services",
    miaFeesLead: "Starting prices in",
    miaFirstVisit: "$10 off your first visit.",
    miaCalLead: "This month’s activity & food:",
    miaBookHelp: "I opened booking. Pick a service, add-ons, a time, and check the disclosure.",
    miaServicePicked: "I checked that service on the form. Add your details and send.",
    miaHome: "Yes — we come to you in St. Lucie County and nearby.",
    miaContact: "Text or WhatsApp (954) 913-6161, or email gmilallc1@gmail.com.",
    miaClub: "Club: 20 points to join, 10 per booking, 100 points = $10 off.",
    miaFallback: "I can help with fees, calendar, or booking. Try a button below.",
    miaDuration: "Visit times are estimates at home.",
    regions: {
      stlucie: "St. Lucie County",
      martin: "Martin County",
      indianriver: "Indian River County",
      other: "Nearby",
    },
    svc: {
      bath: {
        name: "Bath & Blow-Out",
        duration: "About 2 hours",
        blurb: "Gentle cleanse with warm water and a full-body dry",
      },
      haircut: {
        name: "Breed-Specific Haircut",
        duration: "About 2.5 hours",
        blurb: "For long-hair, double-coat, and curly breeds",
      },
      brush: {
        name: "Brush-Out",
        duration: "About 45 minutes",
        blurb: "Thorough detangling and undercoat removal",
      },
      nails: {
        name: "Nail Trimming",
        duration: "About 15 minutes",
        blurb: "Quick and safe trim to maintain paw health",
      },
      grind: {
        name: "Nail Grinding",
        duration: "About 15 minutes",
        blurb: "Smooths sharp edges for a clean finish",
      },
      ears: {
        name: "Ear Cleaning",
        duration: "About 15 minutes",
        blurb: "Helps prevent odor and infection",
      },
      teeth: {
        name: "Teeth Brushing & Breath Spray",
        duration: "About 15 minutes",
        blurb: "Freshens breath and supports oral hygiene",
      },
      facial: {
        name: "Berry Facial",
        duration: "About 20 minutes",
        blurb: "Tear-free, soothing cleanser for the face",
      },
      shampoo: {
        name: "Enhanced Shampoo & Conditioner",
        duration: "Added to bath",
        blurb: "Tailored for coat type and skin needs",
      },
    },
    shop: {
      "halloween-bandana": "Halloween bandana",
      "pumpkin-treats": "Pumpkin biscuit tin",
      "holiday-bow": "Holiday bow set",
      gingerbread: "Gingerbread pup cookies",
      "heart-collar": "Valentine heart collar",
    },
    seasons: {
      Halloween: "Halloween",
      Christmas: "Christmas",
      "Valentine's": "Valentine's",
    },
    plan: {},
    days: ["S", "M", "T", "W", "T", "F", "S"],
  },
  es: {
    navHome: "Inicio",
    navServices: "Servicios",
    navCalendar: "Calendario",
    navReviews: "Reseñas",
    navFaq: "Preguntas",
    navEstimate: "Cotizar",
    bookNow: "Reservar",
    langLabel: "Idioma",
    heroTitle: "Grooming suave en casa",
    heroSlogan: "Para todas tus necesidades de grooming y lo que tus peluditos necesiten.",
    heroProof: "Cuidado en casa · Florida",
    statHome: "En casa",
    statHomeNote: "Vamos a ti",
    statOff: "$10 de descuento",
    statOffNote: "Tu primera visita",
    statEs: "Español",
    statEsNote: "Hablamos español",
    groomingKicker: "Grooming",
    groomingTitle: "Servicios de grooming",
    packages: "Paquetes",
    packagesTitle: "A la medida de cada peludo",
    pricesFor: "Precios para",
    haircutNote: "Si una raza de pelo corto necesita corte, se aplica el precio de pelo largo.",
    howKicker: "Cómo trabajamos",
    howTitle: "Una visita calmada, de principio a fin",
    how1Title: "Pide un día",
    how1Body: "Cuéntanos del peludo, el servicio y un horario que sirva en casa.",
    how2Title: "Vamos a ti",
    how2Body: "El grooming es en tu espacio — menos estrés, sin espera de salón.",
    how3Title: "Sale feliz",
    how3Body: "Puntos para el club, un moño si lo quieren, y fecha para la próxima.",
    bdayKicker: "Este mes",
    bdayTitle: "Cumpleañeros",
    bdayEmpty: "Los cumpleañeros aparecerán aquí cuando se agreguen.",
    bdaySubmitTitle: "Enviar un cumpleaños",
    bdaySubmitHelp: "Lo revisamos antes de que aparezca en el sitio.",
    sendForReview: "Enviar a revisión",
    bdaySent: "Enviado a revisión — lo publicamos cuando confirmemos los datos.",
    owner: "Tutor",
    calKicker: "Calendario",
    calSuffix: "actividad y comida",
    calAlerts: "Avisos de actividades",
    noActivities: "Aún no hay actividades publicadas este mes.",
    chooseTime: "Elige una hora",
    preferredTime: "Hora preferida",
    availAppointments: "Citas disponibles",
    slotTaken: "Ocupado",
    slotPast: "Pasado",
    shopKicker: "Temporada",
    shopTitle: "Accesorios y comidas de temporada",
    reviewsKicker: "Testimonios",
    reviewsTitle: "Google y Yelp",
    reviewsEmpty: "Las reseñas de Google y Yelp aparecerán aquí cuando se publiquen.",
    faqKicker: "Preguntas",
    faqTitle: "¿Tienes una pregunta? Estamos para ayudarte.",
    faq1q: "¿Van a mi casa?",
    faq1a: "Sí. Oh Wau, Patitas! es cuidado en casa en el condado de St. Lucie y cerca.",
    faq2q: "¿Qué incluye una visita?",
    faq2a: "Baño y secado, cortes según raza, y extras como uñas, oídos, dientes y facial de berries. Elige lo que necesites al reservar.",
    faq3q: "¿Sirve el grooming para mascotas ansiosas?",
    faq3a: "Las visitas en casa suelen ser más calmadas. Cuéntanos el temperamento en las notas y vamos con calma.",
    faq4q: "¿Debo aceptar algo antes de reservar?",
    faq4a: "Sí. Hay una divulgación breve de grooming que hay que marcar antes de enviar la solicitud.",
    clubTitle: "Club de recompensas",
    pointsTitle: "Tus puntos",
    yourName: "Tu nombre",
    email: "Correo",
    phone: "Teléfono",
    joinClub: "Unirme al club",
    memberEmpty: "Únete al club para puntos en cada visita. 20 al empezar, 10 más por reserva. 100 puntos = $10 de descuento.",
    welcomeClub: "Bienvenida al club — ya tienes 20 puntos.",
    emailTaken: "Ese correo ya está en el club.",
    bookTitle: "Pedir una cita",
    bookModalHelp: "Elige un servicio y extras, luego envía la solicitud.",
    dogName: "Nombre del perrito",
    area: "Zona",
    service: "Servicio",
    servicesPick: "Servicios",
    addOns: "Extras",
    preferredDate: "Fecha preferida",
    notes: "Notas",
    notesPh: "Temperamento, corte, lo que debamos saber",
    pickService: "Elige al menos un servicio o extra.",
    disclosureAgree: "Leí y acepto la divulgación de grooming.",
    disclosureBody:
      "Divulgación: Entiendo que el grooming incluye baño, corte y manejo. Confirmo que mi mascota está razonablemente sana, al día en vacunas según se requiera, y acepto que el pelaje, la piel y el comportamiento pueden afectar el resultado. Oh Wau, Patitas! no es responsable de condiciones preexistentes que se noten durante el grooming. Acepto estar presente o disponible durante una visita en casa.",
    sendRequest: "Enviar solicitud",
    upcoming: "Próximas",
    noVisits: "Aún no hay visitas. Reserva en el sitio o en la app — comparten esta lista.",
    dateTbd: "Fecha por confirmar",
    close: "Cerrar",
    footerNote: "Oh Wau, Patitas! · Pet Center · Florida ·",
    callText: "Llamar / texto",
    emailUs: "Correo",
    whatsapp: "WhatsApp",
    messageUs: "Escríbenos",
    appLink: "App",
    officeLink: "Oficina",
    adminLink: "Admin",
    popular: "Popular",
    startingAt: "Desde",
    birthday: "Cumpleaños",
    accessory: "accesorio",
    food: "comida",
    points: "puntos",
    visits: "visitas",
    miaAsk: "Pregúntale a Mia",
    miaName: "Mia",
    miaRole: "Tu ayudante",
    miaClose: "Cerrar",
    miaSend: "Enviar",
    miaInput: "Pregunta por precios, calendario o reservas",
    miaHi: "Hola — soy Mia. Puedo ayudar con precios, el calendario o a reservar.",
    miaChipFees: "Precios",
    miaChipCal: "Calendario",
    miaChipBook: "Reservar",
    miaChipServices: "Servicios",
    miaFeesLead: "Precios desde, en",
    miaFirstVisit: "$10 de descuento en tu primera visita.",
    miaCalLead: "Actividad y comida de este mes:",
    miaBookHelp: "Abrí la reserva. Elige servicio, extras, hora, y marca la divulgación.",
    miaServicePicked: "Marqué ese servicio en el formulario. Completa y envía.",
    miaHome: "Sí — vamos a tu casa en el condado de St. Lucie y cerca.",
    miaContact: "Texto o WhatsApp (954) 913-6161, o correo gmilallc1@gmail.com.",
    miaClub: "Club: 20 puntos al unirte, 10 por reserva, 100 puntos = $10 de descuento.",
    miaFallback: "Puedo ayudar con precios, calendario o reservas. Prueba un botón.",
    miaDuration: "Los tiempos son estimados en casa.",
    regions: {
      stlucie: "Condado de St. Lucie",
      martin: "Condado de Martin",
      indianriver: "Condado de Indian River",
      other: "Cerca",
    },
    svc: {
      bath: {
        name: "Baño y secado",
        duration: "Unas 2 horas",
        blurb: "Limpieza suave con agua tibia y secado de cuerpo completo",
      },
      haircut: {
        name: "Corte según raza",
        duration: "Unas 2.5 horas",
        blurb: "Para razas de pelo largo, doble capa y rizado",
      },
      brush: {
        name: "Cepillado profundo",
        duration: "Unos 45 minutos",
        blurb: "Desenredo a fondo y retiro de subpelo",
      },
      nails: {
        name: "Corte de uñas",
        duration: "Unos 15 minutos",
        blurb: "Corte rápido y seguro para la salud de las patitas",
      },
      grind: {
        name: "Limado de uñas",
        duration: "Unos 15 minutos",
        blurb: "Suaviza bordes filosos para un acabado limpio",
      },
      ears: {
        name: "Limpieza de oídos",
        duration: "Unos 15 minutos",
        blurb: "Ayuda a prevenir olor e infección",
      },
      teeth: {
        name: "Cepillado dental y spray",
        duration: "Unos 15 minutos",
        blurb: "Refresca el aliento y apoya la higiene bucal",
      },
      facial: {
        name: "Facial de berries",
        duration: "Unos 20 minutos",
        blurb: "Limpiador suave, sin lágrimas, para la carita",
      },
      shampoo: {
        name: "Shampoo y acondicionador especial",
        duration: "Se suma al baño",
        blurb: "Adaptado al tipo de pelaje y a la piel",
      },
    },
    shop: {
      "halloween-bandana": "Pañuelo de Halloween",
      "pumpkin-treats": "Lata de galletas de calabaza",
      "holiday-bow": "Set de moños navideños",
      gingerbread: "Galletas de jengibre para pup",
      "heart-collar": "Collar de corazón de San Valentín",
    },
    seasons: {
      Halloween: "Halloween",
      Christmas: "Navidad",
      "Valentine's": "San Valentín",
    },
    plan: {},
    days: ["D", "L", "M", "M", "J", "V", "S"],
  },
};

function currentLang() {
  const saved = localStorage.getItem(KEYS.lang);
  if (saved === "en" || saved === "es") return saved;
  return String(navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
}

function tObj(path) {
  const parts = String(path).split(".");
  const fromLang = parts.reduce((o, k) => o?.[k], I18N[currentLang()] || I18N.en);
  if (fromLang !== undefined) return fromLang;
  return parts.reduce((o, k) => o?.[k], I18N.en);
}

function t(key) {
  const val = tObj(key);
  return typeof val === "string" ? val : key;
}

function localeTag() {
  return currentLang() === "es" ? "es-US" : "en-US";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function applyLanguage(lang) {
  if (lang !== "en" && lang !== "es") lang = "en";
  localStorage.setItem(KEYS.lang, lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });
  refreshPublic();
}

function bindLanguage() {
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
  applyLanguage(currentLang());
}

const Salon = {
  name: "Oh Wau, Patitas!",
  phone: "954-913-6161",
  phoneTel: "9549136161",
  email: "gmilallc1@gmail.com",
  whatsapp: "https://wa.me/19549136161",
  services: [
    {
      id: "bath",
      kind: "service",
      name: "Bath & Blow-Out",
      price: 55,
      duration: "About 2 hours",
      blurb: "Gentle cleanse with warm water and a full-body dry",
    },
    {
      id: "haircut",
      kind: "service",
      name: "Breed-Specific Haircut",
      price: 75,
      featured: true,
      duration: "About 2.5 hours",
      blurb: "For long-hair, double-coat, and curly breeds",
    },
    {
      id: "brush",
      kind: "service",
      name: "Brush-Out",
      price: 30,
      duration: "About 45 minutes",
      blurb: "Thorough detangling and undercoat removal",
    },
    {
      id: "nails",
      kind: "addon",
      name: "Nail Trimming",
      price: 18,
      duration: "About 15 minutes",
      blurb: "Quick and safe trim to maintain paw health",
    },
    {
      id: "grind",
      kind: "addon",
      name: "Nail Grinding",
      price: 22,
      duration: "About 15 minutes",
      blurb: "Smooths sharp edges for a clean finish",
    },
    {
      id: "ears",
      kind: "addon",
      name: "Ear Cleaning",
      price: 15,
      duration: "About 15 minutes",
      blurb: "Helps prevent odor and infection",
    },
    {
      id: "teeth",
      kind: "addon",
      name: "Teeth Brushing & Breath Spray",
      price: 18,
      duration: "About 15 minutes",
      blurb: "Freshens breath and supports oral hygiene",
    },
    {
      id: "facial",
      kind: "addon",
      name: "Berry Facial",
      price: 20,
      duration: "About 20 minutes",
      blurb: "Tear-free, soothing cleanser for the face",
    },
    {
      id: "shampoo",
      kind: "addon",
      name: "Enhanced Shampoo & Conditioner",
      price: 15,
      duration: "Added to bath",
      blurb: "Tailored for coat type and skin needs",
    },
  ],
  regions: [
    { id: "stlucie", name: "St. Lucie County", lat: [27.15, 27.55], lng: [-80.55, -80.22], rival: 1.08 },
    { id: "martin", name: "Martin County", lat: [26.95, 27.27], lng: [-80.45, -80.12], rival: 1.12 },
    { id: "indianriver", name: "Indian River County", lat: [27.47, 27.86], lng: [-80.65, -80.3], rival: 1.1 },
    { id: "other", name: "Nearby", lat: [0, 0], lng: [0, 0], rival: 1.1 },
  ],
  hours: {
    workDays: [1, 2, 3, 4, 5, 6],
    slots: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
  },
  disclosure:
    "I understand grooming involves bathing, clipping, and handling. I confirm my pet is reasonably healthy, current on vaccines as required, and I accept that coats, skin, and behavior can affect the result. Oh Wau, Patitas! is not liable for pre-existing conditions revealed during grooming. I agree to be present or reachable during an at-home visit.",
  shop: [
    { id: "halloween-bandana", name: "Halloween bandana", kind: "accessory", season: "Halloween", price: 12 },
    { id: "pumpkin-treats", name: "Pumpkin biscuit tin", kind: "food", season: "Halloween", price: 14 },
    { id: "holiday-bow", name: "Holiday bow set", kind: "accessory", season: "Christmas", price: 10 },
    { id: "gingerbread", name: "Gingerbread pup cookies", kind: "food", season: "Christmas", price: 16 },
    { id: "heart-collar", name: "Valentine heart collar", kind: "accessory", season: "Valentine's", price: 18 },
  ],
  monthPlan: [
    { id: "plan-1-2", month: 1, day: 2, title: "New Year stretch walk", titleEs: "Caminata de Año Nuevo", kind: "activity" },
    { id: "plan-1-18", month: 1, day: 18, title: "Cozy indoor play", titleEs: "Juego cómodo en casa", kind: "activity" },
    { id: "plan-2-14", month: 2, day: 14, title: "Valentine heart biscuits", titleEs: "Galletas de corazón", kind: "food" },
    { id: "plan-2-21", month: 2, day: 21, title: "Gentle stretch morning", titleEs: "Estiramiento suave", kind: "activity" },
    { id: "plan-3-8", month: 3, day: 8, title: "Spring coat fluff day", titleEs: "Día de pelaje de primavera", kind: "activity" },
    { id: "plan-3-21", month: 3, day: 21, title: "First-day-of-spring sniffari", titleEs: "Sniffari de primavera", kind: "activity" },
    { id: "plan-4-12", month: 4, day: 12, title: "April spa refresh", titleEs: "Spa de abril", kind: "activity" },
    { id: "plan-4-22", month: 4, day: 22, title: "Earth Day park walk", titleEs: "Caminata del Día de la Tierra", kind: "activity" },
    { id: "plan-5-1", month: 5, day: 1, title: "Flower collar morning", titleEs: "Collares de flores", kind: "activity" },
    { id: "plan-5-10", month: 5, day: 10, title: "Berry yogurt freeze", titleEs: "Yogur de berries congelado", kind: "food" },
    { id: "plan-6-1", month: 6, day: 1, title: "Summer splash intro", titleEs: "Inicio de chapuzón de verano", kind: "activity" },
    { id: "plan-6-21", month: 6, day: 21, title: "Longest-day evening walk", titleEs: "Caminata del día más largo", kind: "activity" },
    { id: "plan-7-4", month: 7, day: 4, title: "Patriotic bandana day", titleEs: "Día de pañuelos patrióticos", kind: "activity" },
    { id: "plan-7-19", month: 7, day: 19, title: "Cooling paw soaks", titleEs: "Baño fresco de patitas", kind: "activity" },
    { id: "plan-8-8", month: 8, day: 8, title: "Back-to-school bows", titleEs: "Moños de regreso a clases", kind: "activity" },
    { id: "plan-8-23", month: 8, day: 23, title: "Late-summer park day", titleEs: "Día de parque de verano", kind: "activity" },
    { id: "plan-9-6", month: 9, day: 6, title: "Gentle stretch morning", titleEs: "Estiramiento suave", kind: "activity" },
    { id: "plan-9-12", month: 9, day: 12, title: "Birthday pup parade", titleEs: "Desfile de cumpleañeros", kind: "activity" },
    { id: "plan-9-14", month: 9, day: 14, title: "Apple-oat biscuits", titleEs: "Galletas de avena y manzana", kind: "food" },
    { id: "plan-9-21", month: 9, day: 21, title: "Park sniffari walk", titleEs: "Caminata de olfateo", kind: "activity" },
    { id: "plan-9-28", month: 9, day: 28, title: "Pumpkin yogurt freeze", titleEs: "Yogur de calabaza congelado", kind: "food" },
    { id: "plan-10-11", month: 10, day: 11, title: "Fall leaf sniffari", titleEs: "Sniffari de hojas de otoño", kind: "activity" },
    { id: "plan-10-31", month: 10, day: 31, title: "Halloween costume stroll", titleEs: "Paseo de disfraces de Halloween", kind: "activity" },
    { id: "plan-11-11", month: 11, day: 11, title: "Cozy sweater day", titleEs: "Día de suéteres cómodos", kind: "activity" },
    { id: "plan-12-1", month: 12, day: 1, title: "Holiday bow fitting", titleEs: "Prueba de moños navideños", kind: "activity" },
    { id: "plan-12-25", month: 12, day: 25, title: "Christmas pup cookies", titleEs: "Galletas navideñas para pups", kind: "food" },
  ],
};

const MONTH_NAMES_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

function normalizePlanItem(item) {
  const month = Number(item.month) || 9;
  const day = Number(item.day);
  return {
    ...item,
    month,
    day,
    id: item.id || `plan-${month}-${day}-${String(item.title || "activity").toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  };
}

function liveCatalog() {
  const saved = Store.get(KEYS.content, {});
  return {
    homepage: saved.homepage || { en: {}, es: {} },
    services: saved.services || Salon.services,
    shop: saved.shop || Salon.shop,
    monthPlan: (saved.monthPlan || Salon.monthPlan).map(normalizePlanItem),
    hours: saved.hours || Salon.hours,
  };
}

function saveCatalog(next) {
  Store.set(KEYS.content, next);
}

function patchCatalog(partial) {
  saveCatalog({ ...liveCatalog(), ...partial });
}

function isTestLunaBirthday(row) {
  const name = String(row?.name || "")
    .trim()
    .toLowerCase();
  const owner = String(row?.owner || "").toLowerCase();
  return name === "luna" && owner.includes("alex rivera");
}

function seed() {
  if (!localStorage.getItem("owp-reviews-empty")) {
    localStorage.removeItem(KEYS.reviews);
    localStorage.setItem("owp-reviews-empty", "1");
  }
  if (!localStorage.getItem("owp-dogs-empty")) {
    localStorage.removeItem(KEYS.dogs);
    localStorage.setItem("owp-dogs-empty", "1");
  }
  if (!localStorage.getItem("owp-clear-luna-bday")) {
    Store.set(
      KEYS.dogs,
      Store.get(KEYS.dogs, []).filter((d) => !isTestLunaBirthday(d)),
    );
    Store.set(
      KEYS.bdayRequests,
      Store.get(KEYS.bdayRequests, []).filter((r) => !isTestLunaBirthday(r)),
    );
    localStorage.setItem("owp-clear-luna-bday", "1");
  }
  if (!localStorage.getItem("owp-plan-year")) {
    const saved = Store.get(KEYS.content, {});
    if (Array.isArray(saved.monthPlan)) {
      const existing = saved.monthPlan.map(normalizePlanItem);
      const have = new Set(existing.map((p) => p.month));
      const merged = [...existing, ...Salon.monthPlan.filter((p) => !have.has(p.month))];
      merged.sort((a, b) => a.month - b.month || a.day - b.day);
      saveCatalog({ ...liveCatalog(), monthPlan: merged });
    }
    localStorage.setItem("owp-plan-year", "1");
  }
  if (!localStorage.getItem(KEYS.finance)) {
    Store.set(KEYS.finance, {
      expenses: [
        { label: "Shampoo & conditioners", amount: 86, date: "2026-09-02" },
        { label: "Gas / travel", amount: 54, date: "2026-09-05" },
        { label: "Bows & bandanas", amount: 40, date: "2026-09-01" },
      ],
    });
  }
  if (!localStorage.getItem(KEYS.analytics)) {
    Store.set(KEYS.analytics, {});
  }
  if (!localStorage.getItem(KEYS.members)) Store.set(KEYS.members, []);
  if (!localStorage.getItem(KEYS.bdayRequests)) Store.set(KEYS.bdayRequests, []);
  if (!localStorage.getItem(KEYS.bookings) && localStorage.getItem("oh-wau-patitas-bookings")) {
    Store.set(KEYS.bookings, Store.get("oh-wau-patitas-bookings", []));
  }
}

function serviceById(id) {
  return liveCatalog().services.find((s) => s.id === id);
}

function serviceName(id) {
  return tObj(`svc.${id}.name`) || serviceById(id)?.name || id;
}

function serviceBlurb(item) {
  return tObj(`svc.${item.id}.blurb`) || item.blurb || "";
}

function money(n) {
  return `$${Number(n).toFixed(0)}`;
}

function currentRegion() {
  const id = localStorage.getItem(KEYS.region) || "stlucie";
  return Salon.regions.find((r) => r.id === id) || Salon.regions[0];
}

function priceFor(service, region = currentRegion()) {
  return Math.round(Number(service?.price || 0));
}

function monthName(date = new Date()) {
  return date.toLocaleString(localeTag(), { month: "long" });
}

function calendarMonthKey(date = new Date()) {
  return `${date.getFullYear()}-${date.getMonth()}`;
}

function monthSelectHtml(selected) {
  const value = Number(selected) || new Date().getMonth() + 1;
  return MONTH_NAMES_EN.map(
    (name, index) => `<option value="${index + 1}" ${index + 1 === value ? "selected" : ""}>${name}</option>`,
  ).join("");
}

function thanksgivingDate(year) {
  const first = new Date(year, 10, 1);
  const offset = (4 - first.getDay() + 7) % 7;
  return new Date(year, 10, 1 + offset + 21);
}

function easterDate(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function holidayEntries(fromYear = new Date().getFullYear()) {
  const items = [];
  [fromYear, fromYear + 1].forEach((year) => {
    items.push({ name: "New Year's Day", date: `${year}-01-01` });
    items.push({ name: "Valentine's Day", date: `${year}-02-14` });
    items.push({ name: "Easter", date: ymd(easterDate(year)) });
    items.push({ name: "Halloween", date: `${year}-10-31` });
    items.push({ name: "Thanksgiving", date: ymd(thanksgivingDate(year)) });
    items.push({ name: "Christmas", date: `${year}-12-25` });
  });
  return items;
}

function planForMonth(date = new Date()) {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const fromCatalog = liveCatalog()
    .monthPlan.filter((p) => Number(p.month) === month)
    .sort((a, b) => a.day - b.day);
  const extras = [];
  const thanks = thanksgivingDate(year);
  if (thanks.getMonth() + 1 === month && !fromCatalog.some((p) => p.day === thanks.getDate())) {
    extras.push({
      month,
      day: thanks.getDate(),
      title: "Thanksgiving pup biscuits",
      titleEs: "Galletas de Acción de Gracias",
      kind: "food",
    });
  }
  const easter = easterDate(year);
  if (easter.getMonth() + 1 === month && !fromCatalog.some((p) => p.day === easter.getDate())) {
    extras.push({
      month,
      day: easter.getDate(),
      title: "Easter berry treats",
      titleEs: "Premios de Pascua",
      kind: "food",
    });
  }
  return [...fromCatalog, ...extras].sort((a, b) => a.day - b.day);
}

function sameMonthDay(iso, date = new Date()) {
  const b = new Date(`${iso}T12:00:00`);
  return b.getMonth() === date.getMonth();
}

function daysUntil(iso) {
  const now = new Date();
  const t = new Date(`${iso}T12:00:00`);
  t.setFullYear(now.getFullYear());
  if (t < now) t.setFullYear(now.getFullYear() + 1);
  return Math.ceil((t - now) / 86400000);
}

function ymd(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isBeforeToday(date) {
  return startOfDay(date) < startOfDay(new Date());
}

function isWorkDay(date) {
  return liveCatalog().hours.workDays.includes(date.getDay());
}

function formatSlot(hhmm) {
  const [h, m] = String(hhmm || "09:00").split(":").map(Number);
  const d = new Date();
  d.setHours(h, m || 0, 0, 0);
  return d.toLocaleTimeString(localeTag(), { hour: "numeric", minute: "2-digit" });
}

function prettyDate(dateStr) {
  if (!dateStr) return "";
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString(localeTag(), {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

function takenTimes(dateStr) {
  return new Set(
    Bookings.list()
      .filter((b) => b.date === dateStr && b.time && b.status !== "cancelled")
      .map((b) => b.time),
  );
}

function slotState(dateStr, time) {
  const [y, mo, d] = String(dateStr)
    .split("-")
    .map(Number);
  const [hh, mm] = String(time).split(":").map(Number);
  const when = new Date(y, mo - 1, d, hh, mm || 0);
  if (when < new Date()) return "past";
  if (takenTimes(dateStr).has(time)) return "taken";
  return "open";
}

function hasOpenSlot(dateStr) {
  return liveCatalog().hours.slots.some((time) => slotState(dateStr, time) === "open");
}

function planTitle(event) {
  if (!event) return "";
  if (currentLang() === "es" && event.titleEs) return event.titleEs;
  return event.title || tObj(`plan.${event.month}-${event.day}`) || tObj(`plan.${event.day}`) || "";
}

const Analytics = {
  data() {
    return Store.get(KEYS.analytics, {});
  },
  touch(id, extra = {}) {
    const all = this.data();
    const row = all[id] || { views: 0, dwellMs: 0 };
    Object.assign(row, extra);
    all[id] = row;
    Store.set(KEYS.analytics, all);
  },
  view(id) {
    const row = this.data()[id] || { views: 0, dwellMs: 0 };
    this.touch(id, { views: row.views + 1, dwellMs: row.dwellMs });
  },
  dwell(id, ms) {
    const row = this.data()[id] || { views: 0, dwellMs: 0 };
    this.touch(id, { views: row.views, dwellMs: row.dwellMs + ms });
  },
};

const Members = {
  list() {
    return Store.get(KEYS.members, []);
  },
  session() {
    const email = localStorage.getItem(KEYS.session);
    return this.list().find((m) => m.email === email) || null;
  },
  save(list) {
    Store.set(KEYS.members, list);
  },
  signup(data) {
    const list = this.list();
    if (list.some((m) => m.email === data.email)) return { error: t("emailTaken") };
    const member = {
      ...data,
      id: crypto.randomUUID(),
      points: 20,
      visits: 0,
      createdAt: new Date().toISOString(),
    };
    list.push(member);
    this.save(list);
    localStorage.setItem(KEYS.session, member.email);
    return { member };
  },
  addPoints(email, points) {
    const list = this.list().map((m) =>
      m.email === email ? { ...m, points: m.points + points, visits: m.visits + 1 } : m,
    );
    this.save(list);
  },
};

const Bookings = {
  list() {
    return Store.get(KEYS.bookings, []);
  },
  add(entry) {
    const bookings = this.list();
    const serviceIds = entry.serviceIds || (entry.serviceId ? [entry.serviceId] : []);
    const addonIds = entry.addonIds || [];
    const region = Salon.regions.find((r) => r.id === entry.regionId) || currentRegion();
    const price = [...serviceIds, ...addonIds].reduce((sum, id) => {
      const s = serviceById(id);
      return sum + (s ? priceFor(s, region) : 0);
    }, 0);
    const booking = {
      ...entry,
      serviceIds,
      addonIds,
      serviceId: serviceIds[0] || addonIds[0],
      id: crypto.randomUUID(),
      price,
      createdAt: new Date().toISOString(),
      status: "requested",
    };
    bookings.unshift(booking);
    Store.set(KEYS.bookings, bookings);
    if (entry.email) Members.addPoints(entry.email, 10);
    return booking;
  },
};

function dogList() {
  const dogs = Store.get(KEYS.dogs, []);
  let changed = false;
  const next = dogs.map((d) => {
    if (d.id) return d;
    changed = true;
    return { ...d, id: crypto.randomUUID() };
  });
  if (changed) Store.set(KEYS.dogs, next);
  return next;
}

function birthdayDogs(date = new Date()) {
  return dogList().filter((d) => sameMonthDay(d.birthday, date));
}

function reminders() {
  const items = [];
  dogList().forEach((dog) => {
    const days = daysUntil(dog.birthday);
    if (days <= 14) items.push({ kind: "birthday", title: `${dog.name}'s birthday`, days, date: dog.birthday });
  });
  holidayEntries().forEach((h) => {
    const days = daysUntil(h.date);
    if (days <= 14) items.push({ kind: "holiday", title: h.name, days, date: h.date });
  });
  return items.sort((a, b) => a.days - b.days);
}

function financeSummary() {
  const expenses = Store.get(KEYS.finance, { expenses: [] }).expenses || [];
  const spent = expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0);
  const now = new Date();
  const gained = Bookings.list()
    .filter((b) => {
      const d = new Date(b.date || b.createdAt);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    })
    .reduce((sum, b) => sum + Number(b.price || 0), 0);
  const day = now.getDate();
  const inMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const projected = day ? Math.round((gained / day) * inMonth) : 0;
  return { spent, gained, projected, expenses };
}

function detectRegion(callback) {
  const apply = (id) => {
    localStorage.setItem(KEYS.region, id);
    callback(Salon.regions.find((r) => r.id === id));
  };
  if (!navigator.geolocation) return apply("stlucie");
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      const match = Salon.regions.find(
        (r) => r.id !== "other" && lat >= r.lat[0] && lat <= r.lat[1] && lng >= r.lng[0] && lng <= r.lng[1],
      );
      apply(match ? match.id : "other");
    },
    () => apply(localStorage.getItem(KEYS.region) || "stlucie"),
    { timeout: 4000 },
  );
}

function applyHomepageCopy() {
  const pack = liveCatalog().homepage[currentLang()] || liveCatalog().homepage.en || {};
  ["heroTitle", "heroSlogan", "heroProof"].forEach((key) => {
    const el = document.querySelector(`[data-i18n="${key}"]`);
    if (el && pack[key]) el.textContent = pack[key];
  });
}

function renderServiceTabs(root) {
  if (!root) return;
  const region = currentRegion();
  const items = liveCatalog().services;
  root.innerHTML = `<div class="package-grid">${items
    .map((s) => {
      const copy = tObj(`svc.${s.id}`) || {};
      return `<article class="package${s.featured ? " featured" : ""}" data-service-card="${escapeHtml(s.id)}">
        <div class="package-top">
          ${s.featured ? `<span class="tag">${t("popular")}</span>` : `<span></span>`}
          <span class="price-pill">${t("startingAt")} ${money(priceFor(s, region))}</span>
        </div>
        <h3>${escapeHtml(copy.name || s.name)}</h3>
        <p class="empty">${escapeHtml(copy.duration || s.duration || "")} · ${escapeHtml(tObj(`regions.${region.id}`) || region.name)}</p>
        <p>${escapeHtml(copy.blurb || s.blurb || "")}</p>
        <button class="btn" type="button" data-open-book data-service="${escapeHtml(s.id)}">${t("bookNow")}</button>
      </article>`;
    })
    .join("")}</div>`;

  root.querySelectorAll("[data-service-card]").forEach((card) => {
    const id = card.dataset.serviceCard;
    Analytics.view(id);
    let started = Date.now();
    card.addEventListener("mouseenter", () => {
      started = Date.now();
    });
    card.addEventListener("mouseleave", () => Analytics.dwell(id, Date.now() - started));
  });
}

function optionMarkup(item, name, checked) {
  const copy = tObj(`svc.${item.id}`) || {};
  return `<label>
    <input type="checkbox" name="${name}" value="${escapeHtml(item.id)}" ${checked ? "checked" : ""} />
    <span>${escapeHtml(copy.name || item.name)} · ${money(priceFor(item))}
      <small>${escapeHtml(copy.blurb || item.blurb || "")}</small>
    </span>
  </label>`;
}

function renderBookChoices(prefill = {}) {
  const servicesRoot = document.querySelector("[data-book-services]");
  const addonsRoot = document.querySelector("[data-book-addons]");
  if (!servicesRoot || !addonsRoot) return;
  const items = liveCatalog().services;
  const selected = new Set([].concat(prefill.serviceId || [], prefill.serviceIds || [], prefill.addonIds || []));
  servicesRoot.innerHTML = items
    .filter((s) => s.kind !== "addon")
    .map((s) => optionMarkup(s, "serviceId", selected.has(s.id)))
    .join("");
  addonsRoot.innerHTML = items
    .filter((s) => s.kind === "addon")
    .map((s) => optionMarkup(s, "addonId", selected.has(s.id)))
    .join("");
}

function renderRegionOptions(select) {
  if (!select) return;
  const current = currentRegion().id;
  select.innerHTML = Salon.regions
    .map((r) => `<option value="${r.id}" ${r.id === current ? "selected" : ""}>${tObj(`regions.${r.id}`) || r.name}</option>`)
    .join("");
}

function fillTimeSelect(select, dateStr, selected) {
  if (!select) return;
  const slots = liveCatalog().hours.slots;
  const options = [`<option value="">${t("chooseTime")}</option>`];
  if (dateStr) {
    slots.forEach((time) => {
      const state = slotState(dateStr, time);
      const label = `${formatSlot(time)}${state === "taken" ? ` · ${t("slotTaken")}` : state === "past" ? ` · ${t("slotPast")}` : ""}`;
      const disabled = state !== "open" && time !== selected ? "disabled" : "";
      const isSel = time === selected ? "selected" : "";
      options.push(`<option value="${time}" ${disabled} ${isSel}>${label}</option>`);
    });
  }
  select.innerHTML = options.join("");
}

function bookingNames(b) {
  return [...(b.serviceIds || [b.serviceId]), ...(b.addonIds || [])]
    .filter(Boolean)
    .map((id) => serviceName(id))
    .join(", ");
}

function renderBookings(root) {
  if (!root) return;
  const bookings = Bookings.list();
  if (!bookings.length) {
    root.innerHTML = `<p class="empty">${t("noVisits")}</p>`;
    return;
  }
  root.innerHTML = bookings
    .map((b) => {
      const when = [b.date || t("dateTbd"), b.time ? formatSlot(b.time) : ""].filter(Boolean).join(" · ");
      return `
      <article class="booking">
        <strong>${escapeHtml(b.dogName)}</strong>
        <span>${escapeHtml(bookingNames(b))} · ${money(b.price || 0)}</span>
        <span>${escapeHtml(when)} · ${escapeHtml(b.ownerName)}</span>
      </article>`;
    })
    .join("");
}

function renderReviews(root) {
  if (!root) return;
  const reviews = Store.get(KEYS.reviews, []);
  if (!reviews.length) {
    root.innerHTML = `<p class="empty">${t("reviewsEmpty")}</p>`;
    return;
  }
  root.innerHTML = reviews
    .map(
      (r) => `
      <article class="review">
        <span class="source">${escapeHtml(r.source)}</span>
        <strong>${escapeHtml(r.author)}</strong>
        <span>${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</span>
        <p>${escapeHtml(r.text)}</p>
      </article>`,
    )
    .join("");
}

function renderBirthdays(root) {
  if (!root) return;
  const dogs = birthdayDogs();
  if (!dogs.length) {
    root.innerHTML = `<p class="empty">${t("bdayEmpty")}</p>`;
    return;
  }
  root.innerHTML = dogs
    .map(
      (d) => `
      <article class="booking">
        <strong>${escapeHtml(d.name)}</strong>
        <span>${escapeHtml(d.owner)}</span>
        <span>${new Date(d.birthday + "T12:00:00").toLocaleDateString(localeTag(), { month: "long", day: "numeric" })}</span>
      </article>`,
    )
    .join("");
}

function renderCalAlerts(root) {
  if (!root) return;
  const now = new Date();
  const plan = planForMonth(now);
  if (!plan.length) {
    root.innerHTML = `<li class="empty">${t("noActivities")}</li>`;
    return;
  }
  root.innerHTML = plan
    .map(
      (p) => `<li><strong>${escapeHtml(planTitle(p))}</strong><small>${escapeHtml(monthName(now))} ${p.day} · ${t(p.kind || "activity")}</small></li>`,
    )
    .join("");
}

function renderMonthCalendar(root) {
  if (!root) return;
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const plan = Object.fromEntries(planForMonth(now).map((p) => [p.day, p]));
  const birthdayDays = new Set(birthdayDogs(now).map((d) => new Date(d.birthday + "T12:00:00").getDate()));
  let html = `<div class="cal-grid">`;
  (tObj("days") || ["S", "M", "T", "W", "T", "F", "S"]).forEach((d) => {
    html += `<span class="cal-label">${d}</span>`;
  });
  for (let i = 0; i < first; i += 1) html += `<span></span>`;
  for (let d = 1; d <= days; d += 1) {
    const dateObj = new Date(year, month, d);
    const dateStr = ymd(dateObj);
    const event = plan[d];
    const bday = birthdayDays.has(d);
    const title = event ? planTitle(event) : bday ? t("birthday") : "";
    const work = isWorkDay(dateObj) && !isBeforeToday(dateObj);
    const available = work && hasOpenSlot(dateStr);
    const slots = work
      ? liveCatalog()
          .hours.slots.map((time) => {
            const state = slotState(dateStr, time);
            return `<button type="button" class="slot ${state}" data-slot data-date="${dateStr}" data-time="${time}" ${
              state === "open" ? "" : "disabled"
            }>${formatSlot(time)}</button>`;
          })
          .join("")
      : "";
    html += `<div class="cal-day${event ? " has-event" : ""}${bday ? " has-bday" : ""}${
      available ? " has-open" : ""
    }${isBeforeToday(dateObj) ? " is-past" : ""}" ${work ? `data-cal-day="${dateStr}" tabindex="0"` : ""}>
      <b>${d}</b>
      ${available ? `<i class="avail-dot" title="${t("availAppointments")}"></i>` : ""}
      ${title ? `<small>${escapeHtml(title)}</small>` : ""}
      ${slots ? `<div class="slot-pop">${slots}</div>` : ""}
    </div>`;
  }
  html += `</div>`;
  root.innerHTML = html;

  root.querySelectorAll("[data-cal-day]").forEach((day) => {
    day.addEventListener("click", (e) => {
      if (e.target.closest("[data-slot]")) return;
      root.querySelectorAll("[data-cal-day]").forEach((other) => {
        if (other !== day) other.classList.remove("is-open");
      });
      day.classList.toggle("is-open");
    });
  });
  root.querySelectorAll("[data-slot]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (btn.disabled) return;
      openBookModal({ date: btn.dataset.date, time: btn.dataset.time });
    });
  });
}

function renderShop(root) {
  if (!root) return;
  root.innerHTML = liveCatalog()
    .shop.map(
      (item) => `
      <article class="service">
        <h3>${escapeHtml(tObj(`shop.${item.id}`) || item.name)}</h3>
        <p>${escapeHtml(tObj(`seasons.${item.season}`) || item.season)} · ${t(item.kind)}</p>
        <p class="price-line"><strong>${money(item.price)}</strong></p>
      </article>`,
    )
    .join("");
}

function renderMember(root) {
  if (!root) return;
  const member = Members.session();
  if (!member) {
    root.innerHTML = `<p class="empty">${t("memberEmpty")}</p>`;
    return;
  }
  root.innerHTML = `<article class="booking"><strong>${escapeHtml(member.name)}</strong><span>${member.points} ${t("points")} · ${member.visits} ${t("visits")}</span><span>${escapeHtml(member.email)}</span></article>`;
}

function ensureBookModal() {
  if (document.querySelector("[data-book-modal]")) return;
  document.body.insertAdjacentHTML(
    "beforeend",
    `<dialog class="book-modal" data-book-modal>
      <form id="book-form">
        <div class="book-modal-head">
          <h2 data-i18n="bookTitle">Request a booking</h2>
          <button type="button" class="mia-x" data-book-close aria-label="Close">×</button>
        </div>
        <p class="slot-line" data-book-slot hidden></p>
        <p class="empty" data-book-error></p>
        <label><span data-i18n="yourName">Your name</span> <input name="ownerName" required /></label>
        <label><span data-i18n="phone">Phone</span> <input name="phone" type="tel" required /></label>
        <label><span data-i18n="dogName">Dog’s name</span> <input name="dogName" required /></label>
        <label><span data-i18n="area">Area</span> <select name="regionId" required></select></label>
        <fieldset>
          <legend data-i18n="servicesPick">Services</legend>
          <div class="option-list" data-book-services></div>
        </fieldset>
        <fieldset>
          <legend data-i18n="addOns">Add-ons</legend>
          <div class="option-list" data-book-addons></div>
        </fieldset>
        <label><span data-i18n="preferredDate">Preferred date</span> <input name="date" type="date" /></label>
        <label><span data-i18n="preferredTime">Preferred time</span> <select name="time"></select></label>
        <label><span data-i18n="notes">Notes</span> <textarea name="notes" data-i18n-placeholder="notesPh"></textarea></label>
        <label class="check">
          <input name="disclosure" type="checkbox" required />
          <span data-i18n="disclosureAgree">I have read and agree to the grooming disclosure.</span>
        </label>
        <p class="empty" data-i18n="disclosureBody"></p>
        <button class="btn" type="submit" data-i18n="sendRequest">Send request</button>
      </form>
    </dialog>`,
  );
}

function estimatorHref(prefill = {}) {
  const q = new URLSearchParams();
  if (prefill.serviceId) q.set("service", prefill.serviceId);
  if (prefill.date) q.set("date", prefill.date);
  if (prefill.time) q.set("time", prefill.time);
  const s = q.toString();
  return `grooming-estimator-and-request.html${s ? `?${s}` : ""}`;
}

function openBookModal(prefill = {}) {
  if (document.body.dataset.page === "estimate") return;
  window.location.href = estimatorHref(prefill);
}

function bindBookModal() {
  document.addEventListener("click", (event) => {
    const open = event.target.closest("[data-open-book]");
    if (open) {
      event.preventDefault();
      openBookModal({ serviceId: open.dataset.service });
    }
    if (event.target.closest("[data-book-close]")) {
      document.querySelector("[data-book-modal]")?.close();
    }
  });
  document.querySelector("[data-book-modal]")?.addEventListener("click", (event) => {
    if (event.target.matches("[data-book-modal]")) event.target.close();
  });
}

function bindBookingForm(form, list) {
  if (!form) return;
  form.querySelector("[name=date]")?.addEventListener("change", () => {
    fillTimeSelect(form.querySelector("[name=time]"), form.querySelector("[name=date]").value);
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const disclosure = form.querySelector("[name=disclosure]");
    if (disclosure && !disclosure.checked) {
      disclosure.focus();
      return;
    }
    const serviceIds = [...form.querySelectorAll("[name=serviceId]:checked")].map((i) => i.value);
    const addonIds = [...form.querySelectorAll("[name=addonId]:checked")].map((i) => i.value);
    const error = form.querySelector("[data-book-error]");
    if (!serviceIds.length && !addonIds.length) {
      if (error) error.textContent = t("pickService");
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    delete data.serviceId;
    delete data.addonId;
    delete data.disclosure;
    const member = Members.session();
    if (member) data.email = member.email;
    Bookings.add({ ...data, serviceIds, addonIds });
    form.reset();
    if (disclosure) disclosure.checked = false;
    document.querySelector("[data-book-modal]")?.close();
    renderBookings(list);
    renderMonthCalendar(document.querySelector("[data-month-cal]"));
    document.querySelector('[data-tab="home"]')?.click();
  });
  renderBookings(list);
}

function bindSignup(form) {
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const result = Members.signup(data);
    const note = form.querySelector("[data-signup-note]");
    if (result.error) {
      if (note) note.textContent = result.error;
      return;
    }
    form.reset();
    renderMember(document.querySelector("[data-member]"));
    if (note) note.textContent = t("welcomeClub");
  });
}

function bindBirthdayForm(form) {
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const list = Store.get(KEYS.bdayRequests, []);
    list.unshift({
      ...data,
      id: crypto.randomUUID(),
      status: "pending",
      createdAt: new Date().toISOString(),
    });
    Store.set(KEYS.bdayRequests, list);
    form.reset();
    const note = form.querySelector("[data-bday-note]");
    if (note) note.textContent = t("bdaySent");
  });
}

function setupAppTabs() {
  const buttons = document.querySelectorAll("[data-tab]");
  const screens = document.querySelectorAll("[data-screen]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.tab;
      buttons.forEach((b) => b.classList.toggle("active", b === button));
      screens.forEach((s) => s.classList.toggle("active", s.dataset.screen === id));
    });
  });
}

function bindRegionSelect(select, onChange) {
  if (!select) return;
  select.addEventListener("change", () => {
    localStorage.setItem(KEYS.region, select.value);
    onChange?.();
  });
}

function renderOffice() {
  const remind = document.querySelector("[data-reminders]");
  if (remind) {
    const items = reminders();
    remind.innerHTML = items.length
      ? items
          .map(
            (i) =>
              `<article class="booking"><strong>${escapeHtml(i.title)}</strong><span>${escapeHtml(i.kind)}</span><span>${i.days === 0 ? "Today" : i.days === 1 ? "Tomorrow" : `${i.days} days`} — prepare now</span></article>`,
          )
          .join("")
      : `<p class="empty">No birthdays or holidays in the next two weeks.</p>`;
  }

  const popular = document.querySelector("[data-popular]");
  if (popular) {
    const booked = {};
    Bookings.list().forEach((b) => {
      [...(b.serviceIds || [b.serviceId]), ...(b.addonIds || [])].filter(Boolean).forEach((id) => {
        booked[id] = (booked[id] || 0) + 1;
      });
    });
    const stats = liveCatalog()
      .services.map((s) => {
        const a = Analytics.data()[s.id] || { views: 0, dwellMs: 0 };
        return { ...s, views: a.views, linger: Math.round(a.dwellMs / 1000), booked: booked[s.id] || 0 };
      })
      .sort((a, b) => b.views + b.booked * 3 - (a.views + a.booked * 3));
    popular.innerHTML = stats
      .map(
        (s) =>
          `<article class="booking"><strong>${escapeHtml(s.name)}</strong><span>${s.views} looks · ${s.booked} bookings</span><span>Lingered ${s.linger}s</span></article>`,
      )
      .join("");
  }

  const moneyBox = document.querySelector("[data-money]");
  if (moneyBox) {
    const { spent, gained, projected } = financeSummary();
    moneyBox.innerHTML = `
      <article class="stat"><span>Spent</span><strong>${money(spent)}</strong></article>
      <article class="stat"><span>Gained</span><strong>${money(gained)}</strong></article>
      <article class="stat"><span>Projected this month</span><strong>${money(projected)}</strong></article>`;
  }

  const expenseList = document.querySelector("[data-expenses]");
  if (expenseList) {
    const { expenses } = financeSummary();
    expenseList.innerHTML =
      expenses
        .map((e) => `<article class="booking"><strong>${escapeHtml(e.label)}</strong><span>${money(e.amount)}</span><span>${escapeHtml(e.date)}</span></article>`)
        .join("") || `<p class="empty">No expenses yet.</p>`;
  }

  const dogBox = document.querySelector("[data-dogs]");
  if (dogBox) {
    dogBox.innerHTML = dogList()
      .map(
        (d) =>
          `<article class="booking"><strong>${escapeHtml(d.name)}</strong><span>${escapeHtml(d.owner)}</span><span>${escapeHtml(d.birthday)}</span></article>`,
      )
      .join("");
  }

  const email = document.querySelector("[name=workEmail]");
  if (email) email.value = localStorage.getItem(KEYS.email) || Salon.email;

  renderReviews(document.querySelector("[data-office-reviews]"));
  renderBookings(document.querySelector("[data-office-bookings]"));
}

function bindOfficeForms() {
  document.querySelector("#dog-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const dogs = dogList();
    dogs.push({ ...data, id: crypto.randomUUID() });
    Store.set(KEYS.dogs, dogs);
    event.target.reset();
    renderOffice();
  });

  document.querySelector("#review-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    data.stars = Number(data.stars);
    const reviews = Store.get(KEYS.reviews, []);
    reviews.unshift(data);
    Store.set(KEYS.reviews, reviews);
    event.target.reset();
    renderOffice();
    renderReviews(document.querySelector("[data-reviews]"));
  });

  document.querySelector("#expense-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    data.amount = Number(data.amount);
    const finance = Store.get(KEYS.finance, { expenses: [] });
    finance.expenses.unshift(data);
    Store.set(KEYS.finance, finance);
    event.target.reset();
    renderOffice();
  });

  document.querySelector("#email-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    localStorage.setItem(KEYS.email, data.workEmail);
    const note = event.target.querySelector("[data-email-note]");
    if (note) {
      note.textContent = `Saved ${data.workEmail}. Google Calendar live sync can be connected next for that work inbox.`;
    }
  });
}

function slugify(name) {
  const base = foldText(name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return base || crypto.randomUUID();
}

function uniqueId(name, existing) {
  const base = slugify(name);
  if (!existing.some((item) => item.id === base)) return base;
  return `${base}-${crypto.randomUUID().slice(0, 6)}`;
}

function renderAdmin() {
  const home = document.querySelector("#home-form");
  if (home) {
    const h = liveCatalog().homepage;
    const en = h.en || {};
    const es = h.es || {};
    home.heroTitleEn.value = en.heroTitle || I18N.en.heroTitle;
    home.heroSloganEn.value = en.heroSlogan || I18N.en.heroSlogan;
    home.heroProofEn.value = en.heroProof || I18N.en.heroProof;
    home.heroTitleEs.value = es.heroTitle || I18N.es.heroTitle;
    home.heroSloganEs.value = es.heroSlogan || I18N.es.heroSlogan;
    home.heroProofEs.value = es.heroProof || I18N.es.heroProof;
  }

  const services = document.querySelector("[data-admin-services]");
  if (services) {
    services.innerHTML = liveCatalog()
      .services.map(
        (s) => `<form class="admin-row" data-edit-service="${escapeHtml(s.id)}">
          <strong>${escapeHtml(s.name)}</strong>
          <label>Name <input name="name" value="${escapeHtml(s.name)}" required /></label>
          <label>Spanish name <input name="nameEs" value="${escapeHtml(s.nameEs || "")}" /></label>
          <label>Price <input name="price" type="number" min="0" value="${escapeHtml(s.price)}" required /></label>
          <label>Kind
            <select name="kind">
              <option value="service" ${s.kind !== "addon" ? "selected" : ""}>Service / package</option>
              <option value="addon" ${s.kind === "addon" ? "selected" : ""}>Add-on</option>
            </select>
          </label>
          <label>Description <textarea name="blurb">${escapeHtml(s.blurb || "")}</textarea></label>
          <div class="admin-row-actions">
            <button class="btn" type="submit">Save</button>
            <button class="btn danger" type="button" data-delete-service="${escapeHtml(s.id)}">Delete</button>
          </div>
        </form>`,
      )
      .join("");
  }

  const shop = document.querySelector("[data-admin-shop]");
  if (shop) {
    shop.innerHTML = liveCatalog()
      .shop.map(
        (item) => `<form class="admin-row" data-edit-shop="${escapeHtml(item.id)}">
          <strong>${escapeHtml(item.name)}</strong>
          <label>Name <input name="name" value="${escapeHtml(item.name)}" required /></label>
          <label>Kind
            <select name="kind">
              <option value="accessory" ${item.kind === "accessory" ? "selected" : ""}>Accessory</option>
              <option value="food" ${item.kind === "food" ? "selected" : ""}>Food</option>
            </select>
          </label>
          <label>Season <input name="season" value="${escapeHtml(item.season)}" required /></label>
          <label>Price <input name="price" type="number" min="0" value="${escapeHtml(item.price)}" required /></label>
          <div class="admin-row-actions">
            <button class="btn" type="submit">Save</button>
            <button class="btn danger" type="button" data-delete-shop="${escapeHtml(item.id)}">Delete</button>
          </div>
        </form>`,
      )
      .join("");
  }

  const plan = document.querySelector("[data-admin-plan]");
  if (plan) {
    const monthField = document.querySelector("#activity-form [name=month]");
    if (monthField) monthField.innerHTML = monthSelectHtml(monthField.value || new Date().getMonth() + 1);
    const rows = [...liveCatalog().monthPlan].sort((a, b) => a.month - b.month || a.day - b.day);
    plan.innerHTML =
      rows
        .map(
          (p) => `<form class="admin-row" data-edit-plan="${escapeHtml(p.id)}">
          <strong>${escapeHtml(MONTH_NAMES_EN[p.month - 1] || "")} ${p.day} — ${escapeHtml(p.title)}</strong>
          <label>Month <select name="month">${monthSelectHtml(p.month)}</select></label>
          <label>Day <input name="day" type="number" min="1" max="31" value="${escapeHtml(p.day)}" required /></label>
          <label>Title <input name="title" value="${escapeHtml(p.title)}" required /></label>
          <label>Spanish title <input name="titleEs" value="${escapeHtml(p.titleEs || "")}" /></label>
          <label>Kind
            <select name="kind">
              <option value="activity" ${p.kind !== "food" ? "selected" : ""}>Activity</option>
              <option value="food" ${p.kind === "food" ? "selected" : ""}>Food</option>
            </select>
          </label>
          <div class="admin-row-actions">
            <button class="btn" type="submit">Save</button>
            <button class="btn danger" type="button" data-delete-plan="${escapeHtml(p.id)}">Delete</button>
          </div>
        </form>`,
        )
        .join("") || `<p class="empty">No activities yet.</p>`;
  }

  const dogs = document.querySelector("[data-admin-dogs]");
  if (dogs) {
    const rows = dogList();
    dogs.innerHTML = rows.length
      ? rows
          .map(
            (d) => `<form class="admin-row" data-edit-dog="${escapeHtml(d.id)}">
              <strong>${escapeHtml(d.name)}</strong>
              <label>Dog’s name <input name="name" value="${escapeHtml(d.name)}" required /></label>
              <label>Owner <input name="owner" value="${escapeHtml(d.owner)}" required /></label>
              <label>Birthday <input name="birthday" type="date" value="${escapeHtml(d.birthday)}" required /></label>
              <label>Phone <input name="phone" type="tel" value="${escapeHtml(d.phone || "")}" /></label>
              <div class="admin-row-actions">
                <button class="btn" type="submit">Save</button>
                <button class="btn danger" type="button" data-delete-dog="${escapeHtml(d.id)}">Delete</button>
              </div>
            </form>`,
          )
          .join("")
      : `<p class="empty">No birthday pups yet. Add one with the form.</p>`;
  }

  const bdays = document.querySelector("[data-admin-bdays]");
  if (bdays) {
    const rows = Store.get(KEYS.bdayRequests, []);
    bdays.innerHTML = rows.length
      ? rows
          .map(
            (r) => `<article class="admin-row">
              <strong>${escapeHtml(r.name)}</strong>
              <span>${escapeHtml(r.owner)} · ${escapeHtml(r.birthday)}${r.phone ? ` · ${escapeHtml(r.phone)}` : ""}</span>
              <span>${escapeHtml(r.status)}</span>
              ${
                r.status === "pending"
                  ? `<div class="admin-row-actions">
                      <button class="btn" type="button" data-approve-bday="${escapeHtml(r.id)}">Approve</button>
                      <button class="btn danger" type="button" data-decline-bday="${escapeHtml(r.id)}">Decline</button>
                    </div>`
                  : ""
              }
            </article>`,
          )
          .join("")
      : `<p class="empty">No birthday submissions yet.</p>`;
  }
}

function bindAdminForms() {
  document.querySelector("#home-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    patchCatalog({
      homepage: {
        en: { heroTitle: data.heroTitleEn, heroSlogan: data.heroSloganEn, heroProof: data.heroProofEn },
        es: { heroTitle: data.heroTitleEs, heroSlogan: data.heroSloganEs, heroProof: data.heroProofEs },
      },
    });
    const note = event.target.querySelector("[data-home-note]");
    if (note) note.textContent = "Homepage copy saved. Refresh the website to see it.";
  });

  document.querySelector("#service-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const catalog = liveCatalog();
    catalog.services.push({
      id: uniqueId(data.name, catalog.services),
      kind: data.kind,
      name: data.name,
      nameEs: data.nameEs,
      price: Number(data.price),
      duration: data.duration,
      blurb: data.blurb,
      blurbEs: data.blurbEs,
      featured: Boolean(data.featured),
    });
    saveCatalog(catalog);
    event.target.reset();
    renderAdmin();
  });

  document.querySelector("#shop-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const catalog = liveCatalog();
    catalog.shop.push({
      id: uniqueId(data.name, catalog.shop),
      name: data.name,
      kind: data.kind,
      season: data.season,
      price: Number(data.price),
    });
    saveCatalog(catalog);
    event.target.reset();
    renderAdmin();
  });

  document.querySelector("#activity-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const catalog = liveCatalog();
    catalog.monthPlan.push(
      normalizePlanItem({
        day: Number(data.day),
        month: Number(data.month) || new Date().getMonth() + 1,
        title: data.title,
        titleEs: data.titleEs,
        kind: data.kind,
      }),
    );
    catalog.monthPlan.sort((a, b) => a.month - b.month || a.day - b.day);
    saveCatalog(catalog);
    event.target.reset();
    if (event.target.month) event.target.month.value = String(new Date().getMonth() + 1);
    renderAdmin();
  });

  document.querySelector("#bday-admin-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const dogs = dogList();
    dogs.push({
      id: crypto.randomUUID(),
      name: data.name,
      owner: data.owner,
      birthday: data.birthday,
      phone: data.phone,
    });
    Store.set(KEYS.dogs, dogs);
    event.target.reset();
    renderAdmin();
  });

  document.addEventListener("submit", (event) => {
    const serviceForm = event.target.closest("[data-edit-service]");
    if (serviceForm) {
      event.preventDefault();
      const id = serviceForm.dataset.editService;
      const data = Object.fromEntries(new FormData(serviceForm));
      const catalog = liveCatalog();
      catalog.services = catalog.services.map((s) =>
        s.id === id ? { ...s, ...data, price: Number(data.price), featured: s.featured } : s,
      );
      saveCatalog(catalog);
      renderAdmin();
    }
    const shopForm = event.target.closest("[data-edit-shop]");
    if (shopForm) {
      event.preventDefault();
      const id = shopForm.dataset.editShop;
      const data = Object.fromEntries(new FormData(shopForm));
      const catalog = liveCatalog();
      catalog.shop = catalog.shop.map((item) => (item.id === id ? { ...item, ...data, price: Number(data.price) } : item));
      saveCatalog(catalog);
      renderAdmin();
    }
    const planForm = event.target.closest("[data-edit-plan]");
    if (planForm) {
      event.preventDefault();
      const id = planForm.dataset.editPlan;
      const data = Object.fromEntries(new FormData(planForm));
      const catalog = liveCatalog();
      catalog.monthPlan = catalog.monthPlan.map((item) =>
        item.id === id
          ? normalizePlanItem({
              ...item,
              ...data,
              month: Number(data.month),
              day: Number(data.day),
            })
          : item,
      );
      catalog.monthPlan.sort((a, b) => a.month - b.month || a.day - b.day);
      saveCatalog(catalog);
      renderAdmin();
    }
    const dogForm = event.target.closest("[data-edit-dog]");
    if (dogForm) {
      event.preventDefault();
      const id = dogForm.dataset.editDog;
      const data = Object.fromEntries(new FormData(dogForm));
      Store.set(
        KEYS.dogs,
        dogList().map((d) => (d.id === id ? { ...d, ...data } : d)),
      );
      renderAdmin();
    }
  });

  document.addEventListener("click", (event) => {
    const delService = event.target.closest("[data-delete-service]");
    if (delService) {
      const catalog = liveCatalog();
      catalog.services = catalog.services.filter((s) => s.id !== delService.dataset.deleteService);
      saveCatalog(catalog);
      renderAdmin();
    }
    const delShop = event.target.closest("[data-delete-shop]");
    if (delShop) {
      const catalog = liveCatalog();
      catalog.shop = catalog.shop.filter((s) => s.id !== delShop.dataset.deleteShop);
      saveCatalog(catalog);
      renderAdmin();
    }
    const delPlan = event.target.closest("[data-delete-plan]");
    if (delPlan) {
      const catalog = liveCatalog();
      catalog.monthPlan = catalog.monthPlan.filter((p) => p.id !== delPlan.dataset.deletePlan);
      saveCatalog(catalog);
      renderAdmin();
    }
    const delDog = event.target.closest("[data-delete-dog]");
    if (delDog) {
      Store.set(
        KEYS.dogs,
        dogList().filter((d) => d.id !== delDog.dataset.deleteDog),
      );
      renderAdmin();
    }
    const approve = event.target.closest("[data-approve-bday]");
    if (approve) {
      const id = approve.dataset.approveBday;
      const requests = Store.get(KEYS.bdayRequests, []);
      const row = requests.find((r) => r.id === id);
      if (row) {
        row.status = "approved";
        const dogs = dogList();
        dogs.push({ id: crypto.randomUUID(), name: row.name, owner: row.owner, birthday: row.birthday, phone: row.phone });
        Store.set(KEYS.dogs, dogs);
        Store.set(KEYS.bdayRequests, requests);
      }
      renderAdmin();
    }
    const decline = event.target.closest("[data-decline-bday]");
    if (decline) {
      const requests = Store.get(KEYS.bdayRequests, []).map((r) =>
        r.id === decline.dataset.declineBday ? { ...r, status: "declined" } : r,
      );
      Store.set(KEYS.bdayRequests, requests);
      renderAdmin();
    }
  });
}

function refreshPublic() {
  renderServiceTabs(document.querySelector("[data-service-tabs]"));
  renderBookChoices();
  renderRegionOptions(document.querySelector("[name=regionId]"));
  renderReviews(document.querySelector("[data-reviews]"));
  renderBirthdays(document.querySelector("[data-birthdays]"));
  renderMonthCalendar(document.querySelector("[data-month-cal]"));
  renderCalAlerts(document.querySelector("[data-cal-alerts]"));
  renderShop(document.querySelector("[data-shop]"));
  renderMember(document.querySelector("[data-member]"));
  renderBookings(document.querySelector("[data-bookings]"));
  const monthLabel = document.querySelector("[data-month-name]");
  if (monthLabel) monthLabel.textContent = monthName();
  const regionLabel = document.querySelector("[data-region-label]");
  if (regionLabel) regionLabel.textContent = tObj(`regions.${currentRegion().id}`) || currentRegion().name;
  const dateInput = document.querySelector("#book-form [name=date]");
  const timeInput = document.querySelector("#book-form [name=time]");
  if (dateInput && timeInput) fillTimeSelect(timeInput, dateInput.value, timeInput.value);
  applyHomepageCopy();
}

function foldText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function bindMiaWink() {
  const open = "images/mia-open.png";
  const wink = "images/mia-wink.png";
  document.querySelectorAll("[data-mia-wink]").forEach((img) => {
    const host = img.closest("button, article, .mia-head") || img;
    host.addEventListener("mouseenter", () => {
      img.src = wink;
    });
    host.addEventListener("mouseleave", () => {
      img.src = open;
    });
  });
}

function miaGo(action) {
  const page = document.body.dataset.page;
  const [kind, serviceId] = String(action || "").split(":");
  if (page === "app") {
    if (kind === "book") document.querySelector('[data-tab="book"]')?.click();
    if (kind === "services" || kind === "fees") document.querySelector('[data-tab="services"]')?.click();
    if (kind === "calendar") document.querySelector('[data-tab="home"]')?.click();
  } else {
    const map = { book: "#book", calendar: "#calendar", services: "#services", fees: "#services" };
    document.querySelector(map[kind] || "")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (kind === "book") openBookModal({ serviceId });
  else if (serviceId) {
    const box = document.querySelector(`[name=serviceId][value="${serviceId}"], [name=addonId][value="${serviceId}"]`);
    if (box) box.checked = true;
  }
}

function miaFeeLines() {
  const region = currentRegion();
  return liveCatalog()
    .services.map((s) => `${serviceName(s.id)}: ${money(priceFor(s, region))} · ${tObj(`svc.${s.id}.duration`) || s.duration || ""}`)
    .join("\n");
}

function miaCalendarLines() {
  const now = new Date();
  return planForMonth(now)
    .map((p) => `${monthName(now)} ${p.day} — ${planTitle(p)}`)
    .join("\n");
}

function bindCalendarMonthWatch() {
  if (document.body.dataset.page === "office" || document.body.dataset.page === "admin") return;
  let stamped = calendarMonthKey();
  const tick = () => {
    const next = calendarMonthKey();
    if (next !== stamped) {
      stamped = next;
      refreshPublic();
    }
  };
  setInterval(tick, 60 * 1000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tick();
  });
}

function miaReply(raw) {
  const q = foldText(raw);
  if (!q) return { text: t("miaFallback") };

  const serviceHit = [
    ["haircut", ["haircut", "corte", "breed", "raza"]],
    ["bath", ["bath", "bano", "shampoo", "blowout", "secado"]],
    ["brush", ["brush", "cepill"]],
    ["nails", ["nail", "una"]],
    ["grind", ["grind", "limado"]],
    ["ears", ["ear", "oid"]],
    ["teeth", ["teeth", "dient", "breath"]],
    ["facial", ["facial", "berry"]],
    ["shampoo", ["conditioner", "acondicion"]],
  ].find(([, keys]) => keys.some((k) => q.includes(k)));

  if (serviceHit && (q.includes("book") || q.includes("reserv") || q.includes("cita") || q.includes("want"))) {
    return {
      text: `${serviceName(serviceHit[0])} · ${money(priceFor(serviceById(serviceHit[0]), currentRegion()))}. ${t("miaServicePicked")}`,
      action: `book:${serviceHit[0]}`,
    };
  }
  if (serviceHit) {
    const s = serviceById(serviceHit[0]);
    return {
      text: `${serviceName(s.id)}: ${money(priceFor(s, currentRegion()))}. ${serviceBlurb(s)}. ${t("miaFirstVisit")}`,
      action: "fees",
    };
  }
  if (/(fee|price|cost|how much|cuanto|precio|cuesta|cobran)/.test(q)) {
    return { text: `${t("miaFeesLead")} ${tObj(`regions.${currentRegion().id}`)}:\n${miaFeeLines()}\n${t("miaFirstVisit")}`, action: "fees" };
  }
  if (/(calendar|calendario|this month|este mes|activity|actividad)/.test(q)) {
    return { text: `${t("miaCalLead")}\n${miaCalendarLines()}`, action: "calendar" };
  }
  if (/(book|reserv|cita|appointment|agendar)/.test(q)) {
    return { text: t("miaBookHelp"), action: "book" };
  }
  if (/(service|servicio|package|paquete|include|incluye)/.test(q)) {
    return { text: `${t("miaFeesLead")} ${tObj(`regions.${currentRegion().id}`)}:\n${miaFeeLines()}`, action: "services" };
  }
  if (/(home|casa|come to|van a|at home|en casa)/.test(q)) {
    return { text: t("miaHome") };
  }
  if (/(hour|dura|time|tiempo|long)/.test(q)) {
    return { text: `${miaFeeLines()}\n${t("miaDuration")}`, action: "fees" };
  }
  if (/(phone|call|text|whatsapp|email|correo|contacto|llamar)/.test(q)) {
    return { text: t("miaContact") };
  }
  if (/(club|point|punto|reward|recompensa)/.test(q)) {
    return { text: t("miaClub") };
  }
  if (/(hi|hello|hey|hola|buenas)/.test(q)) {
    return { text: t("miaHi") };
  }
  return { text: t("miaFallback") };
}

function bindMiaAssist() {
  const root = document.querySelector("[data-mia-assist]");
  if (!root) return;
  const panel = root.querySelector("[data-mia-panel]");
  const log = root.querySelector("[data-mia-log]");
  const form = root.querySelector("[data-mia-form]");
  const input = root.querySelector("[data-mia-input]");

  const addBubble = (text, who) => {
    const p = document.createElement("p");
    p.className = `mia-bubble ${who}`;
    p.textContent = text;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
  };

  const open = () => {
    panel.hidden = false;
    if (!log.childElementCount) addBubble(t("miaHi"), "mia");
    input?.focus();
  };

  const answer = (text) => {
    if (!text) return;
    addBubble(text, "user");
    const reply = miaReply(text);
    addBubble(reply.text, "mia");
    if (reply.action) miaGo(reply.action);
  };

  root.querySelector("[data-mia-toggle]")?.addEventListener("click", () => {
    if (panel.hidden) open();
    else panel.hidden = true;
  });
  root.querySelector("[data-mia-close]")?.addEventListener("click", () => {
    panel.hidden = true;
  });
  root.querySelectorAll("[data-mia-chip]").forEach((btn) => {
    btn.addEventListener("click", () => answer(btn.textContent.trim()));
  });
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    input.value = "";
    answer(text);
  });
}

function playPawTrail() {
  document.querySelector(".paw-unveil")?.remove();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.classList.remove("paw-boot");
    return;
  }
  const layer = document.createElement("div");
  layer.className = "paw-unveil";
  layer.setAttribute("aria-hidden", "true");
  const cover = document.createElement("div");
  cover.className = "paw-unveil-cover";
  const trail = document.createElement("div");
  trail.className = "paw-trail";
  const count = 11;
  const startDelay = 0.2;
  const step = 0.17;
  const lastDelay = startDelay + (count - 1) * step;
  const travel = 1.6;
  layer.style.setProperty("--unveil-delay", `${lastDelay}s`);
  layer.style.setProperty("--unveil-duration", `${travel}s`);
  const svg =
    '<svg viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="44" rx="13" ry="15" fill="currentColor"/><ellipse cx="13" cy="26" rx="7.5" ry="10" fill="currentColor" transform="rotate(-28 13 26)"/><ellipse cx="24" cy="14" rx="6.5" ry="9" fill="currentColor" transform="rotate(-8 24 14)"/><ellipse cx="40" cy="13" rx="6.5" ry="9" fill="currentColor" transform="rotate(8 40 13)"/><ellipse cx="51" cy="26" rx="7.5" ry="10" fill="currentColor" transform="rotate(28 51 26)"/></svg>';
  const spot = (t, side) => ({
    x: `calc(${4 + t * 84}vw + ${side * 0.85}rem)`,
    y: `calc(${3 + t * 86}vh + ${side * 0.4}rem)`,
  });
  for (let i = 0; i < count; i += 1) {
    const t = i / (count - 1);
    const paw = document.createElement("span");
    paw.className = "paw-print";
    paw.innerHTML = svg;
    const side = i % 2 ? 1 : -1;
    const here = spot(t, side);
    paw.style.left = here.x;
    paw.style.bottom = here.y;
    paw.style.setProperty("--delay", `${startDelay + i * step}s`);
    paw.style.setProperty("--rot", `${-32 + side * 18}deg`);
    if (i === count - 1) {
      const from = spot(0, side);
      paw.classList.add("paw-last");
      paw.style.setProperty("--x0", from.x);
      paw.style.setProperty("--y0", "0%");
      paw.style.setProperty("--x1", here.x);
      paw.style.setProperty("--y1", "100%");
    }
    trail.appendChild(paw);
  }
  layer.append(cover, trail);
  document.body.appendChild(layer);
  document.body.classList.remove("paw-boot");
  window.setTimeout(() => {
    layer.remove();
    document.body.style.overflow = "";
  }, (lastDelay + travel + 0.3) * 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  seed();
  const page = document.body.dataset.page;
  const publicPage = page !== "office" && page !== "admin";
  if (publicPage) playPawTrail();
  if (publicPage && page !== "estimate") ensureBookModal();
  bindLanguage();
  bindBookingForm(document.querySelector("#book-form"), document.querySelector("[data-bookings]"));
  bindSignup(document.querySelector("#signup-form"));
  bindBirthdayForm(document.querySelector("#bday-form"));
  bindRegionSelect(document.querySelector("[name=regionId]"), refreshPublic);
  if (publicPage) {
    bindBookModal();
    detectRegion(() => refreshPublic());
    bindMiaWink();
    bindMiaAssist();
    bindCalendarMonthWatch();
  }
  if (page === "app") setupAppTabs();
  if (page === "office") {
    renderOffice();
    bindOfficeForms();
  }
  if (page === "admin") {
    renderAdmin();
    bindAdminForms();
  }
});
