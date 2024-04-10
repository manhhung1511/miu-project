import TokenStorage from "core/types/auth/TokenStorage";

import { jsonParse, jsonStringify } from "./json";
import { observableLocalStorage } from "./storage";

export const TOKEN_STORAGE_KEY = "token";

export const getTokens = (): string =>
  (observableLocalStorage.getItem(TOKEN_STORAGE_KEY) || "{}");

export const setTokens = (token: TokenStorage) =>
  observableLocalStorage.setItem(TOKEN_STORAGE_KEY, jsonStringify(token));
