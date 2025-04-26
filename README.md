# AI Safety Incidents Dashboard

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive dashboard for monitoring and managing AI safety incidents in real-time. Built with React, TypeScript, and Tailwind CSS.

![AI Safety Incidents Dashboard](https://via.placeholder.com/800x400?text=AI+Safety+Incidents+Dashboard)

## 🚀 Demo

[Live Demo](https://your-demo-url.com) (Coming Soon)

## ✨ Features

- 🎨 Modern, glassmorphic UI design
- 🔍 Real-time search functionality
- 🏷️ Filter incidents by severity (Low, Medium, High)
- 📅 Sort incidents by date (Newest/Oldest)
- 📝 Add new incidents with title, description, and severity
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🌙 Dark mode optimized
- 🔒 Type-safe with TypeScript

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **State Management:** React Hooks
- **UI Components:** Custom components with Tailwind CSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)
- Git

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-safety-incidents.git
cd ai-safety-incidents
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Development Setup

1. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add any necessary environment variables

2. **Available Scripts**
   ```bash
   npm run dev    # Start development server
   npm run build  # Build for production
   npm run preview # Preview production build
   npm run lint   # Run ESLint
   npm run test   # Run tests
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Filters.tsx     # Filter and search component
│   ├── IncidentCard.tsx # Incident display card
│   └── IncidentForm.tsx # New incident form
├── data/               # Data files
│   └── mockIncidents.ts # Mock incident data
├── types/              # TypeScript types
│   └── incident.ts     # Incident type definitions
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🔍 Features in Detail

### Search Functionality
- Real-time search across incident titles and descriptions
- Case-insensitive matching
- Debounced search to optimize performance
- Clear search option

### Filtering
- Filter incidents by severity level (Low, Medium, High)
- Clear all filters option
- Persistent filter state
- Combined filtering with search

### Incident Management
- Add new incidents with title, description, and severity
- View incident details in an expandable card
- Sort incidents by date (Newest/Oldest)
- Responsive card layout

## 🧪 Testing

The project includes:
- Unit tests for components
- Integration tests for features
- Type checking with TypeScript

Run tests with:
```bash
npm test
# or
yarn test
```

## 📦 Deployment

1. Build the project:
```bash
npm run build
# or
yarn build
```

2. Deploy the `dist` folder to your hosting service of choice.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build Tool
- [React Icons](https://react-icons.github.io/react-icons/) - Icons

## 📞 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/ai-safety-incidents](https://github.com/yourusername/ai-safety-incidents)

## 📈 Changelog

### v1.0.0 (Current)
- Initial release
- Basic incident management
- Search and filter functionality
- Responsive design

### Upcoming Features
- [ ] User authentication
- [ ] Real-time updates
- [ ] Export functionality
- [ ] Analytics dashboard
