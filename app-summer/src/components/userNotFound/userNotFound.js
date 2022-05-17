import { ReactComponent as NotFound } from '../../resources/icon/not-found.svg';
import './userNotFound.scss';

const UserNotFound = () => {
  return (
    <div className="empty">
      <div className="empty__picture">
        <NotFound />
      </div>
      <div className="empty__descr">User not found</div>
    </div>
  );
};

export default UserNotFound;
