import { FC, useState } from "react";
import "./styles/App.css";
import { useIssues, useRepos, useWindowDimensions } from "./hooks";
import { SubTitle } from "./SubTitle";
import { Repos } from "./Repos";
import { Issues } from "./Issues";

// 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
export const App: FC = () => {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const { setToken, ...restRepos } = useRepos();
  const { getIssues, ...restIssues } = useIssues();

  const handleClick = (): void => {
    setOpen(!open);
  };

  const clcik = async (url: string): Promise<void> => {
    setOpen(!open);
    getIssues(url);
  };


  return (
    <div className="App">
      <header className="App-header">
        <p>
          {width <= 850 && <button onClick={handleClick}>{`back to ${open ? 'Issues' : 'Repos'}`}</button>}
          <code>gitHub repos / issues</code> (Enter your Github API key).
        </p>
      </header>
      <SubTitle onClick={setToken} />
      <div className="container">
        {(open || width >= 850) && (
          <Repos getIssues={clcik} {...restRepos} />
        )}
        {(!open || width >= 850) && <Issues {...restIssues} />}
      </div>
    </div>
  );
};
