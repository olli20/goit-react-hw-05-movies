import styles from './cast-list.module.scss';

const CastList = ({items}) => {
    const elements = items.map(({id, name, character, profile_path}) => {
        return (
            <li key={id} className={styles.item}>
                <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} width="150" alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
            </li>
        )
    })
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default CastList;