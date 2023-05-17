import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './index.css';

const Home = () => {

    const navigate = useNavigate();

   const [courses, setCourse] = useState([
    {
      name:"speaking 101",
      id: 324234,
      professor: "Jeff"
    },
    {
      name:"running 101",
      id: 674657465,
      professor: "Sasha"
    },
    {
      name:"driving 101",
      id: 89089,
      professor: "Yolanda"
    },
   ])

   const coursesJSX = courses.map((courseObject) => {
    return <Link 
            key={courseObject.id}
            to={`/course_details/${courseObject.name}/${courseObject.professor}`}>
            See more about {courseObject.name}
            </Link>
   });

  return (
    <div>
        <h1>HOME PAGE</h1>
        <Link to="/about">
          Go to about page
        </Link>
        <div className="course-container">
           {coursesJSX}
        </div>

     
    </div>
  )
}

export default Home