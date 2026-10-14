import { Volume2, VolumeX } from "lucide-react";
import { tr } from "motion/react-client";
import { useRef, useState } from "react";

const BackGroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleBgMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.1;
    audio.playbackRate = 0.9;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/bgMusic.mp3" loop preload="none" />
      <button type="button" onClick={handleBgMusic}>
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
};

export default BackGroundMusic;
