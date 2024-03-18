
import TransactionItem from './TransactionItem/TransactionItem.jsx'; 
import css from "./TransactionHistory.module.css"
const TransactionHistory = ({ items }) => {
  return (
    <table className={css["tabl-cont"]}>
      <thead>
        <tr className={css["tabl-tr"]}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionItem key={item.id} transaction={item} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
