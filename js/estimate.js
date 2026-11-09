      /* ========== EDIT THIS ==========
         Paste your Google Apps Script web app URL into REQUEST_URL
         when you finish setting up request-notifier.gs.
         Leave DRAFT = true until you have real competitor quotes.
      */
      const DRAFT = true;
      const REQUEST_URL = "";

      const CARD_FEE_RATE = 0.03;
      const DROP_OFF_DISCOUNT = 12;
      const MOBILE_TRAVEL_FEE = 0;
      const DROP_OFF_NOTE_EN = "Drop-off address is confirmed when we reply.";
      const DROP_OFF_NOTE_ES = "Confirmamos la dirección de entrega cuando contestemos.";

      // Promo codes: code → percent off the visit. First-groom code is for new clients only.
      const PROMO_CODES = {
        WELCOME10: 10,
      };

      const PRICES = {
        bath: { xs: 45, s: 55, m: 70, l: 85, xl: 100 },
        haircut: { xs: 65, s: 75, m: 95, l: 115, xl: 140 },
        brush: { xs: 25, s: 30, m: 40, l: 50, xl: 60 },
      };
      const ADDON_PRICES = {
        nails: 18,
        grind: 22,
        ears: 15,
        teeth: 18,
        facial: 20,
        shampoo: 15,
      };
      /* ========== END EDIT THIS ========== */

      const BREEDS = [
        { id: "chihuahua", size: "xs", en: "Chihuahua", es: "Chihuahua" },
        { id: "yorkie", size: "xs", en: "Yorkshire Terrier", es: "Yorkshire Terrier" },
        { id: "pom", size: "xs", en: "Pomeranian", es: "Pomerania" },
        { id: "maltese", size: "xs", en: "Maltese", es: "Maltés" },
        { id: "shih-tzu", size: "s", en: "Shih Tzu", es: "Shih Tzu" },
        { id: "frenchie", size: "s", en: "French Bulldog", es: "Bulldog francés" },
        { id: "mini-poodle", size: "s", en: "Miniature Poodle", es: "Caniche miniatura" },
        { id: "beagle", size: "s", en: "Beagle", es: "Beagle" },
        { id: "cocker", size: "m", en: "Cocker Spaniel", es: "Cocker Spaniel" },
        { id: "aussie", size: "m", en: "Australian Shepherd", es: "Pastor australiano" },
        { id: "standard-poodle", size: "m", en: "Standard Poodle", es: "Caniche estándar" },
        { id: "lab", size: "l", en: "Labrador Retriever", es: "Labrador" },
        { id: "golden", size: "l", en: "Golden Retriever", es: "Golden Retriever" },
        { id: "gsd", size: "l", en: "German Shepherd", es: "Pastor alemán" },
        { id: "husky", size: "l", en: "Siberian Husky", es: "Husky siberiano" },
        { id: "dane", size: "xl", en: "Great Dane", es: "Gran Danés" },
        { id: "bernese", size: "xl", en: "Bernese Mountain Dog", es: "Boyero de Berna" },
        { id: "other", size: "", en: "Other / not sure", es: "Otra / no estoy segura" },
      ];

      const SIZES = [
        { id: "xs", en: "XS · under 10 lb", es: "XS · menos de 10 lb" },
        { id: "s", en: "S · 10–25 lb", es: "S · 10–25 lb" },
        { id: "m", en: "M · 25–50 lb", es: "M · 25–50 lb" },
        { id: "l", en: "L · 50–80 lb", es: "L · 50–80 lb" },
        { id: "xl", en: "XL · 80+ lb", es: "XL · más de 80 lb" },
      ];

      const COPY = {
        en: {
          kicker: "Grooming estimate",
          title: "Price your visit",
          lead: "Pick breed or size, how we meet, and a service. You’ll see a card price and a cash price, then you can send a request.",
          visitLegend: "How should we do this?",
          comeTitle: "We come to you",
          comeHelp: "At-home grooming",
          dropTitle: "You bring your pup to us",
          dropHelp: "Drop-off is cheaper",
          breed: "Breed",
          size: "Size",
          coat: "Coat",
          coatShort: "Short",
          coatLong: "Long / double / curly",
          service: "Service",
          addons: "Add-ons",
          addonNails: "Nail Trimming",
          addonGrind: "Nail Grinding",
          addonEars: "Ear Cleaning",
          addonTeeth: "Teeth Brushing & Breath Spray",
          addonFacial: "Berry Facial",
          addonShampoo: "Enhanced Shampoo & Conditioner",
          dogName: "Dog’s name",
          owner: "Your name",
          phone: "Phone",
          email: "Email",
          area: "Area",
          date: "Preferred date",
          time: "Preferred time",
          notes: "Notes",
          notesPh: "Temperament, haircut, anything we should know",
          disclosureAgree: "I have read and agree to the grooming disclosure.",
          disclosureBody:
            "I understand grooming involves bathing, clipping, and handling. I confirm my pet is reasonably healthy, current on vaccines as required, and I accept that coats, skin, and behavior can affect the result. Oh Wau, Patitas! is not liable for pre-existing conditions revealed during grooming. I agree to be present or reachable during the visit.",
          send: "Send request",
          bookNow: "Book now",
          quoteTitle: "Your estimate",
          cardLabel: "Card",
          cashLabel: "Cash",
          quoteNote: "Cash is lower by the card-machine fee. This is an estimate — we’ll confirm after we see coat and temperament.",
          draftBanner: "Draft prices — estimates only. Final quotes come after we compare local groomers.",
          haircutNote: "If a short-hair breed needs a haircut, long-hair pricing may apply.",
          saveCash: "You save $AMT paying cash.",
          needService: "Pick a size and a service to see a price.",
          sent: "Request sent. We’ll text or email to confirm.",
          sendFail: "Couldn’t send right now. Text (772) 775-5227 and we’ll take the request.",
          noUrl: "The request link isn’t connected yet. Text (772) 775-5227, or wait until REQUEST_URL is pasted in.",
          mobile: "We come to you",
          dropoff: "Drop-off",
          summaryMobile: "VISIT · SIZE · SERVICE",
          promo: "Promo code",
          promoPh: "e.g. WELCOME10",
          promoOk: "WELCOME10: 10% off your first groom (−$AMT). For new clients.",
          promoBad: "That code isn’t valid. Check the spelling and try again.",
        },
        es: {
          kicker: "Estimado de grooming",
          title: "Precio de tu visita",
          lead: "Elige raza o tamaño, cómo nos vemos y el servicio. Verás precio con tarjeta y en efectivo, y puedes enviar la solicitud.",
          visitLegend: "¿Cómo lo hacemos?",
          comeTitle: "Vamos a ti",
          comeHelp: "Grooming en casa",
          dropTitle: "Tú traes a tu peludo",
          dropHelp: "Dejarlo es más económico",
          breed: "Raza",
          size: "Tamaño",
          coat: "Pelaje",
          coatShort: "Corto",
          coatLong: "Largo / doble / rizado",
          service: "Servicio",
          addons: "Extras",
          addonNails: "Corte de uñas",
          addonGrind: "Limado de uñas",
          addonEars: "Limpieza de oídos",
          addonTeeth: "Cepillado dental y spray",
          addonFacial: "Facial de berries",
          addonShampoo: "Shampoo y acondicionador especial",
          dogName: "Nombre del perro",
          owner: "Tu nombre",
          phone: "Teléfono",
          email: "Correo",
          area: "Zona",
          date: "Fecha preferida",
          time: "Hora preferida",
          notes: "Notas",
          notesPh: "Temperamento, corte, lo que debamos saber",
          disclosureAgree: "Leí y acepto la divulgación de grooming.",
          disclosureBody:
            "Entiendo que el grooming incluye baño, corte y manejo. Confirmo que mi mascota está razonablemente sana, al día en vacunas según se requiera, y acepto que el pelaje, la piel y el carácter pueden afectar el resultado. Oh Wau, Patitas! no responde por condiciones preexistentes que aparezcan durante el grooming. Acepto estar presente o localizable durante la visita.",
          send: "Enviar solicitud",
          bookNow: "Reservar",
          quoteTitle: "Tu estimado",
          cardLabel: "Tarjeta",
          cashLabel: "Efectivo",
          quoteNote: "El efectivo es menor por la comisión de la máquina. Es un estimado — confirmamos al ver pelaje y carácter.",
          draftBanner: "Precios en borrador — solo estimados. Las cotas finales llegan cuando comparemos con otros groomers.",
          haircutNote: "Si una raza de pelo corto necesita corte, puede aplicarse el precio de pelo largo.",
          saveCash: "Ahorras $AMT pagando en efectivo.",
          needService: "Elige tamaño y servicio para ver un precio.",
          sent: "Solicitud enviada. Confirmamos por texto o correo.",
          sendFail: "No se pudo enviar. Escribe al (772) 775-5227 y tomamos la solicitud.",
          noUrl: "El enlace de solicitudes aún no está conectado. Escribe al (772) 775-5227, o espera a que se pegue REQUEST_URL.",
          mobile: "Vamos a ti",
          dropoff: "Entrega",
          promo: "Código de descuento",
          promoPh: "ej. WELCOME10",
          promoOk: "WELCOME10: 10% de descuento en tu primer grooming (−$AMT). Para clientes nuevos.",
          promoBad: "Ese código no es válido. Revisa cómo lo escribiste e intenta de nuevo.",
        },
      };

      function startEstimate() {
      const form = document.querySelector("#estimate-form");
      if (!form) return;
      const field = (name) => {
        const nodes = form.querySelectorAll(`[name="${name}"]`);
        if (nodes.length > 1) return form.elements.namedItem(name);
        return nodes[0];
      };
      const lang = () => (localStorage.getItem("owp-lang") === "es" ? "es" : "en");
      const pack = () => COPY[lang()];
      const money = (n) => `$${Math.round(n)}`;

      function fillSelects() {
        const breedSel = document.querySelector("#est-breed");
        const sizeSel = document.querySelector("#est-size");
        const keepBreed = breedSel.value;
        const keepSize = sizeSel.value;
        const p = pack();
        breedSel.innerHTML = BREEDS.map((b) => `<option value="${b.id}">${lang() === "es" ? b.es : b.en}</option>`).join("");
        sizeSel.innerHTML = SIZES.map((s) => `<option value="${s.id}">${lang() === "es" ? s.es : s.en}</option>`).join("");
        if (keepBreed) breedSel.value = keepBreed;
        if (keepSize) sizeSel.value = keepSize;
        const serviceSel = field("service");
        serviceSel.options[0].textContent = lang() === "es" ? "Baño y secado" : "Bath & Blow-Out";
        serviceSel.options[1].textContent = lang() === "es" ? "Corte según raza" : "Breed-Specific Haircut";
        serviceSel.options[2].textContent = lang() === "es" ? "Cepillado" : "Brush-Out";
      }

      function applyEstimateCopy() {
        const p = pack();
        document.querySelectorAll("[data-est]").forEach((el) => {
          if (el.matches("select, input, textarea, form")) return;
          const key = el.dataset.est;
          if (p[key]) el.textContent = p[key];
        });
        document.querySelectorAll("[data-est-placeholder]").forEach((el) => {
          el.placeholder = p[el.dataset.estPlaceholder] || "";
        });
        const banner = document.querySelector("[data-draft-banner]");
        if (banner) banner.hidden = !DRAFT;
        fillSelects();
        updateQuote();
      }

      function selectedAddons() {
        return [...form.querySelectorAll("[name=addon]:checked")].map((el) => el.value);
      }

      function promoInput() {
        const el = field("promo");
        return el ? el.value.trim().toUpperCase() : "";
      }

      function showPromoNote(quote) {
        const note = document.querySelector("[data-promo-note]");
        if (!note) return;
        const p = pack();
        const typed = promoInput();
        if (!typed) note.textContent = "";
        else if (quote?.promoCode) note.textContent = p.promoOk.replace("AMT", String(quote.promoOff));
        else if (PROMO_CODES[typed]) note.textContent = "";
        else note.textContent = p.promoBad;
      }

      function estimate() {
        const size = field("pupSize").value;
        const service = field("service").value;
        const visitType = field("visitType").value;
        const base = PRICES[service]?.[size];
        if (!base) return null;
        const addons = selectedAddons().reduce((sum, id) => sum + (ADDON_PRICES[id] || 0), 0);
        const travel = visitType === "mobile" ? MOBILE_TRAVEL_FEE : 0;
        const drop = visitType === "dropoff" ? DROP_OFF_DISCOUNT : 0;
        const beforePromo = Math.max(0, base + addons + travel - drop);
        const promoCode = promoInput();
        const promoPct = PROMO_CODES[promoCode] || 0;
        const promoOff = Math.round((beforePromo * promoPct) / 100);
        const subtotal = beforePromo - promoOff;
        const fee = Math.round(subtotal * CARD_FEE_RATE);
        return {
          size,
          service,
          visitType,
          addons: selectedAddons(),
          base,
          addonsTotal: addons,
          travel,
          drop,
          promoCode: promoPct ? promoCode : "",
          promoOff,
          card: subtotal,
          cash: Math.max(0, subtotal - fee),
          fee,
        };
      }

      function updateQuote() {
        const p = pack();
        const quote = estimate();
        showPromoNote(quote);
        const dropNote = document.querySelector("[data-drop-note]");
        dropNote.textContent = field("visitType").value === "dropoff" ? (lang() === "es" ? DROP_OFF_NOTE_ES : DROP_OFF_NOTE_EN) : "";
        const hair = document.querySelector("[data-haircut-note]");
        hair.hidden = !(field("service").value === "haircut" && field("coat").value === "short");
        hair.textContent = p.haircutNote;
        if (!quote) {
          document.querySelectorAll("[data-card-price]").forEach((el) => {
            el.textContent = "$—";
          });
          document.querySelectorAll("[data-cash-price]").forEach((el) => {
            el.textContent = "$—";
          });
          document.querySelectorAll("[data-est-summary]").forEach((el) => {
            el.textContent = p.needService;
          });
          document.querySelector("[data-cash-save]").textContent = "";
          return;
        }
        const visitLabel = quote.visitType === "dropoff" ? p.dropoff : p.mobile;
        const sizeLabel = SIZES.find((s) => s.id === quote.size);
        const serviceLabel = field("service").selectedOptions[0]?.textContent || quote.service;
        const summary = `${visitLabel} · ${lang() === "es" ? sizeLabel.es : sizeLabel.en} · ${serviceLabel}`;
        document.querySelectorAll("[data-est-summary]").forEach((el) => {
          el.textContent = summary;
        });
        document.querySelectorAll("[data-card-price]").forEach((el) => {
          el.textContent = money(quote.card);
        });
        document.querySelectorAll("[data-cash-price]").forEach((el) => {
          el.textContent = money(quote.cash);
        });
        document.querySelector("[data-cash-save]").textContent = quote.fee ? p.saveCash.replace("AMT", String(quote.fee)) : "";
      }

      function applyPrefill() {
        const q = new URLSearchParams(location.search);
        const breed = q.get("breed");
        const size = q.get("size");
        const service = q.get("service");
        const date = q.get("date");
        const time = q.get("time");
        const visit = q.get("visit");
        const code = q.get("code");
        if (code && field("promo")) field("promo").value = code.toUpperCase();
        if (breed && field("breed")?.querySelector(`[value="${breed}"]`)) field("breed").value = breed;
        if (size && field("pupSize")?.querySelector(`[value="${size}"]`)) field("pupSize").value = size;
        if (service && field("service")?.querySelector(`[value="${service}"]`)) field("service").value = service;
        const addon = form.querySelector(`[name=addon][value="${service}"]`);
        if (service && addon) addon.checked = true;
        if (date && field("date")) field("date").value = date;
        if (time && field("time")) field("time").value = time;
        if (visit && form.querySelector(`[name=visitType][value="${visit}"]`)) {
          form.querySelector(`[name=visitType][value="${visit}"]`).checked = true;
        }
        const match = BREEDS.find((b) => b.id === field("breed")?.value);
        if (match?.size && field("pupSize")) field("pupSize").value = match.size;
      }

      field("breed")?.addEventListener("change", () => {
        const match = BREEDS.find((b) => b.id === field("breed").value);
        if (match?.size) field("pupSize").value = match.size;
        updateQuote();
      });
      form.addEventListener("input", updateQuote);
      form.addEventListener("change", updateQuote);

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const note = form.querySelector("[data-est-error]");
        const p = pack();
        const quote = estimate();
        if (!quote) {
          note.textContent = p.needService;
          return;
        }
        if (!field("disclosure").checked) {
          note.textContent = p.disclosureAgree;
          return;
        }
        if (!REQUEST_URL) {
          note.textContent = p.noUrl;
          return;
        }
        const payload = {
          draft: DRAFT,
          lang: lang(),
          visitType: quote.visitType,
          breed: field("breed").value,
          breedLabel: field("breed").selectedOptions[0].textContent,
          size: quote.size,
          coat: field("coat").value,
          service: quote.service,
          serviceLabel: field("service").selectedOptions[0].textContent,
          addons: quote.addons,
          cardPrice: quote.card,
          cashPrice: quote.cash,
          cardFee: quote.fee,
          dogName: field("dogName").value.trim(),
          owner: field("owner").value.trim(),
          phone: field("phone").value.trim(),
          email: field("email").value.trim(),
          regionId: field("regionId").value,
          date: field("date").value,
          time: field("time").value,
          promoCode: quote.promoCode,
          promoDiscount: quote.promoOff,
          // The sheet has fixed columns, so the code also rides along in Notes.
          notes: [quote.promoCode ? `PROMO ${quote.promoCode} (−$${quote.promoOff})` : "", field("notes").value.trim()]
            .filter(Boolean)
            .join(" · "),
          createdAt: new Date().toISOString(),
        };
        try {
          await fetch(REQUEST_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(payload),
          });
          note.textContent = p.sent;
          form.reset();
          applyPrefill();
          updateQuote();
        } catch {
          note.textContent = p.sendFail;
        }
      });

      document.querySelectorAll("[data-lang]").forEach((btn) => {
        btn.addEventListener("click", () => setTimeout(applyEstimateCopy, 0));
      });
      function bootEstimate() {
        try {
          fillSelects();
          applyPrefill();
          applyEstimateCopy();
        } catch (err) {
          const note = document.querySelector("[data-est-error]");
          if (note) note.textContent = String(err.message || err);
        }
      }
      bootEstimate();
      }

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startEstimate);
      } else {
        startEstimate();
      }
