import {
    MeetingProvider
} from "@videosdk.live/react-sdk";
import React from "react";
import MeetingView from "./MeetingView";

const VideoCall: React.FC = () => {
    return (
        <MeetingProvider
            config={{
                meetingId: "5gw1-cfw3-8xba",
                micEnabled: true,
                webcamEnabled: true,
                name: "Aneesh's Org",
                debugMode: true
            }}
            token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJkMWU2NzlkNy0zMzZiLTQ4YWYtYmEzYy1hY2MwZDIxNGYzNDUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczNTEwNDE5OCwiZXhwIjoxNzM1MTkwNTk4fQ.S5ECb1NYjQWq-KzWkdcBRTOAyyLciYT9lcOQi_cSTm4"
        >
            <MeetingView />
        </MeetingProvider>
    );
};

export default VideoCall;