// import { nanoid } from 'nanoid';

const findCntct = (filter, contacts) => {
  if (!filter) return contacts;
  const filterLower = filter.toLowerCase();
  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLower)
  );
  return contactsFilter;
};

export default findCntct;

// const startData = [
//   { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//   { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//   { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//   { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
// ];
