import React, { useEffect, useState } from 'react';
import './styles/main.scss';
import Header from './components/Header/Header';
import Inputs from './components/Inputs/Inputs';
import Grid from './components/Grid/Grid';
import Detail from './components/Detail/Detail';

export default function App() {

  const [countryData, setCountryData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countryData);
  const [inputValue, setInputValue] = useState('');
  const [region, setRegion] = useState('Filter by Region');
  const [activeCountry, setActiveCountry] = useState(null);
  const [activeBorders, setActiveBorders] = useState(null);

  // Set darkMode to user broswer settings on initial load
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);


  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleDropdown = (value) => {
    setRegion(value);
  }

  const selectActive = (selectedCountry) => {
    if (!selectedCountry) {
      setActiveCountry(null);
      setActiveBorders(null);
    } else {
      setActiveCountry(selectedCountry);

      // If the country has borders array, find all countries which have a cca3 code in the borders array
      if ('borders' in selectedCountry) {
        const borderCountries = countryData.filter(country => {
          return selectedCountry.borders.includes(country.cca3);
        });
        setActiveBorders(borderCountries);
      }
    }
  }

  const switchDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    // useEffect only for page load. This gets data from API and stores it.
    const fetchData = async () => {
      try {
        const url = "https://restcountries.com/v3.1/all";
        const res = await fetch(url);
        const data = await res.json();

        // Sort countries alphabetically 
        const sortedData = data.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          }
        });

        setCountryData(sortedData);
        setFilteredCountries(sortedData);
      } catch {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // useEffect to trigger every time inputs have been changed

    const input = inputValue;

    // If no specific region is selected only the input field is considered, otherwise both the input field and dropdown are used to filter
    if (region === 'All Regions' || region === 'Filter by Region') {
      setFilteredCountries(countryData.filter(country => {
        return country.name.common.toLowerCase().includes(input.toLowerCase()) || country.name.official.toLowerCase().includes(input.toLowerCase());
      }));
    } else {
      setFilteredCountries(countryData.filter(country => {
        return (country.region === region) && (country.name.common.toLowerCase().includes(input.toLowerCase()) || country.name.official.toLowerCase().includes(input.toLowerCase()));
      }));
    }
  }, [region, inputValue]);

  useEffect(() => {
    // useEffect for darkMode changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])

  return (
    <main className='container'>
      <Header dark={darkMode} switch={switchDarkMode}/>

      {activeCountry ? 
      <Detail country={activeCountry} borders={activeBorders} select={selectActive} /> :
      <section className="homepage">
        <Inputs onInputChange={handleInputChange} onDropdownChange={handleDropdown} value={inputValue} region={region} />
        <Grid countries={filteredCountries} setActive={selectActive} />
      </section>
      }
    </main>
  )
}

