import './index.module.css';
import  Profile  from './Componentss/Profile/Profile.jsx'
import userData from './Componentss/Profile/UserData.json'
import FriendList from './Componentss/FriendList/FriendList.jsx'
import friendsData from './Componentss/FriendList/friends.json';
import TransactionHistory from './Componentss/TransactionHistory/TransactionHistory.jsx'
import transactions from "./Componentss/TransactionHistory/transactions.json"
export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
}