'use strict';

window.LANDING_CONFIG = {
  brand: {
    name: 'CAWINE',
    tagline: 'Coffee Wine',
    logo: 'assets/img/logo.png'
  },

  site: {
    title: 'CAWINE - Coffee Wine Premium',
    description: 'Landing page Cawine untuk produk coffee wine premium, promo, testimoni, lokasi, dan pemesanan via WhatsApp.',
    whatsappNumber: '6289529044377',
    whatsappMessage: 'Halo Admin Cawine, saya ingin bertanya tentang produk Coffee Wine.',
    instagramUrl: 'https://www.instagram.com/winecoffeepasuruan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    tiktokUrl: 'https://www.tiktok.com/@cawine.winecoffee',
    mapUrl: 'https://www.google.com/maps?q=-7.774577,112.746460',
    mapEmbedUrl: 'https://www.google.com/maps?q=-7.774577,112.746460&hl=id&z=17&output=embed'
  },

  business: {
    openText: 'Setiap hari 09.00 sampai 21.00',
    closedText: 'Buka lagi pukul 09.00.',
    openUntilText: 'Buka sampai pukul 21.00.',
    schedule: [
      { day: 0, open: '09:00', close: '21:00' },
      { day: 1, open: '09:00', close: '21:00' },
      { day: 2, open: '09:00', close: '21:00' },
      { day: 3, open: '09:00', close: '21:00' },
      { day: 4, open: '09:00', close: '21:00' },
      { day: 5, open: '09:00', close: '21:00' },
      { day: 6, open: '09:00', close: '21:00' }
    ]
  },

  navigation: [
    { label: 'Home', target: '#home' },
    { label: 'About', target: '#about' },
    { label: 'Product', target: '#product' },
    { label: 'Promo', target: '#promo' },
    { label: 'Gallery', target: '#gallery' },
    { label: 'Contact', target: '#contact' }
  ],

  footerNavigation: [
    { label: 'About', target: '#about' },
    { label: 'Product', target: '#product' },
    { label: 'Promo', target: '#promo' },
    { label: 'FAQ', target: '#faq' }
  ],

  hero: {
    eyebrow: 'Premium Coffee Blend',
    title: 'CAWINE',
    subtitle: 'Coffee Wine',
    description: 'Pengalaman sempurna kopi premium bernuansa elegan dengan sensasi rasa wine yang khas dan berkelas.',
    primaryLabel: 'Explore Now',
    secondaryLabel: 'Hubungi Admin'
  },

  vision: {
    title: 'VISI',
    description: 'Menghadirkan pengalaman menikmati kopi premium dengan sentuhan rasa elegan untuk memaksimalkan setiap suasana.'
  },

  mission: {
    title: 'MISI',
    items: [
      'Mengembangkan produk kopi berstandar internasional.',
      'Menciptakan pengalaman minum kopi yang terasa mewah.',
      'Mengutamakan kualitas biji kopi terbaik.',
      'Menghadirkan inovasi rasa yang berkelas.'
    ]
  },

  about: {
    eyebrow: 'Tentang Cawine',
    title: 'Coffee wine premium untuk suasana yang lebih elegan',
    paragraphs: [
      'Cawine menghadirkan kopi dengan karakter rasa khas yang memadukan aroma kopi premium dan sensasi elegan layaknya wine. Produk ini dibuat untuk pelanggan yang ingin menikmati kopi dengan pengalaman berbeda.',
      'Template ini tetap menjaga konsep visual gelap, mewah, dan fokus pada produk. Struktur konten sudah dibuat lengkap agar mudah dipakai ulang untuk bisnis lain.'
    ]
  },

  benefits: {
    eyebrow: 'Benefit',
    title: 'Keunggulan yang membuat Cawine berbeda',
    description: 'Bagian ini membantu calon pelanggan memahami nilai utama produk sebelum membeli.',
    items: [
      {
        icon: '🍃',
        title: 'Biji Kopi Premium',
        description: 'Bahan dipilih untuk menjaga kualitas aroma, rasa, dan pengalaman minum.'
      },
      {
        icon: '🌿',
        title: 'Rasa Inovatif',
        description: 'Karakter blending menghadirkan sentuhan wine yang khas dan elegan.'
      },
      {
        icon: '✔',
        title: 'Quality Check',
        description: 'Produk disiapkan dengan kontrol kualitas sebelum sampai ke pelanggan.'
      },
      {
        icon: '🎁',
        title: 'Reward Berkala',
        description: 'Program loyalitas dapat digunakan untuk pelanggan yang rutin membeli.'
      }
    ]
  },

  products: {
    eyebrow: 'Product',
    title: 'Pilihan Cawine yang siap dipesan',
    description: 'Pilih varian produk, cek harga, lalu pesan langsung melalui WhatsApp.',
    allLabel: 'Semua',
    moreLabel: 'Pesan via WhatsApp',
    categories: ['Coffee Wine', 'Robusta', 'Arabica'],
    items: [
      {
        name: 'Blend Wine Signature',
        category: 'Coffee Wine',
        oldPrice: 'Rp 110.900',
        price: 'Rp 99.000',
        image: 'assets/img/sampel.png',
        description: 'Varian signature dengan karakter rasa wine yang elegan.'
      },
      {
        name: 'Robusta Wine Medium',
        category: 'Robusta',
        oldPrice: 'Rp 105.000',
        price: 'Rp 89.000',
        image: 'assets/img/sampel.png',
        description: 'Rasa lebih tegas dengan sentuhan wine yang tetap halus.'
      },
      {
        name: 'Arabica Wine Medium',
        category: 'Arabica',
        oldPrice: 'Rp 105.000',
        price: 'Rp 89.000',
        image: 'assets/img/sampel.png',
        description: 'Aroma lembut dengan karakter premium untuk penikmat kopi.'
      },
      {
        name: 'Cawine Trial Pack',
        category: 'Coffee Wine',
        oldPrice: 'Rp 75.000',
        price: 'Rp 65.000',
        image: 'assets/img/sampel.png',
        description: 'Paket coba untuk pelanggan baru yang ingin mengenal rasa Cawine.'
      },
      {
        name: 'Robusta Dark Wine',
        category: 'Robusta',
        oldPrice: 'Rp 115.000',
        price: 'Rp 99.000',
        image: 'assets/img/sampel.png',
        description: 'Karakter lebih bold untuk penikmat rasa kopi yang kuat.'
      },
      {
        name: 'Arabica Elegant Wine',
        category: 'Arabica',
        oldPrice: 'Rp 120.000',
        price: 'Rp 109.000',
        image: 'assets/img/sampel.png',
        description: 'Varian aroma halus untuk pengalaman minum yang lebih ringan.'
      }
    ]
  },

  story: {
    eyebrow: 'Brand Story',
    title: 'Nuansa kopi premium dengan rasa yang punya karakter',
    description: 'Cawine dirancang untuk menciptakan pengalaman minum kopi yang tidak biasa. Visual gelap dan aksen emas dipakai untuk menegaskan kesan premium, tenang, dan elegan.',
    image: 'assets/img/sampel.png',
    tags: ['Premium', 'Elegant', 'Coffee Wine']
  },

  process: {
    eyebrow: 'Cara Pesan',
    title: 'Dari pilih varian sampai pesanan diproses',
    description: 'Alur dibuat ringkas agar calon pelanggan bisa memesan tanpa bingung.',
    items: [
      {
        title: 'Pilih varian',
        description: 'Lihat produk dan tentukan varian yang paling sesuai dengan selera.'
      },
      {
        title: 'Chat admin',
        description: 'Klik tombol beli untuk bertanya stok, detail rasa, dan pengiriman.'
      },
      {
        title: 'Konfirmasi pesanan',
        description: 'Admin akan membantu proses pemesanan sampai produk siap dikirim.'
      }
    ]
  },

  events: {
    eyebrow: 'Promo',
    title: 'Promo dan program Cawine',
    description: 'Bagian ini dapat dipakai untuk promo bulanan, bundling, atau program loyalitas.',
    items: [
      {
        title: 'Bundling Signature',
        date: 'Promo pilihan',
        description: 'Paket bundling untuk pelanggan yang ingin mencoba beberapa varian sekaligus.',
        image: 'assets/img/sampel.png'
      },
      {
        title: 'Reward Customer',
        date: 'Program loyalitas',
        description: 'Program reward dapat digunakan untuk menjaga hubungan dengan pelanggan setia.',
        image: 'assets/img/sampel.png'
      },
      {
        title: 'Pre Order Batch',
        date: 'Stok terbatas',
        description: 'Gunakan bagian ini untuk mengumumkan jadwal pre order atau stok terbatas.',
        image: 'assets/img/sampel.png'
      }
    ]
  },

  gallery: {
    eyebrow: 'Mood Board',
    title: 'Visual premium yang mudah diganti',
    description: 'Gunakan gambar produk, proses produksi, kemasan, atau testimoni pelanggan.',
    items: [
      {
        tag: 'Product',
        title: 'Cawine Signature',
        description: 'Visual utama produk coffee wine premium.',
        image: 'assets/img/sampel.png'
      },
      {
        tag: 'Packaging',
        title: 'Kemasan Premium',
        description: 'Tampilkan detail kemasan untuk membangun kepercayaan.',
        image: 'assets/img/sampel.png'
      },
      {
        tag: 'Process',
        title: 'Quality Check',
        description: 'Tampilkan proses agar brand terasa lebih transparan.',
        image: 'assets/img/sampel.png'
      },
      {
        tag: 'Moment',
        title: 'Coffee Moment',
        description: 'Bangun suasana produk melalui foto lifestyle.',
        image: 'assets/img/sampel.png'
      }
    ]
  },

  testimonials: {
    eyebrow: 'Testimoni',
    title: 'Kata pelanggan Cawine',
    description: 'Isi bagian ini dengan review asli setelah pelanggan memberi izin.',
    items: [
      {
        quote: 'Rasanya unik dan aromanya beda dari kopi biasa. Cocok untuk hadiah juga.',
        name: 'Pelanggan Cawine',
        role: 'Customer',
        initials: 'C'
      },
      {
        quote: 'Kemasan terlihat premium dan adminnya cepat merespons pertanyaan.',
        name: 'Pembeli Online',
        role: 'Repeat order',
        initials: 'P'
      },
      {
        quote: 'Landing page ini membuat produk lebih mudah dipahami oleh calon customer.',
        name: 'Template Review',
        role: 'Reusable section',
        initials: 'T'
      }
    ]
  },

  location: {
    eyebrow: 'Alamat Kami',
    title: 'Temukan Cawine atau pesan online',
    description: '',
    mapLabel: 'Cawine Pasuruan'
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pertanyaan yang sering muncul',
    description: 'Jawaban singkat membantu calon pelanggan sebelum menghubungi admin.',
    items: [
      {
        question: 'Apa itu Coffee Wine?',
        answer: 'Coffee wine adalah kopi dengan karakter rasa dan aroma yang memberi kesan elegan seperti wine, tetapi tetap berbasis kopi.'
      },
      {
        question: 'Apakah produk mengandung alkohol?',
        answer: 'Silakan sesuaikan jawaban ini dengan kondisi produk asli Anda agar informasi tetap akurat.'
      },
      {
        question: 'Bagaimana cara pesan?',
        answer: 'Pilih produk, klik tombol beli, lalu pesan akan diarahkan ke WhatsApp admin.'
      },
      {
        question: 'Apakah bisa kirim luar kota?',
        answer: 'Bisa disesuaikan dengan layanan pengiriman yang tersedia dari admin.'
      }
    ]
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Siap pesan atau tanya produk?',
    description: 'Kirim pesan langsung. Form ini tidak menyimpan data, hanya membuka WhatsApp.',
    submitLabel: 'Kirim ke WhatsApp',
    privacyNote: 'Tidak ada cookie, tidak ada tracking, dan tidak ada penyimpanan data dari form.',
    topics: ['Tanya produk', 'Pesan produk', 'Tanya promo', 'Info lokasi'],
    directLinks: [
      { label: 'Instagram', type: 'instagram' },
      { label: 'TikTok', type: 'tiktok' },
      { label: 'WhatsApp', type: 'whatsapp' },
      { label: 'Google Maps', type: 'map' }
    ]
  },

  footer: {
    description: 'Template landing page kedua dengan konsep premium, gelap, dan mudah diganti untuk berbagai bisnis.'
  }
};
