import React, {useContext, useEffect} from 'react';
import './index.css';
import AllQuotes from '../all_quotes';
import QuoteDetails from '../quote_details';
import axios from 'axios';
import { MainContext } from '../../contexts/MainContext';

const Dashboard = () => {
  // here we can go ask for the quotes information.
  const { setQuotes } = useContext(MainContext)

  const getQuoteData = () => {

          const makeCall = async () => {   
            let responseObject = await axios('https://api.quotable.io/quotes/random?limit=7&maxLength=60');
            let data = responseObject.data;
            setQuotes(data)
          }
          makeCall()

  }

  useEffect(getQuoteData, [])

  return (
    <div className="content-container">
      <AllQuotes  />
      <QuoteDetails />
   
    </div>
  )
}

export default Dashboard