import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './header.scss';

export default function Header(props) {

  const darkMode = props.dark;

  return (
    <header className='header pad-sides pad-tb-sm mb-lg'>
      <h2 className="heading-2">Where in the world?</h2>
      <h3 className="heading-3 dark-mode-btn" onClick={() => props.switch()}>
      {darkMode ? <DarkModeIcon className="dark-mode-btn__mui" /> : <DarkModeOutlinedIcon className="dark-mode-btn__mui" />}
        Dark Mode
      </h3>
    </header>
  )
}
