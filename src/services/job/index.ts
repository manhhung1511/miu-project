import axios from "axios";
import configs from "core/configs";

interface JobDetailPayload {
    slug?: string;
    code?: string;
}

export const getJobDetail = async (payload:JobDetailPayload) => {
    const res = await axios.get(`${configs.apiEndpoint}/job/detail/one/${payload.slug}/${payload.code}`);
    return res.data?.data;
};