import AlternatingVideoBackground from "@/components/AlternatingVideoBackground";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface Milestone {
  year: string;
  event: string;
}

export default function AboutPage() {
  const team: TeamMember[] = [
    {
      name: "Brown Ejike",
      role: "Co-Founder & CEO",
      image: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/team/Brown_Ejike.jpeg",
    },
    {
      name: "Sultan Kamal Abdulazeez",
      role: "Co-Founder & COO",
      image: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/team/Kamal.jpeg",
    },
    {
      name: "Fabulous Ugo",
      role: "Head of Platform Engineering",
      image: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/team/ugo_onah.jpeg",
    },
  ];

  const values: ValueItem[] = [
    {
      icon: "🎯",
      title: "Innovation First",
      description: "Pushing boundaries in space and AI education",
    },
    {
      icon: "🌍",
      title: "African Excellence",
      description: "Celebrating and amplifying African talents",
    },
    {
      icon: "🤝",
      title: "Inclusive Access",
      description: "Making STEM education accessible to all",
    },
    {
      icon: "🚀",
      title: "Future-Focused",
      description: "Preparing the next generation of innovators",
    },
  ];

  const milestones: Milestone[] = [
    { year: "2021", event: "Child, Teen to Adult Academy" },
    { year: "2023", event: "Launched Bootcamps with 500+ students" },
    {
      year: "2025",
      event: "Morphed into Protoverse Labs with focus on Space Tech and AI",
    },
    { year: "2025", event: "Ubuntu Skyrunners Post-production" },
    {
      year: "2026",
      event: "School Collaborations & Space-themed events",
    },
  ];

  return (
    <>
      <AlternatingVideoBackground
        videos={[
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
          "/video4.mp4",
          "/video5.mp4",
          "/video6.mp4",
          "/video8.mp4",
          "/video9.mp4",
        ]}
        interval={5000}
      />

      <main className="relative z-20 min-h-screen">
        <section className="bg-black/30 px-4 py-20 text-protoverse-white backdrop-blur-sm">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-glow-cyan md:text-6xl">
              About Protoverse Labs
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-protoverse-white/90 md:text-2xl">
              Building Africa&apos;s future through space science and artificial
              intelligence education
            </p>
          </div>
        </section>

        <section className="bg-black/40 px-4 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="glass-effect rounded-2xl border border-quantum-cyan/30 p-8 text-protoverse-white">
                <div className="mb-4 text-5xl">🎯</div>
                <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
                <p className="text-lg leading-relaxed text-protoverse-white/90">
                  To democratize space and AI education in Africa through
                  scalable, inclusive, world-class learning programs.
                </p>
              </div>

              <div className="glass-effect rounded-2xl border border-stellar-purple/30 p-8 text-protoverse-white">
                <div className="mb-4 text-5xl">🔭</div>
                <h2 className="mb-4 text-3xl font-bold">Our Vision</h2>
                <p className="text-lg leading-relaxed text-protoverse-white/90">
                  To become Africa&apos;s leading hub for space and artificial
                  intelligence education, research, and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black/30 px-4 py-20 text-protoverse-white backdrop-blur-sm">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-4xl font-bold text-quantum-cyan">
              Our Story
            </h2>
            <div className="glass-effect rounded-2xl p-8">
              <p className="mb-6 text-lg leading-relaxed text-protoverse-white/90">
                Protoverse Labs was born from a simple yet powerful idea: Every
                African child deserves the opportunity to reach for the stars.
                Founded in 2025 by a team of passionate educators, engineers,
                and innovators, we set out to bridge the gap between
                Africa&apos;s brilliant young minds and the cutting-edge fields
                of space science and artificial intelligence.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-protoverse-white/90">
                We recognize that traditional education systems often lacked the
                resources and curriculum to inspire students about space
                exploration and emerging technologies. So we created Protoverse
                Labs – innovation without limits, where African stories are told
                through the lens of space adventure, and hands-on learning
                transforms curiosity into capability.
              </p>
              <p className="text-lg leading-relaxed text-protoverse-white/90">
                Today, we&apos;re proud to serve thousands across Africa through
                our Sky Academy Programs, AfroSpace Series, and community
                outreach initiatives. But we&apos;re just getting started
                because the future of space exploration will be written by
                diverse voices from every corner of the globe.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-black/40 px-4 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-protoverse-white">
              Our Core Values
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="glass-effect group rounded-xl p-6 transition-all hover:neon-border-cyan"
                >
                  <div className="mb-4 text-5xl transition-transform group-hover:scale-110">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-protoverse-white">
                    {value.title}
                  </h3>
                  <p className="text-protoverse-white/80">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black/30 px-4 py-20 text-protoverse-white backdrop-blur-sm">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-quantum-cyan">
              Our Journey
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={`${milestone.year}-${index}`} className="flex items-center space-x-6">
                  <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-quantum-cyan to-nebula-blue shadow-lg shadow-quantum-cyan/30">
                    <span className="text-2xl font-bold">{milestone.year}</span>
                  </div>
                  <div className="glass-effect flex-1 rounded-lg p-6 transition-all hover:neon-border-cyan">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black/40 px-4 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-protoverse-white">
              Our Team
            </h2>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-nebula-blue to-quantum-cyan p-1 shadow-lg shadow-quantum-cyan/30 transition-transform group-hover:scale-110">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-protoverse-white">
                    {member.name}
                  </h3>
                  <p className="text-protoverse-white/70">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-nebula-blue/50 to-stellar-purple/50 px-4 py-20 text-protoverse-white backdrop-blur-sm">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">Join Our Mission</h2>
            <p className="mb-8 text-xl text-protoverse-white/90">
              Be part of Africa&apos;s space-tech revolution. Whether you&apos;re
              a student, educator, or partner, there&apos;s a place for you at
              Protoverse Labs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/sky-academy"
                className="inline-block rounded-lg bg-protoverse-white px-8 py-3 font-bold text-nebula-blue transition-transform hover:scale-105"
              >
                Join Sky Academy
              </a>
              <a
                href="/contact"
                className="glass-effect inline-block rounded-lg border-2 border-protoverse-white px-8 py-3 font-bold text-protoverse-white transition-all hover:bg-protoverse-white hover:text-nebula-blue"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}