import React, { useRef, useEffect, useState } from 'react';

const SoundControl = ({ name, src }) => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0); // 🔧 Inicia en 0 (silencio)

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
        className="w-1/3" // Cambiado a un cuarto de la pantalla
      />
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default function Mezcladora() {
  const lluviaSrc = import.meta.env.VITE_LLUVIA_SRC;
  const hogueraSrc = import.meta.env.VITE_HOGUERA_SRC;
  const birdsSrc = import.meta.env.VITE_BIRDS_SRC;
  const thunderSrc = import.meta.env.VITE_THUNDER_SRC;
  const riverSrc = import.meta.env.VITE_RIVER_SRC;
  const cricketsSrc = import.meta.env.VITE_CRICKETS_SRC;
  const windSrc = import.meta.env.VITE_WIND_SRC;
  const wavesSrc = import.meta.env.VITE_WAVES_SRC;
  const seagulsSrc = import.meta.env.VITE_SEAGULS_SRC;
  const frogsSrc = import.meta.env.VITE_FROGS_SRC;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-white rounded-2xl shadow-lg" style={{ marginLeft: '6%' }}>
      <h1 className="text-2xl font-bold text-center mb-6">🌿 Mezcladora Natural</h1>
      <div className="grid grid-cols-2 gap-4">
        <SoundControl name="Lluvia" src={lluviaSrc} />
        <SoundControl name="Hoguera" src={hogueraSrc} />
        <SoundControl name="Pajaros" src={birdsSrc} />
        <SoundControl name="Truenos" src={thunderSrc} />
        <SoundControl name="Rio" src={riverSrc} />
        <SoundControl name="Grillos" src={cricketsSrc} />
        <SoundControl name="Viento" src={windSrc} />
        <SoundControl name="Olas" src={wavesSrc} />
        <SoundControl name="Gaviotas" src={seagulsSrc} />
        <SoundControl name="Ranas" src={frogsSrc} />
      </div>
    </div>
  );
}
