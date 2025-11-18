import HeroImage from "/assets/hero-img.png";
import AboutImage from "/assets/about.png";

const Image = {
  HeroImage,
  AboutImage,
};

export default Image;

import Tools1 from "/assets/tools/js.png";
import Tools2 from "/assets/tools/php.png";
import Tools3 from "/assets/tools/Python.png";
import Tools4 from "/assets/tools/html.png";
import Tools5 from "/assets/tools/cplusplus.png";
import Tools6 from "/assets/tools/csharp.png";
import Tools7 from "/assets/tools/java.jpg";
import Tools8 from "/assets/tools/css.png";
import Tools9 from "/assets/tools/reactjs.png";
import Tools10 from "/assets/tools/nextjs.png";
import Tools11 from "/assets/tools/tailwind.png";
import Tools12 from "/assets/tools/Laravel.png";
import Tools13 from "/assets/tools/flask.png";
import Tools14 from "/assets/tools/scikit-learn.png";
import Tools15 from "/assets/tools/PyTorch.png";
import Tools16 from "/assets/tools/pandas.png";
import Tools17 from "/assets/tools/vscode.png";
import Tools18 from "/assets/tools/github.png";
import Tools19 from "/assets/tools/canva.png";
import Tools20 from "/assets/tools/figma.png";

export const listTools = [
  // --- Kategori: Language ---
  {
    id: 1,
    gambar: Tools1,
    nama: "Javascript",
    ket: "Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "PHP",
    ket: "Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Python",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "HTML5",
    ket: "Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "C++",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "C#",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Java",
    ket: "Language",
    dad: "700",
  },

  // --- Kategori: Stylesheet Language ---
  {
    id: 8,
    gambar: Tools8,
    nama: "CSS",
    ket: "Stylesheet Language",
    dad: "800",
  },

  // --- Kategori: Framework ---
  {
    id: 9,
    gambar: Tools9,
    nama: "React JS",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Next JS",
    ket: "Framework",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Laravel",
    ket: "Framework",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Flask",
    ket: "Framework",
    dad: "1300",
  },

  // --- Kategori: Library ---
  {
    id: 14,
    gambar: Tools14,
    nama: "Scikit-learn",
    ket: "Library",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "PyTorch",
    ket: "Library",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Pandas",
    ket: "Library",
    dad: "1600",
  },

  // --- Kategori: Code Editor ---
  {
    id: 17,
    gambar: Tools17,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "1700",
  },

  // --- Kategori: Repository ---
  {
    id: 18,
    gambar: Tools18,
    nama: "Github",
    ket: "Repository",
    dad: "1800",
  },

  // --- Kategori: Design App ---
  {
    id: 19,
    gambar: Tools19,
    nama: "Canva",
    ket: "Design App",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "Figma",
    ket: "Design App",
    dad: "2000",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.png";
import Proyek7 from "/assets/proyek/proyek7.png";
import Proyek8 from "/assets/proyek/proyek8.png";
import Proyek9 from "/assets/proyek/proyek9.png";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Student Performance Prediction",
    desk: "A platform to predict student graduation and help teachers identify academic risks based on curriculum data. The platform provides predictive analytics to support strategic decisions for teachers and schools.",
    tools: ["Python", "Flask", "scikit-learn", "Pandas", "Joblib", "JavaScript", "React", "Tailwind CSS"],
    link: "https://github.com/paisalmen14/StudentsPerformancePrediction.git",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Suno Website",
    desk: "A website to introduce the identity of the SUNO Group, the OSJUR INTERFACE 2025 team with a boundless passion for togetherness and limitless innovation. Through this platform, the SUNO Group builds a strong connection with its audience, shares its creative vision, and inspires future collaborations. It serves as a digital space where ideas, teamwork, and innovation come together.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://suno-snowy.vercel.app/",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Calmind: Mental Health Platform",
    desk: "An AI-based platform to monitor mood, analyze emotions, and provide activity recommendations as mental health support for users. Aimed at prevention and sustainable maintenance of mental conditions.",
    tools: ["Laravel (PHP)", "MySQL", "TailwindCSS", "Laravel API", "AI Integration"],
    link: "https://github.com/paisalmen14/Calmind.git",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Peduli Kasih: Posyandu Management Information System",
    desk: "Posyandu Management Information System (SIMPOS) is a digital solution for managing and integrating children's health data, nutritional status, and Posyandu immunization schedules, ensuring data accuracy and faster reporting.",    tools: ["PHP", "HTML5", "Tailwind CSS", "MySQL"],
    link: "https://github.com/paisalmen14/PosyanduPeduliKasih.git",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "SkinAnalyze",
    desk: "A web-based application to analyze the condition of the user's skin or wounds using deep learning models, and provide recommendations for appropriate skin or wound care for better accuracy overall.",
    tools: ["Python", "Flask", "PyTorch", "NumPy", "PIL (Pillow)", "scikit-image", "HTML5", "Tailwind CSS" , "JavaScript"],
    link: "https://github.com/paisalmen14/SkinAnalyze.git",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "EventPro",
    desk: "An integrated web application system for Event Management. It functions to manage the entire event series, from tickets, bookings, to participant check-ins, thereby simplifying administrative processes and increasing the overall operational efficiency and effectiveness of events.",
    tools: ["PHP", "Laravel", "HTML5", "CSS", "JavaScript", "TailwindCSS", "MySQL",],
    link: "https://github.com/sekartri18/event-management.git",
    dad: "700",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "MindMate",
    desk: "Design of a mental health solution application that has several features to help users maintain their mental health. These features include a mental health tracker, activity manager, and counseling services for improved well-being.",
    tools: ["Figma", "Blush", "Iconify"],
    link: "https://github.com/sekartri18/event-management.git",
    dad: "700",
  },
  {
    id: 8,
    gambar: Proyek8,
    nama: "Voice Guide",
    desk: "A tap-to-speech assistive system that converts tap patterns into clear speech. Designed to help individuals with speech impairments communicate more easily, providing a simple solution to express their needs and thoughts.",
    tools: ["Figma", "Blush", "Iconify"],
    link: "https://github.com/sekartri18/event-management.git",
    dad: "700",
  },
  {
    id: 9,
    gambar: Proyek9,
    nama: "WizFal Creative",
    desk: "Design of a website providing photography and videography services focused on capturing important moments such as graduations and formal events, as well as offering services to support the visual needs of MSMEs.",
    tools: ["Figma"],
    link: "https://github.com/sekartri18/event-management.git",
    dad: "700",
  },
];

