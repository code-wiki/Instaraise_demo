import { SELECTED_CARD_DETAILS } from '../index.action';
export const handleSelectedCardAction = (data) => {
    console.log(data);
    return {
        type: SELECTED_CARD_DETAILS,
        payload: data,
    };
};
