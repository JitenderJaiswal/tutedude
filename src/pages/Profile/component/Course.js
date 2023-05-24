import React from "react";
import style from "./course.module.css";

function Course(props) {
  const { course, index } = props;
  return (
    <div key={index} className={style.courseNameText}>
      {course}
    </div>
  );
}

export default Course;
