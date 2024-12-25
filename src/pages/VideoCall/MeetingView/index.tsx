import React from "react";
import ParticipantView from "../ParticipantVIew";
import { useMeeting } from "@videosdk.live/react-sdk";
import useStateHook from "../../../hooks/useStateHook";
import { getGridStyle } from "../../../utils/video";

interface MeetingViewProps {

}

const MeetingView: React.FC<MeetingViewProps> = ({ }) => {
    const joined = useStateHook<string | null>(null);
    const { join, participants } = useMeeting({
        onMeetingJoined: () => {
            joined.setState("JOINED");
        }
    }); // Get participants from the meeting
    const participantCount = participants.size;
    const gridStyle = getGridStyle(participantCount);
    const joinMeeting = () => {
        joined.setState("JOINING");
        join();
    };
    return (
        <div className="container">
            {joined && joined.state == "JOINED" ? (
                <div style={gridStyle}>
                    {[...participants.keys()].map((participantId) => (
                        <ParticipantView
                            participantId={participantId}
                            key={participantId}
                        />
                    ))}
                </div>
            ) : joined && joined.state == "JOINING" ? (
                <p>Joining the meeting...</p>
            ) : (
                <button onClick={joinMeeting}>Join the meeting</button>
            )}
        </div>
    );
};

export default MeetingView;