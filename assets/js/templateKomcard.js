class TemplateSteven {
  constructor(name, shift) {
    this.name = name;
    this.shift = shift;
  }

  opening() {
    return `Halo selamat ${this.shift} Kak, dengan ${this.name} disini \n\n`;
  }

  kendalaTopup() {
    return (
      this.opening() +
      `Baik kak untuk kendala top up atau pindah saldo pada kartu ${this.name} bantu sampaikan ke tim terkait untuk di cek lebih dulu ya kak`
    );
  }
  bisaTopUp() {
    return (
      this.opening() +
      `Terkait kendala gagal top up pada kartu Komcard saat ini bisa dicoba kembali untuk top upnya ya kak. Apabila masih terkendala kakak bisa konfirmasi ke live chat kembali \nMohon maaf atas ketidaknyamananya`
    );
  }

  gagalBayar() {
    return (
      this.opening() +
      `Baik kak untuk kendala pembayaran atau menautkan kartu pada merchant boleh dibantu lampirkan tampilan error dan dibantu isikan data berikut kak \n
        Email Akun Komcard:
        4 No Terakhir Kartu:
        Saldo Kartu:
        Nominal Tagihan: `
    );
  }

  caraBuat() {
    return (
      this.opening() +
      `Baik kak untuk buat kartu atau tambah kartu baru komcard kakak bisa ke menu keuangan pilih Komcard dan klik tambah kartu`
    );
  }

  verifikasi() {
    return (
      this.opening() +
      `Terkait verifikasi data diri untuk layanan Komcard/Komship saat ini dalam proses ya kak. Mohon kesediaan waktunya untuk menunggu 30 - 60 menit kedepan, atau maksimal 1x24 jam`
    );
  }

  caraTopup() {
    return (
      this.opening() +
      `Terkait top up kartu komcard, kakak bisa isi saldo kompay dulu ya kak, kemudian apabila sudah top up saldo Kompay nanti kakak bisa top up ke kartu. Secara otomatis saldo akan berpindah dari Kompay ke kartu Komcard`
    );
  }

  tarikSaldo() {
    return (
      this.opening() +
      `Baik kak untuk tarik saldo komcard ke rekening, kakak bisa ke menu detail kartu, pilih lainya dan klik tarik saldo. Nanti saldonya akan berpindah ke saldo kompay \nKemudian kakak bisa tarik saldo kompay di dashboard untuk memindahkan saldonya ke rekening pribadi`
    );
  }

  tambahLimit() {
    return (
      this.opening() +
      `Baik kak, untuk kebutuhan penambahan limit spending harian pada kartu boleh dibantu infokan sebelumnya tagihan di merchantnya berapa ya kak`
    );
  }
  tambahKuota() {
    return (
      this.opening() +
      `Baik kak untuk pengajuan penambahan kuota kartu sebelumnya boleh dibantu infokan untuk kartunya nanti akan digunakan untuk apa ya kak`
    );
  }

  kendalaMutasi() {
    return (
      this.opening() +
      `Baik kak, untuk kendala mutasi atau balance saldo yang tidak sinkron boleh dibantu infokan 4 no terakhir kartu dan email akun komcardnya kak`
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

  newKebijakan() {
    return (
      this.opening() +
      `Baik kak, mohon maaf atas ketidaknyamanannya yaa kak. Karena adanya perubahan regulasi dari Bank partner kami, dan demi meningkatkan keamanan transaksi, sehingga dilakukan pembaruan BIN (Bank Identification Number) kak. Dan kartu lama akan otomatis nonaktif serta tidak dapat digunakan lagi
        `
    );
  }

  buatGold() {
    return (
      this.opening +
      `Baik kak, untuk buat kartu gold masih sama seperti sebelumnya kak di fitur keuangan -> kartu komcards -> buat kartu ya kak`
    );
  }

  gagalBayar() {
    return (
      this.opening() +
      `Baik kak untuk kendala pembayaran atau menautkan kartu pada merchant boleh dibantu lampirkan tampilan error dan dibantu isikan data berikut kak \n
        Email Akun Komcard:
        4 No Terakhir Kartu:
        Saldo Kartu:
        Nominal Tagihan: `
    );
  }
};


class TemplateMaheswari {
  constructor(name, shift) {
    this.name = name;
    this.shift = shift;
  }

  opening() {
    return `Halo selamat ${this.shift} Kak, dengan ${this.name} disini \n\n`;
  }

  kendalaTopup() {
    return (
      this.opening() +
      `Baik kak untuk kendala top up atau pindah saldo pada kartu ${this.name} bantu sampaikan ke tim terkait untuk di cek lebih dulu ya kak`
    );
  }
  bisaTopUp() {
    return (
      this.opening() +
      `Terkait kendala gagal top up pada kartu Komcard saat ini bisa dicoba kembali untuk top upnya ya kak. Apabila masih terkendala kakak bisa konfirmasi ke live\nchat kembali, mohon maaf atas ketidaknyamananya`
    );
  }

  gagalBayar() {
    return (
      this.opening() +
      `Baik kak untuk kendala pembayaran atau menautkan kartu pada merchant boleh dibantu lampirkan tampilan error dan dibantu isikan data berikut kak \n
        Email Akun Komcard:
        4 No Terakhir Kartu:
        Saldo Kartu:
        Nominal Tagihan: `
    );
  }

  caraBuat() {
    return (
      this.opening() +
      `Baik kak untuk buat kartu atau tambah kartu baru komcard kakak bisa ke menu keuangan pilih Komcard dan klik tambah kartu`
    );
  }

  verifikasi() {
    return (
      this.opening() +
      `Terkait verifikasi data diri untuk layanan Komcard/Komship saat ini dalam proses ya kak. Mohon kesediaan waktunya untuk menunggu 30 - 60 menit kedepan, atau maksimal 1x24 jam`
    );
  }

  caraTopup() {
    return (
      this.opening() +
      `Terkait top up kartu komcard, kakak bisa isi saldo kompay dulu ya kak, kemudian apabila sudah top up saldo Kompay nanti kakak bisa top up ke kartu. Secara otomatis saldo akan berpindah dari Kompay ke kartu Komcard`
    );
  }

  tarikSaldo() {
    return (
      this.opening() +
      `Baik kak untuk tarik saldo komcard ke rekening, kakak bisa ke menu detail kartu, pilih lainya dan klik tarik saldo. Nanti saldonya akan berpindah ke saldo kompay \nKemudian kakak bisa tarik saldo kompay di dashboard untuk memindahkan saldonya ke rekening pribadi`
    );
  }

  tambahLimit() {
    return (
      this.opening() +
      `Baik kak, untuk kebutuhan penambahan limit spending harian pada kartu boleh dibantu infokan sebelumnya tagihan di merchantnya berapa ya kak`
    );
  }
  tambahKuota() {
    return (
      this.opening() +
      `Baik kak untuk pengajuan penambahan kuota kartu sebelumnya boleh dibantu infokan untuk kartunya nanti akan digunakan untuk apa ya kak`
    );
  }

  kendalaMutasi() {
    return (
      this.opening() +
      `Baik kak, untuk kendala mutasi atau balance saldo yang tidak sinkron boleh dibantu infokan 4 no terakhir kartu dan email akun komcardnya kak`
    );
  }
};

export { TemplateSteven, TemplateHanin, TemplateMaheswari };

