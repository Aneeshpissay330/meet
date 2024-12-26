import { useEffect } from "react";
import { useGetTokenMutation } from "../../../services/token"

const Video = () => {
  const [getToken] = useGetTokenMutation();
  const getVideoSDKToken = async () => {
    try {
      await getToken().unwrap();
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getVideoSDKToken();
  }, []);
  return (
    <div>Video</div>
  )
}

export default Video;