import NetworkBackground from "./NetworkBackground";
export default function App() {
 return (
<>
<NetworkBackground />
<main style={{ position: "relative", minHeight: "100vh", color: "white" }}>
<section style={{ padding: "3rem", maxWidth: 900, margin: "0 auto" }}>
<h1 style={{ fontSize: 48, marginBottom: 12 }}>Reactive Network ✨</h1>
<p>Hover to repel nodes. Click to spawn new ones. Lines intensify near the cursor.</p>
</section>
</main>
</>
 );
}