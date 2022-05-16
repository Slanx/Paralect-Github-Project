import { useState } from 'react';

import Header from '../header/Header';
import RepositoriesList from '../repositoriesList/RepositoriesList';
import UserInfo from '../userInfo/UserInfo';

const App = () => {
  const [selectedUser, setUser] = useState(null);

  const onUserSelected = (userName) => {
    setUser(userName);
  };

  return (
    <div className="app">
      <Header onUserSelected={onUserSelected} />
      <main className="main">
        <div className="main__container">
          <UserInfo userName={selectedUser} />
          <RepositoriesList />
        </div>
      </main>
    </div>
  );
};

export default App;
