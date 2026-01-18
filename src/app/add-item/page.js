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
        toast.success("Product added successfully!");
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
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-8">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/items">Products</Link>
          </li>
          <li>Add Product</li>
        </ul>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Add New Product</h1>
        <p className="text-lg text-base-content/70">
          Fill in the details below to add a new product to the catalog
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Product Name */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-semibold">
                    Product Name *
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g., Wireless Mouse"
                  className="input input-bordered"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Description */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-semibold">
                    Description *
                  </span>
                </label>
                <textarea
                  name="description"
                  placeholder="Enter product description"
                  className="textarea textarea-bordered h-24"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Price and Stock - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Price */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Price ($) *
                    </span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="input input-bordered"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Stock */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Stock Quantity *
                    </span>
                  </label>
                  <input
                    type="number"
                    name="stock"
                    placeholder="0"
                    min="0"
                    className="input input-bordered"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Category */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-semibold">Category *</span>
                </label>
                <select
                  name="category"
                  className="select select-bordered"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Audio">Audio</option>
                  <option value="Wearables">Wearables</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              {/* Image URL */}
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text font-semibold">Image URL</span>
                  <span className="label-text-alt text-base-content/60">
                    Optional
                  </span>
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered"
                  value={formData.image}
                  onChange={handleChange}
                />
                <label className="label">
                  <span className="label-text-alt">
                    Leave empty to use default image
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className={`btn btn-primary btn-lg w-full ${loading ? "loading" : ""}`}
                  disabled={loading}
                >
                  {loading ? "Adding Product..." : "Add Product"}
                </button>
              </div>

              {/* Cancel Button */}
              <div className="form-control mt-3">
                <Link href="/items" className="btn btn-outline btn-lg w-full">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
