import './repositoriesItem.scss';

const RepositoriesItem = () => {
  return (
    <div className="repository">
      <a href="#" className="repository__link">
        react-hot-loader
      </a>
      <div className="repository__descr">Tweak React components in real time. (Deprecated: use Fast Refresh instead)</div>
    </div>
  );
};

export default RepositoriesItem;
