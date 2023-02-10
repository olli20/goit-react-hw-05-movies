import {useState} from 'react';

const MoviesSearchForm = ({onSubmit}) => {
    const [state, setState] = useState("");
 

    const handleChange = ({target}) => {
        setState(target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(state);
        console.log("Set ", state);
        setState("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="query"
                value={state}
                onChange={handleChange}
                placeholder="Movie search"
                required
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default MoviesSearchForm;