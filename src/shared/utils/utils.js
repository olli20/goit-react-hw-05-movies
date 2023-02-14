import {format} from "date-fns";

import diagramStyles from '../../shared/components/Rating/rating.module.scss';

export const getRatingPercentage = (rawRating = 0) => {
    return Math.round(rawRating * 10);
}

export const formatDate = (date) => {
    if (date === null || date === ""  || date === undefined) {
        return undefined;
    }
    const formatDate = date + "T12:00:00";
    return format(Date.parse(formatDate), 'MMM dd, yyyy');
}

export const getProgressDiagramClasses = (rating) => {
    let classList = diagramStyles.progress;
    if (rating >= 70) {
        classList = `${diagramStyles.progress} ${diagramStyles.high}`;
    } else if (rating < 70 && rating >= 50) {
        classList = `${diagramStyles.progress} ${diagramStyles.medium}`;
    }
    return classList;
}