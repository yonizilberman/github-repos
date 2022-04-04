import React, { FC } from "react";
import { IssuesResponse } from "../interfaces";
import "../styles/Issue.css";
import { getTime } from "../utils";

export const Issue: FC<IssuesResponse> = ({
  title,
  body,
  created_at,
  updated_at,
  user,
}) => {
  return (
    <li className="issueContainer">
      <div>
        <div className="userInfo">
          <h4>
            <img src={user.avatar_url} alt="Avatar" />
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </h4>
          <small>
            created: {getTime(created_at)}
            <br /> updated: {getTime(updated_at)}
          </small>
        </div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </li>
  );
};
