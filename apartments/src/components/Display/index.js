import React, { useContext } from 'react'
import ApartmentCard from '../ApartmentCard';
import { PrimaryContext } from '../../contexts/PrimaryContext';

// const Display = (props) => {
//   let apartmentsToDisplay = props.apartmentsToDisplay;

const Display = () => {

// we have an array of apartment data
// I want to show this data
// make an array of JSX (using the data)

    const { matchedApartments } = useContext(PrimaryContext)

     let apartmentsJsxArray = matchedApartments.map(
        (object) => {
            // return <h4>{object.name}</h4>
            return <ApartmentCard apartmentObject={object} key={object.name+object.img}/>
        }
    )

  return (
    <div>{apartmentsJsxArray}</div>
  )
}

export default Display