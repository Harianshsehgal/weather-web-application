import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function SearchBar(props){

// const[cityName,setCityName]= useState('Delhi');


    function inputChanged(event){
        
        props.setCityName(event.target.value);
    }

    function citySelected(){
        props.updateCity(props.cityName)
    }

    var input = document.getElementById("inputBox");
    

    return(
    <div className='SearchBar'>
    <h2>Get weather for any city</h2>
    <input id='inputBox'
    type="search"
    placeholder='search for location'
    onChange={inputChanged}
    ></input>
    <button id='searchBtn' onClick={citySelected}>Submit</button>
    </div>
)
}

 export  {SearchBar};
