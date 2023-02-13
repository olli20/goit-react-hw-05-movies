import { format } from "date-fns";

import diagramStyles from '../../shared/components/Rating/rating.module.scss';

export const countRatingPercentage = (integer) => {
    if (integer > 0) {
        return Math.round(integer * 10);
    }
    return "NR";
}

export const formatDate = (date) => {
    if (date === null || date === ""  || date === undefined) {
        return undefined;
    }
    const formatDate = date + "T12:00:00";
    return format(Date.parse(formatDate), 'MMM dd, yyyy');
}

export const getDiagramClassList = (rating) => {
    let classList = "";
    if(rating >= 70) {
        classList = `${diagramStyles.progress} ${diagramStyles.heigh}`;
    } else if (rating < 70 && rating >= 50) {
        classList = `${diagramStyles.progress} ${diagramStyles.medium}`;
    } else if (rating === "NR") {
        classList = `${diagramStyles.progress} ${diagramStyles.nr}`;
    } else {
        classList = diagramStyles.progress;
    }
    return classList;
}