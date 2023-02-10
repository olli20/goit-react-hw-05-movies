import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "280dfc47f55a5a95f0363880d2199c9a",
    }
});

export const getPopularMovies = async() => {
    const {data} = await instance.get("/trending/movie/week", {
    })

    return data.results;
}

export const getMovieById = async(movie_id) => {
    const {data} = await instance.get(`/movie/${movie_id}`, {
        // params: {
        //     movie_id,
        // }
    })

    return data;
}