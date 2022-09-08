import useSWR from "swr";
let count = 0;

const useData = () => {
  const { data, error  } = useSWR("/api/getData", null, {
    onSuccess: (data, key, config) => {
      count += 1;
      console.log("Request Count from useData is: ", count);
    }
  });

  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
};

export default useData;
