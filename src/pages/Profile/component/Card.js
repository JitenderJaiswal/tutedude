import React from "react";
import style from "./card.module.css";
import Course from "./Course";

function Card(props) {
  const { name, time, courses, amount, keyIndex } = props;
  return (
    <div key={keyIndex} className={style.frame}>
      <div className={style.flex}>
        <div className={style.headText}>{name}</div>
        <div className={style.timeText}>{time}</div>
      </div>
      <div className={style.courseEnrolledText}>
        Courses Enrolled ({courses.length})
      </div>
      <div
        style={{
          marginTop: "14px",
          display: "flex",
          marginLeft: "30px",
        }}
      >
        {courses &&
          courses.map((course, index) => (
            <Course index={index} course={course} />
          ))}
      </div>
      <div style={{ display: "flex", marginTop: "80px" }}>
        <div className={style.referralAmountText}>Referral Amount </div>
        <div className={style.rupeeText}>₹{amount}</div>
      </div>
    </div>
  );
}

export default Card;
