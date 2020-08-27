import React from 'react';

const Boton = props =>{
    const { caption } = props;
    const handleClick= (event) => console.log('clicked', event);
    
    return(
        <button onClick={handleClick} className="button is-link is-rounded"> {caption || 'A completar'} </button> 
    )
}

export default Boton;