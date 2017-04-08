import { combineReducers } from 'redux';
import contacts from './contacts';
import favoriteFilter from './favoriteFilter';

const contactApp = combineReducers({
	contacts,
	favoriteFilter
});

export default contactApp

