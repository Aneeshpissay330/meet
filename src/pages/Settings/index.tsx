import Tabs from "../../components/Tabs";
import Audio from "./Audio";
import Video from "./Video";

const Settings = () => {
    const tabs = [
        { title: 'Video', component: <Video /> },
        { title: 'Audio', component: <Audio /> }
    ];
    return (
        <Tabs tabs={tabs} />
    )
}

export default Settings;