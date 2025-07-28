class TemplateSteven {
  constructor(name, shift) {
    this.name = name;
    this.shift = shift;
  }

  opening() {
    return `Halo selamat ${this.shift} Kak, dengan ${this.name} disini \n\n`;
  }

  sesuaiPopup() {
    return (
      this.opening() +
      `Baik kak, terkait penarikan saldo untuk saat ini mohon ditunggu ya kak sesuai pada pop up notifikasi penarikan, untuk penarikan saldo akan diproses dalam kurun 1x24 jam`
    );
  }

  mintaEmail() {
    return (
      this.opening() +
      `Baik kak, mohon maaf sebelumnya terkait kendala penarikan saldo. Boleh dibantu informasikan email akun penarikannya ya kak, agar ${this.name} bisa bantu cek dan sampaikan ke tim terkait`
    );
  }

  pushPenarikan() {
    return (
      this.opening() +
      `Baik kak, terkait kendala penarikan saldo, ${this.name} bantu sampaikan ke tim terkait agar segera diproses penarikan saldonya ya kak. Mohon ditunggu, tim kami upayakan secepatnya`
    );
  }

  pushMax() {
    return (
      this.opening() +
      `Baik kak, untuk saat ini tim kami upayakan dan maksimalkan hari ini agar saldo kakak dapat segera terproses ya kak. Mohon kesediaan waktunya, ${this.name} pastikan tim terus follow up prosesnya.`
    );
  }

  penarikanLama() {
    return (
      this.opening() +
      `Baik kak, mohon maaf atas ketidaknyamanan terkait penarikan saldo yang memakan waktu lebih dari 24 jam. Hal ini terjadi karena adanya proses verifikasi internal serta antrian proses yang perlu kami jalankan sesuai prosedur. Mohon kesediaan waktunya ya kak, tim kami terus upayakan agar segera selesai`
    );
  }

  prosesPenarikan() {
    return (
      this.opening() +
      `Mohon maaf sebelumnya kak, ${this.name} mengerti akan kekhawatiran kakak dalam melakukan penarikan saldo, namun untuk saat ini penarikan saldo masih dalam proses ya kak, mohon kesediaan waktunya`
    );
  }

  permohonanMaaf() {
    return (
      this.opening() +
      `Baik kak, mohon maaf atas ketidaknyamanannya terkait keluhan yang kakak rasakan. ${this.name} bantu sampaikan ke tim untuk segera dilakukan improvement ke depannya, agar dapat memberikan layanan yang lebih baik lagi`
    );
  }
}

class TemplateHanin {
  constructor(name, shift) {
    this.name = name;
    this.shift = shift;
  }

  opening() {
    return `Halo selamat ${this.shift} Kak, dengan ${this.name} disini \n\n`;
  }

  followUp() {
    return (
      this.opening() +
      `Baik kak, mohon maaf atas keterlambatan prosesnya. Saat ini sudah ${this.name} bantu followup kembali ke tim terkait untuk dimaksimalkan prosesnya. Mohon ditunggu ya kak`
    );
  }

  terimaKasih() {
    return (
      this.opening() +
      `Terima kasih sudah menunggu, dan mohon maaf pencairannya masih dalam proses dan akan segera kami update.`
    );
  }

  permohonanMaaf() {
    return (
      this.opening() +
      `Mohon maaf atas keterlambatan pencairannya. Saat ini tim kami sedang menindaklanjuti prosesnya dan kami upayakan agar dana segera dicairkan dalam waktu sesingkat-singkatnya. Terima kasih atas pengertian dan kesabarannya ya kak.`
    );
  }
}

class TemplateMaheswari {
  constructor(name, shift) {
    this.name = name;
    this.shift = shift;
  }

  opening() {
    return `Halo selamat ${this.shift} Kak, dengan ${this.name} disini \n\n`;
  }

  infoPenarikan() {
    return (
      this.opening() +
      `Baik kak, untuk request penarikan saldo sudah masuk antrian di sistem ya. Mohon ditunggu proses pencairannya *maksimal paling lambat dalam waktu 1x24 jam* kedepan.`
    );
  }

  tahapPenanganan() {
    return (
      this.opening() +
      `Baik ka, saat ini, request penarikan saldo akun Kakak dalam tahap penanganan. Mohon ditunggu segera masuknya dana ke rekening ya ka`
    );
  }

  followAdmin() {
    return (
      this.opening() +
      `Baik ka, mohon waktunya ya ka, saat ini sudah dalam followup ke admin terkait untuk speedup prosesnya. Mohon ditunggu segera masuknya dana ke rekening ya ka`
    );
  }
}

export { TemplateSteven, TemplateHanin, TemplateMaheswari };
