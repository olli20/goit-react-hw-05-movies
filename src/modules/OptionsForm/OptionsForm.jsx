import {useState} from 'react';

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
                /> Day
            </label>
            <label className={styles.option}>
                <input 
                    type="radio" 
                    name="option"
                    value="week" 
                    onChange={handleChange}
                    checked={option === "week"}
                /> Week
            </label>
        </form>
    )
}

export default OptionsForm;