import {memo} from 'react';

import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({onClick = null, type = "button", children}) => {
    return (
        <>
            {Boolean(onClick) && <button className={styles.button} onClick={onClick} type={type}>{children}</button>}
            {!Boolean(onClick) && <button className={styles.button} type={type}>{children}</button>}
        </>
    )
}

export default memo(Button);

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["button", "submit"]),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element]).isRequired,
}
