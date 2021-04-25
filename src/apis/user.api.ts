const axios = require('axios');

export const loginApi = ({
  username,
  password
}: ReqLogin): Promise<ResLoginApi> =>
  new Promise((resolve, reject) => {
      if (username === "admin" && password === "123") {
        const ENDPOINT = "http://localhost:3001/login"; // FIXME: Remove this harcoding stuff, is a temporary poc
        resolve(axios.get(ENDPOINT))
      } else {
        reject(new Error("Login ERROR"))
      }
  })