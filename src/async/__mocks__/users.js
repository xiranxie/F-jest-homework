const getUsers = jest
  .fn()
  .mockImplementation(() => Promise.resolve({ username: "xiran" }));

export { getUsers };
