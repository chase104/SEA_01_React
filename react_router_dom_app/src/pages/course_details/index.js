import React, { useContext } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';


const CourseDetails = () => {
    // get paramater variables
    const { name, professorName } = useParams();

    // to get query info
    const [searchParams] = useSearchParams();
    searchParams.get("title");

  return (
    <div>
        <h1>Course Name: {name}</h1>
        <p>Course Professor {professorName}</p>
    </div>
  )
}

export default CourseDetails