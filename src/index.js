import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDYj1qVw-KrxgWAP5SOH0mQf_JLXw6oS0I';

// Create a new component to produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take the component's html and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
