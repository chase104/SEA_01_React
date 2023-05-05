import React, { useEffect, useState } from 'react'
import './index.css'

const EmployeeDirectory = () => {
    // local storage
    // storage in the browser
    // check if I have an array
    // DONT load until local storage is checked
    // 1. get my array from local storage
    // 2. add to my local storage array

    // const [employees, setEmployees] = useState([
    //     {
    //         name: "bill",
    //         position: "CTO",
    //         id: 1
    //     },
    //     {
    //         name: "Sarah",
    //         position: "CEO",
    //         id: 2
    //     },
    //     {
    //         name: "Sasha",
    //         position: "Accountant",
    //         id: 3
    //     },
    // ])
    const [employees, setEmployees] = useState([])
    const [loading, setIsLoading] = useState(true)
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        // check if there is local storage data
        let stringEmployeesArray = localStorage.getItem('employees');
        console.log(stringEmployeesArray);
        let employeesArray = JSON.parse(stringEmployeesArray)
        console.log(employeesArray);
        if(employeesArray) {
            setEmployees(employeesArray)
        }
    }, [])

    useEffect(() => {
        // set in localStorage

        if (firstRender) {
            setFirstRender(false)
        } else {
            let stringVersionOfEmployees = JSON.stringify(employees);
            localStorage.setItem('employees', stringVersionOfEmployees)
        }
  
    }, [employees]);


    const [newEmployee, setNewEmployee] = useState({
        name: '',
        position: ''
    })
    console.log(newEmployee);
    let employeesJSX = employees.map((obj)=> {
        return (
            <div className="employee" key={obj.id}>
                <div>
                    {obj.name}
                </div>
                <div>
                    {obj.position}
                </div>
            
            </div>
        )
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        let newArray = [...employees, newEmployee];
        setEmployees(newArray)
        // add to employees array
        // change localStorage
    }

    const handleChange = (e) => {
        let propertyName = e.target.name;
        let newObject = {
            ...newEmployee,
            [propertyName]: e.target.value,
            id: Math.random()
        }
        setNewEmployee(newObject)
    }

  return (
    <div>
        <form className='employee-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">New Name</label>
                <input 
                    name="name"  
                    value={newEmployee.name} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="position">New Position</label>
                <input 
                    name="position"  
                    value={newEmployee.position}
                    onChange={handleChange}
                />
            </div>
            <button>Add Employee</button>
        </form>
        {employeesJSX}

    </div>
  )
}

export default EmployeeDirectory