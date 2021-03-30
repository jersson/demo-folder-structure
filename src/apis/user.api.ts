export const loginApi = ({
  username,
  password
}: ReqLogin): Promise<ResLoginApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        resolve({
          data: {
            access_token: "82jdu82193yh90sad83hxfgsd"
          },
          message: "Login OK"
        })
      } else {
        reject(new Error("Login ERROR"))
      }
    }, 100)
  })
