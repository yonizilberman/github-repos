import { FC, useState } from "react";
import "./styles/App.css";
import { useIssues, useRepos, useWindowDimensions } from "./hooks";
import { SubTitle } from "./SubTitle";
import { Repos } from "./Repos";
import { Issues } from "./Issues";

export const App: FC = () => {
    const { width } = useWindowDimensions();
    const [open, setOpen] = useState(true);
    const { setToken, ...restRepos } = useRepos();
    const { getIssues, ...restIssues } = useIssues();

    const handleChangeView = (): void => {
        setOpen(!open);
    };

    const handleSSetTokenClick = async (url: string): Promise<void> => {
        setOpen(true);
        setToken(url);
    };

    const handleIssueClick = async (url: string): Promise<void> => {
        setOpen(false);
        getIssues(url);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {width <= 850 && (
                        <button onClick={handleChangeView}>{`back to ${
                            open ? "repos" : "issues"
                        }`}</button>
                    )}
                    <code>gitHub repositories / issues</code> (Enter your Github
                    API key).
                </p>
            </header>
            <SubTitle onClick={handleSSetTokenClick} />
            <div className="container">
                {(open || width >= 850) && (
                    <Repos getIssues={handleIssueClick} {...restRepos} />
                )}
                {(!open || width >= 850) && <Issues {...restIssues} />}
            </div>
        </div>
    );
};
