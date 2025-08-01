import { Template } from "./template.js";

const selectOperator = document.getElementById("operator");
const selectShift = document.getElementById("shift");
const pilihTemplate = document.getElementById("pilihTemplate");
const inputResi = document.getElementById("inputResi");
const resiInvalid = document.querySelector(".error-message");
const btnGenerate = document.getElementById("generate");
const btnReset = document.getElementById("reset");
const result = document.getElementById("result-box");
const btnCopy = document.getElementById("copyResult");
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



btnGenerate.addEventListener("click", function (e) {
  e.preventDefault();

  const nama = selectOperator.value;
  const shift = selectShift.value;
  const idResi = inputResi.value.trim();
  const pilihanTemplate = pilihTemplate.value;

  let generate;
  try {
    generate = new Generate(nama, shift, idResi);
    generate.checkId();
  } catch (error) {
    resiInvalid.style.display = "block";
    return;
  }

  let hasil;
  switch (pilihanTemplate) {
    case "pushPengiriman":
      hasil = generate.pushResi();
      break;
    case "pushReturn":
      hasil = generate.pushReturn();
      break;
    case "pengirimanUlang":
      hasil = generate.pengirimanUlang();
      break;
    case "updatePod":
      hasil = generate.pushPod();
      break;
    case "return":
      hasil = generate.sudahReturn();
      break;
    case "bantuKlaim":
      hasil = generate.bantuKlaim();
      break;
    case "belumPu":
      hasil = generate.bantuPickup();
      break;
    default:
      hasil = "Template tidak ditemukan";
  }

  document.getElementById("result-box").value = hasil;
});

class Generate extends Template {
  constructor(name, shift, idResi) {
    super(name, shift, idResi);
  }

  checkId() {
    const id = this.idResi.toUpperCase();
    const ninjaId = id.substring(0, 8);
    const sapId = id.substring(0, 7);
    const jntId = id.substring(0, 2);
    const idexId = id.substring(0, 3);

    if (ninjaId === "KOMRCKOM") {
        this.hasilCheck = "Ninja";
    } else if (sapId === "KOMSHIP") {
        this.hasilCheck = "SAP";
    } else if (idexId === "IDE") {
        this.hasilCheck = "ID Ekspress";
    } else if (jntId === "JO") {
        this.hasilCheck = "J&T";
    } else if (id.length === 16) {
        this.hasilCheck = "JNE";
    } else if (id.length === 12 && jntId !== "JO") {
        this.hasilCheck = "SiCepat";
    } else {
        throw new Error("Resi tidak valid!");
    }
  }
};


btnReset.addEventListener("click", () => {
  inputResi.value = "";
  result.value = "";
  resiInvalid.style.display = "none"
})

btnCopy.addEventListener("click", () => {
  result.select();
  document.execCommand("copy");
  cpyPop.style.display = "block";

  setTimeout(() => {
    cpyPop.style.display = "none";
  }, 2000);
})


