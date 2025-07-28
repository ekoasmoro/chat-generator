import {
  TemplateSteven,
  TemplateHanin,
  TemplateMaheswari,
} from "./templateKomcard.js";

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
    "Kendala Top Up",
    "Top Up Sudah Bisa",
    "Gagal Bayar Merchant",
    "Cara Buat Kartu",
    "Verifikasi Akun",
    "Cara Top Up",
    "Tarik Saldo Kartu",
    "Pengajuan Limit",
    "Tambah Kuota Kartu",
    "Mutasi Tidak Sinkron",
  ],
  Hanin: ["Kebijakan Baru", "Buat Kartu Gold", "Gagal Bayar Merchant"],
  Maheswari: [
    "Kendala Top Up",
    "Top Up Sudah Bisa",
    "Gagal Bayar Merchant",
    "Cara Buat Kartu",
    "Verifikasi Akun",
    "Cara Top Up",
    "Tarik Saldo Kartu",
    "Pengajuan Limit",
    "Tambah Kuota Kartu",
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
g

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
