import { Reactcomponent as Search } from '../../resources/icon/search-start.svg';

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
