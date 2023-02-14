import styles from './container-filled.module.scss';

const ContainerFilled = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default ContainerFilled;