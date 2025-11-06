import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f2ee] text-[#403126]">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SG</h1>
          <nav className="hidden md:flex gap-8 text-sm">
            <Link href="#" className="hover:text-[#c9561d]  transition-colors">
              Home
            </Link>
            <Link href="#experience" className="hover:text-[#c9561d]  transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-[#c9561d]  transition-colors">
              Projects
            </Link>
            <Link href="#about" className="hover:text-[#c9561d]  transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <section className="mb-20">
          <p className='text-6xl font-bold leading-tight'>
            Sarthak Godse
          </p>
          <p className="text-2xl mb-8 text-[#847062]">
            Aspiring developer interested in software engineering
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="#projects"
              className="px-6 py-2.5 bg-[#c9561d] text-[#fcfbf8] border rounded-md transition-colors text-sm font-medium"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download="sarthak.pdf"
              className="px-6 py-2.5 bg-[#70a987] text-[#fcfbf8] border rounded-md transition-colors text-sm font-medium"
            >
              Download Resume
            </a>
            <a
              href="mailto:sarthak123godse@gmail.com"
              className="px-6 py-2.5 border transition-colors rounded-md text-sm font-medium"
            >
              Get in touch
            </a>
          </div>

          {/* Hello Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Hello 👋</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                I&apos;m Sarthak Godse, a full-stack developer with hands-on experience across modern web technologies including React, Next.js, TypeScript, Redux, Express, PostgreSQL, MongoDB, Prisma, Tailwind, Docker, and AWS. Over the past year, I&apos;ve built multiple end-to-end projects that solve real problems—ranging from dynamic web applications to data-driven dashboards. I enjoy transforming ideas into scalable, high-quality digital products.
              </p>
              <p>
                Alongside development, I have experience in data analytics, where I&apos;ve worked with structured and unstructured data to extract insights and support decision-making. This combination of engineering and analytical skills allows me to build not just functional applications, but intelligent and impactful solutions. I&apos;m also constantly exploring future-oriented skills, especially in areas where AI intersects with software engineering.
              </p>
              <p>
                  Currently, I&apos;m in my final year of Mechanical Engineering at <span className='text-[#c9561d]'>Delhi Technological University</span>. I&apos;m driven, curious, and always working on improving both my technical and problem-solving abilities. My goal is to contribute to innovative teams, build products that matter, and keep learning as technology evolves.
                </p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section id="highlights" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Highlights</h2>
          <div className="grid gap-6">
            <Link
              href="#experience"
              className="block bg-[#fcfbf8] p-6 border border-gray-200 rounded-lg hover:border-[#c9561d] transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-[#c9561d]">
          Work Experience
              </h3>
              <p className="text-sm">
          Professional experience in software development
              </p>
            </Link>

            <Link
              href="#projects"
              className="block p-6 bg-[#fcfbf8] border border-gray-200 rounded-lg hover:border-[#70a987] transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-[#70a987]">
          Featured Projects
              </h3>
              <p className=" text-sm">
          From web applications to innovative software solutions
              </p>
            </Link>

            <Link
              href="#about"
              className="block p-6 border bg-[#fcfbf8] border-gray-200 hover:border-[#c9561d] rounded-lg  transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-[#c9561d]">
          Skills
              </h3>
              <p className=" text-sm">
          Technical expertise across web development, databases, and DevOps
              </p>
            </Link>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>
                  <p className="text-[#c9561d] font-semibold">Sportaye</p>
                </div>
                <span className="text-sm">May 2025 - Present</span>
              </div>
              <p className="text-sm leading-relaxed">
                I developed end-to-end user interfaces for cricket and pickleball platforms using Next.js, transforming Figma designs into responsive, intuitive layouts. By leveraging performance optimizations like useMemo and useCallback, I ensured smoother rendering and minimized unnecessary re-renders. I also built interactive components that enable real-time gameplay features and live scoring across multiple sports modules, delivering a fast and engaging user experience.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Backend Developer</h3>
                  <p className="text-[#c9561d] font-semibold">Root Rituals</p>
                </div>
                <span className="text-sm">Jan 2025 - April 2025</span>
              </div>
              <p className="text-sm leading-relaxed">
                I built the entire backend from scratch, covering everything from login and signup flows to complex filtering logic and an admin panel for efficient management. I integrated real-time chat functionality using Socket.IO to ensure smooth, instant communication between users. Additionally, I implemented a Firebase-powered notification server that sends alerts whenever a new chat message is delivered, creating a responsive and engaging user experience.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                  <p className="text-[#c9561d] font-semibold">Logiczap NextGen Technologies</p>
                </div>
                <span className="text-sm">Sept 2024 - Dec 2024</span>
              </div>
              <p className="text-sm leading-relaxed">
                I designed and developed a robust backend system for candidates and recruiters, enabling secure signup, login, and advanced candidate search with powerful filtering capabilities. I integrated a resume downloading feature using pdfkit and enforced API protection with rate-limiter-flexible to ensure reliability and security. The entire platform was deployed through a CI/CD pipeline on AWS, utilizing S3 and CloudFront for fast, scalable content delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                <a href='https://drawspace-excalidraw-frontend.vercel.app/' target="_blank" rel="noopener noreferrer" 
                className="hover:underline hover:text-[#c9561d]">
                  Drawspace - Realtime Drawing App
                </a>
              </h3>
              <p className=" text-sm leading-relaxed mb-3">
                I architected a Turborepo-based monorepo with shared UI, types, and logging packages, and implemented an async broadcast pattern that delivers ultra-low WebSocket sync times of 1–5ms compared to 100–500ms PostgreSQL writes. I secured both REST and WebSocket APIs using JWT HttpOnly cookies, bcrypt hashing, and tiered rate-limiting (5 auth/15 min, 200 shapes/min), with Prisma ORM ensuring safe, injection-free queries. I also engineered a performant canvas system with selection and resize logic, undo/redo state management, and structured Winston logging to track errors consistently across frontend and backend services.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#c9561d]">Next.js</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#c9561d]">Typescript</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#c9561d]">Prisma</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#c9561d]">PostgreSQL</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#c9561d]">Turborepo</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#c9561d]">Websockets</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                <a href='https://vibe-three-bice.vercel.app/' target="_blank" rel="noopener noreferrer" 
                className="hover:underline hover:text-[#70a987]">
                  Vibe - AI-Powered Coding Platform
                </a>
              </h3>
              <p className=" text-sm leading-relaxed mb-3">
                I built a full-stack AI coding platform using Next.js, tRPC, Prisma, and PostgreSQL that enables real-time web app generation through a natural-language chat interface. I integrated E2B sandboxed environments with Gemini AI agents and orchestrated autonomous code generation, file management, and terminal operations using Inngest across isolated containers. The platform also includes authentication, usage tracking, and tiered rate limiting powered by Clerk, along with a credit-based system to manage AI agent iterations and sandbox execution limits.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#70a987]">Next.js</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#70a987]">Typescript</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#70a987]">Prisma</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#70a987]">PostgreSQL</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#70a987]">Inngest</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#70a987]">TRPC</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                <a href='https://ezy-pay-frontend.vercel.app/' target="_blank" rel="noopener noreferrer" 
                className="hover:underline hover:text-[#c9561d]">
                  Ezypay - Safe Payments App
                </a>
              </h3>
              <p className=" text-sm leading-relaxed mb-3">
                I developed a full-stack application using Next.js for efficient state handling, backed by PostgreSQL with Prisma as the ORM and NextAuth for secure authentication. The platform allows users to on-ramp money from their bank accounts into their wallets and transfer funds seamlessly to other users. For added security, I implemented a webhook-based verification flow for wallet top-ups, hosted on Cloudflare Workers to leverage a fast and scalable serverless architecture.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#c9561d]">Next.js</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#c9561d]">TypeScript</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#c9561d]">PostgreSQL</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#c9561d]">Prisma</span>
                <span className="px-3 py-1 text-white font-semibold text-xs rounded-full bg-[#c9561d]">Hono</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Frontend</p>
                  <p className="">React, Next.js, TypeScript</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Backend</p>
                  <p className="">Node.js, Python, Express</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Database</p>
                  <p className="">MongoDB, PostgreSQL, Redis</p>
                </div>
                <div>
                  <p className="font-medium mb-2">DevOps</p>
                  <p className="">Docker, AWS, CI/CD</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Tools</p>
                  <p className="">Git, VS Code, Figma</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Other</p>
                  <p className="">REST APIs, GraphQL, Websockets</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div>
                <p className="font-medium">B.Tech in Mechanical Engineering</p>
                <p className="text-sm "><span className='text-[#c9561d] font-semibold'>Delhi Technological University</span> • 2022 - 2026</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Sarthak Godse
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="mailto:sarthak123godse@gmail.com"
                className=" transition-colors hover:text-[#c9561d]"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/sarthak-godse-373175214/"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-colors hover:text-[#c9561d]"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Sarthak1940"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-colors hover:text-[#c9561d]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
