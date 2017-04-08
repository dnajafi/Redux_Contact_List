import React, { PropTypes } from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, onContactClick }) => (
	<table>
		<tr>
			<th>NAME</th>
			<th>PHONE NUMBER</th>
		</tr>
		{contacts.map(contact => 
			<Contact 
				key={contact.id}
				name={contact.name}
				phone={contact.phone}
				onClick={() => onContactClick(contact.id)}
			/>)}
	</table>
);

ContactList.PropTypes = {
	contacts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		
		phone: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onContactClick: PropTypes.func.isRequired
};

export default ContactList;

// favorite: PropTypes.boolean.isRequired, -> goes on line 23