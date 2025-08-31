class TemplateEkspedisi {
  constructor(userLevel, idResi) {
    this.userLevel = userLevel;
    this.idResi = idResi;
  }

  labelUser() {
    switch (this.userLevel) {
      case "reguler":
        return "";
      case "juragan":
        return `🥈Case user Juragan KOMSHIP🥈
(Pengguna Prioritas)\n\n`;
      case "saudagar":
        return `🥇Case user Saudagar KOMSHIP🥇
(Pengguna Prioritas Utama)\n\n`;
      default:
        alert("Pilih Level User");
        return "";
    }
  }

  pushDelivery() {
    return (
      this.labelUser() +
      `Permisi Kak, mohon dibantu untuk push dan maksimalkan proses pengiriman resi berikut karena terindikasi stuck atau tidak update

ID Resi: ${this.idResi}

Terima kasih`
    );
  }

  pushPod() {
    return (
      this.labelUser() +
      `Permisi kak, mohon dibantu cek dan update resi berikut menjadi diterima

ID Resi: ${this.idResi}
Deskripsi: Konfirmasi dari penerima paket sudah menerima paketnya

Terima kasih`
    );
  }

  pushReturn() {
    return (
      this.labelUser() +
      `Permisi Kak, mohon dibantu untuk push dan maksimalkan proses pengiriman return resi berikut karena terindikasi stuck atau tidak update

ID Resi: ${this.idResi}

Terima kasih`
    );
  }

  pengirimanUlang() {
    return (this.labelUser() +
    `Permisi Kak, mohon dibantu untuk proses pengantaran kembali resi berikut

ID Resi: ${this.idResi}
Deskripsi: Konfirmasi dari penerima paket, tidak menolak paket dan masih menunggu paketnya untuk diantar

Terima kasih`);
  }

  pushMasal() {
    return (
      this.labelUser() +
      `Permisi Kak, mohon dibantu untuk push dan maksimalkan proses pengiriman pada daftar resi berikut karena terindikasi stuck atau tidak update

ID Resi: 
${this.idResi}

Terima kasih`
    );
  }

  pushPickup() {
    return (
      this.labelUser() +
      `Permisi Kak, mohon dibantu untuk segera proses pick up, konfirmasi dari pengirim paket sudah melewati jadwal pick up

${this.idResi}

Terima kasih`
    );
  }
}

class TemplateBugs {
  constructor(email, deskripsi) {
    this.email = email;
    this.deskripsi = deskripsi;
  }

  generalReport() {
    return `Permisi Tim, mohon dibantu cek kendala berikut
Email: ${this.email}
Penjelasan Kendala: ${this.deskripsi}

Terima kasih`;
  }

  kompayTidakMasuk() {
    return `Permisi Tim, mohon dibantu cek kendala berikut
Email: ${this.email}
Penjelasan Kendala: User mencoba top up ke saldo Kompay namun tidak masuk
Nominal Top Up: Rp.

Terima kasih`;
  }

  komcardTidakMasuk() {
    return `Permisi Tim, mohon dibantu cek kendala berikut
Email: ${this.email}
Penjelasan Kendala: User mencoba top up ke kartu Komcard namun tidak masuk atau gagal

Terima kasih`;
  }

  balanceTidakSinkron() {
    return `Permisi Tim, mohon dibantu cek kartu berikut karena ada indikasi balance saldo tidak sinkron 
Email: ${this.email}

=====Detail Kartu=====
${this.deskripsi}


Terima kasih`;
  }

  refund() {
    return `Permisi Tim, mohon dibantu cek kartu berikut karena karena konfirmasi dari merchant transaksi sebelumnya sudah dilakukan refund
Email: ${this.email}
Merchant: 
Nominal Refund: Rp.

=====Detail Kartu=====
${this.deskripsi}


Terima kasih`;
  }

  gagalPayment() {
    return `Permisi Tim, mohon dibantu cek kartu berikut karena karena konfirmasi dari user/pengguna mengalami gagal bayar atau transaksinya terdeclined
Email: ${this.email}
Merchant: 
Nominal Tagihan: Rp.

=====Detail Kartu=====
${this.deskripsi}

Terima kasih`;
  }

  gagalMenautkan() {
    return `Permisi Tim, mohon dibantu cek kartu berikut karena karena konfirmasi dari user/pengguna mengalami gagal menautkan kartunya ke merchant
Email: ${this.email}
Merchant: 

=====Detail Kartu=====
${this.deskripsi}

Terima kasih`;
  }
}

class TemplateVerifikasi {
  constructor(link, idOperator) {
    this.link = link;
    this.idOperator = idOperator;
  }

  generateOp() {
    switch (this.idOperator) {
      case "AM":
        return "Taqin";
      case "FA":
        return "Amad";
      case "ID":
        return "Dayu";
      case "IN":
        return "Indah";
      case "ZA":
        return "Zam";
      default:
        alert("Pilih Operator Dulu!");
        return "";
    }
  }

  fotoUlang() {
    return `Mohon maaf, pengajuan Anda belum dapat kami proses. Silakan ajukan ulang dengan ketentuan: gunakan foto dengan latar belakang berbeda, ubah pose atau gunakan pakaian berbeda, serta pastikan KTP terlihat jelas (tidak blur) - ${this.idOperator}`;
  }

  redZone() {
    return `Mohon maaf, setelah kami lakukan pengecekan, saat ini wilayah domisili Kakak termasuk dalam area red zone sehingga sementara waktu pengajuan belum dapat kami proses. Hal ini sesuai dengan kebijakan internal kami. Terima kasih atas pengertiannya - ${this.idOperator}`;
  }

  inputOrder() {
    return `Mohon maaf, untuk dapat melakukan proses verifikasi layanan Komship, Kakak perlu membuat dan menginput order terlebih dahulu. Setelah itu, silakan ajukan kembali proses verifikasinya - ${this.idOperator}`;
  }

  chatAdmin() {
    return `Terima kasih sudah mengajukan verifikasi. Untuk melanjutkan prosesnya, mohon dibantu merespons chat dari Tim Komship yang telah menghubungi Kakak melalui WhatsApp ya - ${this.idOperator}`;
  }

  klaimReturn() {
    return `Mohon maaf sebelumnya untuk claim Retur dengan resi ini belum bisa kami setujui dikarenakan dengan alasan: 

Kurir sudah melakukan pengiriman ke lokasi buyer namun buyer tidak kooperatif  sehingga paket over SLA dan retur otomatis
sudah dihubungi ulang buyer tidak merespon

${this.link}

Jika ingin mengajukan banding, bisa menghubungi CS pada Live Chat.

${this.generateOp()}
Komship
`;
  }
}

class TemplatePenarikan {
  constructor(saldo, idResi, idOperator) {
    this.saldo = saldo;
    this.idOperator = idOperator;
    this.idResi = idResi;
  }

  generateTime() {
    const now = new Date();

    const dd = String(now.getDate()).padStart(2, "0");
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const yyyy = now.getFullYear();

    const hh = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");

    return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
  }

  sisakanSaldo() {
    return (
      this.generateTime() +
      ` | Berdasarkan data saat ini, pengajuan penarikan yang Anda lakukan akan menyebabkan saldo akun menjadi minus. Mohon untuk menyisakan saldo sebesar ${this.saldo} guna pembayaran potensi return paket - ${this.idOperator}`
    );
  }

  kendalaResi() {
    return (
      this.generateTime() + ` | Mohon maaf untuk penarikan dalam review dan belum dapat diproses, silahkan bisa selesaikan kendala resi ${this.idResi} lebih dulu - ${this.idOperator}`
    )
  }
}

export { TemplateBugs, TemplateEkspedisi, TemplateVerifikasi, TemplatePenarikan };
