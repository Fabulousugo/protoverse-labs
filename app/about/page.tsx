import Image from "next/image";
import AlternatingVideoBackground from "@/components/AlternatingVideoBackground";

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
};

type ValueItem = {
  icon: string;
  title: string;
  description: string;
};

type Milestone = {
  year: string;
  event: string;
};

export default function AboutPage() {
  const team: TeamMember[] = [
    { name: "Brown Ejike", role: "Co-Founder & CEO", imageSrc: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/team/Brown_Ejike.jpg" },
    { name: "Sultan Kamal Abdulazeez", role: "COO / Co-Founder", imageSrc: "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/team/Kamal.jpeg" },
    { name: "Ugo Onah", role: "Head of Platform Engineering", imageSrc: "" },
  ];

  const values: ValueItem[] = [
    { icon: "🎯", title: "Innovation First", description: "Pushing boundaries in space and AI education" },
    { icon: "🌍", title: "African Excellence", description: "Celebrating and amplifying African talents" },
    { icon: "🤝", title: "Inclusive Access", description: "Making STEM education accessible to all" },
    { icon: "🚀", title: "Future-Focused", description: "Preparing the next generation of innovators" },
  ];

  const milestones: Milestone[] = [
    { year: "2021", event: "Child, Teen to Adult Academy" },
    { year: "2023", event: "Launched Bootcamps with over 500+ students" },
    { year: "2025", event: "Morphed into Protoverse Labs with focus on Space Tech and AI" },
    { year: "2025", event: "Ubuntu Skyrunners Post-production" },
    { year: "2026", event: "School Collaborations & Space-themed events" },
  ];

  return (
    <>
      <AlternatingVideoBackground
        videos={[
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video10.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video11.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video12.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video13.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video14.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video15.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video16.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video_homepage.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/Futuristic_African_Child_Astronaut_Video.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/bg2.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video3.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video4.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video5.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video6.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video8.mp4",
          "https://pub-7050e11adbf34059b8b42ee8ede79026.r2.dev/video/video9.mp4",
        ]}
        interval={5000}
      />

      {/* All content sits above the video */}
      <main className="min-h-screen relative z-20">
        {/* Hero Section */}
        <section className="text-protoverse-white py-20 px-4 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow-cyan">
              About Protoverse Labs
            </h1>
            <p className="text-xl md:text-2xl text-protoverse-white/90 max-w-3xl mx-auto">
              Building Africa&apos;s future through space science and artificial intelligence education
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-effect p-8 rounded-2xl text-protoverse-white border border-quantum-cyan/30">
                <div className="text-5xl mb-4">🎯</div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg leading-relaxed text-protoverse-white/90">
                  To democratize space and AI education in Africa through scalable, inclusive, world-class
                  learning programs.
                </p>
              </div>

              <div className="glass-effect p-8 rounded-2xl text-protoverse-white border border-stellar-purple/30">
                <div className="text-5xl mb-4">🔭</div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg leading-relaxed text-protoverse-white/90">
                  To become Africa&apos;s leading hub for space and artificial intelligence education,
                  research, and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm text-protoverse-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-quantum-cyan">Our Story</h2>
            <div className="glass-effect p-8 rounded-2xl">
              <p className="text-lg leading-relaxed mb-6 text-protoverse-white/90">
                Protoverse Labs was born from a simple yet powerful idea: every African child deserves
                the opportunity to reach for the stars. Founded in 2025 by a team of passionate educators,
                engineers, and innovators, we set out to bridge the gap between Africa&apos;s brilliant
                young minds and the cutting-edge fields of space science and artificial intelligence.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-protoverse-white/90">
                We recognized that traditional education systems often lacked the resources and curriculum
                to inspire students about space exploration and emerging technologies. So we created
                Protoverse Labs — innovation without limits — where African stories are told through the
                lens of space adventure, and hands-on learning transforms curiosity into capability.
              </p>
              <p className="text-lg leading-relaxed text-protoverse-white/90">
                Today, we&apos;re proud to serve thousands across Africa through our Sky Academy Programs,
                AfroSpace Series, and community outreach initiatives. And we&apos;re just getting started —
                the future of space exploration will be written by diverse voices from every corner of the globe.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-protoverse-white">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-xl hover:neon-border-cyan transition-all group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-protoverse-white mb-2">{value.title}</h3>
                  <p className="text-protoverse-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm text-protoverse-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-quantum-cyan">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-quantum-cyan to-nebula-blue flex items-center justify-center shadow-lg shadow-quantum-cyan/30">
                    <span className="text-2xl font-bold">{milestone.year}</span>
                  </div>
                  <div className="flex-1 glass-effect p-6 rounded-lg hover:neon-border-cyan transition-all">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team - Images */}
        <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-protoverse-white">Our Team</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-nebula-blue to-quantum-cyan shadow-lg shadow-quantum-cyan/30 group-hover:scale-110 transition-transform">
                    <Image
                      src={member.imageSrc}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      className="object-cover"
                      sizes="128px"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 ring-2 ring-quantum-cyan/40 rounded-full pointer-events-none" />
                  </div>

                  <h3 className="text-xl font-bold text-protoverse-white mb-1">{member.name}</h3>
                  <p className="text-protoverse-white/70">{member.role}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-protoverse-white/60 mt-10 text-sm">
            
              like <span className="text-protoverse-white">/team/name.jpg</span>.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-nebula-blue/50 to-stellar-purple/50 backdrop-blur-sm text-protoverse-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 text-protoverse-white/90">
              Be part of Africa&apos;s space-tech revolution. Whether you&apos;re a student, educator, or partner,
              there&apos;s a place for you at Protoverse Labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/sky-academy"
                className="bg-protoverse-white text-nebula-blue font-bold py-3 px-8 rounded-lg hover:scale-105 transition-transform inline-block"
              >
                Join Sky Academy
              </a>
              <a
                href="/contact"
                className="glass-effect border-2 border-protoverse-white text-protoverse-white font-bold py-3 px-8 rounded-lg hover:bg-protoverse-white hover:text-nebula-blue transition-all inline-block"
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
