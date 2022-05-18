import { useHttp } from '../hooks/http.hook';

const useGitHubService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = 'https://api.github.com/users/';

  const getUser = async (userName) => {
    const res = await request(`${_apiBase}${userName}`);
    return _transoformUserInfo(res);
  };

  const _transoformUserInfo = (user) => {
    return {
      name: user.name,
      nickName: user.login,
      url: user.html_url,
      followers: user.followers,
      following: user.following,
      avatar: user.avatar_url,
      repos: user.public_repos,
    };
  };

  const getUserRepositories = async (userName, page = 1) => {
    const res = await request(`${_apiBase}${userName}/repos?per_page=4&page=${page}`);
    return res.map(_transoformRepoInfo);
  };

  const _transoformRepoInfo = (repo) => {
    return {
      name: repo.name.lenth < 24 ? `${repo.name.slice(0, 24)}...` : repo.name,
      url: repo.html_url,
      descr: repo.description
        ? repo.description.length < 70
          ? repo.description
          : `${repo.description.slice(0, 70)}...`
        : 'There is no description for repository',
    };
  };
  return { getUser, getUserRepositories, loading, error, clearError };
};

export default useGitHubService;
