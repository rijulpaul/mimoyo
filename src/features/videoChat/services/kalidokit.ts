/* eslint-disable @typescript-eslint/no-explicit-any */
import * as kalidokit from "kalidokit";

class KalidokitService {
    private videoElement: HTMLVideoElement | null;

    constructor(videoElement: HTMLVideoElement) {
        this.videoElement = videoElement;
    }

    solveFace(faceLandmarks: any) {
        if (!faceLandmarks || !faceLandmarks[0]) return undefined;
        return kalidokit.Face.solve(faceLandmarks[0], {
            runtime: "mediapipe",
            video: this.videoElement as HTMLVideoElement,
        });
    }

    solvePose(poseLandmarks: any) {
        if (!poseLandmarks || !poseLandmarks[0]) return undefined;
        return kalidokit.Pose.solve(poseLandmarks[0], {
            runtime: "mediapipe",
            video: this.videoElement as HTMLVideoElement,
        } as any);
    }

    solveHands(handLandmarks: any) {
        type HandRig = {
            Left?: kalidokit.THand<kalidokit.Side> | undefined;
            Right?: kalidokit.THand<kalidokit.Side> | undefined;
        };
        const handRig: HandRig = {};

        // Just solving for now
        const { landmarks, handednesses } = handLandmarks;
        for (let i = 0; i < landmarks.length; i++) {
            const lm = landmarks[i];
            const side: kalidokit.Side = handednesses?.[0]?.[i]?.categoryName;
            const solved = kalidokit.Hand.solve(lm, side);
            if (solved) {
                handRig[side] = solved;
            }
        }

        return handRig;
    }
}

export default KalidokitService;