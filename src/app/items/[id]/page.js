import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Fetch single item from API
async function getItem(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/items/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.item;
  } catch (error) {
    console.error("Error fetching item:", error);
    return null;
  }
}

export default async function ItemDetailsPage({ params }) {
  const { id } = await params;
  const item = await getItem(id);

  // Show 404 if item not found
  if (!item) {
    notFound();
  }

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
          <li>{item.name}</li>
        </ul>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-square bg-base-200 rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          {/* Category Badge */}
          <div className="badge badge-primary mb-4">{item.category}</div>

          {/* Product Name */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.name}</h1>

          {/* Price */}
          <div className="text-4xl font-bold text-primary mb-6">
            ${item.price}
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {item.stock > 10 ? (
              <div className="badge badge-success gap-2">
                ✓ In Stock ({item.stock} available)
              </div>
            ) : item.stock > 0 ? (
              <div className="badge badge-warning gap-2">
                ⚠ Low Stock ({item.stock} left)
              </div>
            ) : (
              <div className="badge badge-error gap-2">✕ Out of Stock</div>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Description</h2>
            <p className="text-lg text-base-content/80 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-base-content/80">
              <li>Premium quality materials</li>
              <li>1-year manufacturer warranty</li>
              <li>Free shipping on orders over $50</li>
              <li>30-day return policy</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              className="btn btn-primary btn-lg flex-1 md:flex-none"
              disabled={item.stock === 0}
            >
              Add to Cart
            </button>
            <Link
              href="/items"
              className="btn btn-outline btn-lg flex-1 md:flex-none"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
