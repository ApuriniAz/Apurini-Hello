import React from "react";
import Select from 'react-select'
import './languageSelector.css';

function LanguageSelector({ t, languageOptions, setLanguage, currentLanguage }) {
    const selectStyle = {
        option: (provided, state) => ({
            ...provided,
            boxShadow: "none",
        }),
        control: base => ({
            ...base,
            border: 0,
            // This line disable the blue border
            boxShadow: 'none'
          })
    }

    return (
        <div className='apurini-language-selector navbar-default .navbar-nav'>
            <Select 
            className="react-select"
            classNamePrefix="react-select"
            styles={selectStyle} 
            options={languageOptions} 
            defaultValue={languageOptions.find(option => option.value === currentLanguage)}
            onChange={e => setLanguage(e.value)} 
            />
        </div>)
}

export default LanguageSelector;