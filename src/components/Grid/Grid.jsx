import React from 'react';
import Country from './Country/Country';
import './grid.scss';

export default function Grid(props) {

  const countries = props.countries;

  if (countries.length > 0) {
    return (
      <section className='grid pad-sides pad-tb-lg'>
        {countries.map((country, index) => <Country countryInfo={country} key={index} onClick={() => props.setActive(country)}/>)}
      </section>
    )
  } else {
    return (
      <div></div>
    )
  }

}
