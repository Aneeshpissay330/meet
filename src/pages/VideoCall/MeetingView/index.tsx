import { useMeeting } from "@videosdk.live/react-sdk";
import React from "react";
import useStateHook from "../../../hooks/useStateHook";
import ParticipantView from "../ParticipantVIew";
import "./meeting-view.css";

interface MeetingViewProps {

}

const MeetingView: React.FC<MeetingViewProps> = ({ }) => {
    const joined = useStateHook<string | null>(null);
    const { join, participants } = useMeeting({
        onMeetingJoined: () => {
            joined.setState("JOINED");
        }
    }); // Get participants from the meeting
    const joinMeeting = () => {
        joined.setState("JOINING");
        join();
    };
    return (
        <div>
            {joined && joined.state == "JOINED" ? (
                <div className="grid-container">
                    {[...participants.keys()].map((participantId, index) => (
                        <div className="grid-item" key={index}>
                            <ParticipantView
                                participantId={participantId}
                            />
                        </div>
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