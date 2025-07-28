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

selectOperator.addEventListener("change", () => {
  const operatorTerpilih = selectOperator.value;

  selectTemplate.innerHTML = `<option value="">-- Pilih Template --</option>`;

  if (listTemplate[operatorTerpilih]) {
    listTemplate[operatorTerpilih].forEach((template) => {
      const option = document.createElement("option");
      option.value = template;
      option.textContent = template;
      selectTemplate.append(option);
    });
  }
});

btnGenerate.addEventListener("click", (e) => {
  e.preventDefault();

  const operator = selectOperator.value;
  const template = selectTemplate.value;
  const shift = selectShift.value;
  const name = selectOperator.options[selectOperator.selectedIndex].text;

  let generate;
  switch (operator) {
    case "Steven":
      generate = new TemplateSteven(name, shift);
      break;
    case "Hanin":
      generate = new TemplateHanin(name, shift);
      break;
    case "Maheswari":
      generate = new TemplateMaheswari(name, shift);
      break;
    default:
      throw new Error("Operator tidak terdaftar");
  }

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
    "Permohonan Maaf": "permohonanMaaf",
    "Informasi Penarikan": "infoPenarikan",
    "Dalam Tahap Penanganan": "tahapPenanganan",
    "Follow Up ke Admin": "followAdmin",
  };

  const methodName = templateMap[template];
  if (methodName && typeof generate[methodName] === "function") {
    hasiltemplate.value = generate[methodName]();
  } else {
    hasiltemplate.value =
      "Template ini tidak tersedia, periksa kembali nama operator";
  }
});

btnReset.addEventListener("click", () => {
  selectOperator.indexSelected = 0;
  selectShift.indexSelected = 0;
  hasiltemplate.value = "";
  selectTemplate.indexSelected = 0;
});

btnPickup.addEventListener("click", () => {
  hasiltemplate.select();
  document.execCommand("copy");
  cpyPop.style.display = "block";

  setTimeout(() => {
    cpyPop.style.display = "none";
  }, 2000);
});
