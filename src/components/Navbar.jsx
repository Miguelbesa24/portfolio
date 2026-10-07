import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import myimage from '../assets/myimage.png';
import myimage3 from '../assets/myimage3.JPG';
import Logo from '../assets/Logo.png';
import resume from '../assets/CV-Besa.pdf';
import certBesa from '../assets/Cert-Besa.png';

import coffee1 from '../assets/coffee1.jpg';
import Shoes1 from '../assets/Shoes1.jpg';
import system from '../assets/system.jpg';
import Travel from '../assets/Travel.PNG';
import Pitch from '../assets/Pitch.PNG';
import Arcane from '../assets/Arcane.PNG';
import AUBC from '../assets/AUBC - Desktop.PNG';
import Lux from '../assets/Lux.PNG';
import Unicornfluff from '../assets/Unicorn fluff.jpg';
import american from '../assets/american elite.jpg';
import mrparty from '../assets/mr.party.jpg';
import ems from '../assets/EMS.jpg';
import internatonal from '../assets/International.jpg';

/* ---------- Content ---------- */

const projects = [
  {
    title: 'Coffee Shop App UI Design',
    kind: 'Mobile UI',
    category: 'UI/UX',
    image: coffee1,
    description:
      'Mobile ordering app concept with a warm, easy-to-scan menu and a short path from browsing to checkout.',
    tags: ['UI', 'Figma'],
  },
  {
    title: 'Shoes App UI Design',
    kind: 'E-commerce',
    category: 'UI/UX',
    image: Shoes1,
    description:
      'Shopping app interface focused on large product imagery, clear filters, and a simple cart flow.',
    tags: ['UI', 'Figma'],
  },
  {
    title: 'System Dashboard UI Design',
    kind: 'Dashboard',
    category: 'UI/UX',
    image: system,
    description:
      'Admin dashboard layout that organizes data tables, status indicators, and key metrics in one view.',
    tags: ['UI', 'Figma', 'Dashboard'],
  },
  {
    title: 'Travel Booking UI Design',
    kind: 'Booking',
    category: 'UI/UX',
    image: Travel,
    description:
      'Booking website design covering destination search, trip details, and a streamlined reservation form.',
    tags: ['UI', 'Figma'],
    link: 'https://www.figma.com/design/9FuKaQ7mMSWvbQ9BS3STwI/Booking-Web-Project?node-id=0-1&t=kXycYFXs88DXpVEh-1',
    linkLabel: 'View project',
  },
  {
    title: 'Pitch Deck UI Design',
    kind: 'Presentation',
    category: 'UI/UX',
    image: Pitch,
    description:
      'Reusable capabilities deck template with consistent layouts for services, case studies, and team slides.',
    tags: ['UI', 'Figma', 'Template'],
    link: 'https://www.figma.com/design/sln9zZXNL90aHj0j3tJeiy/Capabilities-deck-presentation-template?t=dzAU6PKlGh8fEQpM-1',
    linkLabel: 'View project',
  },
  {
    title: 'Arcane UI Design',
    kind: 'Prototype',
    category: 'UI/UX',
    image: Arcane,
    description:
      'Fan-inspired interface design with a dark visual theme, an interactive prototype, and custom components.',
    tags: ['UI', 'UX', 'Prototype'],
    link: 'https://www.figma.com/design/blFxaYfXeytES746tR9qjf/Arcane?node-id=0-1&t=S9JUiVZ3BsAOo6qr-1',
    linkLabel: 'Open prototype',
  },
  {
    title: 'AUBC Consulting',
    kind: 'Freelance',
    category: 'UI/UX',
    image: AUBC,
    description:
      'Freelance website design for a consulting firm, from page structure to a clickable prototype.',
    tags: ['UI', 'UX', 'Freelance'],
    link: 'https://www.figma.com/design/Yu19sN1MFSKgXJbbHqbApD/AUBC---WEB-DESIGN?node-id=0-1&t=FO62itpzZscSCTjG-1',
    linkLabel: 'Open prototype',
  },
  {
    title: 'Luxury Presence Project',
    kind: 'Real estate',
    category: 'Frontend',
    image: Lux,
    description:
      'Responsive real estate website built with React and Tailwind CSS, with a clean, image-led layout.',
    tags: ['Frontend', 'React', 'Tailwind'],
    link: 'https://miguelbesa24.github.io/Luxury-Presence---Project/',
    linkLabel: 'Live demo',
  },
  {
    title: 'Unicorn Fluff',
    kind: 'Client site',
    category: 'DUDA',
    image: Unicornfluff,
    description:
      'Client website designed and built on the DUDA platform with custom sections and mobile-first layouts.',
    tags: ['DUDA'],
    link: 'https://townsquareinteractive.responsivewebsitebuilder.io/preview/28666f83?t=1771573963371',
    linkLabel: 'Live demo',
  },
  {
    title: 'American Elite Solution',
    kind: 'Client site',
    category: 'DUDA',
    image: american,
    description:
      'Business website built on DUDA, with service pages and clear calls to action for new customers.',
    tags: ['DUDA'],
    link: 'https://townsquareinteractive.responsivewebsitebuilder.io/preview/97873e6e?t=1771936546767',
    linkLabel: 'Live demo',
  },
  {
    title: 'Mr. Party Event Rental',
    kind: 'Client site',
    category: 'DUDA',
    image: mrparty,
    description:
      'Rental business website on DUDA, with a browsable catalog of items and a straightforward quote request.',
    tags: ['DUDA'],
    link: 'https://townsquareinteractive.responsivewebsitebuilder.io/preview/51b7b56e?t=1772777755256',
    linkLabel: 'Live demo',
  },
  {
    title: 'EMS Automotive',
    kind: 'Client site',
    category: 'DUDA',
    image: ems,
    description:
      'Auto service website on DUDA, with services, location details, and booking prompts up front.',
    tags: ['DUDA'],
    link: 'https://townsquareinteractive.responsivewebsitebuilder.io/preview/9974efc7?t=1773642772000',
    linkLabel: 'Live demo',
  },
  {
    title: 'International Gold, Diamond & Watch Exchange',
    kind: 'Client site',
    category: 'DUDA',
    image: internatonal,
    description:
      'Retail website on DUDA that presents buying and selling services with a polished, trustworthy look.',
    tags: ['DUDA'],
    link: 'https://townsquareinteractive.responsivewebsitebuilder.io/preview/86915b01?t=1766739457340',
    linkLabel: 'Live demo',
  },
];

const certificates = [{ title: 'UI Design Bootcamp', image: certBesa }];

const filters = ['All', 'UI/UX', 'Frontend', 'DUDA'];

const icon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

const skills = [
  { name: 'HTML', logo: icon('html5') },
  { name: 'CSS', logo: icon('css3') },
  { name: 'React.js', logo: icon('react') },
  { name: 'Tailwind', logo: icon('tailwindcss') },
  { name: 'Material UI', logo: icon('materialui') },
  { name: 'Figma', logo: icon('figma') },
  { name: 'Photoshop', logo: icon('photoshop') },
  { name: 'Canva', logo: icon('canva') },
  { name: 'Duda', logo: null },
];

const aboutFacts = [
  ['College', 'STI College Ortigas-Cainta'],
  ['Education', 'BS in Computer Science'],
  ['Design', 'Websites on DUDA and freelance UI/UX in Figma'],
  ['Teaching', 'Instructor for IT, CS, and BMMA, and thesis adviser'],
];

const navLinks = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#project'],
  ['Certificates', '#certificates'],
  ['Contact', '#contact'],
];

const displayFont = {
  fontFamily: "'Syne', 'Manrope', sans-serif",
};

/* ---------- Shared pieces ---------- */

// Fades and lifts content in once, when it scrolls into view.
const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionHeading = ({
  eyebrow,
  title,
  dark = false,
  center = false,
}) => (
  <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
    <p
      className={`text-sm ${
        dark ? 'text-zinc-400' : 'text-zinc-500'
      }`}
    >
      {eyebrow}
    </p>

    <h2
      className={`mt-2 text-3xl font-extrabold uppercase tracking-tight md:text-5xl ${
        dark ? 'text-white' : 'text-zinc-900'
      }`}
      style={displayFont}
    >
      {title}
    </h2>
  </div>
);

const SkillTile = ({ name, logo }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group flex h-40 flex-col justify-between rounded-md border border-white/10 bg-white/5 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/10">
      <div className="flex flex-1 items-center justify-center">
        {logo && !failed ? (
          <img
            src={logo}
            alt=""
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
            {name[0]}
          </span>
        )}
      </div>

      <p className="text-sm text-zinc-300">{name}</p>
    </div>
  );
};

const ProjectCard = ({
  project,
  index,
  centered = false,
}) => (
  <div
    className={`group flex h-full flex-col rounded-md border border-zinc-200 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-900/10 ${
      centered ? 'w-full max-w-md' : ''
    }`}
  >
    <div className="flex items-center justify-between px-1 pb-4 pt-1 text-xs text-zinc-500">
      <span>{project.kind}</span>

      {project.category && (
        <span className="rounded-md bg-zinc-100 px-2 py-1 font-medium text-zinc-600">
          {project.category}
        </span>
      )}
    </div>

    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
          centered
            ? 'object-contain'
            : 'object-cover object-top'
        }`}
      />
    </div>

    <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
      <h3 className="text-base font-bold leading-snug text-zinc-900 md:text-lg">
        {project.title}
      </h3>

      {project.description && (
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {project.description}
        </p>
      )}

      {project.tags && (
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
          <span className="mt-4 text-xs text-zinc-500">
            {project.tags.join(' • ')}
          </span>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex shrink-0 items-center gap-1 text-xs font-bold text-zinc-900 transition-all hover:gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
            >
              {project.linkLabel}
              <ArrowOutwardIcon sx={{ fontSize: 14 }} />
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

const ContactLink = ({
  label,
  text,
  href,
  onClick,
  down,
}) => {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      onClick={onClick}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.07]"
    >
      <span>
        <span className="block text-xs text-zinc-500">
          {label}
        </span>

        <span className="mt-1 block font-semibold text-white">
          {text}
        </span>
      </span>

      {down ? (
        <ArrowDownwardIcon
          sx={{ fontSize: 18, color: '#a1a1aa' }}
          className="transition-transform duration-300 group-hover:translate-y-0.5"
        />
      ) : (
        <ArrowOutwardIcon
          sx={{ fontSize: 18, color: '#a1a1aa' }}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </Tag>
  );
};

/* ---------- Page ---------- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  const visibleProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  useEffect(() => {
    emailjs
      .send(
        'service_ii72yxp',
        'template_w7jl9qq',
        {
          message: 'Someone just viewed your portfolio! 🎉',
          time: new Date().toLocaleString(),
        },
        '4_lsLgy42sJjYQ1Mn'
      )
      .catch((err) => console.log('Email error:', err));
  }, []);

  const openPdf = () => window.open(resume, '_blank');

  return (
    <div
      className="bg-white text-zinc-900 antialiased"
      style={{
        fontFamily: "'Manrope', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');

        html {
          scroll-behavior: smooth;
        }

        section[id] {
          scroll-margin-top: 4rem;
        }

        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: none;
          }
        }

        .hero-in > * {
          animation: heroIn .8s ease-out both;
        }

        .hero-in > *:nth-child(2) {
          animation-delay: .1s;
        }

        .hero-in > *:nth-child(3) {
          animation-delay: .2s;
        }

        .hero-in > *:nth-child(4) {
          animation-delay: .3s;
        }

        .hero-in > *:nth-child(5) {
          animation-delay: .4s;
        }

        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 1px;
          width: 100%;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s ease;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-in > * {
            animation: none;
          }

          html {
            scroll-behavior: auto;
          }

          * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-zinc-950/70 text-white backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#profile"
            className="flex items-center gap-3 text-sm font-semibold"
          >
            <img
              src={Logo}
              alt="Logo"
              className="h-9 w-9 object-contain"
            />
            Miguel Besa
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="nav-link transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl leading-none md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? '\u00D7' : '\u2630'}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-white/10 bg-zinc-950 px-6 py-4 md:hidden">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-zinc-200"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="profile"
        className="relative isolate flex min-h-screen items-end overflow-hidden bg-zinc-950 text-white"
      >
        <img
          src={myimage3}
          alt="Miguel Besa"
          className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-top opacity-60 grayscale md:w-3/5"
          style={{
            WebkitMaskImage:
              'linear-gradient(to left, black 40%, transparent 100%)',
            maskImage:
              'linear-gradient(to left, black 40%, transparent 100%)',
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

        <div className="hero-in mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:pb-28">
          <p className="text-lg text-zinc-400">
            Miguel Antonio
          </p>

          <h1
            className="mt-2 font-extrabold leading-[0.85] tracking-tighter"
            style={{
              ...displayFont,
              fontSize: 'clamp(4rem, 15vw, 10rem)',
            }}
          >
            BESA
          </h1>

          <p className="mt-6 text-lg text-zinc-200 md:text-2xl">
            Frontend Web Developer and UI/UX Designer
          </p>

          <p className="mt-3 max-w-md text-zinc-400">
            I design and build clean, user-centered websites with
            React, Figma, and DUDA.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#project"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View projects
            </a>

            <button
              onClick={openPdf}
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Download CV
            </button>

            <a
              href="https://www.linkedin.com/in/miguelbesa2420021214"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconButton
                size="small"
                sx={{ color: 'white' }}
              >
                <LinkedInIcon />
              </IconButton>
            </a>
          </div>
        </div>

        {/* Fade to black into the next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* About */}
      <section
        id="about"
        className="relative bg-white pb-24 pt-40"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <h2
              className="mb-14 text-center text-4xl font-extrabold uppercase tracking-tight md:text-6xl"
              style={displayFont}
            >
              About me
            </h2>
          </Reveal>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {aboutFacts.map(([label, text]) => (
                  <div
                    key={label}
                    className="border-t border-zinc-900 pt-3"
                  >
                    <p className="text-lg font-bold">
                      {label}
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 max-w-prose space-y-4 leading-relaxed text-zinc-600">
                <p>
                  Hi, I'm Miguel Antonio Besa, a Computer Science
                  graduate with a strong passion for Frontend
                  Development and UI/UX Design. I create visually
                  appealing, user-centered websites tailored to
                  client needs.
                </p>

                <p>
                  I also guide students as an instructor and thesis
                  adviser, helping them develop and complete their
                  research projects.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-200 md:aspect-square">
                <img
                  src={myimage}
                  alt="Miguel Besa"
                  className="h-full w-full rounded-lg transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="bg-zinc-950 py-24 text-white"
      >
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <SectionHeading
              dark
              center
              eyebrow="Tools and technologies"
              title="My skills"
            />

            <p className="-mt-8 mb-12 text-center text-zinc-300 md:-mt-12">
              Building interfaces with HTML, CSS, React, Tailwind,
              and Material UI, and designing them in Figma,
              Photoshop, Canva, and DUDA.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal
                key={s.name}
                delay={(i % 3) * 100}
              >
                <SkillTile {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="project"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 border-b border-zinc-200 pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm text-zinc-500">
                  My Recent
                </p>

                <h2
                  className="mt-2 text-4xl font-extrabold uppercase tracking-tight md:text-6xl"
                  style={displayFont}
                >
                  Projects
                </h2>
              </div>

              <p className="max-w-xs text-sm text-zinc-500">
                Showcasing {projects.length} projects across UI/UX
                design, React development, and DUDA websites.
              </p>
            </div>

            <div
              className="mb-10 flex flex-wrap gap-2"
              role="group"
              aria-label="Filter projects"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    filter === f
                      ? 'bg-zinc-900 text-white'
                      : 'border border-zinc-300 text-zinc-600 hover:-translate-y-0.5 hover:border-zinc-900'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((p, i) => (
              <Reveal
                key={`${filter}-${p.title}`}
                delay={(i % 3) * 100}
                className="h-full"
              >
                <ProjectCard
                  project={p}
                  index={i}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section
        id="certificates"
        className="relative bg-white pb-80 pt-8"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Learning and training"
              title="Certificates"
            />
          </Reveal>

          <div className="flex justify-center">
            {certificates.map((c) => (
              <Reveal
                key={c.title}
                className="flex w-full justify-center"
              >
                <ProjectCard
                  centered
                  project={{
                    title: c.title,
                    image: c.image,
                    kind: 'Certificate',
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Fade to black, leading into the footer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
      </section>

      {/* Contact / footer */}
      <footer
        id="contact"
        className="bg-[#0a0a0a] pb-10 text-white"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex items-center justify-between border-b border-white/10 pb-5 text-xs text-zinc-500">
            
               
            </div>

            <p className="mt-16 text-xs text-zinc-400">
              Get in touch 
            </p>

            <h2
              className="mt-4 max-w-4xl text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
              style={displayFont}
            >
              Let's build something exceptional together.
            </h2>

            <p className="mt-8 max-w-xl leading-relaxed text-zinc-400">
              Whether you need a high-performance frontend build
              in React, a thoughtful UI/UX prototype in Figma, or
              a complete website on DUDA, I'm ready to collaborate.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 flex flex-col gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
              <div>
                <p className="text-xs text-zinc-500">
                  Direct inquiries
                </p>

                <p className="mt-2 break-all text-xl font-semibold md:text-3xl">
                  miguelbesa249@gmail.com
                </p>
              </div>

              <a
                href="https://mail.google.com/mail/?view=cm&to=miguelbesa249@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-1 rounded-md bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Send message
                <ArrowOutwardIcon sx={{ fontSize: 16 }} />
              </a>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <ContactLink 
                label="Professional profile"
                text="LinkedIn"
                href="https://www.linkedin.com/in/miguelbesa2420021214"
              />

              <ContactLink
                label="Curriculum vitae"
                text="Download resume"
                onClick={openPdf}
                down
              />
            </div>
          </Reveal>

          <p className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
            Copyright © {new Date().getFullYear()} Miguel Antonio Besa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;