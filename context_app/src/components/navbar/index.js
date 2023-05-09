import React, { useContext } from 'react'
import UserImg from '../userimg'
import SingleButton from '../singlebutton'
import { primaryContext } from '../../contexts/PrimaryContext'

const Navbar = () => {

    const { pages } = useContext(primaryContext)
    // ["Home", "About", "Contact"]

    const arrayOfButtonJSX = pages.map((stringInArray) => {
        return <SingleButton text={stringInArray} />
    })
    // [<SingleButton text="Home" />, <SingleButton text="About" />,    <SingleButton text="Contact" />,]
  return (
    <div>
        {/* show page btns now */}
        {arrayOfButtonJSX}
        <UserImg />
    </div>
  )
}

export default Navbar