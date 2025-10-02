import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export default function BackgroundParticles() {
 const init = useCallback(async (engine) => {
   // load all tsParticles features
   await loadFull(engine);
 }, []);
 return (
<Particles
     id="tsparticles"
     init={init}
     /* put canvas behind content */
     style={{ position: "fixed", inset: 0, zIndex: -1 }}
     options={{
       fpsLimit: 60,
       background: { color: "#0f172a" },
       detectRetina: true,
       particles: {
         number: { value: 90, density: { enable: true, area: 800 } },
         color: { value: "#ffffff" },
         links: { enable: true, color: "#38bdf8", distance: 140, opacity: 0.5, width: 1 },
         move: { enable: true, speed: 2, outModes: { default: "bounce" } },
         opacity: { value: 0.7 },
         size: { value: { min: 2, max: 4 } },
         shape: { type: "circle" },
       },
       interactivity: {
         events: {
           onHover: { enable: true, mode: "repulse" }, // move away from cursor
           onClick: { enable: true, mode: "push" },    // add particles on click
           resize: true,
         },
         modes: {
           repulse: { distance: 120, duration: 0.4 },
           push: { quantity: 6 },
         },
       },
     }}
   />
 );
}