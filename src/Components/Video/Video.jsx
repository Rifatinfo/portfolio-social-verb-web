
import ReactPlayer from "react-player";
import PlayButton from "./PlayButton";

const Video = () => {
  return (
    <div>
        <div className="player-wrapper relative">
      <ReactPlayer
        className="react-player "
        url="https://www.youtube.com/embed/gcurUnUAfYA?si=QaUx9lxEWvSP-"
        width="100%"
        height="400px"
        light={
          <div className="w-full h-[400px] relative overflow-hidden">
             <PlayButton></PlayButton>
            <img
              src="https://img.youtube.com/vi/fkIvmfqX-t0/maxresdefault.jpg"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            
          </div>
        }
        controls={true}
      />
        </div>
      
    </div>

  );
};

export default Video;
