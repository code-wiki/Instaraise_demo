import { combineReducers } from 'redux';
import { CardReducer, TabsSelectReducer } from './home/home.reducer';
import { BlogReducer, relatedBlogReducer } from './blog/blog.redcuer';
const rootReducer = combineReducers({
    CardReducer,
    BlogReducer,
    TabsSelectReducer,
    relatedBlogReducer,
});

export default rootReducer;
