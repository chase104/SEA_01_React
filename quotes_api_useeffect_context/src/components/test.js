import React, { useState, useEffect } from 'react';
import SinglePost from '../components/SinglePost.js';
import axios from 'axios';

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => setData(response.data))
  }, []);

  let postsJSX = data.map(item => (
    <SinglePost key={item.id} item={item} />
  ))

  return (
    <div>
        {postsJSX}
    </div>
  );
}

export default Posts;



