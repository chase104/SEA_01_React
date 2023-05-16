import React, { useContext } from 'react'
import { MyFirstContext } from '../../contexts'

const ImportantMessage = () => {
    const { importantMessage } = useContext(MyFirstContext);
    
  return (
    <div>{importantMessage}</div>
  )
}

export default ImportantMessage