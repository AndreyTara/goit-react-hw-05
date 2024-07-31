import axios from "axios";
import { options } from "./const";

const fetchData = async ({ url, options, query, page = 1 }) => {
  const response = await axios.get(url, {
    ...options,
    params: {
      query,
      page,
      include_adult: false,
    },
  });
  return response.data;
};

export default fetchData;
