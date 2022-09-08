const fetcher = async (...args) => {
  try {
    const response = await fetch(...args);
    // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line
    const data = await response.text();

    if (response.ok) {
      if (data !== "") {
        return await JSON.parse(data);
      }
    }
    const error = new Error(response.statusText);
    error.response = response;
    error.data = data;
    throw error;
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
};

export default fetcher;

