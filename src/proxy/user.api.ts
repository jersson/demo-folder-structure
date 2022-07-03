const axios = require("axios");
const { REACT_APP_API_URI } = process.env;

export const loginApi = ({ username, password }: ReqLogin): Promise<ResLoginApi> =>
  new Promise((resolve, reject) => {
    if (username === "admin" && password === "123") {
      const ENDPOINT = `${REACT_APP_API_URI}/login`;
      resolve(axios.get(ENDPOINT));
    } else {
      reject(new Error("Login ERROR"));
    }
  });
