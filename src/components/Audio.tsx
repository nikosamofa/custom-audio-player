import { useCustomPlayerContext } from "./CustomPlayer/CustomPlayerContextProvider";

export const Video = () => {
  const { audioRef, loop, audioUrl, handleLoadedMetadata, handleError } = useCustomPlayerContext();

  return (
    <>
      <audio
        ref={audioRef}
        controls
        loop={loop}
        onError={handleError}
        onLoadedMetadata={handleLoadedMetadata}
      >
        {/* https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3 */}
        <source src={audioUrl} type="audio/mp3" />
      </audio>
    </>
  );
};
