//Componente FILHO
import React from 'react';

const PropsComponent = ({nome, idade}) => {
  return (
    <div>
        <h3>Ola {nome}</h3>
        <h4>Tenho {idade} anos.</h4>
    </div>
  );
};

export default PropsComponent;
