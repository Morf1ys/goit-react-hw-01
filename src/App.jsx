import './index.module.css';
import  Profile  from './Components/Profile/Profile.jsx'
import userData from './Components/Profile/UserData.json'
import FriendList from './Components/FriendList/FriendList.jsx'
import friendsData from './Components/FriendList/friends.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory.jsx'
import transactions from "./Components/TransactionHistory/transactions.json"
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