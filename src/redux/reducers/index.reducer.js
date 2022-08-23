import { combineReducers } from 'redux';
import { CardReducer } from './home/home.reducer';
import { BlogReducer } from './blog/blog.redcuer';
const rootReducer = combineReducers({
    CardReducer,
    BlogReducer,
});
export default rootReducer;
