import { getAPI } from "../utils/axios";

export const requestGetAllBooks = async () => {
  try {
    const response = await getAPI("/books");
    return response.data;
  } catch (err: any) {
    throw new Error("Something went wrong");
  }
};
