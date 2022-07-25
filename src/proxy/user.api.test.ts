import axios from "axios";

import { loginApi } from "./user.api";
const { REACT_APP_API_URI } = process.env;

jest.mock("axios");

describe("user.api.test", () => {
  it("should work when we need to call loginApi", async () => {
    const userInformation = {
      username: "admin",
      password: "123",
    };

    const mockedResult = {
      data: {
        accessToken: "token",
      },
    };

    axios.get = jest.fn().mockResolvedValueOnce(mockedResult);

    const result = await loginApi(userInformation);
    expect(axios.get).toHaveBeenCalledWith(`${REACT_APP_API_URI}/login`);
    expect(result.data.accessToken).toBe("token");
  });

  it("should fail when we need to call loginApi", async () => {
    try {
      const userInformation = {
        username: "admin",
        password: "1234",
      };

      await loginApi(userInformation);
      throw new Error("Default error");
    } catch (error) {
      const err = error as Error;

      expect(axios.get).not.toBeCalled();
      expect(err.message).toBe("Login ERROR");
    }
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
