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
    };
  };

  const getUserRepositories = async (userName, page = 1) => {
    const res = await request(`${_apiBase}${userName}/repos?per_page=4&page=${page}`);
    console.log(res);
    console.log(res.map(_transoformRepoInfo));
  };

  const _transoformRepoInfo = (repo) => {
    return {
      name: repo.name,
      url: repo.html_url,
      descr: repo.description,
    };
  };
  return { getUser, getUserRepositories, loading, error };
};

export default useGitHubService;
