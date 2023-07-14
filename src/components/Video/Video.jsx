import video from './video.mp4'
export const Video = () => {
  return (
    <iframe
    width="560"
    height="315"
    src={video}
    title="Youtube Player"
    frameborder="0"
    allowFullScreen
    />
    //   {/* <source src="/video-example.webm" type="video/webm" /> */}
    //   {/* <source src={video} type="video/mp4" />
    //   Sorry, your browser doesn't support videos.
    // </iframe> */}
    
  );
};
