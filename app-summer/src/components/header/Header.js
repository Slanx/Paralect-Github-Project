import { ReactComponent as Logo } from '../../resources/icon/github.svg';
import './header.scss';

import SearchPanel from '../searchPanel/SearchPanel';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Logo className="logo-github" />
        </div>
        <div className="header__search">
          <SearchPanel onUserSelected={props.onUserSelected} />
        </div>
      </div>
    </header>
  );
};

export default Header;
