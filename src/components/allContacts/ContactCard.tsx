import { Contact } from '../../models/Contact'

interface Props {
	contact: Contact;
}

// const ContactCard = ({ contact: { id, name, phoneNumbers } }: Props) => {
const ContactCard = ({ contact }: Props) => {
	// props.contact.name osv.
	return (
		<li data-testid={'contact' + contact.id}>
			<h3> {contact.name} </h3>
			{contact.phoneNumbers.map(phone => (
				<div key={phone}> {phone} </div>
			))}
			<div className="star">
				<div role="button">🖊️</div>
			</div>
		</li>
	)
}

export default ContactCard
