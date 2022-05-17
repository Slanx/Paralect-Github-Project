import { ReactComponent as NotFound } from '../../resources/icon/not-found-repos.svg';
import './reposNotFound.scss';

const ReposNotFound = () => {
  return (
    <div className="found">
      <div className="found__picture">
        <NotFound />
      </div>
      <div className="found__descr">Repository list is empty</div>
    </div>
  );
};

export default ReposNotFound;
