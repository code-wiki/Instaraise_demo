import { FILTER_CARDS } from '../index.action';

export const FilterCardData = () => {
    return {
        type: FILTER_CARDS,
        payload: alert('pressed'),
    };
};
