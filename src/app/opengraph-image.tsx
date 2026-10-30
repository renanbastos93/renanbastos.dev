import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Renan Bastos · Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#0c1015",
        color: "#e7ecf2",
        fontFamily: "monospace",
      }}
    >
      <div style={{ fontSize: 32, color: "#5fcbe8" }}>~/renanbastos</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>Renan Bastos</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#9ba5b3" }}>
          Backend · Go · AI agents · 10+ years
        </div>
      </div>
      <div style={{ fontSize: 28, color: "#5fcbe8" }}>$ go run ./renan ▍</div>
    </div>,
    size,
  );
}
