import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import './inputs.scss';

export default function Inputs(props) {

  const [dropdown, setDropdown] = useState(false);

  const handleInputChange = (event) => {
    props.onInputChange(event.target.value);
  };

  const handleDropdown = (event) => {
    props.onDropdownChange(event.target.innerText);
    setDropdown(false);
  };

  return (
    <section className="inputs pad-sides">
      <div className="search brd-rad pad-tb-sm">
        <input type="search" name="search" id="search" className="search__input brd-rad" placeholder='Search for a country...' autoComplete='off' value={props.value} onChange={handleInputChange}/>
        <div className="search__icon">
          <SearchIcon fontSize="inherit" className='search__icon--mui' />
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown__flex brd-rad pad-tb-sm" onClick={() => setDropdown(!dropdown)}>
          <div className="dropdown__head">{props.region}</div>
          <div className="dropdown__icon">
            <KeyboardArrowDown fontSize="inherit" className='dropdown__icon--mui' />
          </div>
        </div>
        {dropdown && 
        <ul className="dropdown__list brd-rad">
          <li className="dropdown__list--item" onClick={handleDropdown}>All Regions</li>
          <li className="dropdown__list--item" onClick={handleDropdown}>Africa</li>
          <li className="dropdown__list--item" onClick={handleDropdown}>Americas</li>
          <li className="dropdown__list--item" onClick={handleDropdown}>Asia</li>
          <li className="dropdown__list--item" onClick={handleDropdown}>Europe</li>
          <li className="dropdown__list--item" onClick={handleDropdown}>Oceania</li>
        </ul>}

      </div>
    </section>

  )
}
