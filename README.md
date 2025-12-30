# [allison-fuller.com](https://allison-fuller.com)

A professional personal portfolio website showcasing work in **Marketing**, **Film**, and **Social Media Management**. This site is designed to be clean, innovative, and creative, reflecting a high-end aesthetic.

## 🌟 Key Features

- **Marketing Pitches**: Dedicated section with slideshow presentations of marketing strategies and pitches.
- **Film & Video**: Integrated video player to showcase documentaries, short films, and visual narratives.
- **Social Media Management**: Visual galleries highlighting digital presence and community building work.
- **Project Deep-Dives**: Individual pages for every project to provide detailed context, roles, and tools used.
- **Responsive Design**: Fully optimized for a premium experience across all devices.

## 🛠️ Tech Stack

This project is built with modern web technologies:

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Tailwind Animate & Custom CSS Keyframes

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (v18+)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/ifuller140/allison-fuller.com.git
cd allison-fuller.com

# Install dependencies
npm install

# Start development server
npm run dev
```
The site will be available at `http://localhost:8080` (or `http://localhost:3000` if configured).

## 📦 Deployment

This project is configured for deployment to **GitHub Pages**.

### Manual Deployment
```bash
npm run deploy
```
This script builds the project and pushes the `dist` folder to the `gh-pages` branch.

### Custom Domain
The site is configured to use the custom domain **allison-fuller.com**.
- The `public/CNAME` file ensures GitHub Pages recognizes the domain.
- DNS settings (A Records and CNAME) should be configured in your domain provider's dashboard.

## 📂 Project Structure

- `/src/pages`: Main page components (Home, Projects, Film, Social, Detail).
- `/src/components`: UI components and layouts.
- `/src/lib/data.ts`: Centralized data file for all projects.
- `/public`: Static assets including `resume.pdf` and icons.

## 🤝 Contact

Feel free to reach out via the contact form on the website or directly via email.

---
Built with ❤️ for Allison Fuller.