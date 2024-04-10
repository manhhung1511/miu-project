import axiosInstance from "core/utils/api/axiosInstance";
import configs from "core/configs";
import handleApiError from "core/utils/api/handleApiError";

const getPermission = async () => {
    const res = await axiosInstance.get(`${configs.apiEndpoint}/rbac/user`);
    return res.data?.data;
};

export default handleApiError(getPermission)