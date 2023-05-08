import React from 'react'
import './index.css'

const ApartmentCard = ({apartmentObject}) => {
    // console.log("rendering new apartment card with this data: ", apartmentObject);
  return (
    <div className="single-apartment">
        <img src={apartmentObject.img} alt="apartment building"/>
        <div className="data">
            <div>{apartmentObject.name}</div>
            <div>{apartmentObject.rentalPrice}</div>
            <div>{apartmentObject.state}</div>
        </div>
    </div>
  )
}

export default ApartmentCard