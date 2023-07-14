import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
//import styled from 'styled-components';

import NasaPhoto from './Components/NasaPhoto'

//const WrapperDiv = styled.div`
//  font-family: sans-serif;
//  text-align: center;
//`;

function App() {
  const [data, setData] = useState();

  useEffect(() => {
   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => console.error(err))
  }, [])
  
  return (
    <div >
        { data && < NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;
