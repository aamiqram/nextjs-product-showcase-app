import { NextResponse } from "next/server";
import { getItemById } from "@/lib/mockDb";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const item = getItemById(id);

    if (!item) {
      return NextResponse.json(
        { success: false, message: "Item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, item });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch item" },
      { status: 500 }
    );
  }
}
