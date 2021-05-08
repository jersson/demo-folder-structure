const axios = require("axios");
const { REACT_APP_API_URI } = process.env;

export const loginApi = ({ username, password }: ReqLogin): Promise<ResLoginApi> =>
  new Promise((resolve, reject) => {
    if (username === "admin" && password === "123") {
      console.log(REACT_APP_API_URI);
      const ENDPOINT = `${REACT_APP_API_URI}/proxy/login`; // FIXME: Remove this harcoding stuff, is a temporary poc
      resolve(axios.get(ENDPOINT));
    } else {
      reject(new Error("Login ERROR"));
    }
  });
