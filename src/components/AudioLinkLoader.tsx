import { useId, FormEvent } from "react";
import { useCustomPlayerContext } from "./CustomPlayer/CustomPlayerContextProvider";
import styles from "./AudioLinkLoader.module.css";

export const AudioLinkLoader = () => {
  const { audioUrl, loadError, loadCount, loading, updateAudioUrl, load } =
    useCustomPlayerContext();
  const urlId = useId();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    load();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Currently it only works for MP3 file</h3>
        <p>
          You can try with{" "}
          <a href="https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3">
            https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3
          </a>
        </p>
        <div>
          <label htmlFor={urlId}>Input Audio Url: </label>
          <input
            id={urlId}
            className={styles.audioInput}
            type="text"
            value={audioUrl}
            onChange={(e) => updateAudioUrl(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Load"}
          </button>
        </div>
        {loadCount > 1 && loadError && (
          <p className={styles.errorText}>Please provide the valid audio link!</p>
        )}
      </form>
    </>
  );
};
