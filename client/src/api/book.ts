import { IBookListResponse } from "../interfaces/book";
import { deleteAPI, getAPI, postAPI, putAPI } from "../utils/axios";

export const requestGetAllBooks = async () => {
  try {
    const response = await getAPI("/books");
    return response.data;
  } catch (err: any) {
    throw new Error("Something went wrong");
  }
};

export const requestGetBook = async (id: string | undefined) => {
  try {
    const response = await getAPI(`/books/${id}`);
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

export const requestUpdateBook = async ({ id, ...data }: IBookListResponse) => {
  try {
    const response = await putAPI(`/books/${id}`, data);
    return response.data;
  } catch (err: any) {
    throw new Error("Something went wrong");
  }
};

interface Data {
  author: string;
  title: string;
  id: string;
}
export const requestPostBook = async (data: Data) => {
  try {
    const response = await postAPI(`/books`, data);
    console.log(response);
    return response.data;
  } catch (err: any) {
    throw new Error("Something went wrong");
  }
};
