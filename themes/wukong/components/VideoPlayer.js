import { useState } from 'react';

const VideoPlayer = ({ videoUrl, previewImageUrl }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative w-full h-0 pb-56.25"> {/* Aspect ratio of 16:9 */}
      {!isVideoLoaded ? (
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={previewImageUrl}
            alt="Video preview"
            className="w-full h-full object-cover" // Make sure the image covers the entire space
          />
          <button
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl"
            onClick={handlePlayVideo}
          >
             Play
          </button>
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`${videoUrl}?autoplay=1&mute=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;
