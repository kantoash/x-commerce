import useSWR from "swr";
import fetcher from "@/app/libs/fetcher";

const useUser = (userId: string) => {
  const { data, error, isLoading } = useSWR(`/api/users/${userId}`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};

export default useUser;
