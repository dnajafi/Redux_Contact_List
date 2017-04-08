import { connect } from 'react-redux';
import { toggleFavorite } from '../actions';
import ContactList from '../components/ContactList';

const getVisibleContacts = (contacts, filter) => {
	switch(filter) {
		case 'SHOW_ALL':
			return contacts;
		case 'SHOW_FAVORITE':
			return contacts.filter(t => t.favorite);
	}
};

const mapStateToProps = (state) => {
  return {
    contacts: getVisibleContacts(state.contacts, state.favoriteFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onContactClick: (id) => {
      dispatch(toggleFavorite(id));
    }
  }
}

const VisibleContactList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);

export default VisibleContactList;