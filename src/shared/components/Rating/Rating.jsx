import styles from './rating.module.scss';

import {countRatingPercentage} from '../../utils/utils';

const Rating = ({vote}) => {
    const percentage = countRatingPercentage(vote);
    // const circleWidth = 40;
    const radius = 9;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;
    return (
        <div className={styles.rating}>
            <div className={styles.diagram}>
                <svg  
                    width="40" 
                    height="40" 
                    viewBox={`0 0 21 21`}
                >
                    <circle 
                        cx="10" cy="10" r={radius}
                        strokeWidth="1px" 
                        className={styles.circleBg}

                    />
                    <circle 
                        cx="10" cy="10" r={radius}
                        strokeWidth="1px" 
                        className={styles.progress}
                        style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset,
                        }}
                        transform='rotate(-90 10 10)'
                    />
                </svg>
            </div>
            <span className={styles.ratingNumber}>{percentage}</span>
            <span className={styles.percentSign}>%</span>
        </div>
    )
}

export default Rating;