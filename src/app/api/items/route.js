import { NextResponse } from "next/server";
import { getAllItems, addItem } from "@/lib/mockDb";
import { isAuthenticated } from "@/lib/auth";

// GET all items - public endpoint
export async function GET() {
  try {
    const items = getAllItems();
    return NextResponse.json({ success: true, items });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch items" },
      { status: 500 }
    );
  }
}

// POST new item - protected endpoint
export async function POST(request) {
  try {
    // Check authentication
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { name, description, price, category, image, stock } = body;

    // Validate required fields
    if (!name || !description || !price || !category) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Add item to database
    const newItem = addItem({
      name,
      description,
      price: parseFloat(price),
      category,
      image:
        image ||
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      stock: parseInt(stock) || 0,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Item added successfully",
        item: newItem,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to add item" },
      { status: 500 }
    );
  }
}
