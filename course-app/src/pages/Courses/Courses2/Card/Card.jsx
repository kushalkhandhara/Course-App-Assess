import "./Card.css";
import { useNavigate } from 'react-router-dom';

export default function Card(props) {

    const navigate = useNavigate();
    const handleView = (item) => {
      navigate('/courseDetails', { state: { item } }); // Pass menu and restaurant name as state
    };


  return (
    <div className="course-card">
        <div className="course-card-img">
            <img  src={props.item.thumbnail} alt="Error" className="img-fluid" />
        </div>
        <div className="course-card-body p-3">
            <div className="course-card-header mt-1">
                <h5 className="mb-1">{props.item.name}</h5>
                <h5>{props.item.instructor}</h5>
            </div>
            <div className="course-card-para">
                <p>
                   {props.item.description}
                </p>
            </div>
            <div className="course-card-btn">
                <button onClick = {()=>{handleView(props.item)}}>View Details</button>
            </div>
        </div>
    </div>
  )
}
