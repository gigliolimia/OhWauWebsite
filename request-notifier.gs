/**
 * Oh Wow Bañitas — appointment request catcher.
 * Paste this whole file into Extensions > Apps Script inside a Google Sheet,
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 * Every request is saved as a row in the sheet and emailed to NOTIFY_EMAIL.
 *
 * Accepts a normal form POST (e.parameter) or JSON as text/plain from the website.
 */
const NOTIFY_EMAIL = "lauragon5713@gmail.com";   // where new-request emails go
const SHEET_NAME   = "Requests";

const COLUMNS = [
  ["Received",        null],
  ["Name",            "name"],
  ["Phone",           "phone"],
  ["Email",           "email"],
  ["Best contact",    "contactPref"],
  ["Where",           "where"],
  ["Address / ZIP",   "address"],
  ["Dog's name",      "dogName"],
  ["Breed",           "breed"],
  ["Size",            "size"],
  ["Coat",            "coat"],
  ["Service",         "service"],
  ["Coat condition",  "condition"],
  ["Add-ons",         "addons"],
  ["Estimate (card)", "estimateCard"],
  ["Estimate (cash)", "estimateCash"],
  ["Days / times",    "times"],
  ["Notes",           "notes"],
  ["OK to text/call", "textOk"],
  ["Language",        "language"]
];

function doPost(e) {
  const p = payload_(e);
  if (p.website) return reply_({ ok: true });            // hidden spam-trap field was filled: ignore
  if (!p.name || !p.phone) return reply_({ ok: false, error: "missing name or phone" });

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(COLUMNS.map(c => c[0]));
    sheet.setFrozenRows(1);
  }
  sheet.appendRow(COLUMNS.map(c => c[1] ? clean_(p[c[1]]) : new Date()));

  const lines = COLUMNS.slice(1).map(c => c[0] + ": " + clean_(p[c[1]])).filter(l => !/: $/.test(l));
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "NEW GROOMING REQUEST: " + clean_(p.name) + " (" + clean_(p.dogName) + ")",
    body: "A new appointment request just came in.\n\n" + lines.join("\n") +
          "\n\nAll requests are saved in your Google Sheet."
  });
  return reply_({ ok: true });
}

// Lets you confirm the web app is live by opening its URL in a browser.
function doGet() { return reply_({ ok: true, service: "request catcher is running" }); }

function payload_(e) {
  const p = Object.assign({}, (e && e.parameter) || {});
  const raw = e && e.postData && e.postData.contents;
  if (!raw) return p;
  try {
    const data = JSON.parse(raw);
    const visit = data.visitType === "dropoff" ? "drop-off" : data.visitType === "mobile" ? "we come to you" : (data.visitType || "");
    const times = [data.date, data.time].filter(Boolean).join(" ");
    return Object.assign({
      name: data.owner || data.name,
      phone: data.phone,
      email: data.email,
      contactPref: data.contactPref,
      where: data.where || visit,
      address: data.address || data.regionId,
      dogName: data.dogName,
      breed: data.breedLabel || data.breed,
      size: data.size,
      coat: data.coat,
      service: data.serviceLabel || data.service,
      condition: data.condition,
      addons: Array.isArray(data.addons) ? data.addons.join(", ") : data.addons,
      estimateCard: data.estimateCard != null ? data.estimateCard : data.cardPrice,
      estimateCash: data.estimateCash != null ? data.estimateCash : data.cashPrice,
      times: data.times || times,
      notes: data.notes,
      textOk: data.textOk != null ? data.textOk : (data.disclosure ? "yes" : ""),
      language: data.language || data.lang,
      website: data.website
    }, p);
  } catch (err) {
    return p;
  }
}

function clean_(v) { return (v == null ? "" : String(v)).slice(0, 2000); }
function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
