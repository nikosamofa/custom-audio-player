import { useCustomPlayerContext } from "./CustomPlayer/CustomPlayerContextProvider";

export const Video = () => {
  const { audioRef, loop, handleLoadedMetadata } = useCustomPlayerContext();

  return (
    <audio ref={audioRef} controls loop={loop} onLoadedMetadata={handleLoadedMetadata}>
      <source
        src="https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
        type="audio/mp3"
      />
    </audio>
  );
};
