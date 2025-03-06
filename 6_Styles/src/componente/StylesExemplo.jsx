import React from 'react'

//arquivo css
import './StylesExemplo.css'

//arquivo modulo, importa como objeto
import style from './StylesExemplo.module.css'


const StylesExemplo = () => {

    //inline
    const inlineStyle = {
        color: 'blue',
        fontsixe: '20px'
    }

  return (
    <div>
        <h2>stylesExemplo</h2>
        {/* inline */}
        <h3 style={inlineStyle}>Estilo Inline</h3>

        {/* arquivo de estilos, com class */}
        <p className="text">Estilo de arquivo com class</p>

        {/* arquivo de estilo, com css modules */}
        <p className={style.textYellow}>Meu css modules</p>
    </div>
  )
}

export default StylesExemplo