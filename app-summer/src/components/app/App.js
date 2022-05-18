import { useState, useEffect } from 'react';
import useGitHubService from '../../services/GitHubService';

import Header from '../header/Header';
import RepositoriesList from '../repositoriesList/RepositoriesList';
import UserInfo from '../userInfo/UserInfo';
import InitialPage from '../initialPage/InitialPage';
import UserNotFound from '../userNotFound/userNotFound';
import ReposNotFound from '../reposNotFound/reposNotFound';
import { Loader } from '../loader/Loader';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [user, setUser] = useState(null);

  const onUserSelected = (userName) => {
    setSelectedUser(userName);
  };

  const { loading, error, getUser, clearError } = useGitHubService();

  useEffect(() => {
    updateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUser]);

  const updateUser = () => {
    if (!selectedUser) {
      return;
    }
    clearError();
    getUser(selectedUser).then(onUserLoaded);
  };

  const onUserLoaded = (user) => {
    console.log(user);
    setUser(user);
  };

  const loader = loading ? <Loader /> : null;
  const errorMassage = error ? <UserNotFound /> : null;
  const userInfo = !(loading || error || !user) ? <UserInfo user={user} /> : null;
  const repositoriesList = !(loading || error || !user) ? (
    user.repos !== 0 ? (
      <RepositoriesList userName={selectedUser} reposAmount={user.repos} />
    ) : (
      <ReposNotFound />
    )
  ) : null;
  const initialPage = !selectedUser && !user && !error && !loading ? <InitialPage /> : null;

  return (
    <div className="app">
      <Header onUserSelected={onUserSelected} />
      <main className="main">
        <div className="main__container">
          {loader}
          {userInfo}
          {errorMassage}
          {initialPage}
          {repositoriesList}
        </div>
      </main>
    </div>
  );
};

export default App;
