"use client";

import { useState } from "react";
import AlternatingVideoBackground from "@/components/AlternatingVideoBackground";

interface Character {
  name: string;
  role: string;
  trait: string;
  image: string;
  color: string;
  isAI?: boolean;
}

interface Episode {
  title: string;
  description: string;
  season: number;
  episode: number;
}

export default function AfroSpacePage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState("");

  const trailerVideo =
    "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/USK%20Teaser.mp4";

  const comingSoonVideo =
    "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/Ubunutu_skyrunners.mp4";

  const openVideo = (videoUrl: string, title: string) => {
    setActiveVideo(videoUrl);
    setVideoTitle(title);
  };

  const closeVideo = () => {
    setActiveVideo(null);
    setVideoTitle("");
  };

  const characters: Character[] = [
    {
      name: "Lindiwe",
      role: "Leader & Pilot",
      trait: "of the Ubuntu Skyrunner",
      image: "/characters/Lindiwe_Suited.png",
      color: "from-nebula-blue to-quantum-cyan",
    },
    {
      name: "Ezenwa",
      role: "Software Engineer",
      trait: "& AI Prodigy",
      image:
        "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Ezenwa%20Suited.png",
      color: "from-stellar-purple to-nebula-blue",
    },
    {
      name: "Ayo",
      role: "Robotics & Mechanical",
      trait: "Engineering Prodigy",
      image:
        "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Ayo%20Suited.png",
      color: "from-quantum-cyan to-nebula-blue",
    },
    {
      name: "Zainab",
      role: "Navigator",
      trait: "& Celestial Cartographer",
      image:
        "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Zainab.png",
      color: "from-nebula-blue to-stellar-purple",
    },
    {
      name: "Boma",
      role: "Bio & Hydro",
      trait: "Systems Specialist",
      image:
        "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Boma%20Suited.png",
      color: "from-quantum-cyan to-stellar-purple",
    },
    {
      name: "Zawadi",
      role: "Linguist",
      trait: "& Communication Specialist",
      image:
        "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Zawadi%20Suited.png",
      color: "from-stellar-purple to-quantum-cyan",
    },
    {
      name: "Tariq",
      role: "Archaeology, History",
      trait: "& Cosmic Mythology Expert",
      image:
        "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Tariq%20Suited.png",
      color: "from-nebula-blue to-quantum-cyan",
    },
    {
      name: "Oríkì X",
      role: "Holographic",
      trait: "AI Guide",
      image:
        "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Oriki-X.png",
      color: "from-quantum-cyan to-nebula-blue",
    },
  ];

  const episodes: Episode[] = [
    {
      title: "THE CALL TO THE SKY",
      description:
        "The adventure begins as our young crew receives an extraordinary signal from beyond the stars.",
      season: 1,
      episode: 1,
    },
    {
      title: "ORÍKÌ-X AWAKES",
      description:
        "The crew's holographic AI guide, Oríkì-X, activates and reveals the true scope of their mission.",
      season: 1,
      episode: 2,
    },
    {
      title: "MOON SHADOWS & MAASAI NAVIGATION",
      description:
        "Ancient Maasai star-reading wisdom helps the crew navigate through mysterious lunar shadows.",
      season: 1,
      episode: 3,
    },
    {
      title: "THE SOLAR SYSTEM DRUMBEAT",
      description:
        "The crew discovers a cosmic rhythm connecting African drumming traditions to the movements of the planets.",
      season: 1,
      episode: 4,
    },
  ];

  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    animationDelay: `${(i % 4) * 0.8}s`,
    opacity: 0.2 + ((i % 8) + 1) / 10,
  }));

  return (
    <>
      <AlternatingVideoBackground
        videos={[
          "/video4.mp4",
          "/video5.mp4",
          "/video6.mp4",
          "/video8.mp4",
          "/video9.mp4",
          "/video10.mp4",
          "/video11.mp4",
          "/video12.mp4",
          "/video13.mp4",
          "/video14.mp4",
          "/video15.mp4",
          "/video16.mp4",
          "/video_homepage.mp4",
          "/Futuristic_African_Child_Astronaut_Video.mp4",
          "/bg2.mp4",
          "/video3.mp4",
        ]}
        interval={5000}
      />

      <main className="relative z-20 min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-br from-stellar-purple/40 via-nebula-blue/40 to-void-black/40 px-4 py-32 text-protoverse-white backdrop-blur-sm">
          <div className="absolute inset-0">
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute h-1 w-1 rounded-full bg-protoverse-white animate-float"
                style={{
                  left: star.left,
                  top: star.top,
                  animationDelay: star.animationDelay,
                  opacity: star.opacity,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <h1 className="mb-6 text-6xl font-bold text-glow-cyan md:text-8xl">
              Ubuntu Skyrunners
            </h1>

            <p className="mb-8 text-2xl text-quantum-cyan md:text-3xl">
              Africa&apos;s First Space-AI Animated Series
            </p>

            <p className="mx-auto mb-12 max-w-3xl text-lg text-protoverse-white/90">
              Join an incredible team of African space explorers as they journey
              through the cosmos, solving mysteries with AI and inspiring the
              next generation of innovators.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => openVideo(trailerVideo, "Watch Trailer")}
                className="rounded-lg bg-protoverse-white px-10 py-4 font-bold text-nebula-blue transition-transform hover:scale-105"
              >
                Watch Trailer
              </button>

              <button
                onClick={() => openVideo(comingSoonVideo, "Coming 2025")}
                className="glass-effect rounded-lg border-2 border-protoverse-white px-10 py-4 font-bold transition-all hover:bg-protoverse-white hover:text-nebula-blue"
              >
                Coming 2025
              </button>
            </div>
          </div>
        </section>

        <section className="bg-black/30 px-4 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl">
            <div className="relative rounded-2xl bg-gradient-to-r from-quantum-cyan via-verse-blue to-quantum-cyan p-1 animate-pulse">
              <div className="glass-effect-strong group relative overflow-hidden rounded-2xl border-2 border-quantum-cyan/50 transition-all duration-500 hover:border-quantum-cyan hover:shadow-2xl hover:shadow-quantum-cyan/50">
                <div className="relative flex h-[400px] w-full items-center justify-center bg-gradient-to-br from-nebula-blue/30 to-stellar-purple/30 md:h-[600px]">
                  <img
                    src="https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/characters/Ubuntu%20SR.jpg.jpeg"
                    alt="AfroSpace Adventurers Crew"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(1.1) contrast(1.1)" }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                  <div className="absolute inset-0 bg-quantum-cyan/5 mix-blend-overlay" />

                  <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-quantum-cyan/30 blur-3xl transition-transform duration-700 group-hover:scale-150" />
                  <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-verse-blue/30 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                  <div className="absolute bottom-0 left-0 right-0 z-10 p-8 text-center">
                    <h3 className="mb-2 text-3xl font-bold text-glow-verse text-protoverse-white drop-shadow-2xl md:text-5xl">
                      The Ubuntu Skyrunner Crew
                    </h3>
                    <p className="text-lg text-protoverse-white/90 drop-shadow-lg md:text-xl">
                      Seven heroes, one mission: Explore the cosmos and protect
                      Earth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black/40 px-4 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-glow-cyan text-protoverse-white md:text-5xl">
                Meet the Crew
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-protoverse-white/80">
                Seven brilliant young Africans on a mission to explore the
                universe and protect Earth
              </p>
            </div>

            <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              {characters.slice(0, 4).map((char) => (
                <div key={char.name} className="group text-center">
                  <div
                    className={`mx-auto mb-4 h-28 w-28 rounded-full bg-gradient-to-br p-1 shadow-lg shadow-quantum-cyan/30 transition-transform group-hover:scale-110 md:h-36 md:w-36 ${char.color}`}
                  >
                    <img
                      src={char.image}
                      alt={char.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-protoverse-white md:text-xl">
                    {char.name}
                  </h3>
                  <p className="text-xs font-semibold leading-tight text-quantum-cyan md:text-sm">
                    {char.role}
                  </p>
                  <p className="mt-1 text-xs text-protoverse-white/60">
                    {char.trait}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {characters.slice(4).map((char) => (
                <div key={char.name} className="group text-center">
                  <div
                    className={`mx-auto mb-4 h-28 w-28 rounded-full bg-gradient-to-br p-1 shadow-lg shadow-quantum-cyan/30 transition-transform group-hover:scale-110 md:h-36 md:w-36 ${char.color} ${
                      char.isAI
                        ? "ring-2 ring-quantum-cyan ring-offset-2 ring-offset-transparent"
                        : ""
                    }`}
                  >
                    <img
                      src={char.image}
                      alt={char.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-protoverse-white md:text-xl">
                    {char.name}
                  </h3>
                  {char.isAI && (
                    <span className="mb-1 inline-block rounded-full border border-quantum-cyan/40 bg-quantum-cyan/20 px-2 py-0.5 text-xs text-quantum-cyan">
                      AI
                    </span>
                  )}
                  <p className="text-xs font-semibold leading-tight text-quantum-cyan md:text-sm">
                    {char.role}
                  </p>
                  <p className="mt-1 text-xs text-protoverse-white/60">
                    {char.trait}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black/30 px-4 py-20 text-protoverse-white backdrop-blur-sm">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-quantum-cyan">
              Season 1 Episodes
            </h2>

            <div className="space-y-6">
              {episodes.map((ep) => (
                <div
                  key={`${ep.season}-${ep.episode}`}
                  className="glass-effect group rounded-xl p-6 transition-all hover:neon-border-cyan"
                >
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-quantum-cyan to-nebula-blue shadow-lg shadow-quantum-cyan/30">
                        <span className="text-center text-xs font-bold leading-tight">
                          S{ep.season}
                          <br />
                          E{ep.episode}
                        </span>
                      </div>

                      <div>
                        <p className="mb-1 text-xs font-semibold tracking-widest text-quantum-cyan">
                          SEASON {ep.season} · EPISODE {ep.episode}
                        </p>
                        <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-quantum-cyan md:text-2xl">
                          {ep.title}
                        </h3>
                        <p className="text-sm text-protoverse-white/70">
                          {ep.description}
                        </p>
                      </div>
                    </div>

                    <button className="flex-shrink-0 rounded-lg bg-quantum-cyan px-6 py-2 font-semibold text-void-black transition-all hover:scale-105 hover:bg-protoverse-white">
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black/40 px-4 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-protoverse-white">
              What Kids Learn
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: "🚀",
                  title: "Space Science",
                  items: ["Astronomy", "Physics", "Spacecraft", "Planets"],
                },
                {
                  icon: "🤖",
                  title: "AI & Technology",
                  items: ["Coding", "Robotics", "AI Basics", "Innovation"],
                },
                {
                  icon: "🌍",
                  title: "African Culture",
                  items: ["Heritage", "Languages", "Values", "Unity"],
                },
              ].map((category) => (
                <div
                  key={category.title}
                  className="glass-effect group rounded-xl p-6 transition-all hover:neon-border-cyan"
                >
                  <div className="mb-4 text-5xl transition-transform group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-protoverse-white">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-protoverse-white/80"
                      >
                        <span className="mr-2 text-quantum-cyan">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-nebula-blue/50 to-stellar-purple/50 px-4 py-20 text-protoverse-white backdrop-blur-sm">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">Join the Adventure!</h2>
            <p className="mb-8 text-xl text-protoverse-white/90">
              Be the first to know when new episodes drop. Subscribe to our
              newsletter.
            </p>

            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-3 text-deep-space focus:outline-none focus:ring-2 focus:ring-quantum-cyan"
              />
              <button className="rounded-lg bg-protoverse-white px-8 py-3 font-bold text-nebula-blue transition-transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-5xl rounded-2xl bg-black p-4 shadow-2xl">
            <button
              onClick={closeVideo}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-white hover:bg-white/20"
            >
              ✕
            </button>

            <h3 className="mb-4 text-center text-xl font-bold text-white">
              {videoTitle}
            </h3>

            <video
              key={activeVideo}
              controls
              autoPlay
              className="max-h-[80vh] w-full rounded-xl"
            >
              <source src={activeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}