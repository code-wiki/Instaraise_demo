import { SELECTED_CARD_DETAILS } from '../index.action';
export const handleSelectedCardAction = (data) => {
    console.log(data.id + 1);
    return {
        type: SELECTED_CARD_DETAILS,
        payload: data,
    };
};
