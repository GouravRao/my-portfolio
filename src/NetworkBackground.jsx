import { useEffect, useRef } from "react";
export default function NetworkBackground({
 nodeCount = 90,
 maxSpeed = 0.6,
 linkDistance = 140,
 linkOpacity = 0.35,
 hoverRepelRadius = 120,
 hoverRepelStrength = 0.035,
 clickSpawn = 8,
 bg = "#0b1220",
 nodeColor = "#9ecbff",
 linkColor = "#64b5ff",
}) {
 const canvasRef = useRef(null);
 const rafRef = useRef(0);
 const stateRef = useRef({
   w: 0,
   h: 0,
   dpr: 1,
   points: [],
    mouse: { x: null, y: null, inside: false },
    ripples: [], // {x, y, radius, alpha}
 });
 useEffect(() => {
   const canvas = canvasRef.current;
   const ctx = canvas.getContext("2d", { alpha: false });
   // set size with devicePixelRatio
   const resize = () => {
     const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
     const w = window.innerWidth;
     const h = window.innerHeight;
     canvas.style.width = w + "px";
     canvas.style.height = h + "px";
     canvas.width = Math.floor(w * dpr);
     canvas.height = Math.floor(h * dpr);
     stateRef.current.w = w;
     stateRef.current.h = h;
     stateRef.current.dpr = dpr;
   };
   const rand = (min, max) => Math.random() * (max - min) + min;
   // Add 'spawnAnim' and 'flash' to points for animation
   const spawnPoint = (x, y, animated = false) => ({
     x: x ?? rand(0, stateRef.current.w),
     y: y ?? rand(0, stateRef.current.h),
     vx: rand(-maxSpeed, maxSpeed),
     vy: rand(-maxSpeed, maxSpeed),
  r: animated ? 0 : rand(1.5, 2.6),
  targetR: rand(2.5, 3.5),
  spawnAnim: animated ? 1 : 0, // 1 = animating, 0 = not
  flash: animated ? 2.2 : 0, // 2.2 = brighter, fades slower
   });
   const initPoints = () => {
     const pts = [];
     for (let i = 0; i < nodeCount; i++) pts.push(spawnPoint());
     stateRef.current.points = pts;
   };
   // Draw a frame
   const draw = () => {
     const { w, h, dpr, points, mouse } = stateRef.current;
     // bg
     ctx.fillStyle = bg;
     ctx.fillRect(0, 0, w * dpr, h * dpr);
     // physics + nodes
     ctx.save();
     ctx.scale(dpr, dpr);
      // Draw ripples
      const { ripples } = stateRef.current;
      if (ripples && ripples.length > 0) {
        for (let i = 0; i < ripples.length; i++) {
          const ripple = ripples[i];
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(100,181,255,${ripple.alpha})`;
          ctx.lineWidth = 3;
          ctx.stroke();
          // Animate ripple
          ripple.radius += 6;
          ripple.alpha *= 0.92;
        }
        // Remove faded ripples
        stateRef.current.ripples = ripples.filter(r => r.alpha > 0.03);
      }
     // Hover repulsion
     if (mouse.inside && mouse.x != null) {
       for (const p of points) {
         const dx = p.x - mouse.x;
         const dy = p.y - mouse.y;
         const dist2 = dx * dx + dy * dy;
         const rad2 = hoverRepelRadius * hoverRepelRadius;
         if (dist2 < rad2) {
           const dist = Math.sqrt(dist2) || 0.0001;
           const f = (1 - dist / hoverRepelRadius) * hoverRepelStrength;
           p.vx += (dx / dist) * f;
           p.vy += (dy / dist) * f;
         }
       }
     }
     // integrate + bounce
     for (const p of points) {
       p.x += p.vx;
       p.y += p.vy;
       // Animate spawn radius and flash
       if (p.spawnAnim > 0) {
         p.r += (p.targetR - p.r) * 0.12; // slower growth
         if (Math.abs(p.r - p.targetR) < 0.08) {
           p.r = p.targetR;
           p.spawnAnim = 0;
         }
         if (p.flash > 0) {
           p.flash -= 0.035; // slower fade
           if (p.flash < 0) p.flash = 0;
         }
       }
       // soft bounds with bounce
       if (p.x <= 0 || p.x >= w) p.vx *= -1;
       if (p.y <= 0 || p.y >= h) p.vy *= -1;
       // slight speed clamp
       const sp2 = p.vx * p.vx + p.vy * p.vy;
       const ms2 = maxSpeed * maxSpeed * 2.5;
       if (sp2 > ms2) {
         const s = Math.sqrt(sp2);
         p.vx = (p.vx / s) * maxSpeed;
         p.vy = (p.vy / s) * maxSpeed;
       }
     }
     // links
     ctx.lineWidth = 1;
     for (let i = 0; i < points.length; i++) {
       const p1 = points[i];
       for (let j = i + 1; j < points.length; j++) {
         const p2 = points[j];
         const dx = p1.x - p2.x;
         const dy = p1.y - p2.y;
         const d = Math.hypot(dx, dy);
         if (d < linkDistance) {
           // stronger opacity near mouse
           let alpha = linkOpacity * (1 - d / linkDistance);
           if (stateRef.current.mouse.inside) {
             const mx = stateRef.current.mouse.x;
             const my = stateRef.current.mouse.y;
             const midx = (p1.x + p2.x) * 0.5;
             const midy = (p1.y + p2.y) * 0.5;
             const md = Math.hypot(midx - mx, midy - my);
             if (md < hoverRepelRadius * 1.2) alpha = Math.min(1, alpha + 0.25);
           }
           ctx.strokeStyle = hexToRgba(linkColor, alpha);
           ctx.beginPath();
           ctx.moveTo(p1.x, p1.y);
           ctx.lineTo(p2.x, p2.y);
           ctx.stroke();
         }
       }
     }
     // nodes
     for (const p of points) {
       ctx.beginPath();
       ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
       if (p.flash && p.flash > 0) {
         ctx.fillStyle = `rgba(255, 255, 120, ${Math.min(1, p.flash)})`;
         ctx.shadowColor = 'rgba(255,255,120,0.95)';
         ctx.shadowBlur = 32 * p.flash;
       } else {
         ctx.fillStyle = nodeColor;
         ctx.shadowBlur = 0;
       }
       ctx.fill();
       ctx.shadowBlur = 0;
     }
     ctx.restore();
     rafRef.current = requestAnimationFrame(draw);
   };
   const hexToRgba = (hex, a) => {
     const h = hex.replace("#", "");
     const bigint =
       h.length === 3
         ? parseInt(h.split("").map((c) => c + c).join(""), 16)
         : parseInt(h, 16);
     const r = (bigint >> 16) & 255;
     const g = (bigint >> 8) & 255;
     const b = bigint & 255;
     return `rgba(${r}, ${g}, ${b}, ${a})`;
   };
   // mouse handlers
   const onMove = (e) => {
     const rect = canvas.getBoundingClientRect();
     stateRef.current.mouse.x = e.clientX - rect.left;
     stateRef.current.mouse.y = e.clientY - rect.top;
     stateRef.current.mouse.inside = true;
   };
   const onLeave = () => {
     stateRef.current.mouse.inside = false;
     stateRef.current.mouse.x = null;
     stateRef.current.mouse.y = null;
   };
   const onClick = (e) => {
     const rect = canvas.getBoundingClientRect();
     const x = e.clientX - rect.left;
     const y = e.clientY - rect.top;
     for (let i = 0; i < clickSpawn; i++) {
       stateRef.current.points.push(spawnPoint(x, y, true));
     }
      // Add a ripple effect
      stateRef.current.ripples.push({ x, y, radius: 0, alpha: 0.4 });
   };
   // init
   resize();
   initPoints();
   canvas.addEventListener("mousemove", onMove);
   canvas.addEventListener("mouseleave", onLeave);
   canvas.addEventListener("click", onClick);
   window.addEventListener("resize", resize);
   rafRef.current = requestAnimationFrame(draw);
   // cleanup
   return () => {
     cancelAnimationFrame(rafRef.current);
     window.removeEventListener("resize", resize);
     canvas.removeEventListener("mousemove", onMove);
     canvas.removeEventListener("mouseleave", onLeave);
     canvas.removeEventListener("click", onClick);
   };
 }, [
   nodeCount,
   maxSpeed,
   linkDistance,
   linkOpacity,
   hoverRepelRadius,
   hoverRepelStrength,
   clickSpawn,
   bg,
   nodeColor,
   linkColor,
 ]);
 return (
<canvas
     ref={canvasRef}
     style={{
       position: "fixed",
       inset: 0,
       zIndex: 10, // ensure above background, but below main content
       display: "block",
       background: bg,
       pointerEvents: "auto", // ensure canvas receives pointer events
     }}
   />
 );
}