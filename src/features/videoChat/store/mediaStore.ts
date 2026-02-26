// TODO: Implement Zustand store for camera and mic on/off state
import { create } from 'zustand'

interface MediaState {
    cameraOn: boolean,
    micOn: boolean,
    setCamera: (cameraOn: boolean) => void,
    setMic: (micOn: boolean) => void,
}

const useMediaStore = create<MediaState>((set) => ({
    cameraOn: false,
    micOn: false,
    setCamera: (cameraOn: boolean) => set({ cameraOn }),
    setMic: (micOn: boolean) => set({ micOn })
}))

export default useMediaStore