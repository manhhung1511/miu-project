import { useSearchOrders } from "core/queries/orders/useSearchOrders";
import { Order } from "core/types/orders/order";
import { useEffect, useMemo } from "react";

interface GetOrderProps {
  search?: {
    keyword: string;
    address: string;
    career: string;
  };
  enabled?: boolean;
}

// This hooks to get products by search, skuCode and category
export default function useGetOrders(props: GetOrderProps) {
  const {
    search,
    enabled = true,
  } = props;

  console.log(search);

  const { data, fetchNextPage, isLoading, isSuccess } = useSearchOrders(
   {
    keyword: search?.keyword,
    address: search?.address,
    career: search?.career,
    currentPage: 1
   },
    enabled,
  );

  const total = useMemo(() => {
    return data?.pages[0].data.total
  }, [data]);

  const orders = useMemo(() => {
    return data?.pages?.reduce((prev: Order[], curr: any) => {
      return prev.concat(curr.data.data);
    }, []);
  }, [data]);
  
    return {
      orders,
      total,
      isLoading,
      isSuccess,
      fetchNextPage
    } 
}
