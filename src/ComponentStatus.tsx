import { FC } from "react";
import logo from "./logo.svg";
import "./styles/ComponentStatus.css";

interface ComponentStatusProps {
  isLoading: boolean;
  error: string;
}

export const ComponentStatus: FC<ComponentStatusProps> = ({
  isLoading,
  error,
  children,
}) => {
  return (
    <>
      {isLoading ? (
        <div className="loading large">
          <img src={logo} className="App-logo" alt="logo" />
          isLoading
        </div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
