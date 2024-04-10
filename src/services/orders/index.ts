import axiosInstance from "core/utils/api/axiosInstance";
import configs from "core/configs";


export const getOrder = async (data:any) => {
  const res = await axiosInstance.get(`${configs.apiEndpoint}/job/${data.orderId}`);
  return res.data?.data;
};

export const getOrderProduces = async (data:any) => {
  const res = await axiosInstance.get(`${configs.apiEndpoint}/job/${data.producesId}`);
  return res.data?.data;
};

export const createOrders = async (data:any) => {
    const res = await axiosInstance.post(`${configs.apiEndpoint}/job/create`, 
      data
    );
  
    return res.data?.data;
  };

export const updateOrders = async (data:any) => {
    const res = await axiosInstance.patch(`${configs.apiEndpoint}/job/update/${data.orderId}`, 
      data
    );
  
    return res.data?.data;
  };

export const createProduces = async (data:any) => {
    const res = await axiosInstance.post(`${configs.apiEndpoint}/job/create`, 
      data
    );
  
    return res.data?.data;
};


export const updateProduces = async (data:any) => {
  const res = await axiosInstance.patch(`${configs.apiEndpoint}/job/update/${data.producesId}`, 
    data
  );

  return res.data?.data;
};


export const getAllOrder = async () => {
  const res = await axiosInstance.get(`${configs.apiEndpoint}/job`);

  return res.data?.data;
};


export const deleteOrder = async (data:any) => {
  const res = await axiosInstance.patch(`${configs.apiEndpoint}/job/delete/${data.orderId}`,
    data
  );

  return res.data?.data;
};