const produk = [
    {nama: 'Pensil', harga: 2000, stok: 10},
    {nama: 'Buku', harga: 8000, stok: 0},
    {nama: 'Penghapus', harga: 1500, stok: 5},
    ];

const adaStok = produk.filter(p => p.stok > 0).map(p => p.nama);
console.log(adaStok); // ['Pensil', 'Penghapus']

const cariPenghapus = produk.find(p => p.nama === 'Penghapus');
console.log(cariPenghapus); // {nama: 'Penghapus', harga: 1500, stok: 5}

produk.forEach(p => {
    console.log(`${p.nama} - Rp${p.harga}`);
});


//Soal Async
function tunggu(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function jalankanProses() {
    console.log('Mulai');
    await tunggu(1000);
    console.log('Langkah 1');
    await tunggu(1000);
    console.log('Selesai');
}

jalankanProses();

function cekStok(jumlah) {
    return new Promise((resolve, reject) => {
        if (jumlah > 0) {
            resolve('Stok tersedia!');
        } else {
            reject('Stok habis!');
        }
    });
}

async function ujiStok() {
    try {
        const hasil = await cekStok(5); // Coba ganti jadi 0 buat ngetes error
        console.log(hasil);
    } catch (error) {
        console.log('Error:', error);
    }
}

ujiStok();

//Soal 8
const daftarBuku = [
    { judul : 'Laskar Pelangi', harga: 85000, stok: 5, kategori: 'Novel'},
    { judul : 'Filosofi Teras', harga: 98000, stok: 0, kategori: 'Self-Help'},
    { judul : 'Atomic Habits', harga: 120000, stok: 3, kategori: 'Self-Help'},
    { judul : 'Bumi Manusia', harga: 105000, stok: 2, kategori: 'Novel'},
];

const bukuTersedia = daftarBuku.filter(b => b.stok > 0).map(b => b.judul);
console.log("a) Buku yang tersedia:", bukuTersedia);

const totalHarga = daftarBuku.reduce((total, b) => total + b.harga, 0);
console.log("b) Total harga keseluruhan buku:", totalHarga);

console.log("c) Daftar Buku:");
daftarBuku.forEach(b => {
    console.log(`${b.judul} - Rp${b.harga} (Stok: ${b.stok})`);
});

function prosesPembayaran(judulBuku) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const buku = daftarBuku.find(b => b.judul === judulBuku);
            
            if (buku && buku.stok > 0) {
                resolve(`Pembayaran berhasil untuk buku: ${buku.judul}`);
            } else {
                reject("Gagal: Buku tidak tersedia atau stok habis!");
            }
        }, 1500);
    });
}

async function transaksiToko() {
    console.log("\n--- Memulai Transaksi ---");
    
    // Uji kondisi berhasil
    try {
        const hasil1 = await prosesPembayaran('Atomic Habits');
        console.log(hasil1);
    } catch (error) {
        console.log(error);
    }

    // Uji kondisi gagal (stok habis)
    try {
        const hasil2 = await prosesPembayaran('Filosofi Teras');
        console.log(hasil2);
    } catch (error) {
        console.log(error);
    }
}

transaksiToko();