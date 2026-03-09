import UserVideo from "../../features/videoChat/components/UserVideo.tsx";
import StartChatSection from "../../layouts/StartChat/StartChatSection.tsx";
import { useState } from "react";

function VideoChat() {
  const [onCall, setOnCall] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh", width: "100vw", padding: "6px", gap: "6px" }}>
      <div style={{ transition: "width 0.5s ease", display: onCall ? "none" : "block" }}>
        <StartChatSection onStart={() => setOnCall(!onCall)} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "6px", width: "100%" }}>
        <div style={{ width: onCall ? "50%" : "100%", borderColor: "skyblue", borderWidth: "2px", borderStyle: "solid", borderRadius: "1rem" }}>
          <UserVideo />
        </div>
        {onCall && <div style={{ width: onCall ? "50%" : "0%", borderColor: "plum", borderWidth: "2px", borderStyle: "solid", borderRadius: "1rem" }}>
          {/* <UserVideo /> */}
        </div>}
      </div>
    </div>
  )
}

export default VideoChat;