import React from 'react';
import './detail.scss';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function Detail(props) {

  const country = props.country;
  const borders = props.borders;
  const selectActive = props.select;

  return (
    <div className='detail pad-sides mb-md'>
      <button className="detail__back brd-rad-sm" onClick={() => selectActive(null)}>
        <KeyboardBackspaceIcon />
        Back
      </button>
      <div className="detail__grid">
        <div className="detail__flag">
        <img src={country.flags.svg} alt={country.flags.alt} />
        </div>
        <h1 className="detail__name heading-1">{country.name.common}</h1>
        <ul className="detail__info-left">
          <li className="detail__info--item mb-sm"><b className="bold-body">Native Name: </b>{country.name.nativeName && Object.values(country.name.nativeName)[0].common}</li>
          <li className="detail__info--item mb-sm"><b className="bold-body">Population: </b>{country.population && country.population.toLocaleString()}</li>
          <li className="detail__info--item mb-sm"><b className="bold-body">Region: </b>{country.region && country.region}</li>
          <li className="detail__info--item mb-sm"><b className="bold-body">Sub Region: </b>{country.subregion && country.subregion}</li>
          <li className="detail__info--item"><b className="bold-body">Capital: </b>{country.capital && country.capital[0]}</li>
        </ul>
        <ul className="detail__info-right">
          <li className="detail__info--item mb-sm"><b className="bold-body">Top Level Domain: </b>{country.tld && country.tld[0]}</li>
          <li className="detail__info--item mb-sm"><b className="bold-body">Currencies: </b>{country.currencies && Object.values(country.currencies)[0].name}</li>
          <li className="detail__info--item"><b className="bold-body">Languages: </b>{country.languages && Object.values(country.languages).join(', ')}</li>
        </ul>
        <div className="detail__borders">
          <div className="detail__borders--heading"><b className="bold-body">Border Countries:</b></div>
          <div className="detail__borders--list">
            {borders ? borders.map((country, index) => <div className="detail__borders--item brd-rad-sm" onClick={() => selectActive(country)} key={index}>{country.name.common}</div>) : <div>None</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
