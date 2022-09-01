import { SELECTED_CARD_DETAILS, RELATED_POSTS } from '../index.action';
import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';
export const handleSelectedCardAction = (data) => {
    return {
        type: SELECTED_CARD_DETAILS,
        payload: data,
    };
};

export const handleRelatedPosts = (data) => {
    const relatedPostsFilter = nextTwoElements(data.id, CARD_DATA.length);
    return {
        type: RELATED_POSTS,
        payload: relatedPostsFilter,
    };
};
const nextTwoElements = (data, totalLength) => {
    if (data === totalLength) {
        return [CARD_DATA[0], CARD_DATA[1]];
    } else if (data === totalLength - 1) {
        return [CARD_DATA[data], CARD_DATA[0]];
    }
    return CARD_DATA.filter(
        (item) => item.id === data + 1 || item.id === data + 2
    );
};
