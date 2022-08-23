import { SELCTED_CARD_DETAILS } from '../index.action';
export const handleSelectedCardAction = (data) => {
    console.log(data);
    return {
        type: SELCTED_CARD_DETAILS,
        payload: data,
    };
};
