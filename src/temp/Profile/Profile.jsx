import  css from'./Profile.module.css'
import  Description  from './ProfileDescription/ProfileDescription.jsx'
import Stats from './Stats/Stats.jsx'
 const Profile = () => {
    return (<div className={css["profile-cont"]}>
        <Description />
        <Stats />
    </div>)
}
export default Profile