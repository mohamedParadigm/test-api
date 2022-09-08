import fetcher from "../../lib/fetcher";

const handler = async (req, res) => {
  const url = `${process.env.API_URL}/api/V5/Data/${process.env.LANG}/Retrieve/${process.env.COUNTRY}`;

  try {
    const { Results } = await fetcher(url);

    res.json(Results);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
};

export default handler;
