import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Hooks = () => {

//    When can we run logic
//    on every render
//    on first render
//    when component LEAVES the dom
//    when a SPECIFIC state changes

    const [cars, setCars] = ["ford", "hyundai", "toyota", "honda"]
    // anythign here runs on EVERY render
    const [user, setUser] = useState(false)
    const [text, setText] = useState('HOOKS')
    const [isFirstRender, setIsFirstRender] = useState(true)

    console.log("every render");

   
// only want to run on FIRST render
    useEffect(() => {
        if (user) {
            console.log("we have a user");
        } else {
            console.log("no user");
        }
        const dismount = () =>{
            console.log('Bye! Im leaving!');
            // send data to our database about the state of our application

        }
        // runs on DISMOUNT (leaving dom)
        return dismount
        // go get data that is outside the app
    }, [])

    //  runs on FIRST render AND when any variable in the array changes value
    // useMemo
    useEffect(()=>{
        if (isFirstRender) {
            setIsFirstRender(false)
        } else {
            console.log("user was changed");  
        }
    }, [user])


    useEffect(() => {
        // go search my database for users that match this text

        // getting an array of users BACK from the database
        // setting users state to that
    }, [text])

    //  getting outside data
    useEffect(() => {
        const getData = async () => {
            // fetch can make url requests (HTTP)
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => console.log(data))
        }
        getData()
    }, []);
   


  return (
    <div onClick={() => setUser(!user)}>
        <div>
            {text}
        </div>
        <input 
            type="text" 
            name="" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            />

    </div>
  )
}

export default Hooks