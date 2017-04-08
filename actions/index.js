let nextContactId = 0
export const addContact = (name, phone) => {
  return {
    type: 'ADD_CONTACT',
    id: nextContactId++,
    name,
    phone
  }
}

export const setVisibilityFavorite = (filter) => {
	return {
		type: 'SET_FAVORITE_FILTER',
		filter
	}
}

export const toggleFavorite = (id) => {
	return {
		type: 'TOGGLE_CONTACT',
		id
	}
}