const favoriteFilter = (state = 'SHOW_ALL', action) => {
	switch(action.type) {
		case 'SET_FAVORITE_FILTER':
			return action.filter;
		default:
			return state;
	}
}

export default favoriteFilter;
