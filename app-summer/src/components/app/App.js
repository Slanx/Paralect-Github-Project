import Header from '../header/Header';
import RepositoriesList from '../repositoriesList/RepositoriesList';
import UserInfo from '../userInfo/UserInfo';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main__container">
          <UserInfo />
          <RepositoriesList />
        </div>
      </main>
    </div>
  );
};

export default App;
