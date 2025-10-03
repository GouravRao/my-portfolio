import React, { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Work Experience", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        width: "100vw",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        background: "none",
      }}
    >
      <div
        style={{
          marginTop: 18,
          background: "rgba(30,32,36,0.65)",
          borderRadius: 32,
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.18)",
          border: "1.5px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "0.5rem 2.5rem",
          pointerEvents: "auto",
          minWidth: 340,
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {navItems.map((item, idx) => (
            <li key={item.label} style={{ display: "flex", alignItems: "center" }}>
              {idx === 0 && (
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#a3ff7c",
                    marginRight: 8,
                  }}
                />
              )}
              <a
                href={item.href}
                style={{
                  color: idx === 0 ? "#fff" : "#bdbdbd",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1.08rem",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                  padding: "2px 0",
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#fff")}
                onMouseOut={e => (e.currentTarget.style.color = idx === 0 ? "#fff" : "#bdbdbd")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
