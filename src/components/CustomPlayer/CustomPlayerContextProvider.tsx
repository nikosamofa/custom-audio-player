import {
  createContext,
  MutableRefObject,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface ICustomPlayerContext {
  audioRef: MutableRefObject<HTMLVideoElement | null>;
  isMuted: boolean;
  loop: boolean;
  currentTime: number;
  volume: number;
  totalTime: number;
  handlePlay: () => void;
  handlePause: () => void;
  handleVolumeChange: (volume: number) => void;
  toggleMute: () => void;
  handleSkip: (seconds: number) => void;
  toggleLoop: () => void;
  handleLoadedMetadata: () => void;
  handleTimeUpdate: (time: number) => void;
}

const CustomPlayerContext = createContext({} as ICustomPlayerContext);

export const CustomPlayerContextProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [loop, setLoop] = useState(false);
  const [volume, setVolume] = useState(1);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    // todo: run only once after audioRef.current is Truthy
    const timeUpdate = () => {
      if (!audioRef.current) return;
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current?.addEventListener?.("timeupdate", timeUpdate);
  }, []);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

  const handleVolumeChange = (v: number) => {
    setVolume(v);
    if (!audioRef.current) return;
    audioRef.current.volume = v;
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  const handleSkip = (seconds: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime += seconds;
  };

  const toggleLoop = () => {
    setLoop((prev) => !prev);
  };

  const handleTimeUpdate = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;

    setTotalTime(audioRef.current.duration);
  };

  return (
    <CustomPlayerContext.Provider
      value={{
        audioRef,
        isMuted,
        loop,
        currentTime,
        volume,
        totalTime,
        handlePlay,
        handlePause,
        handleVolumeChange,
        toggleMute,
        toggleLoop,
        handleSkip,
        handleLoadedMetadata,
        handleTimeUpdate,
      }}
    >
      {children}
    </CustomPlayerContext.Provider>
  );
};

export const useCustomPlayerContext = () => useContext(CustomPlayerContext);
