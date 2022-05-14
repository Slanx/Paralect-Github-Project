import { ReactComponent as Icon } from '../../resources/icon/search.svg';
import './searchPanel.scss';

const SearchPanel = () => {
  return (
    <div className="search">
      <Icon className="search__icon"></Icon>
      <input type="text" className="search__field" />
    </div>
  );
};

export default SearchPanel;
