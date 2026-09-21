import { ImageResponse } from "next/og";

export const alt = "NEXONS GROUP — Next-gen digital solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05070d",
          padding: 72,
          color: "#f4f6fb",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: 4,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#3b82ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            N
          </div>
          NEXONS GROUP
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Next-gen digital solutions for operators in Pakistan and worldwide.
          </div>
          <div style={{ fontSize: 26, color: "#8b93a7" }}>
            Nexon KDS · Nexon POS · Flockify · Custom software
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
