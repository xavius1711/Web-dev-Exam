import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex h-20 items-center justify-between px-6 md:px-20 lg:px-[120px]">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-cyan" />
          <span className="text-xl font-bold text-gray-900">Xeon.tech</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-base font-medium text-cyan">
            Home
          </Link>
          <Link to="#skills" className="text-base font-medium text-gray-900">
            Skills
          </Link>
          <Link to="#projects" className="text-base font-medium text-gray-900">
            Projects
          </Link>
          <Link to="#contact" className="text-base font-medium text-gray-900">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-20 lg:px-[120px] py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="text-sm font-bold uppercase tracking-wide text-cyan">
              Crafting Digital
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Full-Stack
              <br />
              Developer & UI/UX
              <br />
              Specialist
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-md">
              I build scalable web applications and intuitive user experiences
              with cutting-edge technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-cyan text-white font-medium rounded-md hover:bg-cyan/90 transition-colors">
                View Projects
              </button>
              <button className="px-6 py-3 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors">
                Download CV
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative aspect-square max-w-md mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=600&fit=crop"
                alt="3D Abstract Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section id="skills" className="px-6 md:px-20 lg:px-[120px] py-16 lg:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <SkillCard
            icon={<CodeBracketsIcon />}
            title="Frontend Dev"
          />
          <SkillCard
            icon={<ServerIcon />}
            title="Backend Dev"
          />
          <SkillCard
            icon={<DatabaseIcon />}
            title="Databases"
          />
          <SkillCard
            icon={<LayoutIcon />}
            title="UI/UX Design"
          />
          <SkillCard
            icon={<MobileIcon />}
            title="Mobile Dev"
          />
          <SkillCard
            icon={<TerminalIcon />}
            title="DevOps"
          />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-6 md:px-20 lg:px-[120px] py-16 lg:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-8">
          Technologies I Work With
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Python",
            "PostgreSQL",
            "MongoDB",
            "Docker",
            "AWS",
            "Git",
            "Next.js",
            "Tailwind CSS",
            "GraphQL",
            "REST APIs",
          ].map((tech) => (
            <span
              key={tech}
              className="px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-full text-base"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Recent Works Section */}
      <section id="projects" className="px-6 md:px-20 lg:px-[120px] py-16 lg:py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-bold uppercase tracking-wide text-cyan mb-3">
            Selected Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Recent Works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            category="SaaS Platform"
            title="Modern Analytics Dashboard"
            tech="React, Node.js, PostgreSQL"
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop"
          />
          <ProjectCard
            category="Mobile App"
            title="Fintech Wallet Solution"
            tech="React Native, Firebase"
            image="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=400&fit=crop"
          />
          <ProjectCard
            category="Web App"
            title="E-Commerce Framework"
            tech="Next.js, Tailwind, Stripe"
            image="https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=400&fit=crop"
          />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="px-6 md:px-20 lg:px-[120px] py-20 lg:py-24 bg-cyan">
        <div className="text-center space-y-6">
          <div className="text-sm font-bold uppercase tracking-wide text-white/80">
            Let's Work Together
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Have a project in mind?
          </h2>
          <button className="px-12 py-4 bg-white text-cyan font-semibold rounded-full hover:bg-gray-50 transition-colors text-lg">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 lg:px-[120px] py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 Tech Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-cyan transition-colors"
            >
              Github
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-cyan transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-cyan transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Skill Card Component
function SkillCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
      <div className="text-gray-900">{icon}</div>
      <span className="text-base font-medium text-gray-900">{title}</span>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  category,
  title,
  tech,
  image,
}: {
  category: string;
  title: string;
  tech: string;
  image: string;
}) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-bold uppercase tracking-wide text-cyan">
          {category}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{tech}</p>
      </div>
    </div>
  );
}

// Icon Components
function CodeBracketsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M10.6666 16H10.6785M15.994 16H16.0059M21.3213 16H21.3332"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 28C25.6429 28 26.9747 26.465 26.9747 24.5715C26.9747 21.5744 26.8416 19.5819 28.8977 17.2122C29.4785 16.5427 29.4785 15.4572 28.8977 14.7878C26.8416 12.4181 26.9747 10.4255 26.9747 7.42857C26.9747 5.53503 25.6429 4 24 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00001 28C6.35713 28 5.0253 26.465 5.0253 24.5715C5.0253 21.5744 5.15837 19.5819 3.10231 17.2122C2.52146 16.5427 2.52146 15.4572 3.10231 14.7878C5.11329 12.47 5.0253 10.4532 5.0253 7.42857C5.0253 5.53503 6.35713 4 8.00001 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M25.3333 5.33337H6.66666C5.42415 5.33337 4.8029 5.33337 4.31283 5.53636C3.65943 5.80701 3.1403 6.32615 2.86964 6.97955C2.66666 7.46961 2.66666 8.09087 2.66666 9.33337C2.66666 10.5759 2.66666 11.1971 2.86964 11.6872C3.1403 12.3406 3.65943 12.8597 4.31283 13.1304C4.8029 13.3334 5.42415 13.3334 6.66666 13.3334H25.3333C26.5759 13.3334 27.1971 13.3334 27.6872 13.1304C28.3405 12.8597 28.8597 12.3406 29.1304 11.6872C29.3333 11.1971 29.3333 10.5759 29.3333 9.33337C29.3333 8.09087 29.3333 7.46961 29.1304 6.97955C28.8597 6.32615 28.3405 5.80701 27.6872 5.53636C27.1971 5.33337 26.5759 5.33337 25.3333 5.33337Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3333 18.6666H6.66666C5.42415 18.6666 4.8029 18.6666 4.31283 18.8696C3.65943 19.1402 3.1403 19.6594 2.86964 20.3128C2.66666 20.8029 2.66666 21.4241 2.66666 22.6666C2.66666 23.9092 2.66666 24.5304 2.86964 25.0205C3.1403 25.6738 3.65943 26.193 4.31283 26.4637C4.8029 26.6666 5.42415 26.6666 6.66666 26.6666H25.3333C26.5759 26.6666 27.1971 26.6666 27.6872 26.4637C28.3405 26.193 28.8597 25.6738 29.1304 25.0205C29.3333 24.5304 29.3333 23.9092 29.3333 22.6666C29.3333 21.4241 29.3333 20.8029 29.1304 20.3128C28.8597 19.6594 28.3405 19.1402 27.6872 18.8696C27.1971 18.6666 26.5759 18.6666 25.3333 18.6666Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 22.6666H8.01333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 22.6666H13.3467"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.33337H8.01333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 9.33337H13.3467"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 10.6666C21.891 10.6666 26.6666 8.87577 26.6666 6.66663C26.6666 4.45749 21.891 2.66663 16 2.66663C10.1089 2.66663 5.33331 4.45749 5.33331 6.66663C5.33331 8.87577 10.1089 10.6666 16 10.6666Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.33331 14.4561C10.1354 14.6973 11.0324 14.8958 12 15.0427"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M26.6666 16C26.6666 18.2092 21.891 20 16 20C10.1089 20 5.33331 18.2092 5.33331 16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.33331 23.7893C10.1354 24.0305 11.0324 24.229 12 24.376"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M26.6666 6.66663V25.3333C26.6666 27.5425 21.891 29.3333 16 29.3333C10.1089 29.3333 5.33331 27.5425 5.33331 25.3333V6.66663"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M5.1883 26.8118C3.33331 24.9567 3.33331 21.9711 3.33331 16C3.33331 10.0289 3.33331 7.04336 5.1883 5.18836C7.04329 3.33337 10.0289 3.33337 16 3.33337C21.971 3.33337 24.9566 3.33337 26.8117 5.18836C28.6666 7.04335 28.6666 10.0289 28.6666 16C28.6666 21.9711 28.6666 24.9567 26.8117 26.8118C24.9566 28.6667 21.971 28.6667 16 28.6667C10.0289 28.6667 7.0433 28.6667 5.1883 26.8118Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 12H28.6666"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.6667 28.6667V12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 25.3334H16.0133"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 2.66663H14C10.8573 2.66663 9.28594 2.66663 8.30962 3.64293C7.33331 4.61925 7.33331 6.1906 7.33331 9.33329V22.6666C7.33331 25.8093 7.33331 27.3806 8.30962 28.357C9.28594 29.3333 10.8573 29.3333 14 29.3333H18C21.1426 29.3333 22.714 29.3333 23.6904 28.357C24.6666 27.3806 24.6666 25.8093 24.6666 22.6666V9.33329C24.6666 6.1906 24.6666 4.61925 23.6904 3.64293C22.714 2.66663 21.1426 2.66663 18 2.66663Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M3.33337 16C3.33337 10.0289 3.33337 7.04336 5.18836 5.18836C7.04336 3.33337 10.0289 3.33337 16 3.33337C21.9711 3.33337 24.9567 3.33337 26.8118 5.18836C28.6667 7.04336 28.6667 10.0289 28.6667 16C28.6667 21.9711 28.6667 24.9567 26.8118 26.8118C24.9567 28.6667 21.9711 28.6667 16 28.6667C10.0289 28.6667 7.04336 28.6667 5.18836 26.8118C3.33337 24.9567 3.33337 21.9711 3.33337 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3.33337 12H28.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.33313 8H9.3451"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6664 8H14.6784"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3334 17.3334L22.9687 18.743C23.6563 19.3355 24 19.6319 24 20C24 20.3682 23.6563 20.6646 22.9687 21.2571L21.3334 22.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 17.3334L9.03128 18.743C8.34376 19.3355 8 19.6319 8 20C8 20.3682 8.34376 20.6646 9.03128 21.2571L10.6667 22.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3333 16L14.6666 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
