import styles from './rating.module.scss';

import {countRatingPercentage, getDiagramClassList} from '../../utils/utils';

const Rating = ({vote}) => {
    const percentage = countRatingPercentage(vote);
    const radius = 9;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    const classes = getDiagramClassList(percentage);

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
                        className={classes}
                        style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset,
                        }}
                        transform='rotate(-90 10 10)'
                    />
                </svg>
            </div>
            <span className={styles.ratingNumber}>{percentage}</span>
            {percentage > 0 && <span className={styles.percentSign}>%</span>}
        </div>
    )
}

export default Rating;