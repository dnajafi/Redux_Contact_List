import React, { PropTypes } from 'react';

const Contact = ({ onClick, favorite, name, phone }) => (
	<tr 
		onClick={onClick}
		style={{
			fontWeight: favorite ? 'bold' : 'normal'
		}}
	>
		<td>
			{name}
		</td>
		<td>
			{phone}
		</td>
	</tr>
);

Contact.propTypes = {
	onClick: PropTypes.func.isRequired,
	favorite: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired
};

export default Contact;