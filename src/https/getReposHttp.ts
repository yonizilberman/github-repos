import { https } from "./https";
import { RepoResponse } from "../interfaces";
import { config } from "./config";

export async function getReposHttp(): Promise<RepoResponse[]> {
  try {
    const response = await https.get<RepoResponse[]>("/user/repos", config);
    return response.data.map(
      ({
        id,
        name,
        full_name,
        description,
        html_url,
        open_issues_count,
        issues_url,
        owner,
      }) => ({
        id,
        name,
        full_name,
        description,
        html_url,
        open_issues_count,
        issues_url: issues_url.replace(/{\/([a-z,A-Z])\w+}/g, ""),
        owner,
      })
    );
  } catch (e) {
    throw e;
  }
}
