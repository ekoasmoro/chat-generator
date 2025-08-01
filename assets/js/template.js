class Template {
  constructor(name, shift, idResi) {
    this.name = name;
    this.shift = shift;
    this.idResi = idResi;
    this.hasilCheck = "";
  }

  opening() {
    return `Halo selamat ${this.shift} Kak, dengan ${this.name} disini \n\n`;
  }

  pushResi() {
    return (
      this.opening() +
      `Mohon maaf sebelumnya kak, terkait kendala proses pengiriman pada resi ${this.idResi} yang stuck atau tidak update. ${this.name} bantu buatkan laporanya ke ekspedisi ${this.hasilCheck} pusat untuk segera proses kembali pengirimanya`
    );
  }

  pushReturn() {
    return (
      this.opening() +
      `Mohon maaf sebelumnya Kak, terkait kendala proses pengiriman return pada resi ${this.idResi} yang stuck atau tidak update. ${this.name} bantu buatkan laporanya ke ekspedisi ${this.hasilCheck} pusat untuk segera proses kembali pengiriman returnya`
    );
  }

  pengirimanUlang() {
    return (
      this.opening() +
      `Baik Kak untuk kendala resi ${this.idResi}, mohon dibantu untuk kirimkan screenshot chat konfirmasi dari penerima bahwa paket masih ditunggu dan tidak menolak paketnya \n\nNanti ${this.name} bantu push ke ekspedisi ${this.hasilCheck} pusat untuk dilakukan pengantaran ulang`
    );
  }

  pushPod() {
    return (
      this.opening() +
      `Baik Kak, untuk resi ${this.idResi}, ${this.name} bantu buatkan laporanya ke ekspedisi ${this.hasilCheck} pusat untuk segera proses update POD atau diterima`
    );
  }

  sudahReturn() {
    return (
      this.opening() +
      `Mohon maaf sekali ya Kak, untuk pengiriman dengan resi ${this.idResi} belum berhasil diterima oleh penerima. Kurir sudah berupaya untuk melakukan beberapa kali pengantaran hingga batas maksimal percobaan pengantaran. \n\nNamun apabila proses pengiriman tidak sesuai prosedur Kakak bisa ajukan klaim ya Kak. Untuk langkah pengajuan klaim sebagai berikut ya kak \n\nSilakan buka tiket kendalanya, tombol claim retur akan ada di atas pesan rating ekspedisi ketika status tiket Selesai
      \n![](https://storage.crisp.chat/users/upload/operator/cd9687a56f71f800/screenshoot-tombol-claim_pre5lp.png)`
    );
  }

  bantuKlaim() {
    return (
      this.opening() +
      `Baik Kak, untuk resi ${this.idResi}, ${this.name} bantu ajukan klaim ke Tim terkait ya kak, mohon kesediaan waktu untuknya menunggu updatenya kembali`
    );
  }

  bantuPickup() {
    return (
      this.opening() +
      `Mohon maaf sebelumnya kak terkait keterlambatan pick up resi ${this.idResi}, ${this.name} bantu buatkan laporanya ke ekspedisi ${this.hasilCheck} pusat untuk segera proses pick up mohon dibantu isikan data berikut ya kak \n
      Nama Penanggung Jawab (PIC): 
      No. HP: 
      Alamat Gudang Pickup: 
      Salah Satu No. Resi: ${this.idResi}
      `
    );
  }
}

export { Template };
