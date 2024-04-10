import configs from "core/configs";
import SearchProductRequestPayload from "core/types/search/SearchProductRequestPayload";
import SearchProductRequestQuery from "core/types/search/SearchProductRequestQuery";
import { SearchProductsResponse } from "core/types/search/SearchProductsResponse";
import axiosInstance from "core/utils/api/axiosInstance";
import handleRefreshToken from "core/utils/handleRefreshToken";
import handleApiError from "core/utils/skynet/handleApiError";
import axios from "axios";

const searchOrders = async (payload: {
  params: SearchProductRequestQuery;
}): Promise<SearchProductsResponse> => {

  const response = await axios.get(
    `${configs.apiEndpoint}/job/search/chain`,
    {
      params: payload
    },
  );
  return {
    data: response.data?.data || [],
    nextPage: payload?.currentPage + 1,
    previousPage: payload?.currentPage > 1 ? payload?.currentPage - 1 : 1,
    total: response.data?.data?.total,
  };
};

export default searchOrders;
