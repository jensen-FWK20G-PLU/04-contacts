import { render/*, screen, queryByText, within*/ } from '@testing-library/react'
import { Contact } from '../../models/Contact'
import ContactCard from './ContactCard'

describe('ContactCard component', () => {

	it('renders without crashing', () => {
		const contact: Contact = { id: 'ididid', name: 'Erik', phoneNumbers: [] }
		render( <ContactCard contact={contact} /> )
	})
})