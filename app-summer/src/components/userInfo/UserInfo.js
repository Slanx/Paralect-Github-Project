import { useEffect, useState } from 'react';
import useGitHubService from '../../services/GitHubService';

import UserPhoto from '../../resources/user.png';
import { ReactComponent as Followers } from '../../resources/icon/group.svg';
import { ReactComponent as Following } from '../../resources/icon/person.svg';
import './userInfo.scss';

const UserInfo = (props) => {
  const [user, setUser] = useState('Slanx');

  const { loading, error, getUser, clearError, getUserRepositories } = useGitHubService();

  useEffect(() => {
    updateUser();
  }, [props.userName]);

  const updateUser = () => {
    const { userName } = props;

    if (!userName) {
      return;
    }
    getUser(userName).then(onUserLoaded);
    getUserRepositories(userName);
  };

  const onUserLoaded = (user) => {
    setUser(user);
  };

  const { name, nickName, url, followers, following, avatar } = user;

  return (
    <div className="user">
      <div className="user__photo">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="user__descr">
        <h3 className="user__title">{name}</h3>
        <a href={url} className="user__link">
          {nickName}
        </a>
        <div className="user__follow">
          <div className="user__followers item-follow">
            <div className="item-follow__icon">
              <Followers />
            </div>
            <div className="item-follow__descr">
              <span className="item-follow__amount">{followers}</span> followers
            </div>
          </div>
          <div className="user__following item-follow">
            <div className="item-follow__icon">
              <Following />
            </div>
            <div className="item-follow__descr">
              <span className="item-follow__amount">{following}</span> following
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
