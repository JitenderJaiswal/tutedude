import React from "react";
import data from "../../../assets/data/data";
import style from "./howWork.module.css";

function HowWork(props) {
  return (
    <div className={style.parentContainer}>
      <div className={style.howDoesItWork}>How does it work ?</div>
      <div
        style={{
          marginTop: "-17px",
          display: "flex",
          flexWrap: "wrap",
          width: "800px",
        }}
      >
        {data.map((key, index) => (
          <div
            key={index}
            style={{ display: "flex", width: "400px", marginTop: "37px" }}
          >
            <div className={style.vector}>
              <img src={key.image} alt={"svg"} className={style.vectorImage} />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <div className={style.boldText} style={{ width: key.titleWidth }}>
                {key.title}
              </div>
              <div
                className={style.normalText}
                style={{ width: key.descriptionWidth }}
              >
                {key.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowWork;
