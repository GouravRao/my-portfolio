import NetworkBackground from "./NetworkBackground";
import Navbar from "./Navbar";
import LinkedInIcon from "./LinkedInIcon";
export default function App() {
	return (
		<>
			<NetworkBackground />
			<Navbar />
							<main style={{ position: "relative", minHeight: "100vh", color: "white", paddingTop: 120, pointerEvents: "none" }}>
								<>
									<section
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "flex-start",
											justifyContent: "center",
											minHeight: "60vh",
											padding: "3.5rem 0 2.5rem 0",
											maxWidth: 1200,
											margin: "0 auto",
											gap: "3.5rem",
											background: "none",
											color: "#ededed",
											border: "none",
											borderRadius: 0,
											boxShadow: "none",
											backdropFilter: "none",
											WebkitBackdropFilter: "none",
											zIndex: 10,
											position: "relative",
											pointerEvents: "none",
											userSelect: "text",
										}}
									>
										<div style={{ flex: 1, minWidth: 320 }}>
											<div style={{ color: "#bdbdbd", fontSize: 22, marginBottom: 18, fontWeight: 400 }}>
												Hi, I am{' '}
												<span
													style={{
														background: "linear-gradient(90deg, #fff 20%, #a78bfa 40%, #fff 60%)",
														backgroundSize: "200% auto",
																					backgroundClip: "text",
																					WebkitBackgroundClip: "text",
																					color: "transparent",
																					WebkitTextFillColor: "transparent",
																					animation: "shine 2.5s linear infinite",
																					fontWeight: 700,
																				}}
																			>
																				Gourav Rao Nagineni
																			</span>
																			<style>{`
																				@keyframes shine {
																					0% { background-position: 200% 0; }
																					100% { background-position: 0 0; }
																				}
																			`}</style>
																		</div>
																		<div style={{
																			fontSize: 64,
																			fontWeight: 700,
																			color: "#ededed",
																			lineHeight: 1.05,
																			letterSpacing: "-0.03em",
																			marginBottom: 0,
																			display: "inline-block"
																		}}>
																			<span
																				style={{
																					background: "linear-gradient(90deg, #fff 20%, #a78bfa 40%, #fff 60%)",
																					backgroundSize: "200% auto",
																					backgroundClip: "text",
																					WebkitBackgroundClip: "text",
																					color: "transparent",
																					WebkitTextFillColor: "transparent",
																					animation: "shine 2.5s linear infinite",
																					fontWeight: 700,
																					display: "inline-block"
																				}}
																			>
																				Software<br />Developer
																			</span>
																		</div>
																		{/* Social icons row */}
																		<div style={{ display: "flex", gap: 18, marginTop: 36 }}>
																			<a
																				href="https://github.com/gnagineni"
																				target="_blank"
																				rel="noopener noreferrer"
																				style={{ width: 48, height: 48, background: "rgba(30,32,36,0.65)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)", pointerEvents: "auto" }}
																				aria-label="GitHub"
																				tabIndex={0}
																			>
																				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#ededed" }}>
																					<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
																				</svg>
																			</a>
																								<a
																									href="https://www.linkedin.com/in/gourav-rao-699a81169/"
																									target="_blank"
																									rel="noopener noreferrer"
																									style={{ width: 48, height: 48, background: "rgba(30,32,36,0.65)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)", pointerEvents: "auto" }}
																									aria-label="LinkedIn"
																									tabIndex={0}
																								>
																									<LinkedInIcon size={28} />
																								</a>
																		</div>
													</div>
													<div style={{ flex: 2, minWidth: 320, color: "#bdbdbd", fontSize: 28, fontWeight: 400, lineHeight: 1.25 }}>
																				Software Developer with 3+ years in 
																				<span style={{
																					display: "inline-block",
																					width: 8
																				}}></span>
																				<span style={{
																					fontWeight: 700,
																					background: "linear-gradient(90deg, #fff 20%, #a78bfa 40%, #fff 60%)",
																					backgroundSize: "200% auto",
																					backgroundClip: "text",
																					WebkitBackgroundClip: "text",
																					color: "transparent",
																					WebkitTextFillColor: "transparent",
																					animation: "shine 2.5s linear infinite",
																					display: "inline-block",
																					marginRight: 8
																				}}>Pega</span>
																				and
																				<span style={{
																					display: "inline-block",
																					width: 8
																				}}></span>
																				<span style={{
																					fontWeight: 700,
																					background: "linear-gradient(90deg, #fff 20%, #a78bfa 40%, #fff 60%)",
																					backgroundSize: "200% auto",
																					backgroundClip: "text",
																					WebkitBackgroundClip: "text",
																					color: "transparent",
																					WebkitTextFillColor: "transparent",
																					animation: "shine 2.5s linear infinite",
																					display: "inline-block",
																					marginLeft: 8,
																					marginRight: 8
																				}}>ServiceNow</span>, now building scalable solutions at
																				{'  '}
																				<a
																					href="https://cohesive-digital.com/"
																					target="_blank"
																					rel="noopener noreferrer"
																					style={{ color: "#a78bfa", fontWeight: 500, textDecoration: "none", pointerEvents: "auto" }}
																					tabIndex={0}
																				>
																					Cohesive Digital
																				</a>.
					</div>
				</section>
				{/* Tech stack row */}
				<div style={{ display: "flex", justifyContent: "center", gap: 48, margin: "2.5rem auto 0 auto", maxWidth: 900 }}>
					<span style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#ededed", fontSize: 22 }}>
						<span style={{ fontSize: 36 }}>⚛️</span>
						React
					</span>
					<span style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#ededed", fontSize: 22 }}>
						<span style={{ fontSize: 36 }}>🟦</span>
						TypeScript
					</span>
					<span style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#ededed", fontSize: 22 }}>
						<span style={{ fontSize: 36 }}>🌐</span>
						<span style={{
							fontWeight: 700,
							background: "linear-gradient(90deg, #fff 20%, #a78bfa 40%, #fff 60%)",
							backgroundSize: "200% auto",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							WebkitTextFillColor: "transparent",
							animation: "shine 2.5s linear infinite",
							display: "inline-block",
							marginTop: 4
						}}>ServiceNow</span>
					</span>
					<span style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#ededed", fontSize: 22 }}>
						<span style={{ fontSize: 36 }}>🧩</span>
						<span style={{
							fontWeight: 700,
							background: "linear-gradient(90deg, #fff 20%, #a78bfa 40%, #fff 60%)",
							backgroundSize: "200% auto",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							WebkitTextFillColor: "transparent",
							animation: "shine 2.5s linear infinite",
							display: "inline-block",
							marginTop: 4
						}}>Pega</span>
					</span>
					<span style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#ededed", fontSize: 22 }}>
						<span style={{ fontSize: 36 }}>💻</span>
						Cohesive Digital
					</span>
				</div>
		</>
	</main>
		</>
	);
}