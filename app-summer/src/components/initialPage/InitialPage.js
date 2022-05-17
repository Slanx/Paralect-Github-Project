import { ReactComponent as Search } from '../../resources/icon/search-start.svg';
import './initialPage.scss';

const InitialPage = () => {
  return (
    <div className="start">
      <div className="start__picture">
        <Search />
      </div>
      <div className="start__descr">Start with searching a GitHub user</div>
    </div>
  );
};

export default InitialPage;
