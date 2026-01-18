import ItemCard from "@/components/ItemCard";
import { getAllItems } from "@/lib/mockDb";

// Mark this page as dynamic to prevent build errors
export const dynamic = "force-dynamic";

// Get items directly from mock database (no API call needed during build)
async function getItems() {
  try {
    // During build, just use the mock database directly
    // In production, this will still work fine
    const items = getAllItems();
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Our Premium Collection
            </h1>
            <p className="text-xl md:text-2xl text-white/80">
              Discover the finest tech products, curated just for you
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📦</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              No Products Yet
            </h2>
            <p className="text-xl text-gray-600">
              Check back soon for amazing deals!
            </p>
          </div>
        ) : (
          <>
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
              <div className="text-gray-700 font-medium">
                Showing{" "}
                <span className="font-bold text-gray-900">{items.length}</span>{" "}
                products
              </div>
              <div className="flex gap-4">
                <select className="select select-bordered select-sm bg-white">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Audio</option>
                  <option>Wearables</option>
                  <option>Accessories</option>
                </select>
                <select className="select select-bordered select-sm bg-white">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
