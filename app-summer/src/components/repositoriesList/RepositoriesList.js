import { useState, useEffect } from 'react';
import useGitHubService from '../../services/GitHubService';

import RepositoriesItem from '../repositoriesItem/RepositoriesItem';
import './repositoriesList.scss';
import Pagination from '../pagination/Pagination';
import { Loader } from '../loader/Loader';
import ReposNotFound from '../reposNotFound/reposNotFound';

const RepositoriesList = (props) => {
  const [repos, setRepos] = useState(null);
  const { userName, reposAmount } = props;

  const { loading, error, getUserRepositories, clearError } = useGitHubService();

  useEffect(() => {
    updateRepos();
  }, [userName]);

  const updateRepos = () => {
    if (!userName) {
      return;
    }
    clearError();
    getUserRepositories(userName).then(onUserLoaded);
  };

  const onUserLoaded = (repos) => {
    setRepos(repos);
  };

  const addRepositories = (repos) => {
    return repos.map((repo, id) => {
      return <RepositoriesItem repository={repo} key={id} />;
    });
  };

  const loader = loading ? <Loader /> : null;
  const repositories = !(loading || error || !repos) ? <View repos={repos} reposAmount={reposAmount} /> : null;
  const errorMassage = error ? <ReposNotFound /> : null;

  return (
    <div className="repositories">
      {loader}
      {repositories}
      {errorMassage}
    </div>
  );
};

const View = ({ repos, reposAmount }) => {
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
        <Pagination pages={reposAmount} />
      </div>
    </>
  );
};
export default RepositoriesList;
