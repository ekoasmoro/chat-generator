import {
  TemplateBugs,
  TemplateEkspedisi,
  TemplateVerifikasi,
  TemplatePenarikan,
} from "./templateSobat.js";

const selectOperator = document.getElementById("operator");
const selectShift = document.getElementById("shift");
const selectTemplate = document.getElementById("pilihTemplate");
const subTemplateEkspedisi = document.getElementById("subtemplate-ekspedisi");
const subTemplateBugs = document.getElementById("subtemplate-bugs");
const subTemplateVerifikasi = document.getElementById("subtemplate-verifikasi");
const subTemplatePenarikan = document.getElementById("subtemplate-penarikan");
const getIdResi = document.getElementById("idresi");
const getEmail = document.getElementById("emailAkun");
const getDeskripsi = document.getElementById("deskripsi");
const getDokumentasi = document.getElementById("dokumentasi");
const getSaldo = document.getElementById("nominalSaldo");
const getIdResiPenarikan = document.getElementById("idResiPenarikan");
const hasiltemplate = document.getElementById("result-box");
const btnPickup = document.getElementById("copyResult");
const cpyPop = document.querySelector(".cpy-container");
const openSubEkspedisi = document.querySelector(".ekspedisi-container");
const openSubBugs = document.querySelector(".bugs-container");
const openSubVerifikasi = document.querySelector(".verifikasi-claim");
const openSubPenarikan = document.querySelector(".penarikan");
const btnGenerateEkpedisi = document.getElementById("generate-ekspedisi");
const btnGenerateBugs = document.getElementById("generate-bugs");
const btnGenerateVerifikasi = document.getElementById("generate-verifikasi");
const btnGeneratePenarikan = document.getElementById("generate-penarikan");
const btnResetEkpedisi = document.getElementById("reset-ekspedisi");
const btnResetBugs = document.getElementById("reset-bugs");
const btnResetVerifikasi = document.getElementById("reset-verifikasi");
const btnResetPenarikan = document.getElementById("reset-penarikan");
const sftSpan = document.getElementById("sft");
const optSpan = document.getElementById("opt");
const CSODATA_KEY = "CSO_APPS";

document.addEventListener("DOMContentLoaded", function () {
   const shiftGreetingMap = {
    pagi: "Selamat Pagi",
    siang: "Selamat Siang",
    sore: "Selamat Sore",
    malam: "Selamat Malam",
  };

  function updateGreeting() {
    const shift = selectShift.value;
    const operator = selectOperator.value;

    const generateOp = () => {
      switch (operator) {
        case "":
          return "";
        case "AM":
          return "Amin";
        case "FA":
          return "Fa'i";
        case "ID":
          return "Ida";
        case "IN":
          return "Indah";
        case "ZA":
          return "Zam";
        default:
          return "";
      }
    };

    optSpan.textContent = generateOp() || "";
    sftSpan.textContent = shiftGreetingMap[shift] || "Selamat Datang";
  }

  function saveData() {
    const data = {
      operator: selectOperator.value,
      shift: selectShift.value,
    };

    localStorage.setItem(CSODATA_KEY, JSON.stringify(data));

    const event = new CustomEvent("CSO_Data", { detail: data });
    window.dispatchEvent(event);
  }

  selectOperator.addEventListener("change", () => {
    saveData();
    updateGreeting();
  });

  selectShift.addEventListener("change", () => {
    saveData();
    updateGreeting();
  });

  window.addEventListener("storage", (event) => {
    if (event.key === CSODATA_KEY && event.newValue) {
      const newData = JSON.parse(event.newValue);
      selectOperator.value = newData.operator || "";
      selectShift.value = newData.shift || "";
      updateGreeting();
    }
  });

  const saved = localStorage.getItem(CSODATA_KEY);
  if (saved) {
    const data = JSON.parse(saved);
    selectOperator.value = data.operator || "";
    selectShift.value = data.shift || "";
    updateGreeting();
  }

});

const subTemplate = {
  ekspedisi: [
    "Push Pengiriman",
    "Push POD",
    "Push Return",
    "Pengiriman Ulang",
    "Push Resi Masal",
    "Push Pick Up",
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
  verifikasi: [
    "Foto Ulang",
    "RedZone Area",
    "Input Order Dahulu",
    "Respon Chat Admin",
    "Klaim Return",
  ],
  penarikan: ["Sisakan Saldo", "Kendala Resi"],
};

const methodMaps = {
  ekspedisi: {
    "Push Pengiriman": "pushDelivery",
    "Push POD": "pushPod",
    "Push Return": "pushReturn",
    "Pengiriman Ulang": "pengirimanUlang",
    "Push Resi Masal": "pushMasal",
    "Push Pick Up": "pushPickup",
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
  verifikasi: {
    "Foto Ulang": "fotoUlang",
    "RedZone Area": "redZone",
    "Input Order Dahulu": "inputOrder",
    "Respon Chat Admin": "chatAdmin",
    "Klaim Return": "klaimReturn",
  },
  penarikan: {
    "Sisakan Saldo": "sisakanSaldo",
    "Kendala Resi": "kendalaResi",
  },
};

const subSelectMap = {
  ekspedisi: subTemplateEkspedisi,
  bugs: subTemplateBugs,
  verifikasi: subTemplateVerifikasi,
  penarikan: subTemplatePenarikan,
};

selectTemplate.addEventListener("change", () => {
  const kategori = selectTemplate.value;
  const levelContainer = document.querySelector(".ekspedisi-container .leveling-container");
  const idResiContainer = document.querySelector(".ekspedisi-container .second-input");
  const dokumentasi = document.querySelector(".verifikasi-input .second-input");
  const saldoContainer = document.querySelector(
    ".penarikan-input .saldo-container"
  );
  const resiContainer = document.querySelector(
    ".penarikan-input .kendala-input"
  );

  openSubEkspedisi.style.display = "none";
  openSubBugs.style.display = "none";
  openSubVerifikasi.style.display = "none";
  openSubPenarikan.style.display = "none";

  if (kategori === "ekspedisi") {
    openSubEkspedisi.style.display = "block";
    levelContainer.style.display = "none";
    idResiContainer.style.display = "none";
  }
  else if (kategori === "bugs") openSubBugs.style.display = "block";
  else if (kategori === "verifikasi") {
    openSubVerifikasi.style.display = "block";
    dokumentasi.style.display = "none";
  } else if (kategori === "penarikan") {
    openSubPenarikan.style.display = "block";
    saldoContainer.style.display = "none";
    resiContainer.style.display = "none";
  }

  const currentSelect = subSelectMap[kategori];
  console.log("Kategori:", kategori, "CurrentSelect:", currentSelect);
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
  const template = subTemplateEkspedisi.value;
  const levelContainer = document.querySelector(".ekspedisi-container .leveling-container");
  const idResiContainer = document.querySelector(".ekspedisi-container .second-input");

  if (template === "" ) {
    levelContainer.style.display = "none";
    idResiContainer.style.display = "none";
  }else {
    levelContainer.style.display = "block";
    idResiContainer.style.display = "block";
  }


  hasiltemplate.value = "";
});

subTemplateBugs.addEventListener("change", () => {
  hasiltemplate.value = "";
});

subTemplateVerifikasi.addEventListener("change", () => {
  const template = subTemplateVerifikasi.value;
  const dokumentasi = document.querySelector(".verifikasi-input .second-input");

  if (template === "Klaim Return") {
    getDokumentasi.placeholder = "cth:\nhttps://link.gambar.id\nhttps://link.gambar.id\nhttps://link.gambar.id"
    dokumentasi.style.display = "block";
  } else {
    dokumentasi.style.display = "none";
  }
  hasiltemplate.value = "";
});

subTemplatePenarikan.addEventListener("change", () => {
  const template = subTemplatePenarikan.value;
  const saldoContainer = document.querySelector(
    ".penarikan-input .saldo-container"
  );
  const resiContainer = document.querySelector(
    ".penarikan-input .kendala-input"
  );

  if (template === "Sisakan Saldo") {
    resiContainer.style.display = "none";
    saldoContainer.style.display = "block";
  } else if (template === "Kendala Resi") {
    resiContainer.style.display = "block";
    saldoContainer.style.display = "none";
  }

  hasiltemplate.value = "";
});

btnGenerateEkpedisi.addEventListener("click", () => {
  const sub = subTemplateEkspedisi.value;
  const methodName = methodMaps["ekspedisi"]?.[sub];
  const idResi = getIdResi.value;
  const selectedLevel = document.querySelector(
    "input[name='userLevel']:checked"
  );
  const userLevel = selectedLevel ? selectedLevel.value : null;

  if (!methodName) return (hasiltemplate.value = "Sub template belum dipilih!");

  const instance = new TemplateEkspedisi(userLevel, idResi);
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

  const email = getEmail.value;
  const deskripsi = getDeskripsi.value;

  if (!methodName) return (hasiltemplate.value = "Sub template belum dipilih!");

  const instance = new TemplateBugs(email, deskripsi);
  if (typeof instance[methodName] === "function") {
    const template = instance[methodName]();
    hasiltemplate.value = template;
    console.log(template);
  } else {
    hasiltemplate.value = "Metode tidak ditemukan!";
  }
});

btnGenerateVerifikasi.addEventListener("click", () => {
  const sub = subTemplateVerifikasi.value;
  const methodName = methodMaps["verifikasi"]?.[sub];

  const idOperator = selectOperator.value;
  const link = getDokumentasi.value;

  if (!idOperator) {
    alert("Silakan pilih operator terlebih dahulu!");
    return;
  }

  if (!methodName) return (hasiltemplate.value = "Sub template belum dipilih!");

  const instance = new TemplateVerifikasi(link, idOperator);
  if (typeof instance[methodName] === "function") {
    const template = instance[methodName]();
    hasiltemplate.value = template;
  } else {
    hasiltemplate.value = "Metode tidak ditemukan!";
  }
});

btnGeneratePenarikan.addEventListener("click", () => {
  const sub = subTemplatePenarikan.value;
  const methodName = methodMaps["penarikan"]?.[sub];

  const idResi = getIdResiPenarikan.value;
  const saldo = getSaldo.value;
  const idOperator = selectOperator.value;

  if (!idOperator) {
    alert("Silakan pilih operator terlebih dahulu!");
    return;
  }

  if (!methodName) return (hasiltemplate.value = "Sub template belum dipilih!");

  const instance = new TemplatePenarikan(saldo, idResi, idOperator);
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
  getIdResi.value = "";
  hasiltemplate.value = "";
  openSubEkspedisi.style.display = "none";
});

btnResetBugs.addEventListener("click", () => {
  selectTemplate.value = "";
  subTemplateBugs.innerHTML = `<option value="">-- Pilih Template --</option>`;
  getEmail.value = "";
  getDeskripsi.value = "";
  hasiltemplate.value = "";
  openSubBugs.style.display = "none";
});

btnResetVerifikasi.addEventListener("click", () => {
  selectTemplate.value = "";
  subTemplateVerifikasi.innerHTML = `<option value="">-- Pilih Template --</option>`;
  hasiltemplate.value = "";
  openSubVerifikasi.style.display = "none";
});

btnResetPenarikan.addEventListener("click", () => {
  selectTemplate.value = "";
  subTemplateVerifikasi.innerHTML = `<option value="">-- Pilih Template --</option>`;
  hasiltemplate.value = "";
  openSubVerifikasi.style.display = "none";
});

btnPickup.addEventListener("click", () => {
  hasiltemplate.select();
  document.execCommand("copy");
  cpyPop.style.display = "block";

  setTimeout(() => {
    cpyPop.style.display = "none";
  }, 2000);
});

document.querySelectorAll(".level").forEach((level) => {
  level.addEventListener("click", () => {
    document
      .querySelectorAll(".level")
      .forEach((l) => l.classList.remove("active"));

    const radio = level.querySelector('input[type="radio"]');
    radio.checked = true;
    level.classList.add("active");
  });
});
