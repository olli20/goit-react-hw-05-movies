import { ThreeDots } from  'react-loader-spinner';

import Container from '../Container';

import styles from './loading.module.scss';

const Loading = () => {
    return (
        <Container>
            <div className={styles.container}>
                <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#09acda" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        </Container>
    )
}

export default Loading;
