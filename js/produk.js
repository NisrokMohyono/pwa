const produkGudang = [
    { nama: "Pasta Saus Bolognese", harga: 50000, stok: 100 , karton: 1,},
    { nama: "Gula Pasir", harga: 15000, stok: 200 , karton: 1},
    { nama: "Minyak Zaitun Extra Virgin", harga: 80000, stok: 50, karton: 1 },
    { nama: "Sabun Mandi Aromaterapi", harga: 25000, stok: 150, karton: 1 },
    { nama: "Kopi Arabika", harga: 35000, stok: 80, karton: 1 }
    // Tambahkan produk lain jika diperlukan
  ];

  // Fungsi untuk membuat tabel produk
  function generateProductTable() {
    const table = document.getElementById("produkTable");
    produkGudang.forEach((produk) => {
      const row = table.insertRow();
      const cellNama = row.insertCell(0);
      const cellHarga = row.insertCell(1);
      const cellStok = row.insertCell(2);
      const cellKarton = row.insertCell(3);
      cellNama.innerHTML = produk.nama;
      cellHarga.innerHTML = `Rp${produk.harga.toLocaleString()}`;
      cellStok.innerHTML = produk.stok;
      cellKarton.innerHTML = produk.karton;
    });
  }

  // Panggil fungsi untuk membuat tabel saat halaman dimuat
  window.onload = generateProductTable;
