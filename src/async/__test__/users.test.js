import { getUsers } from "../users";

jest.mock("../users");

describe("users", () => {
  test("should get users data with mock axios get", () => {
    // TODO 13: add async test with manual mock
    return expect(getUsers()).resolves.toEqual({ username: "xiran" });
  });
});
