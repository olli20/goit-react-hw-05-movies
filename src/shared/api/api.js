import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'fe6ebdaf9b26884ef65376bf9a48ed3e',
  },
});

export const getTrendingMovies = async (period = 'day', page = 1) => {
  const { data } = await instance.get(`/trending/movie/${period}`, {
    params: {
      page,
    },
  });
  return data.results;
};

export const getMovieById = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}`, {});
  return data;
};

export const getReviews = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/reviews`, {});
  return data.results;
};

export const getCast = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/credits`, {});
  return data.cast;
};

export const searchMovies = async (query, page = 1) => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
      page,
    },
  });

  return data;
};
