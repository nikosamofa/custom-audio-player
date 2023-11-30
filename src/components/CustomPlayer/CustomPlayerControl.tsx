import { formatSeconds } from "../../utils/time";
import { useCustomPlayerContext } from "./CustomPlayerContextProvider";
import styles from "./CustomPlayerControl.module.css";

export const CustomPlayerControl = () => {
  const {
    loadError,
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
    handleTimeUpdate,
  } = useCustomPlayerContext();

  return (
    <div className={styles.container}>
      <div className={styles.rowContainer}>
        <button disabled={loadError} onClick={() => handleSkip(-10)}>
          &lt;&lt;
        </button>
        <button disabled={loadError} onClick={handlePause}>
          ||
        </button>
        <button disabled={loadError} onClick={handlePlay}>
          |&gt;
        </button>
        <button disabled={loadError} onClick={() => handleSkip(10)}>
          &gt;&gt;
        </button>
        <input
          disabled={loadError}
          type="range"
          min="0"
          max={Math.floor(totalTime).toString()}
          step="1"
          onChange={(e) => handleTimeUpdate(Number(e.target.value))}
        />
        <button disabled={loadError} onClick={toggleLoop}>
          {loop ? "Unloop" : "Loop"}
        </button>
      </div>
      <div className={styles.rowContainer}>
        <button disabled={loadError} onClick={toggleMute}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <input
          disabled={loadError}
          type="range"
          name="vol"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
        />
      </div>
      <p>
        {formatSeconds(currentTime)} / {formatSeconds(totalTime)}
      </p>
    </div>
  );
};
