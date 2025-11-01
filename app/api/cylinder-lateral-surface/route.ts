import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const apiUrl = process.env.CYLINDER_LATERAL_SURFACE_API_URL;
    if (!apiUrl) {
        throw new Error("CYLINDER_LATERAL_SURFACE_API_URL is not defined.");
    }

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
}
