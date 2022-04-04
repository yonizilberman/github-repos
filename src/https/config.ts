export const config = {
  headers: {
    Authorization: `token ${window.localStorage.getItem("token")}`,
  },
};
