import { useLocation } from "react-router-dom";

const useGetParamsFromUrl = (param: string) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(param);
};

export default useGetParamsFromUrl;
