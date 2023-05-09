import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Person from './components/person';

function App() {

  // make a request and get our app's data
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // make that request
    axios('https://swapi.dev/api/people').then((response) => {
      let peopleArray = response.data.results;
      setPeople(peopleArray);
    });
  }, []);
  // people (state)
  // [] on first render
  // [{}, {}, {}, {}, {}, {}, {}, {}] after data comes back
  let peopleJSX = people.map((object) => {
    console.log(object);
    return <Person name={object.name} height={object.height} key={object.url}/>
  })
  // peopleJSX
  // []
  // [<Person name={object.name} height={object.height} key={object.url}/>, <Person name={object.name} height={object.height} key={object.url}/>, <Person name={object.name} height={object.height} key={object.url}/>]

  return (
    <div className="App">
      <header className="App-header">
        {peopleJSX}
      </header>
    </div>
  );
}

export default App;
