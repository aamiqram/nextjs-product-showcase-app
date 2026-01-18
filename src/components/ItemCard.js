"use client";

import Link from "next/link";
import Image from "next/image";

export default function ItemCard({ item }) {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Stock Badge */}
        {item.stock < 10 && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
            Only {item.stock} left
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full">
          {item.category}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {item.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${item.price}
            </div>
          </div>
          <Link
            href={`/items/${item.id}`}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
