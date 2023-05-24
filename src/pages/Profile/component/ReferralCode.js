import React from "react";
import style from "./referralCode.module.css";

function ReferralCode(props) {
  const {
    referralCode,
    width,
    height,
    fontWeight,
    fontSize,
    lineHeight,
    referralWidth,
    referralHeight,
    referralFontSize,
    referralLineHeight,
    referralLetterSpacing,
    marginLeft,
    textAlign,
    marginTop,
    refferalMarginTop,
  } = props;
  return (
    <div className={style.parentContainer} style={{ marginLeft, marginTop }}>
      <div
        className={style.referralCode}
        style={{ width, height, fontWeight, fontSize, lineHeight, textAlign }}
      >
        Your Referral Code
      </div>
      <div
        className={style.EDCH54}
        style={{
          width: referralWidth,
          height: referralHeight,
          fontSize: referralFontSize,
          lineHeight: referralLineHeight,
          letterSpacing: referralLetterSpacing,
          marginTop: refferalMarginTop,
        }}
      >
        {referralCode}
      </div>
    </div>
  );
}

export default ReferralCode;
