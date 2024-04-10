import axiosInstance from "core/utils/api/axiosInstance";
import configs from "core/configs";

export const uploadImage = async (data:any) => {
    const res = await axiosInstance.post(`${configs.apiEndpoint}/upload/user/bucket`, 
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  
    return res.data?.data;
  };