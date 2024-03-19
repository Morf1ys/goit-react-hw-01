import css from './ProfileDescription.module.css';
import userData from '../UserData.json';

const Description = () => {
  const { username, location, tag, avatar } = userData;

  return (
    <div className={css['prod-descr-cont']}>
      <img className={css['prof-img']} src={avatar} alt="User Avatar" />
      <h2>{username}</h2>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};

export default Description;

