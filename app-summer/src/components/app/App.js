import { useState, useEffect } from 'react';
import useGitHubService from '../../services/GitHubService';

import Header from '../header/Header';
import RepositoriesList from '../repositoriesList/RepositoriesList';
import UserInfo from '../userInfo/UserInfo';
import InitialPage from '../initialPage/InitialPage';
import UserNotFound from '../userNotFound/userNotFound';
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

  const loader = loading && !error && !user ? <Loader /> : null;
  const errorMassage = !user && error && !loading ? <UserNotFound /> : null;
  const userInfo = user && !error && !loading ? <UserInfo user={user} /> : null;
  const repositoriesList = user && !error && !loading ? <RepositoriesList userName={selectedUser} reposAmount={user.repos} /> : null;
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
