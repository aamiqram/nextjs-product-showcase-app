# NextShop - Next.js 16 E-Commerce Application

A modern, full-stack e-commerce application built with Next.js 16 (App Router), demonstrating server-side rendering, API routes, authentication, and responsive design using Tailwind CSS and DaisyUI.

## 📋 Project Description

**NextShop** is a complete e-commerce platform that showcases modern web development practices using Next.js 16. The application features a beautiful landing page, product catalog, detailed product views, and a protected admin area for adding new products. Built with a focus on performance, SEO, and user experience.

### Key Highlights:

- 🚀 **Server-Side Rendering** for optimal performance and SEO
- 🔐 **Cookie-based Authentication** with route protection
- 📱 **Fully Responsive** design that works on all devices
- 🎨 **Modern UI** with Tailwind CSS and DaisyUI components
- 🔥 **Toast Notifications** for user feedback
- 📦 **File-based Routing** with Next.js App Router
- 🛡️ **Middleware Protection** for secure routes

---

## 🎯 Features Implemented

### ✅ Core Features

1. **Landing Page (7 Sections)**
   - Hero section with call-to-action
   - Features showcase
   - Statistics display
   - Category navigation
   - Customer testimonials
   - Newsletter subscription
   - Final call-to-action
   - Responsive Navbar with authentication status
   - Comprehensive Footer

2. **Authentication System**
   - Mock login with email/password validation
   - Cookie-based session management
   - Protected routes using middleware
   - Automatic redirect for unauthenticated users
   - Login status in navbar
   - Logout functionality

3. **Product Catalog (Items List Page)**
   - Grid layout of product cards
   - Product images, names, prices, categories
   - Stock status indicators
   - Responsive design (1/2/3 columns)
   - "View Details" navigation
   - Publicly accessible

4. **Product Details Page**
   - Full product information display
   - Large product image
   - Detailed description
   - Stock availability status
   - Feature list
   - Breadcrumb navigation
   - Back to products link
   - Publicly accessible

5. **Add Product Page (Protected)**
   - Authentication required
   - Complete form with validation
   - Fields: name, description, price, category, image, stock
   - Toast notification on success
   - Automatic redirect after adding
   - Form reset after submission
   - Cancel option

### 🎨 UI/UX Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark/Light Theme**: DaisyUI theme support (can be toggled)
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages
- **Accessibility**: Semantic HTML and ARIA labels

---

## 🛠️ Technologies Used

| Technology          | Version | Purpose                         |
| ------------------- | ------- | ------------------------------- |
| **Next.js**         | 16.x    | React framework with App Router |
| **React**           | 19.x    | UI library                      |
| **Tailwind CSS**    | 4.1     | Utility-first CSS framework     |
| **DaisyUI**         | 5.0     | Tailwind CSS component library  |
| **react-hot-toast** | 2.4.1   | Toast notifications             |
| **js-cookie**       | 3.0.5   | Cookie management (optional)    |

---

## 📦 Installation & Setup

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- Code editor (VS Code recommended)

### Step-by-Step Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd job-portal-nextjs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Tailwind CSS browserslist** (for Turbopack compatibility)

   ```bash
   npm pkg set browserslist="> 1%"
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:3000`
   - You should see the landing page

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click!

**Deployment steps:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🗺️ Route Summary

| Route              | Type      | Authentication | Description                         |
| ------------------ | --------- | -------------- | ----------------------------------- |
| `/`                | Public    | No             | Landing page with 7 sections        |
| `/login`           | Public    | No             | Login page with mock authentication |
| `/items`           | Public    | No             | Product catalog/list page           |
| `/items/[id]`      | Public    | No             | Individual product details          |
| `/add-item`        | Protected | **Yes**        | Add new product (admin)             |
| `/api/auth/login`  | API       | No             | Login endpoint                      |
| `/api/auth/logout` | API       | No             | Logout endpoint                     |
| `/api/auth/status` | API       | No             | Check auth status                   |
| `/api/items`       | API       | Mixed          | GET (public), POST (protected)      |
| `/api/items/[id]`  | API       | No             | Get single item                     |

### Route Protection

Protected routes (`/add-item`) automatically redirect unauthenticated users to `/login` with a return URL parameter. After successful login, users are redirected back to their intended destination.

---

## 🔐 Login Credentials

Use these credentials to test the authentication:

```
Email: demo@example.com
Password: password123
```

**Note:** These are hardcoded mock credentials for demonstration purposes. In production, you would use a proper authentication service like NextAuth.js with a database.

---

## 📁 Project Structure

```
job-portal-nextjs/
│
├── app/                          # Next.js App Router
│   ├── layout.js                # Root layout (Navbar, Footer)
│   ├── page.js                  # Landing page (/)
│   ├── globals.css              # Global styles
│   │
│   ├── login/
│   │   └── page.js              # Login page
│   │
│   ├── items/
│   │   ├── page.js              # Product list
│   │   └── [id]/
│   │       └── page.js          # Product details
│   │
│   ├── add-item/
│   │   └── page.js              # Add product (protected)
│   │
│   └── api/                     # API Routes
│       ├── auth/
│       │   ├── login/route.js   # Login API
│       │   ├── logout/route.js  # Logout API
│       │   └── status/route.js  # Auth status API
│       └── items/
│           ├── route.js         # Items CRUD
│           └── [id]/route.js    # Single item
│
├── components/                  # Reusable components
│   ├── Navbar.js               # Navigation bar
│   ├── Footer.js               # Footer
│   ├── ItemCard.js             # Product card
│   └── Toast.js                # Toast wrapper
│
├── lib/                        # Utility functions
│   ├── auth.js                 # Auth helpers
│   └── mockDb.js               # Mock database
│
├── middleware.js               # Route protection
├── next.config.mjs            # Next.js config
├── postcss.config.mjs         # PostCSS config
├── package.json               # Dependencies
└── README.md                  # This file
```

---

## 🎓 Next.js Concepts Explained

### For React Developers Coming to Next.js

#### 1. **App Router vs Pages Router**

- Next.js 16 uses the **App Router** (app directory)
- File structure determines routes automatically
- No need for React Router!

#### 2. **Server Components vs Client Components**

- **Server Components** (default): Render on server, better performance
- **Client Components**: Need `'use client'` directive, use hooks/state

```javascript
// Server Component (default)
export default function Page() {
  return <div>I render on the server!</div>
}

// Client Component (needs 'use client')
'use client'
export default function Page() {
  const [count, setCount] = useState(0)
  return <div>I can use hooks!</div>
}
```

#### 3. **API Routes**

- Built-in backend! No need for separate Express server
- Create APIs in `app/api` directory

```javascript
// app/api/hello/route.js
export async function GET() {
  return Response.json({ message: "Hello!" });
}
```

#### 4. **File-based Routing**

| File                     | Route        |
| ------------------------ | ------------ |
| `app/page.js`            | `/`          |
| `app/about/page.js`      | `/about`     |
| `app/blog/[id]/page.js`  | `/blog/123`  |
| `app/api/users/route.js` | `/api/users` |

#### 5. **Data Fetching**

- **Server Components**: Use `async/await` directly
- **Client Components**: Use `useEffect` + `fetch`

---

## 🔧 Configuration Files Explained

### `postcss.config.mjs`

Configures PostCSS to use Tailwind CSS:

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### `next.config.mjs`

Next.js configuration for images:

```javascript
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};
```

### `app/globals.css`

Global styles with Tailwind and DaisyUI:

```css
@import "tailwindcss";
@plugin "daisyui";
```

---

## 🚀 Features Deep Dive

### Authentication Flow

1. **User visits protected page** → Middleware checks cookie
2. **No cookie** → Redirect to `/login?redirect=/add-item`
3. **User logs in** → API validates credentials
4. **Success** → Set cookie, redirect to original page
5. **Logout** → Clear cookie, refresh navbar

### Mock Database

Located in `lib/mockDb.js`:

- In-memory storage (array)
- Pre-populated with 6 sample products
- Functions: `getAllItems()`, `getItemById()`, `addItem()`
- **For production**: Replace with real database (MongoDB, PostgreSQL, etc.)

### Middleware Protection

`middleware.js` runs before every request:

```javascript
export function middleware(request) {
  // Check if route is protected
  // Verify auth cookie
  // Redirect if needed
}
```

---

## 🎨 Styling Guide

### Tailwind CSS Utilities

Common utilities used:

- `container mx-auto` - Centered container
- `px-4 py-12` - Padding
- `grid grid-cols-1 md:grid-cols-3` - Responsive grid
- `flex gap-4` - Flexbox with gap

### DaisyUI Components

Components used:

- `btn btn-primary` - Primary button
- `card` - Card container
- `navbar` - Navigation bar
- `input input-bordered` - Input field
- `badge` - Status badge
- `alert` - Alert messages

### Customization

Change theme in `app/layout.js`:

```javascript
<html data-theme="dark">  // or "light", "cupcake", etc.
```

---

## 📝 Code Comments Guide

All code files include detailed comments:

- **Purpose**: What the file does
- **Logic**: How features work
- **Sections**: Visual separators for code blocks
- **Parameters**: What functions expect
- **Returns**: What functions return

Example:

```javascript
// ============================================
// FILE: app/page.js
// PURPOSE: Landing page with 7 sections
// ============================================

// Section 1: Hero - Main welcome area
<section className="hero">{/* Hero content */}</section>
```

---

## 🐛 Common Issues & Solutions

### Issue 1: Turbopack CSS Issues

**Solution**: Add browserslist to package.json

```bash
npm pkg set browserslist="> 1%"
```

### Issue 2: Images Not Loading

**Solution**: Add domain to `next.config.mjs`:

```javascript
images: {
  remotePatterns: [{ protocol: "https", hostname: "your-domain.com" }];
}
```

### Issue 3: Middleware Not Working

**Solution**: Check middleware.js config matcher:

```javascript
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

### Issue 4: "use client" Missing

**Solution**: Add to top of files using hooks:

```javascript
"use client";
import { useState } from "react";
```

---

## 📚 Learning Resources

### Next.js Documentation

- Official Docs: https://nextjs.org/docs
- Learn Next.js: https://nextjs.org/learn
- App Router Guide: https://nextjs.org/docs/app

### Tailwind CSS

- Documentation: https://tailwindcss.com/docs
- DaisyUI Components: https://daisyui.com/components

### React

- React Docs: https://react.dev

---

## 🔄 Future Enhancements

Possible additions to extend this project:

- [ ] Real database integration (MongoDB/PostgreSQL)
- [ ] NextAuth.js for Google OAuth
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] User profiles
- [ ] Product reviews & ratings
- [ ] Search & filtering
- [ ] Pagination
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Image upload functionality
- [ ] Product variants (size, color)
- [ ] Wishlist feature

---

## 👨‍💻 Developer Notes

### Next.js 16 Key Differences

1. **Async Server Components**: All server components can be async
2. **Server Actions**: Form submissions without API routes
3. **Improved Routing**: Better dynamic routes support
4. **Streaming**: Built-in streaming support for data

### Best Practices Followed

✅ Proper separation of client/server components  
✅ Error boundaries for error handling  
✅ Loading states for better UX  
✅ Responsive design mobile-first  
✅ SEO-friendly with metadata  
✅ Clean, commented code  
✅ Consistent naming conventions  
✅ Modular component structure

---

## 📄 License

This project is open-source and available for educational purposes.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest features
- Submit pull requests

---

## 📧 Contact

For questions or feedback, please contact:

- **Email**: aamiqram24@gmail.com

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind Labs for Tailwind CSS
- DaisyUI for beautiful components
- Unsplash for product images

---

**Built with ❤️ using Next.js 16, React 19, Tailwind CSS 4.1, and DaisyUI 5.0**
