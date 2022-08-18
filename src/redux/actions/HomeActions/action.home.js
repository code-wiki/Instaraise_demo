import { FILTER_CARDS, SEARCH_ITEM } from '../index.action';

export const SearchItemData = (text) => {
    return {
        type: SEARCH_ITEM,
        payload: text,
    };
};
export const filterItemData = (data) => {
    return {
        type: FILTER_CARDS,
        payload: data,
    };
};
