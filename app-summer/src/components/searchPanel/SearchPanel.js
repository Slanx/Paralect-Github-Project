import { ReactComponent as Icon } from '../../resources/icon/search.svg';
import './searchPanel.scss';

import { useState, useRef } from 'react';

const SearchPanel = (props) => {
  const [userName, setUserName] = useState(null);

  const textField = useRef(null);

  const onInputFocus = () => {
    textField.current.focus();
  };

  const userSelect = (e) => {
    if (e.key === 'Enter') {
      props.onUserSelected(userName);
    }
  };

  return (
    <div className="search" onClick={onInputFocus}>
      <Icon className="search__icon"></Icon>
      <input
        tabIndex={1}
        ref={textField}
        type="text"
        className="search__field"
        onKeyDown={userSelect}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default SearchPanel;
