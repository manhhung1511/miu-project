// SET FROM STORAGE
const setAccessToken = (token: string) => localStorage.setItem("token", token);
const setRefreshToken = (token: string) => localStorage.setItem("token1", token);
const setUIMode = (mode: string) => {
  localStorage.setItem("uiMode", mode);
};

// GET FROM STORAGE
const getAccessToken = () => localStorage.getItem("token");
const getRefreshToken = () => localStorage.getItem("token1");
const getUser = () => JSON.parse(localStorage.getItem("user"));
const getUIMode = () => localStorage.getItem("uiMode");

// Remove items from storage
const removeItemFromStorage = (key: any) => localStorage.removeItem(key);

export {
  removeItemFromStorage,
  setAccessToken,
  getRefreshToken,
  getAccessToken,
  setUIMode,
  getUIMode,
  getUser,
  setRefreshToken
};
