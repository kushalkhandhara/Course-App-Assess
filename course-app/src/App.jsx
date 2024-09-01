import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Courses from "./pages/Courses/Courses"
import Enroll from "./pages/Enroll/Enroll"
import CourseDetail from "./pages/Courses/Courses2/CourseDetail/CourseDetail"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}  />
      <Route path="/courses" element = {<Courses/>}  />
      <Route path="/enroll" element = {<Enroll/>} />
      <Route path="/courseDetails" element={<CourseDetail/>} />
    </Routes>
    </>
  )
}

export default App
