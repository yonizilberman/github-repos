import { https } from "./https";
import { IssuesResponse } from "../interfaces";
import { config } from "./config";

export async function getIssuesHttp(url: string): Promise<IssuesResponse[]> {
  try {
    const response = await https.get<IssuesResponse[]>(url, config);
    return response.data.map(
      ({ id, title, body, user, created_at, updated_at }) => ({
        id,
        title,
        body,
        user,
        created_at: new Date(created_at),
        updated_at: new Date(updated_at),
      })
    );
  } catch (e) {
    throw e;
  }
}
