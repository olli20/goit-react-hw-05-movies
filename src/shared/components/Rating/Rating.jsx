import styles from './rating.module.scss';

import {getRatingPercentage, getProgressDiagramClasses} from '../../utils/utils';

const Rating = ({vote}) => {
    const percentage = getRatingPercentage(vote);
    const isRated = percentage > 0;
    const radius = 9;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    // console.log(`percentage: ${percentage}, isRated: ${isRated}, dashArray: ${dashArray}, dashOffset: ${dashOffset}`);

    const progressDiagramClasses = getProgressDiagramClasses(percentage);

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
                        className={progressDiagramClasses}
                        style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset,
                        }}
                        transform='rotate(-90 10 10)'
                    />
                </svg>
            </div>
            <span className={styles.ratingNumber}>{isRated ? percentage : "NR"}</span>
            {percentage > 0 && <span className={styles.percentSign}>%</span>}
        </div>
    )
}

export default Rating;