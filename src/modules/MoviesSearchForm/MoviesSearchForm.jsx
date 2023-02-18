import {useState, memo} from 'react';
import {PropTypes} from 'prop-types';

import Button from '../../shared/components/Button';
import ContainerFilled from '../../shared/components/ContainerFilled';

import styles from './movies-search-form.module.scss';

const MoviesSearchForm = ({onSubmit}) => {
    const [state, setState] = useState("");
 
    const handleChange = ({target}) => {
        setState(target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(state);
        setState("");
    }

    return (
        <ContainerFilled>
            <div className={styles.formBlock}>
                <h1 className={styles.title}>Explore.</h1>
                <p className={styles.description}>Have you done your homework? Than it's time to discover.</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input 
                        name="query"
                        value={state}
                        onChange={handleChange}
                        placeholder="Search for a movie..."
                        required
                        className={styles.input}
                    />
                    <div className={styles.formButton}>
                        <Button type="submit">Search</Button>
                    </div>
                </form>
            </div>
        </ContainerFilled>
    )
}

export default memo(MoviesSearchForm);

MoviesSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
} 