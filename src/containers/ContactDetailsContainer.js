import { connect } from 'react-redux';

import ContactDetails from '../components/contacts/ContactDetails';

const ContactDetailsContainer = ({ location: { state: { contact } } }) => {
  return (
    <ContactDetails {...contact} />
  )
}

const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(ContactDetailsContainer);
