import { Template } from "./template.js";

const operatorSelect = document.getElementById("operator");
const shiftSelect = document.getElementById("shift");
const pilihTemplate = document.getElementById("pilihTemplate");
const inputResi = document.getElementById("inputResi");
const resiInvalid = document.querySelector(".error-message");
const btnGenerate = document.getElementById("generate");
const btnReset = document.getElementById("reset");
const result = document.getElementById("result-box");
const btnCopy = document.getElementById("copyResult");
const cpyPop = document.querySelector(".cpy-container");

btnGenerate.addEventListener("click", function (e) {
  e.preventDefault();

  const nama = operatorSelect.value;
  const shift = shiftSelect.value;
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

    if (id.length === 16) {
      this.hasilCheck = "JNE";
    } else if (ninjaId === "KOMRCKOM") {
      this.hasilCheck = "Ninja";
    } else if (jntId === "JO") {
      this.hasilCheck = "J&T";
    } else if (idexId === "IDE") {
      this.hasilCheck = "IDE";
    } else if (sapId === "KOMSHIP") {
      this.hasilCheck = "SAP";
    } else if (id.length === 12 && jntId !== "JO") {
      this.hasilCheck = "Sicepat";
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

  setInterval(() => {
    cpyPop.style.display = "none";
  }, 2000);
})


