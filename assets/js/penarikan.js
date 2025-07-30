import {
  TemplateSteven,
  TemplateHanin,
  TemplateMaheswari,
} from "./templatePenarikan.js";

const selectOperator = document.getElementById("operator");
const selectShift = document.getElementById("shift");
const selectTemplate = document.getElementById("pilihTemplate");
const btnGenerate = document.getElementById("generate");
const btnReset = document.getElementById("reset");
const hasiltemplate = document.getElementById("result-box");
const btnPickup = document.getElementById("copyResult");
const cpyPop = document.querySelector(".cpy-container");
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

const listTemplate = {
  Steven: [
    "Penarikan Sesuai Popup",
    "Meminta Email Akun",
    "Push Penarikan",
    "Push Max",
    "Penarikan Kenapa Lama",
    "Penarikan Dalam Proses",
    "Permohonan Maaf",
  ],
  Hanin: ["Permohonan Maaf", "Follow Up Penarikan", "Terima Kasih"],
  Maheswari: [
    "Informasi Penarikan",
    "Dalam Tahap Penanganan",
    "Follow Up ke Admin",
  ],
};

const templateMap = {
  "Penarikan Sesuai Popup": "sesuaiPopup",
  "Meminta Email Akun": "mintaEmail",
  "Push Penarikan": "pushPenarikan",
  "Push Max": "pushMax",
  "Penarikan Kenapa Lama": "penarikanLama",
  "Penarikan Dalam Proses": "prosesPenarikan",
  "Permohonan Maaf": "permohonanMaaf",
  "Follow Up Penarikan": "followUp",
  "Terima Kasih": "terimaKasih",
  "Informasi Penarikan": "infoPenarikan",
  "Dalam Tahap Penanganan": "tahapPenanganan",
  "Follow Up ke Admin": "followAdmin",
};

// Auto input shift dan operator
document.addEventListener("DOMContentLoaded", () => {
  const savedOperator = localStorage.getItem("selectOperator");
  const savedShift = localStorage.getItem("selectShift");
  const savedTemplate = localStorage.getItem("selectTemplate");

  if (savedOperator) {
    selectOperator.value = savedOperator;
    updateTemplateOptions(savedOperator);
  }

  if (savedShift) {
    selectShift.value = savedShift;
  }

  if (savedTemplate) {
    selectTemplate.value = savedTemplate;
  }

  updateGreeting();
});

selectOperator.addEventListener("change", () => {
  const selected = selectOperator.value;
  localStorage.setItem("selectOperator", selected);
  updateTemplateOptions(selected);
  updateGreeting();
});

selectShift.addEventListener("change", () => {
  localStorage.setItem("selectShift", selectShift.value);
  updateGreeting();
});

selectTemplate.addEventListener("change", () => {
  localStorage.setItem("selectTemplate", selectTemplate.value);
});

window.addEventListener("storage", (event) => {
  if (event.key === "selectOperator") {
    selectOperator.value = event.newValue || "";
    updateTemplateOptions(event.newValue);
  }

  if (event.key === "selectShift") {
    selectShift.value = event.newValue || "";
  }

  if (event.key === "selectTemplate") {
    selectTemplate.value = event.newValue || "";
  }

  updateGreeting();
});

function updateTemplateOptions(operator) {
  selectTemplate.innerHTML = `<option value="">-- Pilih Template --</option>`;

  if (listTemplate[operator]) {
    listTemplate[operator].forEach((template) => {
      const option = document.createElement("option");
      option.value = template;
      option.textContent = template;
      selectTemplate.appendChild(option);
    });
  }
}

btnGenerate.addEventListener("click", (e) => {
  e.preventDefault();

  const operator = selectOperator.value;
  const template = selectTemplate.value;
  const shift = selectShift.value;
  const name = selectOperator.options[selectOperator.selectedIndex].text;

  let generate;

  if (operator === "Steven") {
    generate = new TemplateSteven(name, shift);
  } else if (operator === "Hanin") {
    generate = new TemplateHanin(name, shift);
  } else if (operator === "Maheswari") {
    generate = new TemplateMaheswari(name, shift);
  } else {
    hasiltemplate.value = "Operator tidak terdaftar.";
    return;
  }

  const methodName = templateMap[template];
  if (methodName && typeof generate[methodName] === "function") {
    hasiltemplate.value = generate[methodName]();
  } else {
    hasiltemplate.value = "Template tidak ditemukan atau belum dibuat.";
  }
});

btnReset.addEventListener("click", () => {
  selectTemplate.innerHTML = `<option value="">-- Pilih Template --</option>`;
  hasiltemplate.value = "";
});

btnPickup.addEventListener("click", () => {
  hasiltemplate.select();
  document.execCommand("copy");
  cpyPop.style.display = "block";

  setTimeout(() => {
    cpyPop.style.display = "none";
  }, 2000);
});
