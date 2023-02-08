const findCntct = (filter, contacts) => {
  if (!filter) return contacts;
  const filterLower = filter.toLowerCase();
  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLower)
  );
  return contactsFilter;
};

export default findCntct;
