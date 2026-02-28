import React from 'react';
// 1. Importando o ícone bonitão
import { Volume2 } from 'lucide-react';

const AudioButton = ({ audioUrl }) => {
  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    } else {
      alert("Áudio não disponível para esta palavra."); 
    }
  };

  return (
    <button 
      className="audio-button" 
      onClick={playAudio} 
      title="Ouvir pronúncia"
      disabled={!audioUrl} 
      style={{ opacity: audioUrl ? 1 : 0.5, cursor: audioUrl ? 'pointer' : 'not-allowed' }}
    >
      {/* 2. Trocamos o emoji 🔊 pelo componente do ícone! */}
      {/* Coloquei um tamanho de 24px que fica perfeito dentro do botão de 60px */}
      <Volume2 size={24} />
    </button>
  );
};

export default AudioButton;