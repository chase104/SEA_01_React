import React, { useContext } from 'react'
import './index.css'
import ImportantMessage from '../important_message'
import { MyFirstContext } from '../../contexts'



const Footer = () => {

  const { pages } = useContext(MyFirstContext);

  const pagesJSX = pages.map((pageString) => {
    return <div>{pageString}</div>
  });

  return (
    <div className='footer-container'>
      <ImportantMessage />
      {pagesJSX}
    </div>
  )
};

export default Footer