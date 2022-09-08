import useSWR from "swr";

const useData = () => {
  const { data, error  } = useSWR("/api/getData");

  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
};

export default useData;
