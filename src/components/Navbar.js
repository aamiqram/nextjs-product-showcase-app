"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on component mount and route changes
  useEffect(() => {
    checkAuthStatus();
  }, [pathname]);

  // Function to check if user is authenticated
  const checkAuthStatus = async () => {
    try {
      const response = await fetch("/api/auth/status");
      const data = await response.json();
      setIsLoggedIn(data.authenticated);
      if (data.user) {
        setUserEmail(data.user.email);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle user logout
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (response.ok) {
        setIsLoggedIn(false);
        setUserEmail("");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Helper function to check if link is active
  const isActiveLink = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="navbar bg-base-100 shadow-lg sticky top-0 z-50 border-b border-base-200">
      <div className="container mx-auto px-4">
        {/* Logo/Brand Section */}
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost text-xl md:text-2xl font-bold normal-case"
          >
            <span className="text-primary">🛍️</span>
            <span className="hidden sm:inline ml-2">NextShop</span>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <Link
                href="/"
                className={isActiveLink("/") ? "active font-semibold" : ""}
              >
                🏠 Home
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className={isActiveLink("/items") ? "active font-semibold" : ""}
              >
                📦 Products
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link
                  href="/add-item"
                  className={
                    isActiveLink("/add-item") ? "active font-semibold" : ""
                  }
                >
                  ➕ Add Product
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Auth Section - Desktop */}
        <div className="flex-none gap-2 hidden md:flex">
          {isLoading ? (
            <div className="loading loading-spinner loading-sm"></div>
          ) : isLoggedIn ? (
            <div className="flex items-center gap-3">
              {/* User Info Dropdown */}
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar placeholder"
                >
                  <div className="bg-primary text-primary-content rounded-full w-10">
                    <span className="text-xl">
                      {userEmail ? userEmail.charAt(0).toUpperCase() : "U"}
                    </span>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li className="menu-title">
                    <span className="text-xs">{userEmail}</span>
                  </li>
                  <li>
                    <Link href="/add-item">➕ Add Product</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="text-error">
                      🚪 Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href="/login" className="btn btn-primary btn-sm">
              🔐 Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex-none lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/" className={isActiveLink("/") ? "active" : ""}>
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link
                  href="/items"
                  className={isActiveLink("/items") ? "active" : ""}
                >
                  📦 Products
                </Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link
                    href="/add-item"
                    className={isActiveLink("/add-item") ? "active" : ""}
                  >
                    ➕ Add Product
                  </Link>
                </li>
              )}
              <div className="divider my-0"></div>
              {isLoggedIn ? (
                <>
                  <li className="menu-title">
                    <span className="text-xs">{userEmail}</span>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="text-error">
                      🚪 Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link href="/login">🔐 Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
