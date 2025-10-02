// src/ReactiveBackground.jsx
import { useRef, useState } from "react";
export default function ReactiveBackground({ children }) {
 const wrapperRef = useRef(null);
 const [hue, setHue] = useState(220);
 function handleMove(e) {
   const el = wrapperRef.current;
   if (!el) return;
   const rect = el.getBoundingClientRect();
   const x = e.clientX - rect.left;
   const y = e.clientY - rect.top;
   el.style.setProperty("--x", x + "px");
   el.style.setProperty("--y", y + "px");
 }
 function handleClick() {
   setHue((h) => (h + 50) % 360); // rotate hue on each click
 }
 return (
<div
     ref={wrapperRef}
     onMouseMove={handleMove}
     onClick={handleClick}
     style={{ "--hue": hue }}
     className="reactive-bg-wrapper"
>
<div className="reactive-bg" />
<div className="reactive-content">{children}</div>
</div>
 );
}