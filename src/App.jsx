import './index.module.css';
import  Profile  from './components/Profile/Profile.jsx'
import userData from './components/Profile/UserData.json'
import FriendList from './components/FriendList/FriendList.jsx'
import friendsData from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx'
import transactions from "./components/TransactionHistory/transactions.json"
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