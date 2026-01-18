import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🛍️</span>
              <h3 className="text-xl font-bold">NextShop</h3>
            </div>
            <p className="text-sm text-base-content/80 mb-4">
              Your trusted marketplace for premium tech products. Quality
              guaranteed since 2024.
            </p>
            <div className="flex gap-3">
              <a href="#" className="btn btn-circle btn-ghost btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="btn btn-circle btn-ghost btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="#" className="btn btn-circle btn-ghost btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="link link-hover text-sm">
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="link link-hover text-sm">
                  📦 Products
                </Link>
              </li>
              <li>
                <Link href="/login" className="link link-hover text-sm">
                  🔐 Login
                </Link>
              </li>
              <li>
                <a href="#" className="link link-hover text-sm">
                  📖 About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="link link-hover text-sm">
                  📞 Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-sm">
                  ❓ FAQs
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-sm">
                  🚚 Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-sm">
                  🔄 Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-base-content/80 mb-4">
              Subscribe to get special offers and updates directly to your
              inbox.
            </p>
            <div className="form-control">
              <div className="join">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input input-bordered input-sm join-item w-full"
                />
                <button className="btn btn-primary btn-sm join-item">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-base-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-base-content/70 text-center md:text-left">
              © {currentYear} NextShop. All rights reserved. Built with Next.js
              16 & DaisyUI 5.
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <a href="#" className="link link-hover text-base-content/70">
                Privacy Policy
              </a>
              <a href="#" className="link link-hover text-base-content/70">
                Terms of Service
              </a>
              <a href="#" className="link link-hover text-base-content/70">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn btn-circle btn-primary fixed bottom-8 right-8 shadow-lg hidden md:flex"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </footer>
  );
}
