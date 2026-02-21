import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "HomamDev – Creative Developer & Designer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
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
          backgroundColor: "#0a0a0f",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "3px",
            background: "linear-gradient(90deg, transparent, #8b5cf6, transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            zIndex: 1,
          }}
        >
          {/* Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(139,92,246,0.3)",
              borderRadius: "100px",
              padding: "8px 20px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#8b5cf6",
              }}
            />
            <span
              style={{
                color: "#a78bfa",
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
            >
              Portfolio
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "88px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Homam
          </div>

          {/* Role */}
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.6)",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            Creative Developer & Designer
          </div>

          {/* Tech tags */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            {["Unity · C#", "Next.js · React", "After Effects"].map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "15px",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            color: "rgba(255,255,255,0.3)",
            fontSize: "16px",
            letterSpacing: "0.05em",
          }}
        >
          homamdev.de
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "3px",
            background: "linear-gradient(90deg, transparent, #8b5cf6, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  )
}
