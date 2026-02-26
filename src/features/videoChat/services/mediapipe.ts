import {
    FaceLandmarker,
    HandLandmarker,
    PoseLandmarker,
    FilesetResolver,
} from "@mediapipe/tasks-vision";

export interface DetectionResults {
    face?: object;
    hand?: object;
    pose?: object;
}

class MediaPipeService {
    private faceLandmarker: FaceLandmarker | null = null;
    private handLandmarker: HandLandmarker | null = null;
    private poseLandmarker: PoseLandmarker | null = null;
    private initialized = false;
    private initializing = false;

    async initialize() {
        if (this.initialized || this.initializing) return;
        this.initializing = true;

        try {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
            );

            const [face, hand, pose] = await Promise.all([
                FaceLandmarker.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
                        delegate: "GPU",
                    },
                    outputFaceBlendshapes: true,
                    runningMode: "VIDEO",
                    numFaces: 1,
                    minFaceDetectionConfidence: 0.5,
                    minFacePresenceConfidence: 0.5,
                    minTrackingConfidence: 0.5,
                }),
                HandLandmarker.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
                        delegate: "GPU",
                    },
                    runningMode: "VIDEO",
                    numHands: 2,
                    minHandDetectionConfidence: 0.5,
                    minHandPresenceConfidence: 0.5,
                    minTrackingConfidence: 0.5,
                }),
                PoseLandmarker.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`,
                        delegate: "GPU",
                    },
                    runningMode: "VIDEO",
                    numPoses: 1,
                    minPoseDetectionConfidence: 0.5,
                    minPosePresenceConfidence: 0.5,
                    minTrackingConfidence: 0.5,
                })
            ]);

            this.faceLandmarker = face;
            this.handLandmarker = hand;
            this.poseLandmarker = pose;
            this.initialized = true;
            console.log("MediaPipe initialized successfully");
        } catch (error) {
            console.error("Failed to initialize MediaPipe:", error);
        } finally {
            this.initializing = false;
        }
    }

    trackFace(videoElement: HTMLVideoElement): object | null {
        if (!this.faceLandmarker || !this.canTrack(videoElement)) return null;
        return this.faceLandmarker.detectForVideo(videoElement, performance.now());
    }

    trackHand(videoElement: HTMLVideoElement): object | null {
        if (!this.handLandmarker || !this.canTrack(videoElement)) return null;
        return this.handLandmarker.detectForVideo(videoElement, performance.now());
    }

    trackPose(videoElement: HTMLVideoElement): object | null {
        if (!this.poseLandmarker || !this.canTrack(videoElement)) return null;
        return this.poseLandmarker.detectForVideo(videoElement, performance.now());
    }

    private canTrack(video: HTMLVideoElement) {
        return video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0;
    }
}

export const mediaPipeService = new MediaPipeService();
