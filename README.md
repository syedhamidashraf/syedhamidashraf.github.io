# Syed Hamid Ashraf - Data Engineer Portfolio

A modern, responsive portfolio website built with Eleventy (11ty) and SCSS, showcasing my experience as a Data Engineer with expertise in Azure cloud platforms, SQL, and PySpark.

## 🚀 Live Demo

[View Live Site](https://syedhamidashraf.github.io/)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Customization](#customization)
- [License](#license)
- [Contact](#contact)

## 👨‍💻 About

This portfolio showcases my journey and expertise as a **Data Engineer** with over 3.5 years of experience in:

- ☁️ Azure Cloud Data Platforms (ADF, Databricks, ADLS Gen2)
- 🐍 SQL & PySpark for data processing
- 🔄 ETL pipeline development and optimization
- 📊 Batch data processing and workflow orchestration

### Key Highlights

- **Microsoft Certified:** Azure Data Engineer Associate (DP-203)
- **Current Role:** Data Engineer Analyst at Accenture
- **Achievements:** Accenture Ace Award, TEDx Hyderabad Core Team Member

## ✨ Features

- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 🌙 **Dark Theme** - Eye-friendly dark color scheme
- ⚡ **Fast Performance** - Static site generation with Eleventy
- 🎯 **SEO Optimized** - Meta tags, semantic HTML, and structured data
- 🔗 **Deep Linking** - Smooth scroll navigation with anchor links
- 📊 **Interactive Sections:**
    - About Me
    - Technical Skills
    - Work Experience
    - Certifications
    - Projects
    - Contact Information

## 🛠 Tech Stack

### Core Technologies

- **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
- **Templating:** Nunjucks
- **Styling:** SCSS (Sass)
- **Build Tool:** npm scripts
- **Server:** Browsersync (dev server)

### Key Libraries & Tools

- **Animations:** Intersection Observer API
- **Icons:** Font Awesome Pro
- **Fonts:** Google Fonts (JetBrains Mono, Orbitron, Space Mono)
- **Navigation:** @11ty/eleventy-navigation

### Project Features

- ✅ Component-based architecture
- ✅ SCSS modular structure (abstracts, base, components)
- ✅ JavaScript animations and interactions
- ✅ GitHub API integration for dynamic project display
- ✅ Responsive navigation with mobile menu
- ✅ Smooth scrolling and active link highlighting

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/syedhamidashraf/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm start
```

The site will be available at `http://localhost:8080`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── _data/
│   │   └── globalConfig.json        # Site configuration & content
│   ├── _includes/
│   │   ├── _components/             # Reusable components
│   │   │   ├── eleventy.about.njk
│   │   │   ├── eleventy.certifications.njk
│   │   │   ├── eleventy.contact.njk
│   │   │   ├── eleventy.experience.njk
│   │   │   ├── eleventy.footer.njk
│   │   │   ├── eleventy.header.njk
│   │   │   ├── eleventy.hero.njk
│   │   │   ├── eleventy.projects.njk
│   │   │   └── eleventy.skills.njk
│   │   ├── _scripts/                # JavaScript modules
│   │   │   ├── eleventy.script.animations.njk
│   │   │   ├── eleventy.script.navigation.njk
│   │   │   └── ...
│   │   └── layouts/
│   │       └── eleventy.root.layout.njk
│   ├── assets/
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── apple-touch-icon.png
│   │   └── site.webmanifest
│   ├── styles/
│   │   ├── abstracts/               # Variables, colors
│   │   ├── base/                    # Base styles, typography
│   │   ├── components/              # Component-specific styles
│   │   └── main.scss                # Main entry point
│   └── index.njk                    # Homepage
├── public/                          # Build output (generated)
├── eleventy.config.js               # Eleventy configuration
├── package.json
└── README.md
```

## 🔧 Development

### Available Scripts

```bash
# Start development server with live reload
npm start

# Build for production
npm run build

# Clean build directory
npm run clean
```

### Environment Variables

Set `ELEVENTY_ENV` for different build modes:

```bash
# Development mode
ELEVENTY_ENV=development npm start

# Production mode
ELEVENTY_ENV=production npm run build
```

## 🏗 Build & Deployment

### Build for Production

```bash
npm run build
```

This generates optimized static files in the `public/` directory.

### Deployment Options

**Option 1: Netlify**

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `public`

**Option 2: Vercel**

1. Import your GitHub repository
2. Framework preset: Other
3. Build command: `npm run build`
4. Output directory: `public`

**Option 3: GitHub Pages**

```bash
npm run build
# Deploy the public/ directory to gh-pages branch
```

## 🎨 Customization

### Update Personal Information

Edit `src/_data/globalConfig.json`:

```json
{
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "social": {
        "github": "https://github.com/yourusername",
        "linkedin": "https://linkedin.com/in/yourusername"
    }
    // ... more configuration
}
```

### Modify Styles

Edit SCSS files in `src/styles/`:

- **Colors:** `abstracts/_colors.scss`
- **Variables:** `abstracts/_variables.scss`
- **Typography:** `base/_typography.scss`
- **Components:** `components/_*.scss`

### Add New Sections

1. Create component in `src/_includes/_components/`
2. Add styles in `src/styles/components/`
3. Include in `src/index.njk`

## 🔐 Environment Setup

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm start
```

### VS Code Extensions (Recommended)

- Nunjucks Template
- SCSS IntelliSense
- Prettier - Code Formatter
- ESLint

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size:** < 50KB (CSS + JS combined)
- **Load Time:** < 1s on 3G networks

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Syed Hamid Ashraf**

- 📧 Email: syedhamidashraf@gmail.com
- 💼 LinkedIn: [linkedin.com/in/syedhamidashraf](https://linkedin.com/in/syedhamidashraf)
- 🐙 GitHub: [github.com/syedhamidashraf](https://github.com/syedhamidashraf)
- 📱 Phone: +91-9958648854

---

### Acknowledgments

- Built with [Eleventy](https://www.11ty.dev/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**⭐ If you find this project useful, please consider giving it a star!**

Made with ❤️ by Syed Hamid Ashraf
