import { GetUserById, GetUsers } from "./index";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("GetUserById", () => {
  it("should fetch user by id", async () => {
    const userId = 1;
    const mockUser = { id: userId, name: "John Doe" };
    mockedAxios.get.mockResolvedValue({ data: mockUser });

    const result = await GetUserById(userId);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    expect(result).toEqual(mockUser);
  });
});

describe("GetUsers", () => {
  it("should fetch all users", async () => {
    const mockUsers = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ];
    mockedAxios.get.mockResolvedValue({ data: mockUsers });

    const result = await GetUsers();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(result).toEqual(mockUsers);
  });
});
