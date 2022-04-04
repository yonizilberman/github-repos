import { getIssuesHttp } from "../https";
import { IssuesResponse } from "../interfaces";
import { useClickRequest } from "./useClickRequest";

export const useIssues = () => {
  const { handleData, data, error, isLoading } =
    useClickRequest<IssuesResponse>({
      httpRequest: getIssuesHttp,
    });

  const getIssues = async (issuesUrl: string): Promise<void> => {
    handleData(issuesUrl);
  };
  return {
    getIssues,
    issues: data,
    error,
    isLoading,
  };
};
