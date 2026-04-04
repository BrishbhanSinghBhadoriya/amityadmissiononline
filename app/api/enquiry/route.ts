import { NextRequest, NextResponse, after } from "next/server";
import { getCollection } from "@/lib/mongodb";
import type { Document } from "mongodb";

export const dynamic = "force-dynamic";

type EnquiryDoc = Document & {
  name: string;
  email: string;
  phone: string;
  course?: string;
  city: string;
  state?: string;
  qualification?: string;
  createdAt: Date;
  source?: string;
  campaign?: string;
  university?: string;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();

    const { name, email, phone, course, city, state, qualification, source, campaign, university } = body ?? {};

    const location: string | undefined = typeof city === "string" ? city : typeof state === "string" ? state : undefined;

    if (!name || !email || !phone || !location || typeof name !== "string" || typeof email !== "string" || typeof phone !== "string" || typeof location !== "string") {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const enquiryData = {
      name,
      email,
      phone,
      course,
      city: location,
      state,
      qualification,
      createdAt: new Date(),
      source: source ?? req.headers.get("referer") ?? "amity-online",
      campaign: campaign ?? undefined,
      university: typeof university === "string" ? university : undefined,
    };

    after(async () => {
      try {
        const enquiries = await getCollection<EnquiryDoc>("enquiries");
        await enquiries.insertOne(enquiryData);

        const CRM_ENDPOINT = process.env.API_ENDPOINT;
        if (CRM_ENDPOINT) {
          try {
            await fetch(CRM_ENDPOINT, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: enquiryData.name,
                email: enquiryData.email,
                phone: enquiryData.phone,
                course: enquiryData.course,
                city: enquiryData.city,
                state: enquiryData.state,
                qualification: enquiryData.qualification,
                source: enquiryData.source,
                campaign: enquiryData.campaign,
                university: enquiryData.university,
              }),
            });
          } catch (crmErr) {
            console.error("CRM Error:", crmErr);
          }
        }
      } catch (err) {
        console.error("Background enquiry save error:", err);
      }
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
