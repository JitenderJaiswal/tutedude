import React, { useState } from "react";
import Referral from "./component/Referral";
import FriendsEnrolled from "./component/FriendsEnrolled";
import friendsData from "../../assets/data/friendsData";
import personData from "../../assets/data/personData";
import style from "./profile.module.css";

function Profile(props) {
  const [person, setPerson] = useState(personData);
  const [friends, setFriends] = useState(friendsData);
  const [referralCode, setReferralCode] = useState("EDCH54");
  const [flag, setFlag] = useState(false);
  const [walletBalance, setBalance] = useState(person.walletBalance);
  return (
    <div>
      <div className={style.uiUx}>
        <div>UI/UX{" > "}Refer & Earn</div>
        {flag && <div>{" > "}Friends Referred</div>}
      </div>
      {!flag && (
        <>
          <Referral {...person} referralCode={referralCode} />
          <div
            onClick={() => setFlag(!flag)}
            className={style.friendsWhoEnrolled}
          >
            Friends Who Enrolled
          </div>
        </>
      )}
      {flag && (
        <FriendsEnrolled
          walletBalance={walletBalance}
          referralCode={referralCode}
          friends={friends}
        />
      )}
      <div className={style.termsAndCondition}>Terms & conditions</div>
    </div>
  );
}

export default Profile;
