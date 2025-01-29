import ReactPlayer from "react-player";
import { useLoaderData, useParams } from "react-router-dom";


const VideoDetails = () => {
    const detailsData = useLoaderData();
    const { id } = useParams();
    // const Id = parseInt(id);

    const clickVideo = detailsData.find(item => item.id === id);
    console.log(clickVideo);
    const { video_link, title, brand_name, description, category, duration, video_type, resolution, aspect_ratio, file_format } = clickVideo;

    return (
        <div className="max-w-7xl mx-auto mt-[70px]">
            <div className="grid grid-cols-1 gap-2 md:flex md:gap-4">
                <div className="w-full p-2 md:w-3/5 mx-auto rounded-lg overflow-hidden shadow-lg">
                    <div className="relative pt-[56.25%]"> {/* Aspect ratio container */}
                        <ReactPlayer
                            className="absolute top-0 left-0 w-full h-full"
                            url={video_link}
                            width="100%"
                            height="100%"
                            controls={true}
                        />
                    </div>
                </div>
                <div className="w-full p-4 md:w-2/5 space-y-1">
                   <p><span className="font-semibold text-lg">Name :</span> {title}</p>
                   <p><span className="font-semibold text-lg">Brand Name :</span> {brand_name}</p>
                   <p><span className="font-semibold text-lg">Description : </span> {description}</p>
                   <p><span className="font-semibold text-lg">Category :</span> {category}</p>
                   <p><span className="font-semibold text-lg">Duration :</span> {duration}</p>
                   <p><span className="font-semibold text-lg">Video Type :</span> {video_type}</p>
                   <p><span className="font-semibold text-lg">Resolution :</span> {resolution}</p>
                   <p><span className="font-semibold text-lg">Aspect Ratio :</span> {aspect_ratio}</p>
                   <p><span className="font-semibold text-lg">File Format :</span> {file_format}</p>
                   <p><span className="font-semibold text-lg">Editing Cast---</span> </p>
                   <p><span className="font-semibold text-lg">director :</span> John Doe</p>
                   <p><span className="font-semibold text-lg">Editor : </span> Jane Smith</p>
                   <p><span className="font-semibold text-lg">Director :</span> John Doe</p>
                </div>
            </div>
        </div>
    );
};
export default VideoDetails;
