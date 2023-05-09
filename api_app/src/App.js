import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  // make a request and get our app's data
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // make that request
    axios('https://swapi.dev/api/people').then((response) => {
      let peopleArray = response.data.results;
      setPeople(peopleArray);
    });
  }, [])

  console.log(people);

  // []
  // [{}, {}, {}, {}, {}, {}, {}, {}]
  let peopleJSX = people.map((object) => {
    return <div>{object.name}</div>
  })
  // []
  // [<div>Luke</div>, <div>Luke</div>, <div>Luke</div>]

  return (
    <div className="App">
      <header className="App-header">
        {peopleJSX}
      </header>
    </div>
  );
}

export default App;
