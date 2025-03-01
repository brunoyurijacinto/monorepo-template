import { GetUserById, GetUsers } from "./index";

describe("Placeholder API", () => {
  it("should get a user by id", async () => {
    const user = await GetUserById(1);
    expect(user.id).toBe(1);
  });

  it("should get all users", async () => {
    const users = await GetUsers();
    expect(users.length).toBeGreaterThan(2);
  });
});
