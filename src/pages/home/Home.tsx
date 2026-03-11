import { useNavigate } from 'react-router-dom'
import logo from '../../assets/3.png'
import Button from '../../components/Button.tsx'
import BackgroundGradient from '../../components/BackgroundGradient.tsx';
import InfoCard from '../../components/InfoCards.tsx';
export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <BackgroundGradient />
            <header style={{
                // position: "fixed",
                display: "flex", zIndex: "12", justifyContent: "space-between", paddingBottom: "1rem", width: "100vw"
            }}>
                <div style={{
                    // background: "linear-gradient(var(--dark), #141418aa 60%, transparent)",
                    // background: "black"
                    zIndex: "0", position: "absolute", top: "0", width: "100%", height: "20vh"
                }}></div>
                <div className="logo">
                    <img src={logo} alt="logo" style={{ height: "20vh", padding: "0 2rem" }} />
                    {/* <p style={{
                        fontFamily: "Balonku",
                        background: "var(--gradient)",
                        backgroundClip: "text",
                        color: "transparent",
                        fontSize: "4rem",
                    }}>
                        MIMOYO
                    </p> */}
                </div>
                <div>
                    a
                </div>
            </header>
            <main>
                <div className="hero" style={{ display: "flex", paddingTop: "16vh" }}>
                    <div className="hero-content" style={{ color: "white", width: "50vw", padding: "2rem 0 2.5rem 2.5rem" }}>
                        <div>
                            <h1 style={{ fontSize: "5rem", lineHeight: "0.9" }}>
                                Meet anyone,
                                <br />
                                be anyone,
                                <br />
                                stay anonymous
                            </h1>
                            <br />
                            <p style={{ fontFamily: "'Coiny', sans-serif", fontSize: "1.4rem", lineHeight: "1.5", width: "90%", paddingTop: "1rem", paddingLeft: "12px" }}>
                                Connect with strangers through lifelike avatars powered by real-time motion tracking.
                                Your face, hands, and movements control your digital presence while you remain completely anonymous.
                            </p>
                            <br />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", paddingTop: "5.5rem" }}>
                            <Button gradient={true} text='Get Started' onClick={() => navigate("/chat")} />
                            <Button text='How it works' />
                        </div>
                    </div>

                    <div className="hero-image" style={{ width: "50vw", overflow: "hidden" }}>
                        {/* <img src={logo} alt="hero" /> */}
                    </div>
                </div>
            </main >
            <section style={{ height: "100vh", width: "100vw", justifyContent: "space-evenly", alignItems: "center", textAlign: "center", padding: "2.5rem" }}>
                <h1 style={{ fontSize: "4rem", lineHeight: "0.9", width: "50vw", margin: "0 auto", padding: "1rem 0" }}>
                    What makes Mimoyo different?
                </h1>
                <p style={{ fontSize: "1.4rem", lineHeight: "1.2", width: "60vw", margin: "0 auto", padding: "1rem 0" }}>Experience genuine connection without revealing your identity. Our platform bridges the gap between anonymous chat and authentic human interaction.</p>
                <div style={{ display: "flex", flexDirection: "row", paddingTop: "2rem" }}>
                    <InfoCard heading="Real-time motion capture" content="Your facial expressions, hand gestures, and body movements instantly animate your avatar in three dimensions." image={logo} />
                    <InfoCard heading="Complete anonymity" content="No accounts, no profiles, no data collection. Chat freely knowing your identity remains protected at all times." image={logo} />
                    <InfoCard heading="Browser-based access" content="No downloads or installations required. Open Mimoyo in any modern web browser and start connecting immediately." image={logo} />
                    <InfoCard heading="Instant connections" content="Get paired with random users worldwide in seconds. Each conversation is fresh, unpredictable, and entirely unique." image={logo} />
                </div>
                <div style={{ padding: "1rem" }}>
                    <Button text='try it' />
                </div>
            </section>
            {/* <footer style={{ top: "100%", transform: "Translate(0,-100%)", position: "fixed", display: "flex", zIndex: "1000", justifyContent: "center", paddingBottom: "1rem", background: "linear-gradient(rgba(255, 255, 255, 0),var(--dark))", width: "100vw", height: "20vh" }}></footer> */}
        </div >
    )
}