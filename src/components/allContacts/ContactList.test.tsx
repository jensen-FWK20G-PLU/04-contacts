import { render, screen, /*queryByText,*/ within } from '@testing-library/react'
import ContactList from './ContactList'

describe('ContactList component', () => {
	
	it('renders without crashing', () => {
		render( <ContactList /> )
	})

	it('renders a specific contact name', () => {
		render( <ContactList /> )

		const maybe = screen.getByText(/Cecilia Circus/)

		expect(maybe).toBeInTheDocument()
	})

	it('renders the correct phone numbers for a specific contact', () => {
		render( <ContactList /> )
		const contactName = 'Bo Bengtsson'
		const contactPhone = '031-33333333'

		const contact = screen.getByTestId('contact349rtk')
		
		const nameElement = within(contact).getByText(contactName)
		expect(nameElement).toBeInTheDocument()
		
		const phoneElement = within(contact).getByText(contactPhone)
		expect(phoneElement).toBeInTheDocument()
	})

	it('renders the correct amount of contact elements', () => {
		render( <ContactList /> )

		const items = screen.getAllByRole('listitem')

		expect(items.length).toBe(3)
	})
})

// Test cases:
// (1) renders a specific contact name
// (1) renders the correct phone numbers for a specific contact
// (1) renders the correct amount of contacts elements

// User stories:
// 1. as a user I want to see all my contacts so that I don't need to remember their numbers
// 2. as a user I want to update a contact with new information so that the information is accurate
