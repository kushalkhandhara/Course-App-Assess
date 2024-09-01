import Card from "./Card/Card";
import "./Enroll1.css";
import { useSelector} from 'react-redux';
export default function Enroll1() {
  
  const enrollData = useSelector(state => state.enrollCourse?.enrolledCourses || []);



  return (
    <>
        <div className="enroll1 text-center px-2">
            <h1>Your Enrolled Courses</h1>
        </div>
        <div className="enroll-courses container mt-5 d-flex justify-content-center flex-wrap gap-5">
        { enrollData.length > 0 ? 
        enrollData.map((data,index)=>{
          return  <Card data={data} key={index} />
        }) :( <h2>You have not Enrolled in Any Courses Yet</h2>)}
        </div>
    </>
  )
}
