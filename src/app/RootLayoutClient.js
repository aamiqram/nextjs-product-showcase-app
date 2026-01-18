"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

export default function RootLayoutClient({ children }) {
  return (
    <>
      {/* Toast notifications */}
      <Toast />

      {/* Navigation bar - shown on all pages */}
      <Navbar />

      {/* Main content area - different for each page */}
      <main className="min-h-screen">{children}</main>

      {/* Footer - shown on all pages */}
      <Footer />
    </>
  );
}
