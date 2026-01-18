import ItemCard from "@/components/ItemCard";

// Fetch items from API
async function getItems() {
  try {
    // In production, use full URL: process.env.NEXT_PUBLIC_API_URL
    const response = await fetch("http://localhost:3000/api/items", {
      cache: "no-store", // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Our Products</h1>
        <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
          Discover our curated selection of premium tech products. Quality
          guaranteed, fast shipping.
        </p>
      </div>

      {/* Items Grid */}
      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl">No items found. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
