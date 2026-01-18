"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function AddItemPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Electronics",
    image: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("🎉 Product added successfully!");
        // Reset form
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "Electronics",
          image: "",
          stock: "",
        });
        // Redirect to items page after 2 seconds
        setTimeout(() => {
          router.push("/items");
        }, 2000);
      } else {
        toast.error(data.message || "Failed to add product");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      {/* Header */}
      <div className="container mx-auto mb-8">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="text-gray-500 hover:text-gray-900">
                Products
              </Link>
            </li>
            <li className="text-gray-900 font-medium">Add Product</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <div className="container mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
          <svg
            className="w-8 h-8 text-white"
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
        </div>
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
          Add New Product
        </h1>
        <p className="text-xl text-gray-600">
          Fill in the details to add a new product to your catalog
        </p>
      </div>

      {/* Form */}
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-gray-900 font-bold mb-2 text-lg">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g., Wireless Bluetooth Headphones"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-900 font-bold mb-2 text-lg">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                placeholder="Enter a detailed product description..."
                rows="4"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* Price and Stock - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  Price ($) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Stock */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">
                  Stock Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="stock"
                  placeholder="0"
                  min="0"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-900 font-bold mb-2 text-lg">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="Electronics">📱 Electronics</option>
                <option value="Audio">🎧 Audio</option>
                <option value="Wearables">⌚ Wearables</option>
                <option value="Accessories">🔌 Accessories</option>
              </select>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-gray-900 font-bold mb-2 text-lg">
                Image URL{" "}
                <span className="text-gray-400 text-sm font-normal">
                  (Optional)
                </span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.image}
                onChange={handleChange}
              />
              <p className="text-sm text-gray-500 mt-2">
                Leave empty to use a default image
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Adding Product...
                  </span>
                ) : (
                  "+ Add Product to Catalog"
                )}
              </button>
            </div>

            {/* Cancel Button */}
            <Link
              href="/items"
              className="block w-full py-4 bg-gray-100 text-gray-900 font-bold text-center rounded-xl hover:bg-gray-200 transition-all duration-300"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
