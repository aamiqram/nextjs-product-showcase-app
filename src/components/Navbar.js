"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check authentication status
  useEffect(() => {
    checkAuthStatus();
  }, [pathname]);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch("/api/auth/status");
      const data = await response.json();
      setIsLoggedIn(data.authenticated);
      if (data.user) {
        setUserEmail(data.user.email);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setIsLoggedIn(false);
      setUserEmail("");
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const isActiveLink = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-2xl">🛍️</span>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
              NextShop
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                isActiveLink("/")
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link
              href="/items"
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                isActiveLink("/items")
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Products
            </Link>
            {isLoggedIn && (
              <Link
                href="/add-item"
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  isActiveLink("/add-item")
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Add Product
              </Link>
            )}
          </div>

          {/* Auth Section - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                      {userEmail.charAt(0).toUpperCase()}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-white rounded-2xl w-52 border border-gray-200"
                  >
                    <li className="menu-title px-4 py-2">
                      <span className="text-xs font-semibold text-gray-600">
                        {userEmail}
                      </span>
                    </li>
                    <li>
                      <Link href="/add-item" className="rounded-xl">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        Add Product
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-red-600 rounded-xl"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white rounded-2xl w-52 border border-gray-200"
              >
                <li>
                  <Link href="/" className="rounded-xl">
                    🏠 Home
                  </Link>
                </li>
                <li>
                  <Link href="/items" className="rounded-xl">
                    📦 Products
                  </Link>
                </li>
                {isLoggedIn && (
                  <li>
                    <Link href="/add-item" className="rounded-xl">
                      ➕ Add Product
                    </Link>
                  </li>
                )}
                <div className="divider my-1"></div>
                {isLoggedIn ? (
                  <>
                    <li className="menu-title px-4">
                      <span className="text-xs font-semibold text-gray-600">
                        {userEmail}
                      </span>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-red-600 rounded-xl"
                      >
                        🚪 Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link href="/login" className="rounded-xl">
                      🔐 Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
