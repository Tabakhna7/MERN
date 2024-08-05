import React from 'react'
import { useParams } from 'react-router-dom';

function StyledWordPage() {
    const { word, color1, color2 } = useParams();
    const style = {
      color: color1 || 'black',
      backgroundColor: color2 || 'white',
      padding: '10px',
      borderRadius: '5px'
    };
  
    return <h1 style={style}>{word}</h1>;
  };

export default StyledWordPage