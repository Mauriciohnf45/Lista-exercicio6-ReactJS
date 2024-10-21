import React, { useState } from 'react';
import StyledParagraph from './components/StyledParagraph';

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div>
      <h1>Exemplo de Parágrafo com Estilo Dinâmico</h1>
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle Highlight
      </button>
      <StyledParagraph isHighlighted={isHighlighted} />
    </div>
  );
}

export default App;
