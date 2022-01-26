import { render, screen/*, queryByText, within*/ } from '@testing-library/react'
import { Contact } from '../../models/Contact'
import ContactCard from './ContactCard'

describe('ContactCard component', () => {
	let testContact: Contact;
	
	beforeEach(() => {
		testContact = createContact();
	})


	it('renders without crashing', () => {
		render( <ContactCard contact={testContact} /> )
	})

	it('renders a pen button (for editing a contact)', () => {
		render( <ContactCard contact={testContact} /> )

		// There is only one button in the component (for now)
		const button = screen.getByRole('button')

		expect(button).toBeInTheDocument()
	})

	it('shows no input fields initially', () => {
		render( <ContactCard contact={testContact} /> )

		const maybeInputs = screen.queryAllByRole('textbox')

		expect(maybeInputs.length).toBe(0)
	})


	// shows input fields after click on pen


	// vad ska hända när man ändrar??
})

function createContact(): Contact {
	return {
		id: 'ididid',
		name: 'Karl-Erik "Stureplan" Pengarsson',
		phoneNumbers: [
			'08-9785743',
			'08-1739405'
		]
	}
}