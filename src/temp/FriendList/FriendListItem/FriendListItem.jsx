// FriendListItem.jsx
import css from "./FriendsListItem.module.css"
const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <div className={css["fr-item-cont"]}>
      <img src={avatar} alt="Avatar" width="70" />
      <p className={css["friend-title"]}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
