import logo from './logo.svg';
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import { Route, Routes, Navigate, redirect } from 'react-router-dom';
import Signup from './pages/signup';
import CourseDetails from './pages/course_details';
function App() {
  return (
    <div className="App">
        <nav>This is my navbar</nav>
        <Routes>
          <div>Nav 2</div>
         <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />}  />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          {/* paramater example */}
          <Route path="/course_details/:name/:professorName" element={<CourseDetails />} />
          {/* <Route path="/course_details" element={<RandomCourse />} /> */}


          {/* catch all route */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <footer>I am the footer</footer>
    </div>
  );
}

export default App;
