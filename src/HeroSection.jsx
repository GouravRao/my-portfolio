import React from "react";

export default function HeroSection() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "55vh",
        padding: "3.5rem 0 2.5rem 0",
        maxWidth: 1200,
        margin: "0 auto",
        gap: "3.5rem",
        border: "2px solid #a78bfa",
        background: "rgba(30,32,36,0.45)",
        borderRadius: 32,
      }}
    >
      <div style={{ flex: 1, minWidth: 320 }}>
        <div style={{ color: "#bdbdbd", fontSize: 22, marginBottom: 18, fontWeight: 400 }}>
          Hi, I am Gourav Rao Nagineni
        </div>
        <div style={{
          fontSize: 64,
          fontWeight: 600,
          color: "#ededed",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          marginBottom: 0,
        }}>
          Software<br />Developer
        </div>
      </div>
      <div style={{ flex: 2, minWidth: 320, color: "#bdbdbd", fontSize: 28, fontWeight: 400, lineHeight: 1.25 }}>
        Software Developer with 3+ years in Pega and ServiceNow, now building scalable solutions at <span style={{ color: "#a78bfa", fontWeight: 500 }}> Cohesive Digital</span>.
      </div>
    </section>
  );
}
