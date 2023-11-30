export const formatSeconds = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${minutes}:${formattedSeconds}`;
};
