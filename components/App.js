import React from 'react';
import Footer from './Footer';
import AddContact from '../containers/AddContact';
import VisibleContactList from '../containers/VisibleContactList';

const App = () => (
	<div>
		<AddContact />
		<VisibleContactList />
		<Footer />
	</div>
);

export default App;