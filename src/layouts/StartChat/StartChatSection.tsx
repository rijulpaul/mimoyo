import React from "react";
import "./StartChatSection.css";
import logo from "../../assets/3.png";

const StartChatSection: React.FC<{ onStart: () => void }> = ({ onStart }) => {
    return (
        // <>
        <section className="wrapper">
            <div className="container">

                <div className="header">
                    <h1 className="title"><img className="title" src={logo} alt="Avatar" /></h1>
                    <p className="subtitle">
                        Real-time 3D avatar chat powered by AI-based body tracking.
                        <br style={{ marginBottom: "0.5rem" }} />
                        No real faces. Just avatars.
                    </p>
                </div>

                <div className="inputGroup">
                    <label className="label">Your interests</label>
                    <input
                        type="text"
                        placeholder="e.g. gaming, AI, music..."
                        className="input"
                    />
                    <span className="helper">
                        We match you with similar people.
                    </span>
                </div>

                <div>
                    <button className="chat-button" onClick={onStart}>
                        Start Chat
                    </button>

                    <div className="footer">
                        Anonymous. No face reveal. Leave anytime.
                    </div>
                </div>

            </div>
        </section>
        // </>
    );
};

export default StartChatSection;