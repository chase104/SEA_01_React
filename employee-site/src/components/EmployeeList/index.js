import React from 'react'

const EmployeeList = (props) => {
    // loop through array of employees and display them
    console.log(props);
    // .map will return an array
    let JSXArray = props.employees.map((object, index) => {
        return <div key={object.name+index+"qwerfdqwerasdf"}>{object.name}</div>
    });
    // JSXArray = [<div>James King</div>, <div>Sarah Sar</div>, <div>Jessie Sar</div>]
    console.log(JSXArray);
  return (
    <div>
        {JSXArray}
    </div>
  )
}

export default EmployeeList