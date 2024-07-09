import {memo, useCallback} from 'react';

import {PropTypes} from 'prop-types';

import styles from './options-form.module.scss';

import Container from '../../shared/components/Container';

const OptionsForm = ({onChange, option}) => {
    const handleChange = useCallback(({target}) => {
        onChange(target);
    }, [onChange]);
    
    return (
        <Container>
            <div className={styles.container}>
                <h1 className={styles.title}>Trending movies</h1>
                <form className={styles.formContainer}>
                    <label className={styles.option}>
                        <input 
                            type="radio" 
                            name="option" 
                            value="day" 
                            onChange={handleChange}
                            checked={option === "day"}
                            className={styles.optionItem}
                        /> <span>Today</span>
                    </label>
                    <label className={styles.option}>
                        <input 
                            type="radio" 
                            name="option"
                            value="week" 
                            onChange={handleChange}
                            checked={option === "week"}
                            className={styles.optionItem}
                        /> <span>This week</span>
                    </label>
                </form>
            </div>
        </Container>
    )
}

export default memo(OptionsForm);

OptionsForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    option: PropTypes.oneOf(["day", "week"]).isRequired,
}