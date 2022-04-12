import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const firstSimpson = {
    quote:
      "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
    character: 'Lisa Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
    characterDirection: 'Right',
  };

  const [simpson, setSimpson] = useState(firstSimpson);

  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(({ data }) => {
        setSimpson(data[0]);
      });
  };
  return (
    <div className='App'>
      <QuoteCard {...simpson} />
      <button type='button' onClick={getSimpson}>
        Get Simpson
      </button>
    </div>
  );
}
export default App;
