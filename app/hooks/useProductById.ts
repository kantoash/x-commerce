import useSWR from "swr";
import fetcher from "@/app/libs/fetcher";

const useProduct = (productId: string) => {
  const { data, error, isLoading } = useSWR(`/api/product/${productId}`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};

export default useProduct;
