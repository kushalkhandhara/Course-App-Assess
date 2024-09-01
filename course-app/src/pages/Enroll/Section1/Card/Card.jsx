import "./Card.css";
// import img from "../../../../assets/courseImg1.png"
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Card(props) {
  return (
    <div className="enroll-card">
        <div className="enroll-card-img">
            <img className="img-fluid" src={props.data.thumbnail}  />
        </div>
        <div className="enroll-card-body p-4">
            <div className="enroll-card-header">
                <h4>{props.data.name}</h4>
                <h4>{props.data.instructor}</h4>
                <h6>{props.data.duration}</h6>
            </div>
            <div className="enroll-card-progress mt-4">
                <ProgressBar  variant="success" now = {50} label={50} />
            </div>
        </div>
    </div>
  )
}
