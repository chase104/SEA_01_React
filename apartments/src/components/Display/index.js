import React from 'react'
import ApartmentCard from '../ApartmentCard';

// const Display = (props) => {
//   let apartmentsToDisplay = props.apartmentsToDisplay;

const Display = ({apartmentsToDisplay}) => {

// we have an array of apartment data
// I want to show this data
// make an array of JSX (using the data)



    let apartmentsJsxArray = apartmentsToDisplay.map((object) => {
        // return <h4>{object.name}</h4>
        return <ApartmentCard apartmentObject={object} />
    });


  return (
    <div>{apartmentsJsxArray}</div>
  )
}

export default Display