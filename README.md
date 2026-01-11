# 🥋 Mainuddin Kabir - Portfolio Website

A modern, responsive portfolio website showcasing the professional journey, achievements, and expertise of Mainuddin Kabir, a dedicated Kyokushin Karate instructor and 1st Dan Black Belt holder.

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-cyan?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Features

### 📱 **Fully Responsive Design**

- Mobile-first approach with optimized layouts for all screen sizes
- Adaptive navigation with hamburger menu for mobile devices
- Touch-friendly buttons and interactive elements
- Responsive images and galleries

### 🎨 **Modern UI/UX**

- Clean, professional design with blue gradient theme
- Smooth GSAP animations and transitions
- Interactive components with hover effects
- Beautiful card-based layouts
- Custom newspaper-style gallery component

### 📄 **Comprehensive Pages**

- **Home**: Banner carousel, introduction, and about section
- **Experience**: Professional teaching history timeline
- **Skills**: 7 core competencies with detailed descriptions
- **Certifications**: Training credentials and achievements
- **Education**: Academic background and qualifications
- **Accomplishments**: Awards, medals, and recognitions
- **Gallery**: 56 images + 5 videos with lightbox viewer
- **Contact**: Functional contact form with EmailJS integration

### ✨ **Key Highlights**

- Auto-sliding banner with 3 slides
- Animated marquee section (hidden on mobile)
- Interactive newspaper-style component with rotating images
- Lightbox image viewer in gallery
- Click-to-call and WhatsApp integration
- Social media links
- Loading states and error handling

---

## 🛠️ Tech Stack

### **Frontend Framework**

- **React 19.1.1** - Modern React with latest features
- **React Router 7.9.5** - Client-side routing
- **Vite 7.1.7** - Lightning-fast build tool

### **Styling**

- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **DaisyUI 5.3.10** - Tailwind component library
- **Custom CSS** - Animations and special effects

### **Animations**

- **GSAP 3.13.0** - Professional-grade animations
- **Custom CSS Animations** - Fade-in, float, and glow effects

### **Icons & Assets**

- **React Icons 5.5.0** - Icon library
- **Custom Images** - 56 gallery images + 5 videos

### **Form Integration**

- **EmailJS** - Contact form email service (no backend needed)

### **Deployment**

- **Firebase Hosting** - Fast, secure hosting with CDN

---

## 📦 Installation

### **Prerequisites**

- Node.js (v18 or higher)
- npm or yarn

### **Clone the Repository**

```bash
git clone <repository-url>
cd "Portfolio Website/frontend"
```

### **Install Dependencies**

```bash
npm install
```

### **Environment Setup**

No environment variables needed for basic functionality. For contact form, you'll need EmailJS credentials (see Contact Form Setup below).

---

## 🚀 Development

### **Start Development Server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### **Build for Production**

```bash
npm run build
```

Output will be in the `dist/` directory.

### **Preview Production Build**

```bash
npm run preview
```

### **Lint Code**

```bash
npm run lint
```

---

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails without a backend server.

### **Step 1: Create EmailJS Account**

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month)
3. Verify your email address

### **Step 2: Connect Email Service**

1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your account
5. Copy the **Service ID**

### **Step 3: Create Email Template**

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use these variables in your template:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
4. Save and copy the **Template ID**

### **Step 4: Get Public Key**

1. Go to **Account** → **General**
2. Copy your **Public Key**

### **Step 5: Update Contact.jsx**

Open `src/pages/Contact.jsx` and update lines 7, 34-36:

```javascript
// Line 7: Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

// Lines 34-36: Update credentials
const result = await emailjs.sendForm(
  "YOUR_SERVICE_ID", // Your Service ID
  "YOUR_TEMPLATE_ID", // Your Template ID
  formRef.current,
  "YOUR_PUBLIC_KEY" // Your Public Key
);
```

### **Step 6: Update Contact Information**

Update your personal contact details in `src/pages/Contact.jsx` (lines 68-95):

- Email address
- Phone number
- WhatsApp link
- Location
- Social media URLs

---

## 📁 Project Structure

```
frontend/
├── public/
│   ├── logo.png              # Website logo
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── banner/       # Banner carousel images (3)
│   │   │   └── gallery/      # Gallery images (56)
│   │   ├── videos/           # Gallery videos (5)
│   │   └── logo.png
│   ├── components/
│   │   ├── About.jsx         # About section with GSAP animations
│   │   ├── Banner.jsx        # Auto-sliding banner carousel
│   │   ├── Footer.jsx        # Footer with links
│   │   ├── Introduction.jsx  # Instructor introduction card
│   │   ├── Loader.jsx        # Loading spinner
│   │   ├── Marquee.jsx       # Scrolling text banner
│   │   ├── Navbar.jsx        # Navigation bar
│   │   └── Newspaper.jsx     # Newspaper-style gallery
│   ├── pages/
│   │   ├── Accomplishments.jsx  # Awards and achievements
│   │   ├── Certifications.jsx   # Training certifications
│   │   ├── Contact.jsx          # Contact form
│   │   ├── Education.jsx        # Academic background
│   │   ├── ErrorPage.jsx        # 404 error page
│   │   ├── Experience.jsx       # Teaching experience
│   │   ├── Gallery.jsx          # Image and video gallery
│   │   ├── Home.jsx             # Homepage
│   │   ├── Root.jsx             # Root layout
│   │   └── Skills.jsx           # Professional skills
│   ├── Router/
│   │   └── Router.jsx        # Route configuration
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles and animations
├── dist/                     # Production build output
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── firebase.json             # Firebase hosting config
└── README.md                 # This file
```

---

## 🎨 Design System

### **Color Palette**

- **Primary**: Blue (#2563eb, #1e40af)
- **Secondary**: Yellow (#facc15)
- **Accent**: Purple, Green, Orange (for variety)
- **Neutral**: Gray shades for text and backgrounds

### **Typography**

- **Headings**: Bold, large sizes (text-4xl to text-7xl)
- **Body**: Regular weight, readable sizes (text-sm to text-lg)
- **Font Family**: System fonts for optimal performance

### **Spacing**

- Consistent padding and margins using Tailwind scale
- Responsive spacing (px-4, py-8, md:py-12)

### **Components**

- Rounded corners (rounded-xl, rounded-2xl, rounded-3xl)
- Shadows for depth (shadow-lg, shadow-2xl)
- Hover effects for interactivity
- Gradient backgrounds for visual interest

---

## 🌐 Deployment

### **Firebase Hosting**

1. **Install Firebase CLI**

```bash
npm install -g firebase-tools
```

2. **Login to Firebase**

```bash
firebase login
```

3. **Initialize Firebase** (if not already done)

```bash
firebase init hosting
```

- Select "Use an existing project"
- Set public directory to `dist`
- Configure as single-page app: Yes
- Don't overwrite index.html

4. **Build the Project**

```bash
npm run build
```

5. **Deploy**

```bash
firebase deploy
```

Your site will be live at: `https://your-project.web.app`

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🐛 Known Issues

- Minor CSS linter warnings (non-breaking, gradient class naming)
- EmailJS requires manual credential setup

---

## 🔧 Customization

### **Update Content**

1. **Personal Information**: Edit `src/pages/Contact.jsx`
2. **Experience**: Edit `src/pages/Experience.jsx`
3. **Skills**: Edit `src/pages/Skills.jsx`
4. **Certifications**: Edit `src/pages/Certifications.jsx`
5. **Education**: Edit `src/pages/Education.jsx`
6. **Accomplishments**: Edit `src/pages/Accomplishments.jsx`

### **Update Images**

- Banner images: `src/assets/images/banner/`
- Gallery images: `src/assets/images/gallery/`
- Videos: `src/assets/videos/`
- Logo: `src/assets/logo.png`

### **Change Theme Colors**

Edit Tailwind classes in components:

- Primary: `bg-blue-600` → `bg-[your-color]`
- Accent: `bg-yellow-400` → `bg-[your-color]`

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Mainuddin Kabir**

- Kyokushin Karate Instructor
- 1st Dan Black Belt
- Phone: +880 1897-033959
- Location: Dhaka, Bangladesh

---

## 🙏 Acknowledgments

- Sensei Arifur Rahman (4th Dan, IKO Japan) - Training and mentorship
- Bangladesh Kyokushin Karate Academy
- All students and supporters

---

## 📞 Support

For issues or questions about this portfolio website, please contact:

- Email: [Your Email]
- Phone: +880 1897-033959
- WhatsApp: [Click to Chat](https://wa.me/8801897033959)

---

**Built with ❤️ and 🥋 by Mainuddin Kabir**
