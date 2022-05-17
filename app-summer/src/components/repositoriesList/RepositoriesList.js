import { useState, useEffect } from 'react';
import useGitHubService from '../../services/GitHubService';

import RepositoriesItem from '../repositoriesItem/RepositoriesItem';
import './repositoriesList.scss';
import Pagination from '../pagination/Pagination';
import { Loader } from '../loader/Loader';
import ReposNotFound from '../reposNotFound/ReposNotFound';

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
  }, [userName, page]);

  const onUserLoaded = (repos) => {
    setRepos(repos);
  };

  const updatePage = (pageCurrent) => {
    setPage(pageCurrent);
  };

  const loader = loading ? <Loader /> : null;
  const repositories = !(loading || !repos) ? (
    <View repos={repos} reposAmount={reposAmount} updatePage={updatePage} />
  ) : null;
  const emptyMassage = reposAmount === 0 ? <ReposNotFound /> : null;

  return (
    <div className="repositories">
      {loader}
      {repositories}
      {emptyMassage}
    </div>
  );
};

const View = ({ repos, reposAmount, updatePage }) => {
  const addRepositories = (repos) => {
    return repos.map((repo, id) => {
      return <RepositoriesItem repository={repo} key={id} />;
    });
  };

  const repositories = addRepositories(repos);
  return (
    <>
      <h2 className="repositories__amount">Repositories ({reposAmount})</h2>
      <div className="repositories__list">{repositories}</div>
      <div className="repositories__pagination">
        <Pagination pages={reposAmount} updatePage={updatePage} />
      </div>
    </>
  );
};
export default RepositoriesList;
