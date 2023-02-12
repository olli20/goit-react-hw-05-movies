import {useState} from 'react';

import Button from '../../shared/components/Button/Button';

import styles from './movies-search-form.module.scss';

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
                placeholder="Movies search"
                required
                className={styles.input}
            />
            <Button type="submit">Search</Button>
        </form>
    )
}

export default MoviesSearchForm;