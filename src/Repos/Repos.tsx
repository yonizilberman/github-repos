import { FC } from "react";
import { ComponentStatus } from "../ComponentStatus";
import { RepoResponse } from "../interfaces";
import { Repo } from "./Repo";

interface ReposProps {
  repos: RepoResponse[];
  isLoading: boolean;
  error: string;
  getIssues(issues_url: string): Promise<void>;
}
export const Repos: FC<ReposProps> = ({ repos, getIssues, ...restProps }) => {
  return (
    <ComponentStatus {...restProps}>
      <ul>
        {repos.map((repo) => (
          <Repo key={repo.id} onClickIssue={getIssues} {...repo} />
        ))}
      </ul>
    </ComponentStatus>
  );
};
