import React from 'react'
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import EmployeeList from '../../components/EmployeeList';

const HomePage = (props) => {
  return (
    <div>
        <Header />
        <SearchBar />
        <EmployeeList employees={props.employees}/>
    </div>
  )
}

export default HomePage