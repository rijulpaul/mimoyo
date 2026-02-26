import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import ChatEnvironment from "./ChatEnvironment";
import UserAvatar from "./UserAvatar";
import { useCamera } from "../hooks/useCamera";
import videoOff from "../../../assets/video-off.svg";
import micOff from "../../../assets/mic-off.svg";

import useMediaStore from "../store/mediaStore";
import { useState } from "react";

function UserVideo() {
    const { videoRef, isReady } = useCamera();
    const { cameraOn, micOn } = useMediaStore();
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
            <video
                ref={videoRef}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    // height: "30vh",
                    // width: "100vw",
                    zIndex: 100,
                    // opacity: 0,
                    pointerEvents: "none"
                }}
                playsInline
                hidden
            />

            {mouseOver && <div></div>}

            <div style={{ position: "absolute", bottom: "10px", right: "10px", zIndex: 100, display: "flex", gap: "8px" }}>
                {!cameraOn && <img src={videoOff} alt="video-off" width={36} height={36} />}
                {!micOn && <img src={micOff} alt="mic-off" width={36} height={36} />}
            </div>

            <Canvas camera={{ near: 0.1, far: 1000 }} style={{ borderRadius: "1rem" }}>
                <UserAvatar videoRef={videoRef} isCameraReady={isReady} />
                <ChatEnvironment />
                <Stats />
            </Canvas>
        </div>
    );
}

export default UserVideo;
