import React from 'react';
import './App.css'; // Garantindo que aquele nosso CSS estilo Google está carregando

// 1. O grande truque: Importando o componente que você acabou de criar!
// (Lembre-se de checar se o caminho './components/AudioButton' está certinho no seu projeto)
import AudioButton from './components/AudioButton';

function App() {
  // Uma URL de áudio real (mock) apenas para você testar se o botão funciona
  const audioDeTeste = "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3";

  return (
    <div className="dictionary-app">
      
      {/* Simulando o cabeçalho da palavra no Dicionário */}
      <div className="word-header">
        <div>
          <h1 className="word-title">hello</h1>
          <p className="word-phonetic">/həˈloʊ/</p>
        </div>

        {/* 2. Chamando o seu botão e passando o áudio de teste para ele! */}
        <AudioButton audioUrl={audioDeTeste} />
      </div>

      {/* O resto da tela viria aqui embaixo... */}
      <div className="part-of-speech">exclamation</div>
      <ul className="meanings-list">
        <li>
          Used as a greeting or to begin a phone conversation.
          <span className="example-text">"hello there, Katie!"</span>
        </li>
      </ul>

    </div>
  );
}

export default App;