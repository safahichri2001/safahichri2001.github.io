export type Photo = {
  // Path under public/media/events/
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type Event = {
  slug: string;
  name: string;
  fullName?: string;
  organizer?: string;
  date?: string;
  location: string;
  role: string;
  description: string;
  stats: { value: string; label: string }[];
  // Long-form content shown in the event dialog
  story?: string[];
  responsibilities?: string[];
  program?: { date: string; label: string; detail?: string }[];
  tags?: { title: string; items: string[] };
  cover?: Photo;
  photos?: Photo[];
  link?: string;
};

const adacis = "/media/events/adacis-25";

const adacisPhotos: Photo[] = [
  {
    src: `${adacis}/certificate-ceremony.jpg`,
    alt: "Safa Hichri receiving her organizing committee certificate on stage at IEEE ADACIS'25",
    caption: "Recognized on stage as a member of the organizing committee",
    width: 480,
    height: 721,
  },
  {
    src: `${adacis}/main-hall.jpg`,
    alt: "Main conference hall at Marhaba Palace with IEEE ADACIS'25 screens",
    caption: "The main hall at Marhaba Palace, set up before the opening session",
    width: 1280,
    height: 853,
  },
  {
    src: `${adacis}/cultural-visit-kairouan.jpg`,
    alt: "Group photo of conference attendees with Tunisian and Moroccan flags in Kairouan",
    caption:
      "Cultural visit to Kairouan with our guests from Canada, Spain, Portugal and Morocco",
    width: 1280,
    height: 853,
  },
  {
    src: `${adacis}/on-site.jpg`,
    alt: "Safa Hichri wearing her organizer badge at the venue",
    caption: "On site during the conference",
    width: 864,
    height: 1152,
  },
  {
    src: `${adacis}/certificate.jpg`,
    alt: "IEEE ADACIS'25 certificate recognizing Safa Hichri as a member of the organizing committee",
    caption: "Organizing committee certificate — University of Sousse & ISSAT Sousse",
    width: 1280,
    height: 956,
  },
];

const iaForAll = "/media/events/ia-for-all";

const iaForAllPhotos: Photo[] = [
  {
    src: `${iaForAll}/closing-ceremony-winners.jpg`,
    alt: "IA For All participants and winning teams holding their prize checks at the closing ceremony",
    caption: "Closing ceremony — the three winning teams and participants",
    width: 1280,
    height: 720,
  },
  {
    src: `${iaForAll}/training-session.jpg`,
    alt: "Participants working on laptops during an AI training session at ISSAT Sousse",
    caption: "Hands-on AI training at ISSAT Sousse",
    width: 1280,
    height: 720,
  },
  {
    src: `${iaForAll}/organizing-team.jpg`,
    alt: "Safa Hichri with three members of the IA For All team",
    caption: "With the IA For All team",
    width: 1600,
    height: 900,
  },
  {
    src: `${iaForAll}/certificate.jpg`,
    alt: "Safa Hichri receiving her IA For All certificate",
    caption: "Receiving my certificate at the closing ceremony",
    width: 1280,
    height: 720,
  },
  {
    src: `${iaForAll}/portrait.jpg`,
    alt: "Safa Hichri in front of the IA For All banner",
    caption: "In front of the IA For All banner",
    width: 720,
    height: 1280,
  },
];

const htf = "/media/events/hack-to-the-future";

const htfPhotos: Photo[] = [
  {
    src: `${htf}/banner.jpg`,
    alt: "Hack to the Future banner with Securinets EPS and IEEE Computer Society logos",
    caption: "Hack to the Future 2.0 — Securinets EPS × IEEE Computer Society EPS",
    width: 1600,
    height: 1066,
  },
  {
    src: `${htf}/organizing-team.jpg`,
    alt: "The Hack to the Future organizing team at the registration desk",
    caption: "The organizing team at the registration desk",
    width: 1600,
    height: 1066,
  },
  {
    src: `${htf}/opening-session.jpg`,
    alt: "Opening session of Hack to the Future in a lecture hall decorated with Securinets and HTTF letters",
    caption: "Opening session — with the stage decoration I was in charge of",
    width: 1600,
    height: 1066,
  },
];

export const events: Event[] = [
  {
    slug: "ieee-adacis-25",
    name: "IEEE ADACIS'25",
    fullName:
      "IEEE International Conference on Advances in Data-Driven Analytics and Intelligent Systems",
    organizer: "University of Sousse × ISSAT Sousse",
    date: "November 20–22, 2025",
    location: "Marhaba Palace, Sousse, Tunisia",
    role: "Co-organizer · Organizing Committee",
    description:
      "Three days, six keynotes and 150+ international attendees. As part of the organizing committee, I helped bring IEEE's data-driven analytics conference to Sousse.",
    stats: [
      { value: "150+", label: "attendees" },
      { value: "6", label: "keynotes" },
      { value: "3", label: "days" },
    ],
    story: [
      "ADACIS gathers researchers and industry around data-driven analytics and intelligent systems — from large language models and computer security to e-health, Industry 4.0, education and agriculture. After its 2023 edition in Marrakech, the conference came to Sousse for 2025.",
      "As a co-organizer, I worked on everything attendees experience before a single talk begins: registration, venue logistics and event communications.",
      "The conference ran in hybrid mode: remote authors presented their papers over Zoom, so researchers anywhere in the world could take part. When the Zoom link went down in the middle of the program, we had to get remote presentations back on track under real time pressure — without derailing the sessions happening in the room.",
      "My favorite moment came outside the conference hall: a cultural visit to Kairouan with our international guests from Canada, Spain, Portugal and Morocco — a reminder that a good conference is as much about people as it is about papers.",
    ],
    responsibilities: [
      "Managed registration for 150+ attendees",
      "Coordinated venue logistics over the three days",
      "Handled event communications",
      "Helped keep hybrid sessions running when Zoom failed mid-program",
    ],
    tags: {
      title: "Keynotes from",
      items: [
        "Imperial College London",
        "University of Lorraine",
        "Pacific Northwest National Laboratory",
        "Arabian Gulf University",
        "University of Quebec",
        "ACM Distinguished Speaker",
      ],
    },
    cover: adacisPhotos[2],
    photos: adacisPhotos,
    link: "https://www.adacis-conf.com/index.php",
  },
  {
    slug: "ia-for-all",
    name: "IA For All",
    fullName: "AI Training School + 24-hour Hackathon",
    organizer: "IoT & Data Science Club ISSAT Sousse × Pristini School of AI",
    date: "January 14–20, 2025",
    location: "Sousse, Tunisia",
    role: "Co-organizer",
    description:
      "One week to take engineering students from AI curious to AI builders: three days of hands-on training, a 24-hour hackathon, and a pitch in front of a jury.",
    stats: [
      { value: "55", label: "participants" },
      { value: "21h", label: "of training" },
      { value: "24h", label: "hackathon" },
    ],
    story: [
      "IA For All was built on a simple idea: AI shouldn't be reserved for computer science students. The program was open to beginners and intermediate learners from computer science, mechanics, electronics and energy alike.",
      "Organized by the IoT & Data Science Club of ISSAT Sousse with Pristini School of AI, it combined a training school and a hackathon into one five-day journey. As a co-organizer, I helped coordinate the full program alongside five partner organizations: 21 hours of hands-on training delivered by ten trainers at ISSAT Sousse, followed by a 24-hour hackathon at Pristini School of AI.",
      "Teams then pitched their projects to a five-member jury, and the week closed with an awards ceremony celebrating the three winning teams.",
    ],
    responsibilities: [
      "Coordinated 21 hours of expert-led AI training",
      "Organized a 24-hour hackathon with pitch sessions",
      "Worked with 5 partner organizations",
    ],
    program: [
      { date: "Jan 14", label: "Opening day", detail: "Kick-off & program presentation" },
      { date: "Jan 15–17", label: "AI training school", detail: "3 × 7h at ISSAT Sousse" },
      { date: "Jan 18–19", label: "24-hour hackathon & pitch", detail: "Pristini School of AI" },
      { date: "Jan 20", label: "Closing ceremony", detail: "Awards for the top 3 teams" },
    ],
    cover: iaForAllPhotos[0],
    photos: iaForAllPhotos,
  },
  {
    slug: "hack-to-the-future-ctf",
    name: "Hack to the Future 2.0",
    fullName: "Cybersecurity CTF Competition — 2nd edition",
    organizer: "Securinets EPS × IEEE Computer Society EPS SBC",
    date: "April 26–27, 2026",
    location: "École Polytechnique de Sousse, Tunisia",
    role: "Event Leader",
    description:
      "Two days of ethical hacking for 70 students: a five-category Capture The Flag, hands-on workshops and a live leaderboard. I led the second edition of the school's cybersecurity competition — from planning to the stage decor.",
    stats: [
      { value: "70", label: "participants" },
      { value: "2", label: "days" },
      { value: "5", label: "challenge categories" },
    ],
    story: [
      "Hack to the Future is the cybersecurity CTF of École Polytechnique de Sousse, run by Securinets EPS and the IEEE Computer Society Student Branch Chapter. Its promise: no need to be an expert — curiosity and the courage to try are enough to get started in cybersecurity.",
      "As Event Leader of the second edition, I planned two days built around a multi-category Capture The Flag — cryptography, web, forensics, reverse engineering and network — alongside technical workshops: a certified workshop with 9antra.tn – The Bridge and a session on real-world SOC concepts.",
      "I coordinated the organizing team across every part of the event, and took charge of the venue decoration — the giant SECURINETS and HTTF letters on stage were part of it. 70 participants then competed for the top of the leaderboard, with cash prizes for the three best teams.",
    ],
    responsibilities: [
      "Planned the event program over two days",
      "Coordinated the organizing team",
      "Designed and set up the venue decoration",
      "Delivered a CTF for 70 participants with two technical workshops",
    ],
    tags: {
      title: "Challenge categories",
      items: ["Cryptography", "Web", "Forensics", "Reverse Engineering", "Network"],
    },
    cover: htfPhotos[1],
    photos: htfPhotos,
  },
];
