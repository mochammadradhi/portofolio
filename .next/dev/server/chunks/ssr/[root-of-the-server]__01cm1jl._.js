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
        thumbnail: "/porto/museum1.png",
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
            "/porto/museum1.png",
            "/porto/museum2.png",
            "/porto/museum3.png"
        ],
        liveUrl: "https://museum.itb.ac.id"
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
        thumbnail: "/porto/mywishlist.png",
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
            "/porto/mywishlist.png",
            "/porto/mywishlist2.png"
        ],
        liveUrl: "https://mywishlistaccount.com"
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
        thumbnail: "/porto/lombok1.png",
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
            "/porto/lombok1.png",
            "/porto/lombok2.png",
            "/porto/lombok3.png"
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
        thumbnail: "/porto/gunviewer1.png",
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
            "/porto/gunviewer1.png",
            "/porto/gunviewer2.png",
            "/porto/gunviewer3.png"
        ],
        liveUrl: "https://3d-gun-viewer.vercel.app"
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
        thumbnail: "/porto/binalabs1.png",
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
            "/porto/binalabs1.png",
            "/porto/binalabs2.png",
            "/porto/binalabs3.png"
        ],
        liveUrl: "https://binalabs.id"
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
        thumbnail: "/porto/bina1.png",
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
        gallery: [
            "/porto/bina1.png",
            "/porto/bina2.png"
        ],
        liveUrl: "https://bina-aplikasi.vercel.app/"
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
        thumbnail: "/porto/plexus1.png",
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
        gallery: [
            "/porto/plexus1.png",
            "/porto/plexus2.png"
        ],
        liveUrl: "https://plexus.id/launcher-min"
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
        thumbnail: "/porto/kelanaboga.jpg",
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
        gallery: [
            "/porto/kelanaboga.jpg"
        ],
        liveUrl: "https://sgp-tenun.vercel.app/"
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
        thumbnail: "/porto/bonzai.jpg",
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
        gallery: [
            "/porto/bonnzai.jpg"
        ]
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
        thumbnail: "/porto/fabula.jpg",
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
        gallery: [
            "/porto/fabula.jpg"
        ]
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
        thumbnail: "/porto/4d.jpg",
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
        gallery: [
            "/porto/4d.jpg"
        ]
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
        thumbnail: "/porto/alterlife.jpg",
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
        gallery: [
            "/porto/alterlife.jpg",
            "/porto/alterlife2.jpg"
        ]
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
        thumbnail: "/porto/clothing1.jpg",
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
        gallery: [
            "/porto/clothing1.jpg",
            "/porto/clothing2.jpg",
            "/porto/clothing3.jpg"
        ]
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
        thumbnail: "/porto/music1.jpg",
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
        gallery: [
            "/porto/music1.jpg",
            "/porto/music2.jpg",
            "/porto/music3.jpg",
            "/porto/music4.jpg",
            "/porto/music5.jpg"
        ]
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
"[project]/src/app/projects/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "Projects — Mochammad Radhi Akbar",
    description: "All projects built by Radhi — fullstack web apps, 3D experiences, CMS, and more."
};
function ProjectsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#F7F5F2]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-[#E2DDD8] bg-white/80 backdrop-blur-sm sticky top-0 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6 lg:px-8 h-14 flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-flex items-center gap-1.5 text-sm text-[#5C5A56] hover:text-[#2A5C8A] transition-colors",
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
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                "Back to Home"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/page.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#E2DDD8]",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/page.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-[#16130F] font-medium",
                            children: "All Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 lg:px-8 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block w-5 h-px bg-[#2A5C8A]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[#2A5C8A]",
                                        children: "All Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-tight tracking-tight text-[#16130F]",
                                children: "Work I've Built"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-[#5C5A56] text-sm max-w-lg leading-relaxed",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].length,
                                    " projects across fullstack apps, interactive 3D experiences, CMS platforms, and landing pages."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/projects/${p.slug}`,
                                className: "group bg-white border border-[#E2DDD8] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-48 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: p.thumbnail,
                                                alt: p.title,
                                                fill: true,
                                                className: "object-cover group-hover:scale-105 transition-transform duration-500",
                                                sizes: "(max-width:768px) 100vw, 33vw"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-[#16130F]/10 group-hover:bg-[#16130F]/0 transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-3 right-3 text-[0.68rem] font-semibold bg-white/90 text-[#16130F] px-2.5 py-1 rounded-full",
                                                children: p.year
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 flex flex-col flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5 mb-3",
                                                children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[0.65rem] font-semibold uppercase tracking-wider bg-[#E6EFF7] text-[#2A5C8A] px-2 py-0.5 rounded",
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/src/app/projects/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-display text-[1.05rem] text-[#16130F] mb-2 leading-snug group-hover:text-[#2A5C8A] transition-colors",
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[0.83rem] text-[#5C5A56] leading-relaxed flex-1 line-clamp-2",
                                                children: p.shortDesc
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-4 border-t border-[#E2DDD8] flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[0.72rem] text-[#A8A5A0]",
                                                        children: p.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 text-[0.78rem] font-medium text-[#2A5C8A]",
                                                        children: [
                                                            "Details",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "11",
                                                                height: "11",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                className: "group-hover:translate-x-0.5 transition-transform",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M5 12h14M12 5l7 7-7 7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/projects/page.tsx",
                                                                    lineNumber: 91,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/page.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/projects/page.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, p.slug, true, {
                                fileName: "[project]/src/app/projects/page.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/projects/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projects/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/projects/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01cm1jl._.js.map