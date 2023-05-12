import logo from './logo.svg';
import './App.css';
import { databaseInfo } from './database';
import { useEffect, useState, useContext } from 'react';
import Header from './components/Header'
import Filter from './components/Filter';
import Display from './components/Display';
import ApartmentCard from './components/ApartmentCard';
import CardLoader from './components/CardLoader';
import { PrimaryContext } from './contexts/PrimaryContext';


function App() {
  console.log("rendering app");
  
  const [loading, setLoading] = useState(true);

  const {setAllApartments, setMatchedApartments} = useContext(PrimaryContext)


  const loaders = [];
  for (let i=0; i<5; i++) {
    loaders.push(<CardLoader key={i}/>)
  }


  const callBackFunction = () => {
    // get information from database
    setTimeout(() => {
      let apartmentsArray = databaseInfo;
      setAllApartments(apartmentsArray);
      setMatchedApartments(apartmentsArray);
      setLoading(false)

    }, 2000)
  }

  useEffect(callBackFunction, []);



  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Filter  />
        {loading ? loaders : <Display />}
      </div>

      <Home user={user}/>
    </div>
  );
}

export default App;
