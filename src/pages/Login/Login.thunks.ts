import { loginApi } from "src/proxy/user.api";
import * as actions from "./Login.actions";

export const login = (payload: ReqLogin) => (dispatch) => {
  dispatch(actions.loginRequested());
  return loginApi(payload)
    .then((res) => {
      localStorage.setItem("token", res.data.accessToken);
      return dispatch(actions.loginSuccess(res));
    })
    .catch((err) => Promise.reject(dispatch(actions.loginFailed(err))));
};
