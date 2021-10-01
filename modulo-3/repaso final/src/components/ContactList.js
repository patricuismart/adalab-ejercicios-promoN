import ContactItem from './ContactItem';

const ContactList = (props) => {
  console.log('Contact list', props);

  const html = props.data.map((contactData, index) => (
    <li key={index} className="card">
      <ContactItem contactData={contactData} />
    </li>
  ));

  return (
    <>
      <ul className="cards">{html}</ul>
    </>
  );
};

export default ContactList;
