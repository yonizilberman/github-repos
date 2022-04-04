import { getReposHttp } from "../https";
import { RepoResponse } from "../interfaces";
import { changeToken } from "../utils";
import { useClickRequest } from "./useClickRequest";

export const useRepos = () => {
  const { handleData, data, error, isLoading } = useClickRequest<RepoResponse>({
    httpRequest: getReposHttp,
  });

  const setToken = async (newToken: string): Promise<void> => {
    changeToken(newToken);
    handleData();
  };
  return {
    setToken,
    repos: data,
    error,
    isLoading,
  };
};
