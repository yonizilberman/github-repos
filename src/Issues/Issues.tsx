import { FC } from "react";
import "../styles/App.css";
import { Issue } from "./Issue";
import { IssuesResponse } from "../interfaces";
import { ComponentStatus } from "../ComponentStatus";

interface IssuesProps {
    issues: IssuesResponse[];
    isLoading: boolean;
    error: string;
}

export const Issues: FC<IssuesProps> = ({ issues, ...restProps }) => {
    return (
        <ComponentStatus {...restProps}>
            <ul>
                {issues.map((issue) => (
                    <Issue key={issue.id} {...issue} />
                ))}
            </ul>
        </ComponentStatus>
    );
};
