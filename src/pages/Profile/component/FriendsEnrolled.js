import React from "react";
import Card from "./Card";
import WithdrawBalance from "./WithdrawBalance";
import style from "./FriendsEnrolled.module.css";

function FriendsEnrolled(props) {
  const { walletBalance, referralCode, friends } = props;
  return (
    <div>
      <WithdrawBalance
        walletBalance={walletBalance}
        referralCode={referralCode}
        friendsEnrolled={true}
      />
      <div className={style.friendsEnrolled}>
        Friends Who Enrolled ({friends.length})
      </div>
      <div className={style.friendsContainer}>
        {friends.map((element, index) => (
          <Card
            name={element.name}
            time={element.time}
            courses={element.courses}
            amount={element.amount}
            keyIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

export default FriendsEnrolled;
