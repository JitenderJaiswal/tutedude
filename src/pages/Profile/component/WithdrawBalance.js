import React from "react";
import ReferralCode from "./ReferralCode";
import style from "./withdrawBalance.module.css";

function WithdrawBalance(props) {
  const {
    referralEarning,
    totalReferrals,
    walletBalance,
    width,
    height,
    referralCode,
    friendsEnrolled,
  } = props;
  return (
    <div className={style.parentContainer}>
      {!friendsEnrolled && (
        <>
          <div
            style={{ width: width, height: height }}
            className={style.dashboard}
          >
            <div className={style.dashboardchild}>
              <div className={style.refferalContainer}>
                <div className={style.referralEarning}>Referral Earning</div>
                <div className={style.rupee2500}>₹ {referralEarning}</div>
              </div>
              <div className={style.totalRefferalContainer}>
                <div className={style.totalReferrals}>Total Referrals</div>
                <div className={style.seven}>{totalReferrals}</div>
              </div>
              <div className={style.walletContainer}>
                <div className={style.walletBalance}>Wallet Balance</div>
                <div className={style.rupee500}>₹ {walletBalance}</div>
              </div>
            </div>
            <div>
              <button className={style.withdrawBalanceButton}>
                <span className={style.withdrawBalance}>Withdraw Balance</span>
              </button>
            </div>
          </div>
          <ReferralCode
            referralCode={referralCode}
            width={"228px"}
            height={"36px"}
            fontWeight={"600"}
            fontSize={"24px"}
            lineHeight={"36px"}
            referralWidth={"230px"}
            referralHeight={"30px"}
            referralFontSize={"20px"}
            referralLineHeight={"30px"}
            referralLetterSpacing={"1.5em"}
            marginLeft={"97px"}
            marginTop={"30px"}
            refferalMarginTop={"24px"}
          />
        </>
      )}
      {friendsEnrolled && (
        <>
          <ReferralCode
            referralCode={referralCode}
            width={"150px"}
            height={"24px"}
            fonteight={"400"}
            fontSize={"16px"}
            lineHeight={"24px"}
            referralWidth={"124px"}
            referralHeight={"24px"}
            referralFontSize={"16px"}
            referralLineHeight={"24px"}
            referralLetterSpacing={"0.75em"}
            marginLeft={"187px"}
            textAlign={"left"}
            refferalMarginTop={"18px"}
          />
          <div className={style.friendsWalletContainer}>
            <div className={style.friendsWalletBalance}>Wallet Balance</div>
            <div className={style.friendsRupee500}>₹ {walletBalance}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default WithdrawBalance;
