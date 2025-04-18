import React, { useRef, useEffect, useState } from 'react';

const SoundControl = ({ name, src }) => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    if (volume === 0) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      if (audio.paused) {
        audio.loop = true;
        audio.play().catch((e) => {
          console.error(`Error reproduciendo ${name}`, e);
        });
      }
    }
  }, [volume]);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">{name}</h2>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="w-full"
      />
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default function Mezcladora() {
  const lluviaSrc = import.meta.env.VITE_LLUVIA_SRC;
  const hogueraSrc = import.meta.env.VITE_HOGUERA_SRC;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">🌿 Mezcladora Natural</h1>
      <SoundControl name="Lluvia" src={lluviaSrc} />
      <SoundControl name="Hoguera" src={hogueraSrc} />
    </div>
  );
}
