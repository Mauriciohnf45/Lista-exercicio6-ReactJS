import React from 'react';

const StyledParagraph = ({ isHighlighted }) => {
  const paragraphStyle = {
    color: isHighlighted ? 'blue' : 'black', // Azul se isHighlighted for true, preto caso contrário
    fontWeight: isHighlighted ? 'bold' : 'normal', // Negrito se isHighlighted for true, normal caso contrário
  };

  return (
    <p style={paragraphStyle}>
      Este parágrafo muda de estilo com base na prop isHighlighted.
    </p>
  );
};

export default StyledParagraph;
