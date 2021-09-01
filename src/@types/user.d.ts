interface ReqLogin {
  username: string;
  password: string;
}
interface ResLoginApi extends Res {
  data: {
    accessToken: string;
  };
}

interface ResLogin extends ActionRedux {}
