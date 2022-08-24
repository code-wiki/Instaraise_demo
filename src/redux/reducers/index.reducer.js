import { combineReducers } from 'redux';
import { CardReducer, TabsSelectReducer } from './home/home.reducer';
import { BlogReducer } from './blog/blog.redcuer';
const rootReducer = combineReducers({
    CardReducer,
    BlogReducer,
    TabsSelectReducer,
});
export default rootReducer;
