import { useNavigate } from 'react-router-dom';
import logo from '../../assets/3.png';
import Button from '../../components/Button.tsx';
import BackgroundGradient from '../../components/BackgroundGradient.tsx';
import InfoCard from '../../components/InfoCards.tsx';
import './Home.css';

// ─── Data ──────────────────────────────────────────────────────────────────────

const FEATURES = [
    {
        heading: 'Real-time motion capture',
        content:
            'Your facial expressions, hand gestures, and body movements instantly animate your avatar in three dimensions.',
    },
    {
        heading: 'Complete anonymity',
        content:
            'No accounts, no profiles, no data collection. Chat freely knowing your identity remains protected at all times.',
    },
    {
        heading: 'Browser-based access',
        content:
            'No downloads or installations required. Open Mimoyo in any modern web browser and start connecting immediately.',
    },
    {
        heading: 'Instant connections',
        content:
            'Get paired with random users worldwide in seconds. Each conversation is fresh, unpredictable, and entirely unique.',
    },
];

const HOW_IT_WORKS = [
    {
        heading: 'Pick your avatar',
        content:
            'Choose from a selection of digital characters that will represent you in the conversation.',
    },
    {
        heading: 'Grant permissions',
        content:
            'Allow access to your camera and microphone so the motion tracking can capture your movements.',
    },
    {
        heading: 'Meet and chat',
        content:
            "You're instantly connected with a stranger across the globe, both hidden behind your chosen avatars.",
    },
];

const FOOTER_PRODUCT_LINKS = ['How it works', 'Features', 'FAQ', 'Blog', 'Company'];
const FOOTER_ABOUT_LINKS = ['Contact', 'Careers', 'Press', 'Legal', 'Privacy Policy'];
const FOOTER_LEGAL_LINKS = ['Cookie settings', 'Accessibility', 'Status', 'Resources'];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
    const navigate = useNavigate();

    const goToChat = () => navigate('/chat');

    return (
        <div className="home-root">
            <BackgroundGradient />

            {/* ── Header ── */}
            <header className="home-header">
                <div className="home-logo">
                    <img src={logo} alt="Mimoyo logo" />
                </div>
                <nav aria-label="Primary navigation" />
            </header>

            {/* ── Hero ── */}
            <main>
                <div className="hero">
                    <div className="hero-content">
                        <div>
                            <h1>
                                Meet anyone,
                                <br />
                                be anyone,
                                <br />
                                stay anonymous
                            </h1>
                            <p>
                                Connect with strangers through lifelike avatars powered by
                                real-time motion tracking. Your face, hands, and movements
                                control your digital presence while you remain completely
                                anonymous.
                            </p>
                        </div>
                        <div className="hero-actions">
                            <Button gradient text="Get Started" onClick={goToChat} />
                            <Button text="How it works" />
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src={logo} alt="Avatar demo preview" />
                    </div>
                </div>
            </main>

            {/* ── Features ── */}
            <section className="home-section" aria-labelledby="features-heading">
                <h2 id="features-heading">What makes Mimoyo different?</h2>
                <p>
                    Experience genuine connection without revealing your identity. Our
                    platform bridges the gap between anonymous chat and authentic human
                    interaction.
                </p>
                <div className="home-section-cards">
                    {FEATURES.map(({ heading, content }) => (
                        <InfoCard key={heading} heading={heading} content={content} image={logo} />
                    ))}
                </div>
                <div className="home-section-cta">
                    <Button text="Try it" onClick={goToChat} />
                </div>
            </section>

            {/* ── How it works ── */}
            <section className="home-section" aria-labelledby="how-it-works-heading">
                <h2 id="how-it-works-heading">Three steps to start chatting</h2>
                <p>
                    Getting connected takes seconds. Select an avatar, allow camera access,
                    and you&apos;re paired with someone new. The whole thing happens in your
                    browser without any setup.
                </p>
                <div className="home-section-cards">
                    {HOW_IT_WORKS.map(({ heading, content }) => (
                        <InfoCard key={heading} heading={heading} content={content} image={logo} />
                    ))}
                </div>
                <div className="home-section-cta">
                    <Button text="Start" onClick={goToChat} />
                </div>
            </section>

            {/* ── Live demo ── */}
            <section className="home-section" aria-labelledby="demo-heading">
                <h2 id="demo-heading">See it live</h2>
                <p>Watch avatars move and react in real time</p>
                <div className="demo-media">
                    <img src={logo} alt="Live avatar demo" />
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="cta-section" aria-label="Call to action">
                <div className="cta-content">
                    <div>
                        <h2>Ready to meet someone new?</h2>
                        <p>Join thousands of users connecting through avatars right now</p>
                    </div>
                    <div className="cta-actions">
                        <Button gradient text="Chat Now" onClick={goToChat} />
                    </div>
                </div>
                <div className="cta-image">
                    <img src={logo} alt="Two avatars in conversation" />
                </div>
            </section>

            {/* ── Footer ── */}
            <footer>
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src={logo} alt="Mimoyo logo" />
                    </div>

                    <div className="footer-col">
                        <div className="footer-col-heading">Product</div>
                        <div>
                            {FOOTER_PRODUCT_LINKS.map((link) => (
                                <div key={link} className="footer-link">{link}</div>
                            ))}
                        </div>
                    </div>

                    <div className="footer-col">
                        <div className="footer-col-heading">About Us</div>
                        <div>
                            {FOOTER_ABOUT_LINKS.map((link) => (
                                <div key={link} className="footer-link">{link}</div>
                            ))}
                        </div>
                    </div>

                    <div className="footer-col">
                        <div className="footer-col-heading">Terms of Service</div>
                        <div>
                            {FOOTER_LEGAL_LINKS.map((link) => (
                                <div key={link} className="footer-link">{link}</div>
                            ))}
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <div className="footer-col-heading">Updates</div>
                        <div className="footer-newsletter-desc">
                            Get notified when we launch new features and improvements.
                        </div>
                        <div className="footer-newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email address for newsletter"
                            />
                            <Button text="Subscribe" />
                        </div>
                        <div className="footer-disclaimer">
                            By subscribing you agree to our Privacy Policy and consent to
                            receive updates.
                        </div>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="footer-bottom">
                    <div>
                        <span>© 2025 Mimoyo Virtual Avatar Chat. All rights reserved.</span>
                        <span>Terms of Use</span>
                        <span>Privacy Policy</span>
                        <span>Cookie Policy</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}