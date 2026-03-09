import { useNavigate } from 'react-router-dom'
import logo from '../../assets/3.png'
import Button from '../../components/Button.tsx'
import BackgroundGradient from '../../components/BackgroundGradient.tsx';
export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <BackgroundGradient />
            <header style={{ position: "fixed", display: "flex", zIndex: "11", justifyContent: "center", paddingBottom: "1rem", background: "linear-gradient(var(--dark),rgba(255, 255, 255, 0) 20%)", width: "100vw" }}>
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
            </header>
            <main>
                <div className="hero" style={{ display: "flex", paddingTop: "16vh", height: "600vh" }}>
                    <div className="hero-content" style={{ color: "white", width: "50vw", padding: "2rem 0 2.5rem 2.5rem" }}>
                        <div>
                            <h1 style={{ fontFamily: "'Coiny', sans-serif", fontSize: "5rem", lineHeight: "0.9" }}>
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
            {/* <footer style={{ top: "100%", transform: "Translate(0,-100%)", position: "fixed", display: "flex", zIndex: "1000", justifyContent: "center", paddingBottom: "1rem", background: "linear-gradient(rgba(255, 255, 255, 0),var(--dark))", width: "100vw", height: "20vh" }}></footer> */}
        </div >
    )
}