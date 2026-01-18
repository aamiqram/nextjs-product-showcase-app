"use client";

import Link from "next/link";
import Image from "next/image";

export default function ItemCard({ item }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Item Image */}
      <figure className="relative h-48 bg-base-200">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>

      {/* Item Details */}
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          {item.stock < 10 && (
            <div className="badge badge-warning">Low Stock</div>
          )}
        </h2>

        <p className="text-sm text-base-content/70 line-clamp-2">
          {item.description}
        </p>

        {/* Price & Category */}
        <div className="flex justify-between items-center mt-2">
          <div className="badge badge-outline">{item.category}</div>
          <span className="text-2xl font-bold text-primary">${item.price}</span>
        </div>

        {/* View Details Button */}
        <div className="card-actions justify-end mt-4">
          <Link href={`/items/${item.id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
