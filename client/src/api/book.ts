import { deleteAPI, getAPI } from "../utils/axios";

export const requestGetAllBooks = async () => {
  try {
    const response = await getAPI("/books");
    return response.data;
  } catch (err: any) {
    throw new Error("Something went wrong");
  }
};

export const requestRemoveBook = async (id: string) => {
  try {
    await deleteAPI(`/books/${id}`);
    return true;
  } catch (err: any) {
    throw new Error("Something went wrong");
  }
};
