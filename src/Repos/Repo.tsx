import React, { FC } from "react";
import { RepoResponse } from "../interfaces";
import "../styles/Repo.css";

interface RepoProps extends RepoResponse {
  onClickIssue(issues_url: string): Promise<void>;
}

export const Repo: FC<RepoProps> = ({
  onClickIssue,
  full_name,
  html_url,
  description,
  issues_url,
  open_issues_count,
}) => {
  const handleClick = (): void => {
    console.log(`~~~ `, issues_url);
    onClickIssue(issues_url);
  };

  return (
    <li className="repoContainer">
      <div className="rightSide">
        <h4>
          <a href={html_url} target="_blank" rel="noreferrer">
            {full_name}
          </a>
          {` / issues (${open_issues_count})`}
        </h4>
        <p>{description}</p>
      </div>
      <div className="leftSide">
        <button onClick={handleClick}>{">"}</button>
      </div>
    </li>
  );
};
