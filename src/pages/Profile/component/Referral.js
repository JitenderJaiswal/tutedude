import React from "react";
import WithdrawBalance from "./WithdrawBalance";
import HowWork from "./HowWork";

function Referral(props) {
  return (
    <div>
      <WithdrawBalance {...props} width={"486px"} height={"188px"} />
      <HowWork />
    </div>
  );
}

export default Referral;
