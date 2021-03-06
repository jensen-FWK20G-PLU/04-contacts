import { useState } from 'react'
import { Contact } from '../../models/Contact'
import ContactCard from './ContactCard'



const data: Contact[] = [
	{
		id: '9393',
		name: 'Anna Andersson',
		phoneNumbers: ['031-12345678', '0733-1234123']
	},
	{
		id: '349rtk',
		name: 'Bo Bengtsson',
		phoneNumbers: ['031-33333333']
	},
	{
		id: '32d3',
		name: 'Cecilia Circus',
		phoneNumbers: ['031-55555555', '0733-5555555']
	}
]

const ContactList = () => {
	const [contacts, setContacts] = useState<Contact[]>(data)

	const changeContact = (newContact: Contact) => setContacts(
		contacts.map(c => c.id === newContact.id ? newContact : c)
	)
	
	return (
		<ul className="contact-list">
			{contacts.map(c => (
				<ContactCard key={c.id}
					contact={c}
					changeContact={changeContact}
					/>
			))}
		</ul>
	)
}
/*<li data-testid="contact1">
	<h3> Anna Andersson </h3>
	<div>031-12345678</div>
	<div>0733-1234123</div>
	<div className="star">
		<div>⭐</div>
		<div>🖊️</div>
	</div>
</li>*/

export default ContactList
