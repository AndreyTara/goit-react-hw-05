import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjI1MTVjYzNjNTBjMjBlODRjMTliYjc5ZjJiODE4ZCIsIm5iZiI6MTcyMjYzMTk0Ny4xMTQxNTIsInN1YiI6IjY2NThhZGQzZDlmOTE0ZjdkMDY3YzFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmiZScs2nOmyjgPyBxoVxrHOE41Eh7oVbt5QykEKVpY";

export const fetchTrending = async () => {
  // period = 'day' or 'week'
  const { data } = await axios.get(`/trending/movie/day?language=en-US`);
  return data;
};

export const fetchDetails = async ({ id }) => {
  const { data } = await axios.get(`/movie/${id}?language=en-US`);
  return data;
};

export const fetchCredits = async ({ id }) => {
  const { data } = await axios.get(`/movie/${id}/credits?language=en-US`);
  return data;
};

export const fetchReviews = async ({ id, page = 1 }) => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?language=en-US&page=${page}`
  );
  return data;
};

// // current fetch - is work
// export const fetchReviews = async ({ id }) => {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjI1MTVjYzNjNTBjMjBlODRjMTliYjc5ZjJiODE4ZCIsIm5iZiI6MTcyMjYzMTk0Ny4xMTQxNTIsInN1YiI6IjY2NThhZGQzZDlmOTE0ZjdkMDY3YzFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmiZScs2nOmyjgPyBxoVxrHOE41Eh7oVbt5QykEKVpY",
//     },
//   };
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
//     { ...options }
//   );
//   return response.data;
// };
