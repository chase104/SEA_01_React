import React, { useState } from 'react'
import './index.css'


const Filter = ({allApartments, setMatchedApartments}) => {

    const [form, setForm] = useState(
        {
        searchString: "",
        price: 10000,
        state: ""
        }
    )
    const handleSearchChange = (e) => {
        let newObject = {
            ...form,
            searchString: e.target.value
        }
        setForm(newObject)
    }
    const handlePriceChange = (e) => {
        let newObject = {
            ...form,
            price: e.target.value
        }
        setForm(newObject)
    }
   const handleSelectChange = (e) => {
    console.log(e.target.value);
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    // make an array with ONLY the apartments that match.
    // allApartments
    // a string to search
    // a function to change state
    // use string to filter allApartments
    let smallerArray = allApartments.filter((object) => {
        // if object's name starts with the string (form.searchString)
        let stringToSearch = form.searchString;
        let objectName = object.name.toLowerCase()

        // does objectName START with string to search
        return objectName.startsWith(stringToSearch)
    })

    // use function with new array
    setMatchedApartments(smallerArray)

   }
  return (
    <div className='filters-container'>
        <h2>Filters...</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={form.searchString} 
                placeholder='search by name...'
                onChange={handleSearchChange}
            />
            {/* <input 
                type="number" 
                value={form.price}
                placeholder='Max Price'
                onChange={handlePriceChange}
            />
            <label htmlFor="state">State</label>
            <select 
                name="state"
                value={form.state} 
                onChange={handleSelectChange}
            >
                <option value=""></option>
                <option value="TX">TX</option>
                <option value="CA">CA</option>
                <option value="NY">NY</option>
            </select> */}
            <button >Search!</button>
        </form>
    
    </div>
  )
}

export default Filter