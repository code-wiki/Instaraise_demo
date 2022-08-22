import { combineReducers } from 'redux';
import { ReduxReducer } from './home/home.reducer';
import { BlogReducer } from './blog/blog.redcuer';
const rootReducer = combineReducers({
    ReduxReducer,
    BlogReducer,
});
export default rootReducer;
