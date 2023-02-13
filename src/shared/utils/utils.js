import { format } from "date-fns";

export const countRatingPercentage = (integer) => {
    return Math.round(integer * 10);
}

export const formatDate = (date) => {
    const formatDate = date + "T12:00:00";
    return format(Date.parse(formatDate), 'MMM dd, yyyy');
}