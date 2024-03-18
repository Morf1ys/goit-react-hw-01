import userData from '../UserData.json';
import css from "./Stats.module.css";

 const Stats = () => {
    const { followers, views, likes } = userData.stats;

    return (
        <ul className={css["stats-cont"]}>
            <li>
                <span>Followers</span>
                <span>{followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{likes}</span>
            </li>
        </ul>
    );
}
export default Stats