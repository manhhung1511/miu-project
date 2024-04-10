import axios from "axios";

import configs from "core/configs";
import axiosInstance from "core/utils/api/axiosInstance";

export const login = async (email: string, password: string) => {
  const res = await axios.post(`${configs.apiEndpoint}/auth/login`, {
    email,
    password,
  });

  return res.data?.data;
};

export const register = async(name: string, password: string, email: string) => {
  const res = await axios.post(`${configs.apiEndpoint}/auth/register`, {
    name,
    email,
    password,
  });

  return res.data?.data;
}

export const loginWithGoogle = async (idToken: string) => {
  const res = await axios.post(
    `${configs.apiEndpoint}/auth/login-with-google`,
    {
      idToken,
    },
  );
  return res.data?.data;
};

export const verifyToken = async (token: string) => {
  // const res = await axiosInstance.get(
  //   `${configs.apiEndpoint}/auth/verify-token`,
  //   {
  //     params: {
  //       token,
  //     },
  //   },
  // );

  return {
    message: "Token is valid.",
    data: true,
  }
};

export const getUserInfo = async () => {
  const res = await axiosInstance.get(`${configs.apiEndpoint}/auth/me`);
  return res.data?.data;
};

export const changePassword = async (data: any) => {
  const res = await axiosInstance.put(
    `${configs.apiEndpoint}/auth/change-password`,
    data,
  );
  return res.data?.data;
};

export const logout = async () => {
  const res = await axiosInstance.post(
    `${configs.apiEndpoint}/auth/logout`);
  return res;
}

// export const refreshToken = async (_id: string, email: string, refreshToken: string) => {
//   const res = await axios.post(
//     `${configs.apiEndpoint}/auth/refreshToken`, {
//       _id,
//       email,
//       refreshToken
//   });
//   return res.data?.data;
// };