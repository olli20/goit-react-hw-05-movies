import PropTypes from 'prop-types';

import Container from '../Container';

import styles from './grid.module.scss';

const Grid = ({type = "default", children}) => {
    const getGridClassList = (type) => {
        let list = "";
        switch (type) {
            case "default":
                list = styles.gird;
                break;
            case "actors":
                list = `${styles.gird} ${styles.actors}`;
                break;
            default:
                list = styles.gird;
        }
        return list;
    }

    const classList = getGridClassList(type);
    return (
        <Container>
            <div className={classList}>{children}</div>
        </Container>
    )
}

export default Grid;

Grid.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node]).isRequired,
}