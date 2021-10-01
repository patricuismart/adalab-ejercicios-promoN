const ContactItem = (props) => {
  console.log('ContactItem', props);
  return (
    <a href="#/user/473cad77-5d41-45ac-a925-e0dbe1d3e417">
      <img
        className="card__img"
        src={props.contactData.photo}
        alt={`Foto de ${props.contactData.name}`}
        title={`Foto de ${props.contactData.name}`}
      />
      <h4 className="card__title">{props.contactData.name}</h4>
      <p className="card__description">
        {props.contactData.city}/ {props.contactData.gender}
      </p>
    </a>
  );
};
export default ContactItem;
