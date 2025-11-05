# Portfolio Website - Sarthak Godse

A modern, responsive single-page portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌓 Dark mode support
- ⚡ Built with Next.js 16 and React
- 💎 TypeScript for type safety
- 🎯 Single-page application with smooth scrolling
- 🚀 Optimized for performance

## Sections

- **Hero** - Introduction and call-to-action
- **About** - Personal background and interests
- **Skills** - Technical skills organized by category
- **Experience** - Work history and achievements
- **Projects** - Featured projects with descriptions
- **Education** - Academic background and certifications
- **Contact** - Contact information and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

Update the content in `src/app/page.tsx` to personalize:

- Personal information (name, title, bio)
- Skills and technologies
- Work experience
- Projects
- Education
- Contact information
- Social media links

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **ESLint** - Code quality

## Project Structure

```
portfolio-website/
├── src/
│   └── app/
│       ├── page.tsx       # Main portfolio page
│       ├── layout.tsx     # Root layout
│       └── globals.css    # Global styles
├── public/                # Static assets
└── .github/
    └── copilot-instructions.md
```

## Deploy on Vercel

The easiest way to deploy your portfolio is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

## License

This project is open source and available under the MIT License.
