import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Default Title";

    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#4F46E5",
              backgroundImage:
                "radial-gradient(circle at 25px 25px, #6366F1 2%, transparent 0%), radial-gradient(circle at 75px 75px, #6366F1 2%, transparent 0%)",
              backgroundSize: "100px 100px",
              opacity: 0.9,
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "40px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "20px",
              maxWidth: "80%",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                fontWeight: "bold",
                color: "#1F2937",
                lineHeight: 1.2,
                margin: "0",
                padding: "20px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "32px",
                color: "#4B5563",
                margin: "0",
                marginTop: "10px",
              }}
            >
              Generated with Next.js OG Image Generation
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}

// pages/_app.tsx や app/layout.tsx での使用例
export const metadata = {
  openGraph: {
    title: "ページタイトル",
    images: [
      {
        url: "/api/og?title=ページタイトル",
        width: 1200,
        height: 630,
      },
    ],
  },
};
