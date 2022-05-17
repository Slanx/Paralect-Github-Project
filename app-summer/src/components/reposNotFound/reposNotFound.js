import { ReactComponent as NotFound } from '../../resources/icon/not-found-repos.svg';
import './reposNotFound.scss';

const ReposNotFound = () => {
  return (
    <div className="empty">
      <div className="empty__picture">
        <NotFound />
      </div>
      <div className="empty__descr">Repository list is empty</div>
    </div>
  );
};

export default ReposNotFound;
