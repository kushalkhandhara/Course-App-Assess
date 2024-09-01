import Card from "./Card/Card";
import "./Courses2.css";
import { IoIosSearch } from "react-icons/io";
import courses from "../../../data/data.js";
import { useState } from "react";

export default function Courses2() {
  
  // State to manage the input field
  const [inputs, setInputs] = useState({ search: "" });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Ensure the search input is a string
  const searchTerm = inputs.search?.toLowerCase() || "";

  // Filter the courses based on the search input
  const filteredCourses = courses.filter((course) => {
    const courseName = course.name?.toLowerCase() || ""; // Safe fallback for name
    const instructorName = course.instructor?.toLowerCase() || ""; // Safe fallback for instructor

    return courseName.includes(searchTerm) || instructorName.includes(searchTerm);
  });

  return (
    <div className="courses2 container mt-5">
      <div className="search-field">
        <input
          type="text"
          name="search"
          onChange={handleChange}
          value={inputs.search}
          placeholder="Search By Course or Instructor Name..."
        />
        <IoIosSearch size={35} color="grey" />
      </div>
      <div className="courses d-flex justify-content-center gap-5 flex-wrap my-5">
        {searchTerm
          ? filteredCourses.map((item, key) => (
              <Card item={item} key={key} />
            ))
          : courses.map((item, key) => (
              <Card item={item} key={key} />
            ))}
      </div>
    </div>
  );
}
