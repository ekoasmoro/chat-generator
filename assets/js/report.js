import {
  TemplateBugs,
  TemplateEkspedisi,
  TemplateCso,
} from "./templateReport.js";

const selectOperator = document.getElementById("operator");
const selectShift = document.getElementById("shift");
const selectTemplate = document.getElementById("pilihTemplate");
const subTemplateEkspedisi = document.getElementById("subtemplate-ekspedisi");
const subTemplateBugs = document.getElementById("subtemplate-bugs");
const subTemplateCso = document.getElementById("subtemplate-cso");
const getIdReport = document.getElementById("idReport");
const getIdResi = document.getElementById("idresi");
const getEmail = document.getElementById("emailAkun");
const getDeskripsi = document.getElementById("deskripsi");
const hasiltemplate = document.getElementById("result-box");
const btnPickup = document.getElementById("copyResult");
const cpyPop = document.querySelector(".cpy-container");
const openSubEkspedisi = document.querySelector(".ekspedisi-container");
const openSubBugs = document.querySelector(".bugs-container");
const openSubCso = document.querySelector(".cso-container");
const btnGenerateEkpedisi = document.getElementById("generate-ekspedisi");
const btnGenerateBugs = document.getElementById("generate-bugs");
const btnGenerateCso = document.getElementById("generate-cso");
const btnResetEkpedisi = document.getElementById("reset-ekspedisi");
const btnResetBugs = document.getElementById("reset-bugs");
const btnResetCso = document.getElementById("reset-cso");
const sftSpan = document.getElementById("sft");
const optSpan = document.getElementById("opt");

const shiftGreetingMap = {
  pagi: "Selamat Pagi",
  siang: "Selamat Siang",
  sore: "Selamat Sore",
  malam: "Selamat Malam",
};

function updateGreeting() {
  const shift = selectShift.value;
  const operator = selectOperator.value;

  sftSpan.textContent = shiftGreetingMap[shift] || "Selamat Datang";
  optSpan.textContent = operator || "";
}

document.addEventListener("DOMContentLoaded", () => {
  const savedOperator = localStorage.getItem("selectOperator");
  const savedShift = localStorage.getItem("selectShift");

  if (savedOperator) selectOperator.value = savedOperator;
  if (savedShift) selectShift.value = savedShift;
  updateGreeting();
});

selectOperator.addEventListener("change", () => {
  localStorage.setItem("selectOperator", selectOperator.value);
  updateGreeting();
});

selectShift.addEventListener("change", () => {
  localStorage.setItem("selectShift", selectShift.value);
  updateGreeting();
});

window.addEventListener("storage", (event) => {
  if (event.key === "selectOperator") {
    selectOperator.value = event.newValue || "";
  }

  if (event.key === "selectShift") {
    selectShift.value = event.newValue || "";
  }
  updateGreeting();
});

const subTemplate = {
  ekspedisi: [
    "Push Pengiriman",
    "Push POD",
    "Push Return",
    "Pengiriman Ulang",
    "Push Resi Masal",
    "Push Pick Up",
    "Dokumentasi POD",
    "Dokumentasi POD Return",
    "Jemput Paket",
  ],
  bugs: [
    "General Report",
    "Top Up Kompay Tidak Masuk",
    "Top Up Kartu Tidak Masuk",
    "Balance Saldo Tidak Sinkron",
    "Refund Saldo Belum Masuk",
    "Gagal Payment",
    "Gagal Menautkan",
  ],
  cso: [
    "Klaim Tanpa Tiket",
    "Klaim Hilang",
    "Push Penarikan",
    "Penyelesaian Resi",
  ],
};

const methodMaps = {
  ekspedisi: {
    "Push Pengiriman": "pushDelivery",
    "Push POD": "pushPod",
    "Push Return": "pushReturn",
    "Pengiriman Ulang": "pengirimanUlang",
    "Push Resi Masal": "pushMasal",
    "Push Pick Up": "pushPickup",
    "Dokumentasi POD": "dokumentasiPod",
    "Dokumentasi POD Return": "podReturn",
    "Jemput Paket": "jemputPaket",
  },
  bugs: {
    "General Report": "generalReport",
    "Top Up Kompay Tidak Masuk": "kompayTidakMasuk",
    "Top Up Kartu Tidak Masuk": "komcardTidakMasuk",
    "Balance Saldo Tidak Sinkron": "balanceTidakSinkron",
    "Refund Saldo Belum Masuk": "refund",
    "Gagal Payment": "gagalPayment",
    "Gagal Menautkan": "gagalMenautkan",
  },
  cso: {
    "Klaim Tanpa Tiket": "tanpaTiket",
    "Klaim Hilang": "klaimHilang",
    "Push Penarikan": "pushPenarikan",
    "Penyelesaian Resi": "penyelesaianResi",
  },
};

const subSelectMap = {
  ekspedisi: subTemplateEkspedisi,
  bugs: subTemplateBugs,
  cso: subTemplateCso,
};

selectTemplate.addEventListener("change", () => {
  const kategori = selectTemplate.value;

  openSubEkspedisi.style.display = "none";
  openSubBugs.style.display = "none";
  openSubCso.style.display = "none";

  if (kategori === "ekspedisi") openSubEkspedisi.style.display = "block";
  else if (kategori === "bugs") openSubBugs.style.display = "block";
  else if (kategori === "cso") openSubCso.style.display = "block";

  const currentSelect = subSelectMap[kategori];
  if (currentSelect) {
    currentSelect.innerHTML = `<option value="">-- Pilih Template --</option>`;
    subTemplate[kategori].forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      currentSelect.appendChild(option);
    });
  }

  hasiltemplate.value = "";
});

subTemplateEkspedisi.addEventListener("change", () => {
  hasiltemplate.value = "";
});

subTemplateBugs.addEventListener("change", () => {
  hasiltemplate.value = "";
});

subTemplateCso.addEventListener("change", () => {
  hasiltemplate.value = "";
});

btnGenerateEkpedisi.addEventListener("click", () => {
  const sub = subTemplateEkspedisi.value;
  const methodName = methodMaps["ekspedisi"]?.[sub];

  const idReport = getIdReport.value;
  const idResi = getIdResi.value;

  if (!methodName) return (hasiltemplate.value = "Sub template belum dipilih!");

  const instance = new TemplateEkspedisi(idReport, idResi);
  if (typeof instance[methodName] === "function") {
    const template = instance[methodName]();
    hasiltemplate.value = template;
  } else {
    hasiltemplate.value = "Metode tidak ditemukan!";
  }
});

btnGenerateBugs.addEventListener("click", () => {
  const sub = subTemplateBugs.value;
  const methodName = methodMaps["bugs"]?.[sub];

  const idReport = getIdReport.value;
  const email = getEmail.value;
  const deskripsi = getDeskripsi.value;

  if (!methodName) return (hasiltemplate.value = "Sub template belum dipilih!");

  const instance = new TemplateBugs(idReport, email, deskripsi);
  if (typeof instance[methodName] === "function") {
    const template = instance[methodName]();
    hasiltemplate.value = template;
  } else {
    hasiltemplate.value = "Metode tidak ditemukan!";
  }
});

btnGenerateCso.addEventListener("click", () => {
  const sub = subTemplateCso.value;
  const methodName = methodMaps["cso"]?.[sub];

  const idResi = getIdResi.value;

  if (!methodName) return (hasiltemplate.value = "Sub template belum dipilih!");

  const instance = new TemplateCso(idResi);
  if (typeof instance[methodName] === "function") {
    const template = instance[methodName]();
    hasiltemplate.value = template;
  } else {
    hasiltemplate.value = "Metode tidak ditemukan!";
  }
});

btnResetEkpedisi.addEventListener("click", () => {
  selectTemplate.value = "";
  subTemplateEkspedisi.innerHTML = `<option value="">-- Pilih Template --</option>`;
  getIdReport.value = "";
  getIdResi.value = "";
  hasiltemplate.value = "";
  openSubEkspedisi.style.display = "none";
});

btnResetBugs.addEventListener("click", () => {
  selectTemplate.value = "";
  subTemplateBugs.innerHTML = `<option value="">-- Pilih Template --</option>`;
  getIdReport.value = "";
  getEmail.value = "";
  getDeskripsi.value = "";
  hasiltemplate.value = "";
  openSubBugs.style.display = "none";
});

btnResetCso.addEventListener("click", () => {
  selectTemplate.value = "";
  subTemplateCso.innerHTML = `<option value="">-- Pilih Template --</option>`;
  getIdResi.value = "";
  hasiltemplate.value = "";
  openSubCso.style.display = "none";
});

btnPickup.addEventListener("click", () => {
  hasiltemplate.select();
  document.execCommand("copy");
  cpyPop.style.display = "block";

  setTimeout(() => {
    cpyPop.style.display = "none";
  }, 2000);
});
