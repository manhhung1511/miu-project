import axiosInstance from "core/utils/api/axiosInstance";
import configs from "core/configs";
import CreateCompany from "core/types/company/CreateCompany";

export const createCompany = async (payload: CreateCompany) => {
    const res = await axiosInstance.post(`${configs.apiEndpoint}/company/edits`, {
        payload
    }
    );
    return res.data?.data;
};

export const getCompanyData = async () => {
    const res = await axiosInstance.get(`${configs.apiEndpoint}/company/item`);
    return res.data?.data;
};