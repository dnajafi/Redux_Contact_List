// This is the contact reducer
const contact = (state = {}, action) => {
	switch(action.type) {
		case 'ADD_CONTACT':
			return {
				id: action.id,
				name: action.name,
				phone: action.phone
			}
		case 'TOGGLE_FAVORITE':
			if(state.id !== action.id) {
				return state;
			}
			return Object.assign({}, state, {
				favorite: !state.favorite
			});
		default:
			return state
	}
}

// This is the main reducer
const contacts = (state=[], action) => {
	switch(action.type) {
		case 'ADD_CONTACT':
			return [
				...state,
				contact(undefined, action)
			];
		case 'TOGGLE_FAVORITE':
			return state.map(t => contact(t, action));
		default:
			return state
	}
}

export default contacts;