import axios from "axios";

export const fetchNews = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjI1MTVjYzNjNTBjMjBlODRjMTliYjc5ZjJiODE4ZCIsIm5iZiI6MTcyMjYzMTk0Ny4xMTQxNTIsInN1YiI6IjY2NThhZGQzZDlmOTE0ZjdkMDY3YzFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmiZScs2nOmyjgPyBxoVxrHOE41Eh7oVbt5QykEKVpY",
    },
  };
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    { ...options }
  );
  return response.data;
};

export const fetchDetails = async ({ id }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjI1MTVjYzNjNTBjMjBlODRjMTliYjc5ZjJiODE4ZCIsIm5iZiI6MTcyMjYzMTk0Ny4xMTQxNTIsInN1YiI6IjY2NThhZGQzZDlmOTE0ZjdkMDY3YzFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmiZScs2nOmyjgPyBxoVxrHOE41Eh7oVbt5QykEKVpY",
    },
  };
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    { ...options }
  );
  return response.data;
};

export const fetchCredits = async ({ id }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjI1MTVjYzNjNTBjMjBlODRjMTliYjc5ZjJiODE4ZCIsIm5iZiI6MTcyMjYzMTk0Ny4xMTQxNTIsInN1YiI6IjY2NThhZGQzZDlmOTE0ZjdkMDY3YzFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmiZScs2nOmyjgPyBxoVxrHOE41Eh7oVbt5QykEKVpY",
    },
  };
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    { ...options }
  );
  return response.data;
};

export const fetchReviews = async ({ id }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjI1MTVjYzNjNTBjMjBlODRjMTliYjc5ZjJiODE4ZCIsIm5iZiI6MTcyMjYzMTk0Ny4xMTQxNTIsInN1YiI6IjY2NThhZGQzZDlmOTE0ZjdkMDY3YzFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hmiZScs2nOmyjgPyBxoVxrHOE41Eh7oVbt5QykEKVpY",
    },
  };
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    { ...options }
  );
  return response.data;
};
