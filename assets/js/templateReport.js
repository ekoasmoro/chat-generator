class TemplateEkspedisi {
  constructor(idReport, idResi) {
    this.idReport = idReport;
    this.idResi = idResi;
  }

  pushDelivery() {
    return `Permisi Kak, mohon dibantu untuk push dan maksimalkan proses pengiriman resi berikut karena terindikasi stuck atau tidak update

ID Report: ${this.idReport}
ID Resi: ${this.idResi}

Terima kasih`;
  }

  pushPod() {
    return `Permisi kak, mohon dibantu cek dan update resi berikut menjadi diterima

ID Report: ${this.idReport}
ID Resi: ${this.idResi}
Deskripsi: Konfirmasi dari penerima paket sudah menerima paketnya

Terima kasih`;
  }

  pushReturn() {
    return `Permisi Kak, mohon dibantu untuk push dan maksimalkan proses pengiriman return resi berikut karena terindikasi stuck atau tidak update

ID Report: ${this.idReport}
ID Resi: ${this.idResi}

Terima kasih`;
  }

  pengirimanUlang() {
    return `Permisi Kak, mohon dibantu untuk proses pengantaran kembali resi berikut

ID Report: ${this.idReport}
ID Resi: ${this.idResi}
Deskripsi: Konfirmasi dari penerima paket, tidak menolak paket dan masih menunggu paketnya untuk diantar

Terima kasih`;
  }

  pushMasal() {
    return `Permisi Kak, mohon dibantu untuk push dan maksimalkan proses pengiriman pada daftar resi berikut karena terindikasi stuck atau tidak update

ID Report: ${this.idReport}
ID Resi: 
${this.idResi}

Terima kasih`;
  }

  pushPickup() {
    return `Permisi Kak, mohon dibantu untuk segera proses pick up, konfirmasi dari pengirim sudah melewati jadwal pick up

${this.deskripsi}

Terima kasih`;
  }

  dokumentasiPod() {
    return `Permisi Kak, mohon dibantu untuk infokan dokumentasi POD resi berikut, konfirmasi penerima belum menerima paketnya namun statusnya sudah diterima

ID Report: ${this.idReport}
ID Resi: ${this.idResi}

Terima kasih`;
  }

  podReturn() {
    return `Permisi Kak, mohon dibantu untuk infokan dokumentasi POD return resi berikut, konfirmasi pengirim/seller belum menerima paketnya namun statusnya sudah diterima

ID Report: ${this.idReport}
ID Resi: ${this.idResi}

Terima kasih`;
  }

  jemputPaket() {
    return `Permisi Kak, mohon dibantu infokan alamat gudang/gerai/agen resi berikut

ID Report: ${this.idReport}
ID Resi: ${this.idResi}
Deskripsi: Konfirmasi penerima paket akan melakukan penjemputan paketnya di gudang atau gerai

Terima kasih`;
  }
}

class TemplateBugs {
  constructor(idReport, email, deskripsi) {
    this.idReport = idReport;
    this.email = email;
    this.deskripsi = deskripsi;
  }

  generalReport() {
    return `Permisi Tim, mohon dibantu cek kendala berikut
ID Report: ${this.idReport}
Email: ${this.email}
Penjelasan Kendala: ${this.deskripsi}

Terima kasih`;
  }

  kompayTidakMasuk() {
    return `Permisi Tim, mohon dibantu cek kendala berikut
ID Report: ${this.idReport}
Email: ${this.email}
Penjelasan Kendala: User mencoba top up ke saldo Kompay namun tidak masuk
Nominal Top Up: Rp.

Terima kasih`;
  }

  komcardTidakMasuk() {
    return `Permisi Tim, mohon dibantu cek kendala berikut
ID Report: ${this.idReport}
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

class TemplateCso {
  constructor(idResi) {
    this.idResi = idResi;
  }

  tanpaTiket() {
    return `Permisi Kak @ , mohon dibantu cek resi berikut dan bantu klaim tanpa tiket 
ID Resi: ${this.idResi}

Terima kasih`;
  }

  klaimHilang() {
    return `Permisi Kak @ , mohon dibantu cek resi berikut karena update dari ekspedisi terindikasi hilang
ID Resi: ${this.idResi}

Terima kasih`;
  }

  pushPenarikan() {
    return `Permisi Kak @  , mohon dibantu proses penarikan email berikut 

Terima kasih`;
  }

  penyelesaianResi() {
    return `Permisi Kak @ , mohon dibantu cek proses penyelesaian kendala resi berikut 
Email Akun: 
ID Resi: ${this.idResi}
Deskripsi: Konfirmasi user/seller sudah refund

Terima kasih`;
  }
};

export {TemplateBugs, TemplateEkspedisi, TemplateCso};
