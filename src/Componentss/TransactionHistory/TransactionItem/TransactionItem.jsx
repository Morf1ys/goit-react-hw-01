import css from "./TransactionItem.module.css"
const TransactionItem = ({ transaction }) => {
  const {  type, amount, currency } = transaction;

  return (
    <tr className={css.line}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
