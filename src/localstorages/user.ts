import { jsonParse, jsonStringify } from "core/localstorages/json";
import { observableLocalStorage } from "core/localstorages/storage";

interface UserStorage {
    _id: string;
    name: string;
    email: string;
    roles: string
  }

export const getUser = (): UserStorage =>
  jsonParse(observableLocalStorage.getItem("user") || "{}");

export const setUser = (data: UserStorage) =>
  observableLocalStorage.setItem("user", jsonStringify(data));
