import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import ChatEnvironment from "./ChatEnvironment";
import UserAvatar from "./UserAvatar";
import { useCamera } from "../hooks/useCamera";
import videoOff from "../../../assets/video-off.svg";
import micOff from "../../../assets/mic-off.svg";

import useMediaStore from "../store/mediaStore";
import { Suspense, useState } from "react";

function UserVideo() {
    const { videoRef, isReady } = useCamera();
    const { cameraOn, micOn } = useMediaStore();
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
            <Loader
                containerStyles={{
                    backgroundColor: "#0f0f12",
                    borderRadius: "1rem",
                }}
                innerStyles={{
                    borderRadius: "2rem",
                    border: "2px solid #cd8334",
                    width: "400px",
                    height: "24px",
                    overflow: "hidden",
                }}
                barStyles={{
                    borderRadius: "2rem",
                    border: "2px transparent",
                    boxShadow: "-1px -1px 4px rgba(0,0,0,0.9) inset",
                    background: "linear-gradient(90deg,plum,skyblue)",
                    height: "24px",
                }}
                dataStyles={{
                    display: "none",
                }}
                dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
                initialState={(active) => active}
            />
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
                <Scene videoRef={videoRef} isReady={isReady} />
            </Canvas>
        </div>
    );
}

const Scene = ({ videoRef, isReady }: { videoRef: React.RefObject<HTMLVideoElement | null>; isReady: boolean }) => {
    return (
        <>
            <Suspense fallback={null}>
                <UserAvatar videoRef={videoRef} isCameraReady={isReady} />
                <ChatEnvironment />
            </Suspense>
        </>
    )
}

export default UserVideo;
