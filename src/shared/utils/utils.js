import { format } from "date-fns";

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