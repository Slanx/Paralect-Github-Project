import { ReactComponent as Icon } from '../../resources/icon/search.svg';
import './searchPanel.scss';

import { useState } from 'react';

const SearchPanel = (props) => {
  const [userName, setUserName] = useState(null);

  const userSelect = (e) => {
    if (e.key === 'Enter') {
      props.onUserSelected(userName);
    }
  };

  return (
    <div className="search">
      <Icon className="search__icon"></Icon>
      <input type="text" className="search__field" onKeyDown={userSelect} onChange={(e) => setUserName(e.target.value)} />
    </div>
  );
};

export default SearchPanel;
