export default {
  post: jest
    .fn()
    .mockResolvedValueOnce({ data: { username: "xiran" } })
    .mockRejectedValueOnce("error"),
};
