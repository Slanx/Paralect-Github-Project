import { useState, useEffect } from 'react';
import useGitHubService from '../../services/GitHubService';

import RepositoriesItem from '../repositoriesItem/RepositoriesItem';
import './repositoriesList.scss';
import Paginate from '../paginate/Paginate';
import { Loader } from '../loader/Loader';

const RepositoriesList = (props) => {
  const [repos, setRepos] = useState(null);
  const [page, setPage] = useState(1);

  const { userName, reposAmount } = props;

  const { loading, getUserRepositories, clearError } = useGitHubService();

  useEffect(() => {
    const updateRepos = () => {
      if (!userName || reposAmount === 0) {
        return;
      }
      clearError();
      getUserRepositories(userName, page).then(onUserLoaded);
    };

    updateRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, page]);

  const onUserLoaded = (repos) => {
    setRepos(repos);
  };

  const updatePage = (pageCurrent) => {
    setPage(pageCurrent);
  };

  const addRepositories = (repos) => {
    return repos.map((repo, id) => {
      return <RepositoriesItem repository={repo} key={id} />;
    });
  };

  const loader = loading ? <Loader /> : null;
  const repositories = !(loading || !repos) ? addRepositories(repos) : null;

  return (
    <div className="repositories">
      <h2 className="repositories__amount">Repositories ({reposAmount})</h2>
      <div className="repositories__list">
        {repositories}
        {loader}
      </div>
      <div className="repositories__pagination">
        <Paginate reposAmount={reposAmount} updatePage={updatePage} />
      </div>
    </div>
  );
};
export default RepositoriesList;
