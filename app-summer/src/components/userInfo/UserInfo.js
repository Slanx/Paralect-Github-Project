import UserPhoto from '../../resources/user.png';
import { ReactComponent as Followers } from '../../resources/icon/group.svg';
import { ReactComponent as Following } from '../../resources/icon/person.svg';
import './userInfo.scss';

const UserInfo = () => {
  return (
    <div className="user">
      <div className="user__photo">
        <img src={UserPhoto} alt="user" />
      </div>
      <div className="user__descr">
        <h3 className="user__title">Dan Abramov</h3>
        <a href="#" className="user__link">
          gaearon
        </a>
        <div className="user__follow">
          <div className="user__followers item-follow">
            <div className="item-follow__icon">
              <Followers />
            </div>
            <div className="item-follow__descr">
              <span className="item-follow__amount">65.8k</span> followers
            </div>
          </div>
          <div className="user__following item-follow">
            <div className="item-follow__icon">
              <Following />
            </div>
            <div className="item-follow__descr">
              <span className="item-follow__amount">65.8k</span> following
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
