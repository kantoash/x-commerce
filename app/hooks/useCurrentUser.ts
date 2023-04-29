import useSWR from 'swr'
import fetcher from '@/app/libs/fetcher'


const useCurrentUser = () => {
    const { data, error, isLoading } = useSWR('/api/current', fetcher);
  
    return {
      data,
      error,
      isLoading,
    }
  };
  
  export default useCurrentUser;