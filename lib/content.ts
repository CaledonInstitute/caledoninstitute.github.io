export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];
export type Page = "home" | "about" | "members";

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function pageUrl(locale: Locale, page: Page = "home") {
  return `/${locale}/${page === "home" ? "" : `${page}/`}`;
}

const en = {
  nav: { home: "Home", about: "About", members: "Members" },
  navigation: "Main navigation",
  menu: "Menu",
  language: "Language",
  skip: "Skip to content",
  forum: "Forum",
  forumCta: "Visit the forum",
  githubProfile: "GitHub profile",
  aboutLink: "Get to know us",
  membersLink: "Meet the people",
  photoAlt: "Sunlight falls through leafy trees beneath a softly clouded sky.",
  photoCaption: "The view that inspired our identity.",
  home: {
    title: "A place to ask, experiment, and learn together.",
    intro:
      "We’re Caledon Institute, an independent collective exploring vulnerability research and artificial intelligence. A little curiosity is a good place to start.",
    fieldsTitle: "Two fields. Plenty to explore.",
    fieldsIntro:
      "We’re at the beginning of our journey. These are the questions drawing us in.",
    peopleTitle: "Curiosity is better shared.",
    peopleBody:
      "Behind Caledon are people with questions of their own. Get to know the members helping this collective take shape.",
  },
  fields: {
    security: {
      title: "Vulnerability research",
      question: "What happens when a system behaves in unexpected ways?",
      body: "Understanding how software works, where its assumptions break, and what those discoveries can teach us about building safer systems.",
    },
    ai: {
      title: "Artificial intelligence",
      question: "What can we learn by building with intelligence?",
      body: "Exploring how intelligent systems work, what they can do, and where their limits lead to new questions and experiments.",
    },
  },
  about: {
    title: "Good questions need room to grow.",
    intro:
      "Caledon Institute is an independent research collective in its early days, bringing together curiosity about software security and artificial intelligence.",
    storyTitle: "Starting small. Staying curious.",
    story:
      "We’re still taking shape. For now, Caledon is a place to connect around questions, explore ideas, and find our direction together. Our interests span vulnerability research and AI, with room for both to develop in their own way.",
    welcome:
      "You don’t need to arrive with all the answers. If you’re new to these subjects, your questions belong here too.",
    approachTitle: "How we want to explore",
    principles: [
      {
        title: "Make room for questions",
        body: "Start with what you’re curious about. Understanding begins with being able to ask.",
      },
      {
        title: "Learn through experiments",
        body: "Try an idea, look closely at what happens, and let the result guide the next question.",
      },
      {
        title: "Find a direction together",
        body: "Let shared interests and the people involved shape what Caledon becomes.",
      },
    ],
    nextTitle: "Bring your questions.",
    nextBody: "Ask questions, share experiments, and explore ideas together on our official forum.",
  },
  members: {
    title: "The people behind the questions.",
    intro:
      "Meet the people helping Caledon take shape. Different perspectives, with space to explore together.",
    note: "This list includes publicly visible members of our GitHub organization.",
    nextTitle: "Join the conversation.",
    nextBody: "Meet the community on our official forum and share what you’re exploring.",
  },
  footer: "An independent collective, growing through curiosity.",
  location: "Based in Bandar Lampung, ID. Open to questions.",
  meta: {
    home: {
      title: "Caledon Institute — A place to learn together",
      description:
        "An independent collective exploring vulnerability research and artificial intelligence. Get to know Caledon Institute and the people behind it.",
    },
    about: {
      title: "About — Caledon Institute",
      description:
        "Get to know Caledon Institute, an independent collective taking its first steps in vulnerability research and artificial intelligence.",
    },
    members: {
      title: "Members — Caledon Institute",
      description:
        "Meet the publicly listed GitHub members helping Caledon Institute take shape.",
    },
  },
};

// Keep the same keys in both dictionaries so every page is fully translated.
export type Dictionary = typeof en;
const id: Dictionary = {
  nav: { home: "Beranda", about: "Tentang", members: "Anggota" },
  navigation: "Navigasi utama",
  menu: "Menu",
  language: "Bahasa",
  skip: "Lewati ke konten",
  forum: "Forum",
  forumCta: "Buka forum",
  githubProfile: "Profil GitHub",
  aboutLink: "Kenali kami",
  membersLink: "Kenali anggotanya",
  photoAlt:
    "Cahaya matahari menembus pepohonan di bawah langit dengan awan yang lembut.",
  photoCaption: "Pemandangan yang menginspirasi identitas kami.",
  home: {
    title: "Tempat untuk bertanya, mencoba, dan belajar bersama.",
    intro:
      "Kami Caledon Institute, kolektif independen yang mengeksplorasi vulnerability research dan kecerdasan buatan. Sedikit rasa ingin tahu bisa menjadi awal.",
    fieldsTitle: "Dua bidang. Banyak hal untuk dijelajahi.",
    fieldsIntro:
      "Perjalanan kami baru dimulai. Inilah pertanyaan yang mengundang rasa ingin tahu kami.",
    peopleTitle: "Rasa ingin tahu lebih seru dibagi.",
    peopleBody:
      "Di balik Caledon ada orang-orang dengan pertanyaan mereka sendiri. Kenali anggota yang ikut membentuk kolektif ini.",
  },
  fields: {
    security: {
      title: "Vulnerability research",
      question: "Apa yang terjadi saat sistem berperilaku di luar dugaan?",
      body: "Memahami cara kerja perangkat lunak, menemukan celah dalam asumsinya, dan mempelajari bagaimana temuan itu bisa membantu membangun sistem yang lebih aman.",
    },
    ai: {
      title: "Kecerdasan buatan",
      question:
        "Apa yang bisa dipelajari saat membangun dengan kecerdasan buatan?",
      body: "Mengeksplorasi cara kerja sistem cerdas, kemampuannya, serta batasan yang membuka pertanyaan dan eksperimen baru.",
    },
  },
  about: {
    title: "Pertanyaan yang baik perlu ruang untuk tumbuh.",
    intro:
      "Caledon Institute adalah kolektif riset independen yang baru merintis, mempertemukan rasa ingin tahu tentang keamanan perangkat lunak dan kecerdasan buatan.",
    storyTitle: "Mulai dari kecil. Terus ingin tahu.",
    story:
      "Kami masih dalam tahap pembentukan. Untuk saat ini, Caledon menjadi tempat untuk terhubung lewat pertanyaan, mengeksplorasi ide, dan menemukan arah bersama. Minat kami mencakup vulnerability research dan AI, dengan ruang bagi keduanya untuk berkembang.",
    welcome:
      "Kamu tidak perlu datang dengan semua jawabannya. Kalau kamu baru mengenal bidang ini, pertanyaanmu juga punya tempat di sini.",
    approachTitle: "Cara kami ingin bereksplorasi",
    principles: [
      {
        title: "Beri ruang untuk bertanya",
        body: "Mulai dari hal yang membuatmu penasaran. Pemahaman tumbuh saat kita punya ruang untuk bertanya.",
      },
      {
        title: "Belajar lewat eksperimen",
        body: "Coba sebuah ide, amati hasilnya, lalu biarkan hasil itu menuntun pertanyaan berikutnya.",
      },
      {
        title: "Temukan arah bersama",
        body: "Biarkan minat bersama dan orang-orang di dalamnya membentuk masa depan Caledon.",
      },
    ],
    nextTitle: "Bawa pertanyaanmu.",
    nextBody:
      "Bertanya, berbagi eksperimen, dan jelajahi ide bersama di forum resmi kami.",
  },
  members: {
    title: "Orang-orang di balik pertanyaan.",
    intro:
      "Kenali orang-orang yang ikut membentuk Caledon. Beragam sudut pandang, dengan ruang untuk bereksplorasi bersama.",
    note: "Daftar ini mencakup anggota yang tampil secara publik di organisasi GitHub kami.",
    nextTitle: "Ikut berdiskusi.",
    nextBody: "Temui komunitas di forum resmi kami dan ceritakan apa yang sedang kamu eksplorasi.",
  },
  footer: "Kolektif independen yang tumbuh lewat rasa ingin tahu.",
  location: "Berbasis di Bandar Lampung, ID. Terbuka untuk pertanyaan.",
  meta: {
    home: {
      title: "Caledon Institute — Tempat belajar bersama",
      description:
        "Kolektif independen yang mengeksplorasi vulnerability research dan kecerdasan buatan. Kenali Caledon Institute dan orang-orang di baliknya.",
    },
    about: {
      title: "Tentang — Caledon Institute",
      description:
        "Kenali Caledon Institute, kolektif independen yang memulai perjalanan di bidang vulnerability research dan kecerdasan buatan.",
    },
    members: {
      title: "Anggota — Caledon Institute",
      description:
        "Kenali anggota publik GitHub yang ikut membentuk Caledon Institute.",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, id };
