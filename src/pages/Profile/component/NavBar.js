import React from "react";
import style from "./navBar.module.css";
import logo from "../../../assets/svg/logo.svg";
import person from "../../../assets/svg/person.svg";
import downArrow from "../../../assets/svg/downArrow.svg";
function NavBar(props) {
  return (
    <div className={style.navbar}>
      <div className={style.image1}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={style.parentContainer}>
        <div className={style.myAssignment}>My Assignment</div>
        <div className={style.chatWithMentor}>Chat with Mentor</div>
        <div className={style.vector1}>
          <img src={person} alt="PersonSVG" />
        </div>
        <div className={style.profileName}>Jitender Jaiswal</div>
        <div className={style.vector2}>
          <img src={downArrow} alt="downArrow" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
