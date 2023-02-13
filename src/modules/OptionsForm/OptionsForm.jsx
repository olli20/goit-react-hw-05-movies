import {PropTypes} from 'prop-types';

import styles from './options-form.module.scss';

const OptionsForm = ({onChange, option}) => {
    const handleChange = ({target}) => {
        onChange(target);
    }

    return (
        <form>
            <label className={styles.option}>
                <input 
                    type="radio" 
                    name="option" 
                    value="day" 
                    onChange={handleChange}
                    checked={option === "day"}
                /> Today
            </label>
            <label className={styles.option}>
                <input 
                    type="radio" 
                    name="option"
                    value="week" 
                    onChange={handleChange}
                    checked={option === "week"}
                /> This week
            </label>
        </form>
    )
}

export default OptionsForm;

OptionsForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    option: PropTypes.oneOf(["day", "week"]).isRequired,
}