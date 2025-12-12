// scripts.js

// -----------------------------------------------------------
// 1. DATA DUMMY KULINER (Database Simulasi LENGKAP)
// -----------------------------------------------------------
const DATA_KULINER = [
    { 
        id: 1, 
        nama: "Rendang Sapi", 
        daerah: "Sumatera Barat", 
        bahan: ["1 kg Daging Sapi", "1 L Santan kental", "500 ml Santan encer", "5 lembar Daun Jeruk", "1 batang Serai", "Bumbu Halus (Bawang, Cabai, Kunyit, dll.)"], 
        rating: 4.9, 
        waktu: "4 Jam", 
        porsi: "6 Orang",
        kesulitan: "Sulit",
        deskripsi: "Rendang adalah mahakarya kuliner Indonesia. Memasak rendang membutuhkan kesabaran agar bumbu meresap sempurna dan santan mengering menjadi dedak. Tips: Gunakan api kecil setelah mendidih.",
        langkah: [
            "Haluskan semua bumbu halus, campurkan dengan daging sapi dan santan encer. Masak hingga mendidih.",
            "Masukkan santan kental, daun jeruk, dan serai. Kecilkan api dan aduk perlahan.",
            "Masak terus sambil sesekali diaduk agar santan tidak pecah. Proses ini membutuhkan waktu 3-4 jam.",
            "Lanjutkan memasak hingga kuah mengering, bumbu berminyak, dan warna daging menjadi kehitaman (rendang kering). Siap disajikan."
        ]
    },
    { 
        id: 2, 
        nama: "Sate Lilit", 
        daerah: "Bali", 
        bahan: ["500 gr Daging Ikan Cincang", "100 gr Kelapa Parut", "Bumbu Base Genep (Bawang, Cabai, Kencur, Kunyit)", "15 batang Serai"], 
        rating: 4.7, 
        waktu: "45 Menit", 
        porsi: "4 Orang",
        kesulitan: "Sedang",
        deskripsi: "Sate lilit memiliki rasa gurih khas Bali dari bumbu base genep yang aromatik. Batang serai digunakan sebagai tusuk sate, memberikan aroma wangi saat dibakar.",
        langkah: [
            "Campurkan daging ikan cincang, kelapa parut, dan bumbu base genep yang sudah dihaluskan hingga rata dan kalis.",
            "Ambil adonan, lilitkan di batang serai hingga padat dan merata.",
            "Bakar sate di atas bara api atau teflon berapi sedang sambil diolesi sedikit minyak hingga matang dan berwarna kecoklatan. Sajikan dengan sambal matah."
        ]
    },
    { 
        id: 3, 
        nama: "Coto Makassar", 
        daerah: "Sulawesi Selatan", 
        bahan: ["500 gr Daging Sapi", "Jeroan (Paru, Babat)", "Kacang Tanah sangrai", "Beras (untuk Burasa/Ketupat)", "Bumbu Coto (Bawang, Ketumbar, Jintan)"], 
        rating: 4.6, 
        waktu: "2 Jam", 
        porsi: "5 Orang",
        kesulitan: "Sedang",
        deskripsi: "Coto Makassar adalah hidangan sup kaya rempah dengan kuah kental yang berasal dari air rebusan daging dan kacang tanah. Tips: Jangan lupa taburkan irisan daun bawang dan bawang goreng saat menyajikan.",
        langkah: [
            "Rebus daging dan jeroan hingga empuk. Ambil kaldunya.",
            "Haluskan bumbu coto dan kacang tanah, tumis hingga harum.",
            "Masukkan bumbu tumis ke dalam air kaldu, didihkan kembali.",
            "Potong-potong daging dan jeroan, masukkan ke mangkuk, siram dengan kuah coto panas. Santap bersama ketupat dan sambal."
        ]
    },
    { 
        id: 4, 
        nama: "Gudeg Yogyakarta", 
        daerah: "Yogyakarta", 
        bahan: ["1 kg Nangka Muda", "Santan kental", "Daun Jati (untuk warna)", "Gula Merah", "Telur Bebek/Ayam"], 
        rating: 4.5, 
        waktu: "8 Jam", 
        porsi: "10 Orang",
        kesulitan: "Sulit",
        deskripsi: "Gudeg adalah makanan khas Jogja yang manis dan legit. Memasak Gudeg harus lama (njagong) agar nangka muda empuk dan bumbu meresap sempurna. Gudeg paling enak dimakan dengan krecek dan sambal.",
        langkah: [
            "Rebus nangka muda dengan bumbu Gudeg dan daun jati hingga empuk dan berwarna cokelat kemerahan.",
            "Tambahkan santan, gula merah, dan telur. Masak dengan api sangat kecil selama 6-8 jam (atau semalaman) hingga kuah mengering dan bumbu meresap total.",
            "Angkat dan sajikan Gudeg dengan nasi hangat, sambal krecek, dan areh."
        ]
    },
    { 
        id: 5, 
        nama: "Pempek Kapal Selam", 
        daerah: "Sumatera Selatan", 
        bahan: ["500 gr Ikan Tenggiri Giling", "Tepung Sagu", "Telur Ayam", "Bumbu Cuko (Gula Merah, Cuka, Bawang Putih)"], 
        rating: 4.8, 
        waktu: "1 Jam", 
        porsi: "4 Orang",
        kesulitan: "Sedang",
        deskripsi: "Pempek adalah makanan berbahan dasar ikan yang disajikan dengan kuah cuka hitam yang asam, manis, dan pedas. Kapal selam adalah pempek dengan isian telur utuh.",
        langkah: [
            "Campur ikan giling, air, dan sedikit garam hingga rata.",
            "Tambahkan tepung sagu sedikit demi sedikit, uleni sebentar hingga adonan bisa dibentuk.",
            "Ambil adonan, bentuk cekungan seperti kantong, isi dengan telur utuh, tutup rapat.",
            "Rebus pempek dalam air mendidih hingga mengapung. Setelah dingin, goreng hingga kecoklatan. Sajikan dengan cuko, irisan timun, dan mi kuning."
        ]
    },
    { 
        id: 6, 
        nama: "Rawon", 
        daerah: "Jawa Timur", 
        bahan: ["500 gr Daging Sapi", "Kluwek (untuk warna hitam)", "Bumbu Dasar (Bawang, Jahe, Kunyit)", "Tauge Pendek", "Sambal Terasi"], 
        rating: 4.4, 
        waktu: "1.5 Jam", 
        porsi: "4 Orang",
        kesulitan: "Sedang",
        deskripsi: "Rawon adalah sup daging khas Jawa Timur dengan kuah berwarna hitam pekat yang unik, dihasilkan dari bumbu spesial bernama kluwek. Rasanya gurih dan kaya rempah.",
        langkah: [
            "Rebus daging sapi hingga empuk, potong dadu, sisakan air kaldunya.",
            "Haluskan bumbu, termasuk isi kluwek. Tumis hingga harum.",
            "Masukkan bumbu tumis ke dalam air kaldu rebusan daging, didihkan.",
            "Sajikan rawon hangat dengan taburan tauge pendek, sambal terasi, dan telur asin."
        ]
    }
];


// -----------------------------------------------------------
// 2. FUNGSI PENCARIAN & RENDER
// -----------------------------------------------------------

/**
 * Fungsi utilitas untuk membuat nama file gambar dalam format kebab-case.
 * Contoh: "Rendang Sapi" -> "rendang-sapi"
 * @param {string} namaNama 
 * @returns {string}
 */
function toKebabCase(nama) {
    return nama.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
}

function cariKuliner(keyword) {
    const lowerKeyword = keyword.toLowerCase().trim();
    if (lowerKeyword === "") {
        // Tampilkan 3 kuliner pertama sebagai "Populer" jika keyword kosong
        return DATA_KULINER.slice(0, 3);
    }

    return DATA_KULINER.filter(makanan => {
        // Pencarian berdasarkan Nama atau Daerah
        if (makanan.nama.toLowerCase().includes(lowerKeyword) || 
            makanan.daerah.toLowerCase().includes(lowerKeyword)) {
            return true;
        }
        // Pencarian berdasarkan Bahan-bahan
        return makanan.bahan.some(bahan => bahan.toLowerCase().includes(lowerKeyword));
    });
}

function renderResults(results) {
    const container = document.getElementById('featured-culinary');
    const resultsGrid = document.getElementById('search-results-grid');
    
    // Ganti judul section
    if (container) {
        container.querySelector('.section-title').textContent = results.length === DATA_KULINER.length ? '✨ Kuliner Populer Minggu Ini' : 
                                                               results.length > 0 ? `🍜 Hasil Pencarian (${results.length} ditemukan)` :
                                                               '✨ Kuliner Populer Minggu Ini'; // Fallback jika hasil 0
    }
    
    if (resultsGrid) {
        resultsGrid.innerHTML = '';
    } else {
        // Berhenti jika elemen tidak ada (mungkin di halaman detail)
        return;
    }


    if (results.length === 0) {
        resultsGrid.innerHTML = `<p style="text-align: center; grid-column: 1 / -1; padding: 30px; font-size: 1.2em;">
            Maaf, kuliner dengan kata kunci tersebut tidak ditemukan. Coba kata kunci lain!</p>`;
        return;
    }
    
    results.forEach(makanan => {
        const gambarName = toKebabCase(makanan.nama);
        // Menggunakan toKebabCase untuk nama gambar
        const imageSrc = `${gambarName}.webp`;
        // Deskripsi dipotong untuk tampilan card
        const deskripsiSingkat = makanan.deskripsi.substring(0, 100) + '...';

        // START: PERBAIKAN MASALAH UTAMA #1 - HTML Card Statis & Rusak
        const cardHTML = `
            <article class="card">
                <img src="${imageSrc}" alt="${makanan.nama}" onerror="this.onerror=null; this.src='${gambarName}.jpg';">
                <div class="card-content">
                    <h3>${makanan.nama}</h3>
                    <p>${deskripsiSingkat}</p>
                    <div class="card-meta">
                        <span>⭐ ${makanan.rating}/5.0</span>
                        <span>⏱ ${makanan.waktu}</span>
                    </div>
                    <a href="resep-detail.html" class="resep-link" data-id="${makanan.id}">Lihat Resep &raquo;</a> 
                </div>
            </article>
        `;
        // END: PERBAIKAN MASALAH UTAMA #1
        
        resultsGrid.innerHTML += cardHTML;
    });
    
    setupResepLinks();
}


// -----------------------------------------------------------
// 3. FUNGSI TRANSFER DATA RESEP
// -----------------------------------------------------------

function setupResepLinks() {
    document.querySelectorAll('.resep-link').forEach(link => {
        // Hapus event listener lama sebelum menambah yang baru untuk mencegah duplikasi
        link.removeEventListener('click', handleResepClick);
        link.addEventListener('click', handleResepClick);
    });
}

function handleResepClick(e) {
    e.preventDefault();
    const resepId = e.currentTarget.getAttribute('data-id');
    
    localStorage.setItem('selectedResepId', resepId);
    
    // Pindah ke halaman detail resep
    window.location.href = 'resep-detail.html';
}

function loadResepDetail() {
    const resepId = localStorage.getItem('selectedResepId');
    
    const detailNama = document.getElementById('detail-nama');
    if (!detailNama) return; // Keluar jika bukan di halaman yang tepat

    if (!resepId) {
        detailNama.textContent = "Resep Tidak Ditemukan. Silakan kembali ke halaman utama.";
        document.getElementById('detail-daerah').textContent = "";
        return;
    }

    // Menggunakan == untuk perbandingan string dan number (resepId vs item.id)
    const resep = DATA_KULINER.find(item => item.id == resepId); 

    if (!resep) {
        detailNama.textContent = "Resep Tidak Ditemukan.";
        return;
    }

    // START: Perbaikan Pembuatan Image Source (Masalah #2)
    const gambarName = toKebabCase(resep.nama);
    const detailGambar = document.getElementById('detail-gambar');
    if (detailGambar) {
        // Coba .webp, lalu .jpg sebagai fallback
        detailGambar.src = `${gambarName}.webp`; 
        detailGambar.onerror = function() { this.src = `${gambarName}.jpg`; }; 
    }
    // END: Perbaikan Pembuatan Image Source

    // Update Halaman
    const resepTitle = document.getElementById('resep-title');
    if (resepTitle) resepTitle.textContent = `${resep.nama} - Jelajah Kuliner`;

    detailNama.textContent = resep.nama;
    document.getElementById('detail-daerah').textContent = `Asal: ${resep.daerah}`;
    document.getElementById('detail-porsi').textContent = `Porsi: ${resep.porsi}`;
    document.getElementById('detail-waktu').textContent = `Waktu Masak: ${resep.waktu}`;
    document.getElementById('detail-kesulitan').textContent = `Kesulitan: ${resep.kesulitan}`;
    document.getElementById('detail-rating').textContent = `Rating: ${resep.rating} ⭐`;
    document.getElementById('detail-deskripsi').innerHTML = `<p>${resep.deskripsi}</p>`;
    

    // Update Bahan
    const bahanList = document.getElementById('detail-bahan');
    if (bahanList) {
        bahanList.innerHTML = '';
        resep.bahan.forEach(bahan => {
            const li = document.createElement('li');
            li.textContent = bahan;
            bahanList.appendChild(li);
        });
    }

    // Update Langkah
    const langkahList = document.getElementById('detail-langkah');
    if (langkahList) {
        langkahList.innerHTML = '';
        resep.langkah.forEach((langkah, index) => {
            const li = document.createElement('li');
            li.textContent = langkah;
            langkahList.appendChild(li);
        });
    }
}


// -----------------------------------------------------------
// 4. INITIALIZATION
// -----------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // Tentukan apakah ini halaman index.html atau resep-detail.html
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    const isDetailPage = window.location.pathname.endsWith('resep-detail.html');

    if (isIndexPage) {
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');

        const handleSearch = () => {
            const keyword = searchInput.value;
            const hasil = cariKuliner(keyword);
            renderResults(hasil);
            document.getElementById('featured-culinary').scrollIntoView({ behavior: 'smooth' });
        };

        if (searchButton && searchInput) {
            searchButton.addEventListener('click', handleSearch);

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            });
        }
        
        // Tampilkan 3 kuliner populer (atau semua) saat halaman dimuat
        renderResults(cariKuliner("")); 
        
    } 
    // Logika untuk resep-detail.html (Memuat Data)
    else if (isDetailPage) {
        loadResepDetail();
    }
});