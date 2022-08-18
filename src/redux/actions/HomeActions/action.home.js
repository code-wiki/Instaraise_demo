import { FILTER_CARDS, ALL } from '../index.action';
import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';

export const filterItemData = (data) => {
    const updatedItems = CARD_DATA.filter((curElem) => {
        return curElem.category === data;
    });
    return {
        type: FILTER_CARDS,
        payload: updatedItems,
    };
};
export const allItemData = (data) => {
    const updatedItems = CARD_DATA.filter((curElem) => {
        return curElem.allCategory === data;
    });
    return {
        type: ALL,
        payload: updatedItems,
    };
};
