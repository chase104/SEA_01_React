import React from 'react'

const ApartmentCard = ({apartmentObject}) => {
    console.log("rendering new apartment card with this data: ", apartmentObject);
  return (
    <div>{apartmentObject.name}</div>
  )
}

export default ApartmentCard