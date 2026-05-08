module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "certifications",
    ()=>certifications,
    "education",
    ()=>education,
    "experiences",
    ()=>experiences,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills,
    "stats",
    ()=>stats
]);
const profile = {
    name: "Mochammad Radhi Akbar",
    shortName: "Radhi",
    initials: "RA",
    title: "Frontend Developer & Fullstack Engineer",
    tagline: "Crafting fast, scalable, and beautiful web experiences.",
    bio: "Frontend Developer & Fullstack Engineer with 3+ years of experience building responsive, scalable web applications using React.js, Next.js, and Laravel.",
    location: "Bandung, West Java, Indonesia",
    email: "m.radhiakbar@gmail.com",
    phone: "081312817995",
    github: "https://github.com/mochammadradhi",
    linkedin: "https://linkedin.com/in/mochammadradhi",
    available: true
};
const stats = [
    {
        num: "3+",
        label: "Years Experience"
    },
    {
        num: "15+",
        label: "Projects Delivered"
    },
    {
        num: "100%",
        label: "On-time Delivery"
    },
    {
        num: "2+",
        label: "Years Freelancing"
    }
];
const skills = [
    {
        category: "Frontend",
        items: [
            "React.js",
            "Next.js",
            "Vue.js",
            "Astro.js",
            "TypeScript",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3"
        ]
    },
    {
        category: "Backend",
        items: [
            "Laravel",
            "Node.js",
            "Express.js",
            "CodeIgniter",
            "PHP",
            "RESTful API",
            "WebSocket",
            "Microservices"
        ]
    },
    {
        category: "Styling & UI",
        items: [
            "Tailwind CSS",
            "Bootstrap",
            "Semantic UI",
            "Figma",
            "Framer Motion",
            "shadcn/ui"
        ]
    },
    {
        category: "Database",
        items: [
            "PostgreSQL",
            "MySQL",
            "MongoDB"
        ]
    },
    {
        category: "Tools & DevOps",
        items: [
            "Git",
            "Docker",
            "Nginx",
            "Apache",
            "CI/CD",
            "Webpack",
            "Vite"
        ]
    },
    {
        category: "Mobile & Other",
        items: [
            "React Native (Expo)",
            "Python",
            "Redux",
            "Context API",
            "OAuth2",
            "Payment Gateways"
        ]
    }
];
const experiences = [
    {
        period: "Aug 2024 – Dec 2025",
        role: "Fullstack Developer",
        company: "Freelance / Independent Projects",
        type: "Remote",
        highlights: [
            "Built Lombok Motor Service Platform — motorcycle service management system with inventory, service records, payment integration, and owner dashboard using Node.js, PostgreSQL & React.js",
            "Developed Bina Labs Course V1 & V2 — full rebranding of an educational platform using React.js, Tailwind CSS & Laravel with Facebook Meta Pixel integration",
            "Created 3D Product Preview Website for Airsoft Gun using Three.js and React Three Fiber with immersive scroll-based animations",
            "Built Cabin Villas Scheduling Website with real-time availability and WhatsApp API booking integration"
        ]
    },
    {
        period: "Oct 2022 – Aug 2025",
        role: "Frontend Web Developer",
        company: "Plexus Techdev",
        type: "Bandung, Indonesia",
        highlights: [
            "Designed responsive IP pages for 2 major gaming events → 20% increase in user engagement",
            "Built internal HR attendance & KPI tracking system → 30% productivity improvement",
            "Developed custom CMS → 40% reduction in content update time",
            "Integrated WebSocket for real-time game notifications → 20% engagement boost",
            "Resolved cross-browser issues ensuring 100% compatibility and 20% faster load times",
            "Deployed & maintained multiple websites on Apache & Nginx with SSL/TLS configuration"
        ]
    },
    {
        period: "Jun 2022 – Sep 2022",
        role: "Frontend Engineer Intern",
        company: "Sagara Technology",
        type: "Jakarta, Indonesia",
        highlights: [
            "Led team discussions and project planning, improving productivity by 15%",
            "Designed modular frontend architecture using Atomic Design Methodology → 20% efficiency gain",
            "Explored blockchain and smart contracts for Web 3.0 projects",
            "Conducted requirement analysis improving decision-making accuracy by 25%"
        ]
    }
];
const projects = [
    {
        slug: "museum-itb",
        title: "Museum ITB Website",
        tags: [
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Redux",
            "Tailwind CSS",
            "Payment Gateway",
            "Websocket",
            "CMS"
        ],
        shortDesc: "Full-stack development of a comprehensive digital ecosystem for the official ITB Museum, bridging educational storytelling, interactive exhibits, and commercial services.",
        year: "2026",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        color: "from-orange-50 to-amber-100",
        category: "Fullstack Web App",
        duration: "Jan 2026 – Feb 2026",
        role: "Fullstack Developer",
        overview: "Membangun ekosistem digital menyeluruh untuk Museum ITB yang menggabungkan edukasi, pameran interaktif, dan layanan komersial. Sistem ini dirancang untuk menangani trafik tinggi dan kebutuhan SEO yang kuat menggunakan Next.js.",
        challenges: "Menghubungkan alur ticketing yang kompleks, manajemen inventaris toko souvenir, dan arsip museum yang interaktif ke dalam satu platform yang performan dan mudah diakses oleh berbagai kalangan usia.",
        solution: "Menggunakan Next.js dengan Server-Side Rendering (SSR) untuk visibilitas SEO koleksi museum. Di sisi backend, Node.js digunakan untuk menangani konkurensi tinggi pada sistem booking tiket dan transaksi retail.",
        features: [
            "Custom booking engine dengan real-time slot management",
            "Digital ticket generation & secure validation",
            "Interactive modules untuk digital walkthrough arsip museum",
            "E-commerce platform untuk merchandise museum",
            "State management menggunakan Redux untuk keranjang belanja & tiket",
            "Optimasi SEO melalui Server-Side Rendering (SSR)"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        ]
    },
    {
        slug: "mywishlist-account",
        title: "Mywishlist Personal Shopper",
        tags: [
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Payment Gateway",
            "Shipping API",
            "Tailwind CSS",
            "Mobile First",
            "CMS"
        ],
        shortDesc: "End-to-end development of a high-performance C2C marketplace specialized in personal shopping services (Jasa Titip).",
        year: "2026",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        color: "from-orange-50 to-amber-100",
        category: "Fullstack Web App",
        duration: "Jan 2026 – Feb 2026",
        role: "Fullstack Developer",
        overview: "Sebuah platform marketplace C2C khusus untuk layanan Jasa Titip (Jastip). Fokus utama adalah memberikan pengalaman 'shop on the go' yang lancar bagi traveler dan pembeli.",
        challenges: "Membangun kepercayaan antara pembeli dan personal shopper melalui sistem pelacakan order yang transparan serta memastikan platform tetap cepat meskipun banyak unggahan gambar dari pengguna.",
        solution: "Implementasi Incremental Static Regeneration (ISR) untuk katalog produk agar loading cepat namun data tetap update. Desain diprioritaskan untuk mobile-first guna mendukung penggunaan saat traveler berada di lokasi belanja.",
        features: [
            "Request Item feature (upload gambar & spesifikasi budget)",
            "Intuitive catalog system untuk listing barang luar negeri",
            "Secure payment & order tracking system",
            "SSR & ISR untuk performa maksimal dan SEO",
            "Mobile-optimized interface untuk penggunaan on-the-go",
            "Communication layer yang efisien antara frontend dan backend"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        ]
    },
    {
        slug: "lombok-motor-service",
        title: "Lombok Motor POS System",
        tags: [
            "React.js",
            "Node.js",
            "PostgreSQL",
            "Tailwind CSS",
            "CMS"
        ],
        shortDesc: "End-to-end development of a specialized Point of Sale (POS) and management system tailored for motorcycle workshop operations.",
        year: "2025",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        color: "from-orange-50 to-amber-100",
        category: "Fullstack Web App",
        duration: "Aug 2025 – Dec 2025",
        role: "Fullstack Developer",
        overview: "Sistem POS dan manajemen internal yang dirancang khusus untuk operasional bengkel motor, mencakup manajemen servis, inventaris spare part, hingga laporan keuangan harian.",
        challenges: "Workshop memerlukan akurasi stok yang ketat dan integrasi perangkat keras seperti printer thermal untuk cetak struk secara instan di area kerja yang sibuk.",
        solution: "Membangun SPA (Single Page Application) yang responsif dengan integrasi langsung ke barcode scanner dan printer thermal. Menggunakan Role-Based Access Control untuk membedakan fungsi Owner, Kasir, dan Mekanik.",
        features: [
            "Real-time stock tracking dengan low-stock alerts",
            "Service module untuk penugasan mekanik & tracking progres",
            "Automated invoicing & revenue reports",
            "Thermal printer integration & barcode scanning",
            "Role-Based Access Control (RBAC)",
            "Full deployment & server management"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        ]
    },
    {
        slug: "3d-gun-viewer",
        title: "3D Gun Viewer Platform",
        tags: [
            "Next.js",
            "Three.js",
            "React Three Fiber",
            "Tailwind CSS",
            "WebGL"
        ],
        shortDesc: "A specialized web-based 3D visualization platform for firearms and tactical equipment, focusing on high-fidelity interactive exploration.",
        year: "2025",
        thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
        color: "from-slate-50 to-blue-100",
        category: "3D / Interactive Web",
        duration: "Nov 2025",
        role: "Frontend Developer",
        overview: "Platform visualisasi 3D berbasis web untuk peralatan taktis. Pengguna dapat melakukan inspeksi mendalam terhadap model 3D dengan performa hardware-accelerated langsung di browser.",
        challenges: "Menampilkan model 3D dengan fidelitas tinggi (format GLTF/GLB) tanpa mengorbankan waktu pemuatan halaman (loading speed) dan memastikan kontrol kamera tetap halus.",
        solution: "Memanfaatkan React Three Fiber (R3F) untuk menjembatani state React dengan WebGL. Mengimplementasikan strategi loading aset yang efisien dan kontrol kamera tingkat lanjut untuk inspeksi detail.",
        features: [
            "Interactive 3D inspection (Rotate, Zoom, Inspect)",
            "Hardware-accelerated performance via WebGL",
            "Dynamic data display (Caliber, Fire rate, Weight)",
            "Efficient asset loading (GLTF/GLB)",
            "Modern UI built with Next.js and Tailwind CSS",
            "Vercel optimized deployment with CI/CD"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1617802690658-1173a812650d?w=800&q=80",
            "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
            "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80"
        ]
    },
    {
        slug: "bina-labs-v2",
        title: "Bina Labs Website V2",
        tags: [
            "React.js",
            "Laravel",
            "Tailwind CSS",
            "Meta Pixel"
        ],
        shortDesc: "Full rebranding of an educational platform with mobile-first responsive UI, Meta Pixel analytics, and Laravel backend integration.",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
        color: "from-blue-50 to-indigo-100",
        category: "Fullstack Web App",
        duration: "Dec 2024 – Jan 2025",
        role: "Fullstack Developer",
        overview: "Membangun ulang platform pendidikan Bina Labs untuk kebutuhan rebranding. Platform ini menyediakan kursus mulai dari studi Islam, tahsin, hingga coding dan bahasa Inggris.",
        challenges: "Mengimplementasikan desain Figma V2 yang kompleks ke dalam kode yang bersih serta mengintegrasikan sistem analitik untuk target audiens pemasaran.",
        solution: "Menggunakan React JS dengan Tailwind CSS untuk kecepatan pengembangan frontend dan Laravel untuk stabilitas backend. Fokus pada desain mobile-first untuk menjangkau audiens pelajar.",
        features: [
            "Implementation of complex Figma V2 designs",
            "Mobile-first design for diverse audience targets",
            "Facebook Meta Pixel analytics integration",
            "Complex add-on features for course management",
            "Collaborative development with UI/UX teams",
            "Deployment on production hosting environments"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
            "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=800&q=80",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
        ]
    },
    {
        slug: "bina-aplikasi-v1",
        title: "Bina Aplikasi V1",
        tags: [
            "React.js",
            "Laravel",
            "Tailwind CSS",
            "MySQL"
        ],
        shortDesc: "Development of the initial version of Bina Aplikasi, an educational platform for Islamic and English courses.",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
        color: "from-blue-50 to-indigo-100",
        category: "Fullstack Web App",
        duration: "Aug 2024 – Oct 2024",
        role: "Fullstack Developer",
        overview: "Membangun versi pertama (V1) dari platform kursus pendidikan Bina Aplikasi. Proyek ini mencakup pengembangan sistem dari awal, mulai dari perancangan database hingga implementasi desain menjadi platform yang fungsional.",
        challenges: "Menyusun arsitektur database yang fleksibel untuk berbagai jenis kursus (Agama dan Bahasa Inggris) serta memastikan proses deployment ke server hosting berjalan lancar.",
        solution: "Menggunakan Laravel sebagai backend yang stabil untuk manajemen data dan React JS untuk antarmuka pengguna yang dinamis. Saya juga bertanggung jawab penuh dalam konfigurasi database di server produksi.",
        features: [
            "Initial platform architecture & database design",
            "Course management for Islamic and English content",
            "End-to-end implementation from UI design",
            "Asset collection and optimization",
            "Full deployment and server setup",
            "Responsive UI with Tailwind CSS"
        ],
        gallery: []
    },
    {
        slug: "internal-company-ips",
        title: "Internal Company IP's",
        tags: [
            "React.js",
            "Tailwind CSS",
            "Frontend"
        ],
        shortDesc: "Landing page showcasing intellectual properties and recent internal company projects.",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        color: "from-gray-50 to-slate-100",
        category: "Frontend Web",
        duration: "Aug 2024",
        role: "Frontend Developer",
        overview: "Mengembangkan landing page khusus untuk menampilkan daftar Kekayaan Intelektual (IP) serta proyek-proyek internal terbaru perusahaan.",
        challenges: "Menerjemahkan desain visual perusahaan ke dalam kode yang bersih dengan fokus pada penyajian portofolio yang profesional.",
        solution: "Implementasi desain pixel-perfect menggunakan React JS dan Tailwind CSS untuk memastikan performa loading yang cepat dan responsivitas maksimal.",
        features: [
            "Portfolio-style showcase for internal projects",
            "Clean and professional UI implementation",
            "Optimized performance for faster content delivery",
            "Responsive layout for desktop and mobile view"
        ],
        gallery: []
    },
    {
        slug: "kelana-boga",
        title: "Kelana Boga Landing Page",
        tags: [
            "React.js",
            "Tailwind CSS",
            "Educational"
        ],
        shortDesc: "Educational landing page about traditional Indonesian cuisine games.",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        color: "from-orange-50 to-red-100",
        category: "Frontend Web",
        duration: "Mar 2024",
        role: "Frontend Developer",
        overview: "Pembuatan landing page edukasi yang memperkenalkan permainan bertema kuliner tradisional Indonesia.",
        challenges: "Menciptakan nuansa visual yang menarik dan edukatif untuk audiens yang ingin mengenal lebih dalam tentang warisan kuliner lokal.",
        solution: "Menggunakan React JS untuk komponen yang reusable dan Tailwind CSS untuk styling yang cepat dan konsisten dengan desain original.",
        features: [
            "Educational content presentation",
            "Interactive landing page elements",
            "Mobile-friendly design architecture",
            "Custom UI components based on branding"
        ],
        gallery: []
    },
    {
        slug: "mooncake-landing",
        title: "Mooncake Crypto Page",
        tags: [
            "React.js",
            "Tailwind CSS",
            "Crypto"
        ],
        shortDesc: "Modern information landing page for a new cryptocurrency project.",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
        color: "from-purple-50 to-indigo-100",
        category: "Frontend Web",
        duration: "Feb 2024",
        role: "Frontend Developer",
        overview: "Landing page informatif untuk proyek cryptocurrency baru, dirancang untuk memberikan detail teknis dan Roadmap kepada calon pengguna.",
        challenges: "Menyampaikan informasi teknologi blockchain yang kompleks ke dalam tampilan yang sederhana dan modern.",
        solution: "Implementasi desain modern menggunakan React JS. Website dideploy menggunakan Vercel untuk memastikan ketersediaan tinggi.",
        features: [
            "Cryptocurrency information showcase",
            "Modern dark/light aesthetic implementation",
            "Vercel deployment & optimization",
            "Clean call-to-action (CTA) sections"
        ],
        liveUrl: "https://bonzailabs.vercel.app/",
        gallery: []
    },
    {
        slug: "singer-personal-site",
        title: "Singer Personal Website",
        tags: [
            "Astro JS",
            "Tailwind CSS",
            "Personal"
        ],
        shortDesc: "A personal website for a singer, built using Astro JS for performance optimization.",
        year: "2023",
        thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80",
        color: "from-pink-50 to-rose-100",
        category: "Frontend Web",
        duration: "Dec 2023",
        role: "Frontend Developer",
        overview: "Proyek eksplorasi menggunakan Astro JS untuk membangun landing page personal seorang penyanyi. Fokus utama adalah kecepatan akses dan SEO.",
        challenges: "Mempelajari framework baru (Astro JS) untuk mencapai performa 'zero-JS' pada konten statis.",
        solution: "Menerapkan konsep Islands Architecture dari Astro JS untuk memisahkan bagian statis dan interaktif, memastikan situs tetap ringan.",
        features: [
            "Exploration of Astro JS framework",
            "Ultra-fast static content delivery",
            "Minimalist and elegant UI for artist profile",
            "Responsive styling with Tailwind CSS"
        ],
        gallery: []
    },
    {
        slug: "martial-arts-dance",
        title: "Arts & Dance Landing Page",
        tags: [
            "Astro JS",
            "Tailwind CSS",
            "Cultural"
        ],
        shortDesc: "Educational landing page dedicated to traditional Indonesian martial arts and dance.",
        year: "2023",
        thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
        color: "from-amber-50 to-orange-100",
        category: "Frontend Web",
        duration: "Dec 2023 – Jan 2024",
        role: "Frontend Developer",
        overview: "Landing page edukatif yang membahas tentang seni bela diri tradisional dan tarian daerah Indonesia.",
        challenges: "Menampilkan banyak aset visual (foto/video) tanpa membebani performa website.",
        solution: "Menggunakan Astro JS untuk mengoptimalkan pengiriman aset statis dan Tailwind CSS untuk tata letak yang fleksibel di berbagai ukuran layar.",
        features: [
            "Static site generation for cultural education",
            "Optimized asset loading for visual content",
            "Rich cultural information layout",
            "Clean and accessible typography"
        ],
        gallery: []
    },
    {
        slug: "horror-game-cms",
        title: "Horror Game CMS",
        tags: [
            "React.js",
            "Tailwind CSS",
            "REST API",
            "CMS"
        ],
        shortDesc: "Custom Content Management System designed to manage lore, characters, and assets for an upcoming horror game.",
        year: "2023",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
        color: "from-red-950 to-zinc-900",
        category: "Fullstack / CMS",
        duration: "Nov 2023 – Dec 2023",
        role: "Frontend Developer",
        overview: "Membangun sistem manajemen konten (CMS) internal untuk tim pengembang game horor. Sistem ini memungkinkan editor untuk mengelola informasi game, update berkala, dan aset media secara terpusat.",
        challenges: "Mengintegrasikan UI yang kompleks dengan API internal perusahaan serta memastikan alur kerja manajemen konten tetap efisien bagi tim operasional.",
        solution: "Implementasi dashboard admin menggunakan React JS dan Tailwind CSS. Fokus utama adalah pada integrasi API yang aman dan manajemen state yang bersih untuk menangani data konten yang besar.",
        features: [
            "Custom internal content dashboard",
            "API-driven data management",
            "Role-based content editing flow",
            "Media asset management integration",
            "Responsive admin interface"
        ],
        gallery: []
    },
    {
        slug: "alterlife-server",
        title: "Alterlife Server Website",
        tags: [
            "PHP",
            "MySQL",
            "Fullstack",
            "Redesign"
        ],
        shortDesc: "Full-stack development and maintenance of a community-driven server website, focusing on content management and periodic updates.",
        year: "2022",
        thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        color: "from-blue-100 to-indigo-200",
        category: "Fullstack Web App",
        duration: "Jan 2021 – Jan 2022",
        role: "Fullstack Developer",
        overview: "Bertanggung jawab penuh atas pengembangan dan pemeliharaan website komunitas Alterlife. Proyek ini mencakup perancangan ulang (redesign) antarmuka dan penambahan fitur-fitur baru sesuai kebutuhan komunitas.",
        challenges: "Menjaga stabilitas website selama setahun penuh dan mengelola pembaruan konten bulanan secara berkala tanpa menyebabkan downtime.",
        solution: "Membangun sistem full-stack berbasis PHP dan MySQL. Saya menerapkan siklus pemeliharaan rutin serta melakukan optimalisasi kode pada bagian backend untuk performa yang lebih stabil.",
        features: [
            "Full-stack PHP/MySQL architecture",
            "Complete UI/UX redesign implementation",
            "Monthly periodic maintenance & updates",
            "Content editing & management system",
            "Community-focused feature integration"
        ],
        gallery: []
    },
    {
        slug: "clothing-brand-profile",
        title: "Clothing Brand Company Profile",
        tags: [
            "Laravel",
            "Bootstrap",
            "Unsplash API",
            "Fullstack"
        ],
        shortDesc: "Professional company profile for a clothing brand featuring dynamic product galleries and API-driven imagery.",
        year: "2021",
        thumbnail: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
        color: "from-stone-100 to-amber-200",
        category: "Fullstack Web App",
        duration: "Sep 2021 – Dec 2021",
        role: "Fullstack Developer",
        overview: "Membangun website profil perusahaan untuk brand pakaian. Proyek ini mencakup desain dari awal hingga implementasi sistem backend yang mampu mengelola katalog produk secara dinamis.",
        challenges: "Menyediakan data demo yang terlihat nyata (realistic) dalam jumlah banyak untuk pengujian tampilan katalog produk.",
        solution: "Menggunakan Laravel dengan fitur Faker Seeding untuk menghasilkan ribuan data dummy. Saya juga mengintegrasikan API Unsplash untuk mendapatkan aset gambar berkualitas tinggi secara otomatis ke dalam platform.",
        features: [
            "Laravel-based full-stack architecture",
            "Bootstrap responsive styling",
            "Unsplash API integration for imagery",
            "Data sorting & filtering using Laravel Faker",
            "Dynamic product catalog display"
        ],
        gallery: []
    },
    {
        slug: "music-store-platform",
        title: "Music Store System",
        tags: [
            "PHP Native",
            "Semantic UI",
            "MySQL",
            "Database Design"
        ],
        shortDesc: "Full-stack e-commerce system for musical instruments, featuring a structured database and modern UI components.",
        year: "2020",
        thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
        color: "from-teal-50 to-cyan-100",
        category: "Fullstack Web App",
        duration: "Jan 2020 – May 2020",
        role: "Fullstack Developer",
        overview: "Salah satu proyek awal saya dalam membangun sistem toko musik full-stack. Proyek ini mencakup perancangan skema database relasional dan antarmuka belanja yang interaktif.",
        challenges: "Membangun logika belanja (keranjang/transaksi) dari nol menggunakan PHP native tanpa bantuan framework backend.",
        solution: "Fokus pada perancangan database MySQL yang efisien di sisi server dan menggunakan Semantic UI untuk mempercepat pengembangan antarmuka yang bersih dan konsisten.",
        features: [
            "Native PHP backend logic",
            "Semantic UI framework implementation",
            "Structured SQL database design",
            "Product asset management",
            "Shopping cart & transaction flow"
        ],
        gallery: []
    }
];
const education = {
    degree: "Bachelor of Informatics Engineering",
    school: "Pasundan University",
    location: "Bandung, Indonesia",
    period: "Aug 2019 – Jul 2023",
    gpa: "3.31 / 4.00",
    courses: [
        "Information System",
        "Web Development (Front End)",
        "UI/UX"
    ]
};
const certifications = [
    "WordPress Pro Course Batch 19 — Niagahoster",
    "Front End Development with ReactJS and Bootstrap — Udemy",
    "Workshop Frontend Fundamental — Alterra Academy"
];
}),
"[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((p)=>({
            slug: p.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params; // Unwrapping the promise
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === slug);
    if (!project) return {
        title: "Not Found"
    };
    return {
        title: `${project.title} — Radhi Akbar`,
        description: project.shortDesc
    };
}
async function ProjectDetailPage({ params }) {
    const { slug } = await params; // Unwrapping the promise
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === slug);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const currentIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].findIndex((p)=>p.slug === slug);
    const prev = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"][currentIndex - 1] ?? null;
    const next = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"][currentIndex + 1] ?? null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#F7F5F2]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-[#E2DDD8] bg-white/80 backdrop-blur-sm sticky top-0 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6 lg:px-8 h-14 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm text-[#5C5A56] hover:text-[#2A5C8A] transition-colors flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M19 12H5M12 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                "Home"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#E2DDD8]",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/projects",
                            className: "text-sm text-[#5C5A56] hover:text-[#2A5C8A] transition-colors",
                            children: "Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#E2DDD8]",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-[#16130F] font-medium truncate",
                            children: project.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[40vh] md:h-[50vh] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: project.thumbnail,
                        alt: project.title,
                        fill: true,
                        priority: true,
                        className: "object-cover",
                        sizes: "100vw"
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-[#16130F]/70 via-[#16130F]/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-6xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-3",
                                children: project.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.68rem] font-semibold uppercase tracking-wider bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-full",
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-[clamp(1.8rem,4vw,3rem)] text-white leading-tight tracking-tight",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 lg:px-8 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-[1fr_300px] gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                                children: "Overview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#5C5A56] leading-relaxed text-[0.95rem]",
                                                children: project.overview
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                                children: "The Challenge"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#5C5A56] leading-relaxed text-[0.95rem]",
                                                children: project.challenges
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                                children: "The Solution"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#5C5A56] leading-relaxed text-[0.95rem]",
                                                children: project.solution
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                                children: "Key Features"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "grid sm:grid-cols-2 gap-2.5",
                                                children: project.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start gap-2.5 text-[0.88rem] text-[#5C5A56]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-5 h-5 rounded-full bg-[#E6EFF7] flex items-center justify-center shrink-0 mt-0.5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "10",
                                                                    height: "10",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "#2A5C8A",
                                                                    strokeWidth: "3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "20 6 9 17 4 12"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 21
                                                            }, this),
                                                            f
                                                        ]
                                                    }, f, true, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    project.gallery && project.gallery.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                                children: "Gallery"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                                                children: project.gallery.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative aspect-video rounded-lg overflow-hidden border border-[#E2DDD8]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            src: img,
                                                            alt: `${project.title} screenshot ${i + 1}`,
                                                            fill: true,
                                                            className: "object-cover hover:scale-105 transition-transform duration-500",
                                                            sizes: "(max-width:640px) 100vw, 33vw"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-[#E2DDD8] rounded-xl p-6 sticky top-20 space-y-5",
                                    children: [
                                        [
                                            {
                                                label: "Category",
                                                value: project.category
                                            },
                                            {
                                                label: "Duration",
                                                value: project.duration
                                            },
                                            {
                                                label: "Role",
                                                value: project.role
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[0.68rem] uppercase tracking-widest text-[#A8A5A0] mb-1",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-[#16130F]",
                                                        children: item.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item.label, true, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[0.68rem] uppercase tracking-widest text-[#A8A5A0] mb-2",
                                                    children: "Tech Stack"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5",
                                                    children: project.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[0.72rem] bg-[#E6EFF7] text-[#2A5C8A] px-2.5 py-1 rounded-full font-medium",
                                                            children: t
                                                        }, t, false, {
                                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        (project.liveUrl || project.githubUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 border-t border-[#E2DDD8] space-y-2",
                                            children: [
                                                project.liveUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: project.liveUrl,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "flex items-center gap-2 w-full px-4 py-2.5 bg-[#2A5C8A] text-white text-sm font-medium rounded-sm hover:bg-[#1E4268] transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "15 3 21 3 21 9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "10",
                                                                    y1: "14",
                                                                    x2: "21",
                                                                    y2: "3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Live Demo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 21
                                                }, this),
                                                project.githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: project.githubUrl,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "flex items-center gap-2 w-full px-4 py-2.5 border border-[#E2DDD8] text-[#16130F] text-sm font-medium rounded-sm hover:border-[#2A5C8A] hover:text-[#2A5C8A] transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 23
                                                        }, this),
                                                        "GitHub Repo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 border-t border-[#E2DDD8]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[0.78rem] text-[#A8A5A0] mb-3",
                                                    children: "Interested in working together?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/#contact",
                                                    className: "flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#16130F] text-white text-sm font-medium rounded-sm hover:bg-[#2A5C8A] transition-colors",
                                                    children: "Get in Touch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 pt-10 border-t border-[#E2DDD8] grid grid-cols-2 gap-4",
                        children: [
                            prev ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/projects/${prev.slug}`,
                                className: "group flex flex-col gap-1 p-4 bg-white border border-[#E2DDD8] rounded-xl hover:border-[#2A5C8A]/40 hover:shadow-md transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.68rem] uppercase tracking-widest text-[#A8A5A0] flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "10",
                                                height: "10",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 12H5M12 19l-7-7 7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 17
                                            }, this),
                                            "Previous"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display text-[0.95rem] text-[#16130F] group-hover:text-[#2A5C8A] transition-colors line-clamp-1",
                                        children: prev.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this),
                            next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/projects/${next.slug}`,
                                className: "group flex flex-col gap-1 p-4 bg-white border border-[#E2DDD8] rounded-xl hover:border-[#2A5C8A]/40 hover:shadow-md transition-all text-right ml-auto w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.68rem] uppercase tracking-widest text-[#A8A5A0] flex items-center gap-1 justify-end",
                                        children: [
                                            "Next",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "10",
                                                height: "10",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 12h14M12 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display text-[0.95rem] text-[#16130F] group-hover:text-[#2A5C8A] transition-colors line-clamp-1",
                                        children: next.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projects/[slug]/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function SectionLabel({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: "font-display text-[1.1rem] text-[#16130F] mb-3 flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block w-4 h-px bg-[#2A5C8A]"
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projects/[slug]/page.tsx",
        lineNumber: 333,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__11hdznl._.js.map