import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "280dfc47f55a5a95f0363880d2199c9a",
    }
});

export const getPopularMovies = async(period) => {
    const {data} = await instance.get(`/trending/movie/${period}`, {
    })

    return data.results;
}

export const getMovieById = async(movie_id) => {
    const {data} = await instance.get(`/movie/${movie_id}`, {})

    return data;
}

export const getReviews = async(movie_id) => {
    const {data} = await instance.get(`/movie/${movie_id}/reviews`, {})

    return data.results;
}

export const getCast = async(movie_id) => {
    const {data} = await instance.get(`/movie/${movie_id}/credits`, {})

    return data.cast;
}

export const searchMovies = async(query, page = 1) => {
    const {data} = await instance.get(`/search/movie`, {
        params: {
            query,
            page,
        }
    })

    return data.results;
}