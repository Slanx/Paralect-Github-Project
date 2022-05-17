import './repositoriesItem.scss';

const RepositoriesItem = (props) => {
  const { name, url, descr } = props.repository;

  return (
    <div className="repository">
      <a href={url} className="repository__link">
        {name}
      </a>
      <div className="repository__descr">{descr}</div>
    </div>
  );
};

export default RepositoriesItem;
