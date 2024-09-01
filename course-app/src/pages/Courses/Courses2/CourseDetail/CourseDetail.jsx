import "./CourseDetail.css";
import { useLocation } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiCoursera } from "react-icons/si";

import { enrollToCourse } from "../../../../redux/studentSlice";
import { useDispatch } from 'react-redux';


export default function CourseDetail() {
  const location = useLocation();
  const {item} = location.state || {};

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(enrollToCourse(item)); // Directly passing the item object
  };
  


  return (
    <div className="courseDetail mt-5 container">
      <div className="courseDetail-main">
        <div className="courseDetail-side1">
          <img src={item.thumbnail} className="img-fluid" alt="" />
        </div>
        <div className="courseDetail-side2">
          <div className="courseDetail-header">
            <h1>
            {item.name}
            </h1>
            <h4>By -{item.instructor}</h4>
          </div>
          <div className="courseDetail-para">
            <p>
              {item.description}
            </p>
          </div>
          <p>Location : {item.location}</p>
          <h5>Schedule : {item.schedule}</h5>
          <h6> Duration : {item.duration}</h6>
          <h6>Enrollment Statue : {item.enrollmentStatus}</h6>
          <h5 className="mt-4">What You Will Learn From this course?</h5>
          <ul>
            {
              item.prerequisites.map((data,index)=>{
                return <li key={index}>{data}</li>
              })
            }
          </ul>
          <button className="btn btn-primary mt-4" onClick={()=>handleClick(item)}>Enroll to the Course</button>
        </div>
      </div>
      <div  className="mt-5">
          <h2>
            View Sylabus
          </h2>
          <div className="timeline-course">
          <VerticalTimeline lineColor="grey">

          {item.syllabus.map((syllabusData, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  contentStyle={{ background: 'rgb(232, 232, 232)', color: 'black' }}
                  contentArrowStyle={{ borderRight: '7px solid rgb(232, 232, 232)' }}
                  className="vertical-timeline-element--education"
                  date={`Week ${syllabusData?.week ?? 'N/A'}`} // Corrected syntax
                  iconStyle={{ background: 'blue', color: '#fff' }}
                  icon={<SiCoursera />}
                >
                  <h3 className="vertical-timeline-element-title">{syllabusData.topic}</h3>
                  <p>{syllabusData.content}</p>
                </VerticalTimelineElement>
              );
            })}
          
          </VerticalTimeline>
          </div>
      </div>
    </div>
  )
}
