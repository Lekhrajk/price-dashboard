# Price Dashboard - React Application

A modern, responsive pricing dashboard built with React that showcases plans, offers, and real-time countdown timers with an intuitive user interface.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📁 Project Structure

```
price-dashboard/
├── src/
│   ├── components/
│   │   ├── cards/pricing/          # Pricing and offer cards
│   │   ├── layouts/                # Main layout and sidebar
│   │   ├── messages/               # Common message components
│   │   └── skeleton/               # Loading state components
│   ├── pages/pricing/              # Main pricing page
│   ├── apis/                       # API integration layer
│   ├── constants/                  # Static data and utilities
│   └── utils/                      # Utility functions
├── public/                         # Static assets
└── tailwind.config.js             # Tailwind CSS configuration
```

## 🎯 Key Features

### **Responsive Design**
- **Mobile-first approach** with floating sidebar overlay
- **Auto-adaptive layout** that works on all screen sizes
- **Smooth animations** and transitions for better UX

### **Real-time Countdown Timers**
- **Live countdown** for offer expiration times
- **Color-coded urgency** (blue → orange → red with pulse)
- **Smart formatting** (days, hours, minutes, seconds)
- **CSP-compliant** implementation without security warnings

### **Smart State Management**
- **Local storage persistence** for selected plan preferences
- **Responsive state handling** for sidebar visibility
- **Loading states** with skeleton components
- **Error handling** for API calls

## 🛠 Technical Implementation

### **State Management Strategy**
```javascript
// Local storage for user preferences
const savedPlanId = localStorage.getItem('selectedPlanId');

// Responsive state for sidebar
const [isMobile, setIsMobile] = useState(false);
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// Loading states for better UX
const [isLoading, setIsLoading] = useState(true);
const [isOffersLoading, setIsOffersLoading] = useState(true);
```

### **useEffect Patterns**
- **Screen size detection** with resize listeners
- **Timer cleanup** to prevent memory leaks
- **Body overflow control** for mobile overlays
- **API data fetching** with proper error handling

### **Data Persistence**
- **Plan selection** saved to localStorage
- **User preferences** persist across sessions
- **Fallback handling** for missing saved data

### **Tailwind CSS Usage**
- **Custom gradients** and animations
- **Responsive breakpoints** (sm, md, lg, xl)

## 🎨 UI/UX Highlights

### **Component Architecture**
- **Reusable card components** for pricing and offers
- **Skeleton loaders** for smooth loading experience
- **Responsive sidebar** with mobile overlay
- **Interactive elements** with hover states

### **User Experience**
- **Progressive loading** with skeleton screens
- **Intuitive navigation** with visual feedback

## 🔧 Development Features

### **Code Quality**
- **ESLint** configuration for code consistency
- **Component-based** architecture
- **Prop validation** and error boundaries
- **Clean code** practices with meaningful names


## 📱 Responsive Behavior

### **Mobile (< 768px)**
- Sidebar hidden by default
- Floating overlay on toggle
- Hamburger menu button
- Backdrop click to close
- Auto-close on navigation

### **Desktop (≥ 768px)**
- Sidebar always visible
- Traditional layout
- No hamburger button
- Full-width content area

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies** with `npm install`
3. **Start development** with `npm start`
4. **Build for production** with `npm run build`
