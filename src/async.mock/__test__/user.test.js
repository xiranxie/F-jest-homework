import { register } from "../user";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    return expect(register("a", "b")).resolves.toEqual({ username: "xiran" });
  });

  test("should reject with Error when username is invalid", () => {
    // TODO 20: add test here
    return expect(register("a", "b")).rejects.toEqual("error");
  });
});
