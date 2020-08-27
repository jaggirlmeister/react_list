import React from 'react';
import '../Dropdown/index.css';

const Dropdown = (props) =>{

    const {
      handleGenreChange,
      handleRemoveSelectedGenre,
      selectedGenre
    } = props

    return (
        
      <div className="mainCont">
        <div className="contDrop">
            <select onChange={handleWorkPositionChange} className="dropdown">
                <option id="default" value="" hidden>Select Position</option>
                <option value="Marketing">Marketing</option>
                <option value="Markets">Markets</option>
                <option value="Integration">Integration</option>
                <option value="Directives">Directives</option>
                <option value="Tactics">Tactics</option>
                <option value="Brand">Brand</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Assurance">Brand</option>
                <option value="Brand">Brand</option>
            </select>

            {selectedGenre && (
                <button
                    className='button'
                    aria-haspopup='true'
                    aria-controls='dropdown-menu'
                    onClick={handleRemoveSelectedGenre}
                    style={{ marginLeft: '15px' }}
                >
                    <span>{selectedGenre}</span>
                    <span className='icon is-small'>
                        <i className='fas fa-trash-alt' aria-hidden='true' />
                    </span>
                </button>
            )}
          </div>
        </div>
      );
}
      
 export default Dropdown;