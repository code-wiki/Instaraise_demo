import { FILTER_CARDS } from '../index.action';
import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';

export const filterItemData = (data) => {
    const updatedItems = CARD_DATA.filter((curElem) => {
        return curElem.category.includes(data);
    });
    return {
        type: FILTER_CARDS,
        payload: updatedItems,
    };
};
