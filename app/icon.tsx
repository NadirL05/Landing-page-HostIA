import { ImageResponse } from "next/og";

// File convention: generates favicon.ico-equivalent for the <link rel="icon">
// tag automatically. No static favicon.ico/icon.png exists in this repo, so
// this generates one here instead of shipping a guessed binary asset. No
// dynamic params, so the default Node runtime lets Next statically generate
// it once at build time.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const OBSIDIAN = "#0a0704";
const CHAMPAGNE_BRIGHT = "#ffb066";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: OBSIDIAN,
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "serif",
            color: CHAMPAGNE_BRIGHT,
          }}
        >
          H
        </div>
      </div>
    ),
    { ...size }
  );
}
