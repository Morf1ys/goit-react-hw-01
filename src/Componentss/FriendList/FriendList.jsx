// FriendList.jsx

import FriendListItem from './FriendListItem/FriendListItem.jsx'; 
import css from "./FriendList.module.css"
const FriendList = ({ friends }) => {
  return (
    <ul className={css["friend-cont"]}>
      {friends.map(friend => (
        <li className={css["friend-li-cont"]} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
