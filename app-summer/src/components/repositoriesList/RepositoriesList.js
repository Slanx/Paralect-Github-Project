import RepositoriesItem from '../repositoriesItem/RepositoriesItem';
import './repositoriesList.scss';
import Pagination from '../pagination/pagination';

const RepositoriesList = () => {
  return (
    <div className="repositories">
      <h2 className="repositories__amount">Repositories (249)</h2>
      <div className="repositories__list">
        <RepositoriesItem />
        <RepositoriesItem />
        <RepositoriesItem />
        <RepositoriesItem />
      </div>
      <div className="repositories__pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default RepositoriesList;
