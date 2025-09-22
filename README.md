# Why Ideas - Full-Stack Website

A modern, elegant full-stack web application for "Why Ideas," a tech solutions startup specializing in AI, machine learning, and data science innovations.

## 🚀 Project Overview

This project consists of:
- **Frontend**: React + TypeScript + Vite application with TailwindCSS and Framer Motion
- **Backend**: Node.js + Express + TypeScript API with MVC architecture
- **Database**: SQLite with Prisma ORM
- **Features**: Contact form with email notifications, responsive design, and smooth animations

## 📁 Project Structure

```
why-ideas/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # App entry point
│   │   └── index.css        # TailwindCSS styles
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.ts
└── server/                   # Node.js + Express backend
    ├── src/
    │   ├── controllers/      # Route handlers
    │   ├── models/          # Database models
    │   ├── services/        # Business logic
    │   ├── routes/          # API routes
    │   ├── middleware/      # Custom middleware
    │   ├── config/          # Configuration
    │   ├── types/           # TypeScript types
    │   ├── app.ts           # Express app setup
    │   └── index.ts         # Server entry point
    ├── prisma/
    │   └── schema.prisma    # Database schema
    ├── package.json
    └── tsconfig.json
```

## 🛠️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Hook Form** with Zod validation
- **Axios** for API calls

### Backend
- **Node.js** with Express and TypeScript
- **Prisma** ORM with SQLite database
- **Zod** for input validation
- **Pino** for logging
- **Nodemailer** for email notifications
- **CORS** and **Helmet** for security

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd why-ideas
```

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Edit .env file with your configuration
# Required variables:
# - DATABASE_URL
# - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
# - EMAIL_FROM, EMAIL_TO

# Generate Prisma client and run migrations
npx prisma generate
npx prisma migrate dev --name init

# Start development server
npm run dev
```

The backend server will start on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will start on `http://localhost:5173` (or next available port)

## 🔧 Environment Configuration

### Backend Environment Variables (.env)

```env
# Environment
NODE_ENV=development
PORT=5000

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Email Configuration (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=contact@whyideas.com

# Database
DATABASE_URL="file:./dev.db"
```

### Email Setup

To enable email functionality:

1. **Gmail Setup** (recommended for development):
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in `SMTP_PASS`

2. **Other SMTP Providers**:
   - Update `SMTP_HOST` and `SMTP_PORT`
   - Provide appropriate credentials

## 📖 API Documentation

### Endpoints

#### Health Check
- **GET** `/health`
- Returns server status and timestamp

#### Contact Form
- **POST** `/api/contact`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Your message here"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Contact form submitted successfully",
    "data": {
      "id": "contact-id",
      "submittedAt": "2025-01-01T00:00:00.000Z"
    }
  }
  ```

#### Get Contacts (Admin)
- **GET** `/api/contacts`
- Returns all submitted contact forms

#### Get Contact by ID (Admin)
- **GET** `/api/contacts/:id`
- Returns specific contact form

## 🏗️ Building for Production

### Backend

```bash
cd server
npm run build
npm start
```

### Frontend

```bash
cd frontend
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 Design Features

- **Ultra-modern, minimalist design**
- **Dark theme** with strategic accent colors
- **Gradient animations** and glassmorphism effects
- **Fully responsive** mobile-first design
- **Smooth animations** with Framer Motion
- **Interactive hover states** and micro-interactions

## 🔒 Security Features

- **Input validation** with Zod schemas
- **CORS protection**
- **Helmet security headers**
- **Request rate limiting** (recommended for production)
- **Error handling** middleware
- **Type-safe** TypeScript implementation

## 🧪 Development Commands

### Backend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
```

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📱 Features

### User Features
- **Responsive Hero Section** with animated background
- **About Section** showcasing company story
- **Services Grid** with 5 core services:
  - Data Science
  - Machine Learning
  - Software Engineering
  - LLM Training
  - Chatbot Development
- **Contact Form** with real-time validation
- **Smooth Navigation** with scroll-to-section
- **Mobile-friendly** responsive design

### Technical Features
- **MVC Architecture** for clean, maintainable code
- **Type Safety** with TypeScript throughout
- **Database Integration** with Prisma and SQLite
- **Email Notifications** for contact form submissions
- **Error Handling** with proper status codes
- **Logging** with Pino for debugging
- **Modern UI** with TailwindCSS utility classes

## 🚀 Deployment

### Backend Deployment
1. Set up production environment variables
2. Use a production database (PostgreSQL, MySQL)
3. Configure email service
4. Deploy to platforms like:
   - **Heroku**
   - **Railway**
   - **DigitalOcean**
   - **AWS**

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy to platforms like:
   - **Vercel**
   - **Netlify**
   - **GitHub Pages**
   - **AWS S3 + CloudFront**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📧 Support

For support or questions, please contact:
- Email: contact@whyideas.com
- Project Issues: [GitHub Issues](link-to-issues)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vercel Team** for Vite
- **TailwindCSS Team** for the utility-first CSS framework
- **Framer Team** for Motion animations
- **Prisma Team** for the excellent ORM

---

Built with ❤️ by Why Ideas - Transforming Ideas into Intelligent Solutions# why-ideas
