// Mock database for storing items
// In a real app, this would be MongoDB, PostgreSQL, etc.

let items = [
  {
    id: "1",
    name: "Premium Laptop Stand",
    description:
      "Ergonomic aluminum laptop stand with adjustable height. Perfect for improving your workspace posture.",
    price: 49.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    stock: 25,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Wireless Mechanical Keyboard",
    description:
      "RGB backlit mechanical keyboard with blue switches. Wireless connectivity with 40-hour battery life.",
    price: 129.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    stock: 15,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Noise Cancelling Headphones",
    description:
      "Premium over-ear headphones with active noise cancellation. 30-hour battery life and supreme comfort.",
    price: 299.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    stock: 10,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Smart Watch Pro",
    description:
      "Feature-packed smartwatch with health tracking, GPS, and 7-day battery life. Water resistant to 50m.",
    price: 399.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    stock: 20,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "USB-C Hub 7-in-1",
    description:
      "Versatile USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery. Compact and portable.",
    price: 39.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500",
    stock: 50,
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    name: "Ergonomic Mouse",
    description:
      "Vertical ergonomic mouse designed to reduce wrist strain. Wireless with adjustable DPI settings.",
    price: 59.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    stock: 30,
    createdAt: new Date().toISOString(),
  },
];

// Get all items
export function getAllItems() {
  return items;
}

// Get item by ID
export function getItemById(id) {
  return items.find((item) => item.id === id);
}

// Add new item
export function addItem(itemData) {
  const newItem = {
    id: String(items.length + 1),
    ...itemData,
    createdAt: new Date().toISOString(),
  };
  items.push(newItem);
  return newItem;
}

// Mock credentials for login
export const MOCK_USER = {
  email: "demo@example.com",
  password: "password123",
};
