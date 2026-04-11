import brainlyVideo from "@/assets/Brainly-Video-compressed.mp4";
import codeRiftVideo from "@/assets/CodeRift-compressed-video.mp4";
import squizImg from "@/images/squiz.png";

export const siteData = {
  name: "Saurav Sharma",
  title: "Developer / Builder",
  intro:
    "I'm a 19-year-old developer who crafts performant, elegant web experiences with clean code and thoughtful design. Passionate about open source, developer tools, and pushing the boundaries of what's possible on the web.",
  about: {
    bio: "I'm a developer who loves building things from scratch. I focus on modern JavaScript/TypeScript, React, and Node.js—always learning and shipping. When I'm not coding, I'm probably tinkering with mechanical keyboards or exploring new coffee shops.",
    values: [
      "Ship fast, iterate faster",
      "Clean code is a love letter to the next developer",
      "Design and engineering are inseparable",
    ],
  },
  projects: [
    {
      title: "CodeRift",
      description:
        "A competitive coding platform and arena where developers can practice algorithms, compete in real-time challenges, and improve their problem-solving skills.",
      tech: ["React", "TypeScript", "Bun", "Express", "PostgreSQL", "Prisma", "BullMQ", "JWT", "Supabase Storage", "Zod"],
      link: "https://github.com/Saurav4359/CodeRift",
      video: codeRiftVideo,
      previewHeight: "h-[11.52rem]",
    },
    {
      title: "Brainly",
      description:
        "A second-brain app that lets you save and organize the stuff your mind doesn’t have time to remember like YouTube videos, tweets, articles, ideas, whatever—so you can come back to it when it actually matters.",
      tech: ["React", "TypeScript", "Vite", "Node.js", "Express", "MongoDB", "Zod"],
      link: "https://brainly-fe-alpha.vercel.app/",
      video: brainlyVideo,
      videoStartAt: 1,
      previewHeight: "h-[11.52rem]",
    },
    {
      title: "Squiz (SeekerRank)",
      description:
        "High-performance real-time multiplayer quiz battle built on Solana. Connect your wallet, stake tokens, and go head-to-head in sub-100ms latency trivia matches with live opponent progress and trustless Anchor smart contract escrow—winner takes all.",
      tech: ["React Native", "Expo", "TypeScript", "Solana", "Anchor", "Socket.io", "Bun", "Neon PostgreSQL", "Zustand", "MMKV"],
      repo: "https://github.com/Saurav4359/squiz",
      image: squizImg,
      previewHeight: "h-56",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "BullMQ",
    "Docker",
    "Git",
    "TailwindCSS",
    "Solana",
  ],
  social: {
    github: "https://github.com/Saurav4359",
    linkedin: "https://www.linkedin.com/in/saurav-sharma-1b7321247/",
    twitter: "https://x.com/saurav_twts",
    email: "isauravsharmaokay4359@gmail.com",
  },
  // Formspree endpoint for contact form - get yours free at https://formspree.io
  // You'll receive an email notification when someone submits the form
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || "",
};
