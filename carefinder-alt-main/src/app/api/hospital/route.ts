import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      "https://getreliancehealth.com/wp-content/themes/getreliancehealthWPTheme/assets/cache/providers.json"
    );
    const hospital = response.data.data;
    return NextResponse.json({ hospital });
  } catch (error) {
    console.error("There was an error fetching the hospital data:", error);
    return NextResponse.json(
      { error: "Failed to fetch hospital data" },
      { status: 500 }
    );
  }
}
