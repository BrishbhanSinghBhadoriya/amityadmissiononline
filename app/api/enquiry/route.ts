import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { name, email, phone, course, city } = body ?? {};

    if (
      !name ||
      !email ||
      !phone ||
      !city ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof city !== "string"
    ) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const enquiries = await getCollection<{
      name: string;
      email: string;
      phone: string;
      course?: string;
      city: string;
      createdAt: Date;
      source?: string;
    }>("enquiries");

    await enquiries.insertOne({
      name,
      email,
      phone,
      course,
      city,
      createdAt: new Date(),
      source: req.headers.get("referer") ?? "amity-online",
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
