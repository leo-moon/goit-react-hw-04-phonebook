import { nanoid } from 'nanoid';
import { useState } from 'react';
import styles from './phonebook.module.scss';
import ContactForm from './ContactForm/ContactForm';
import FindContact from './FindContact/FindContact';
import findCntct from '../../components/findCntct';

const Phonebook = () => {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  // let filter = '';
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    if (isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }
    setContacts(() => {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      return [...contacts, newContact];
    });
  };

  const isDublicate = name => {
    const nameLower = name.toLowerCase();
    const dublicate = contacts.find(
      contact => contact.name.toLowerCase() === nameLower
    );
    return Boolean(dublicate);
  };

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setContacts({ [name]: value });
  // };



  const removeContact = id => {
    const newList = contacts.filter(contact => contact.id !== id);
    setContacts(() => {
      return [...newList];
    });
  };

  //   componentDidMount=()=> {
  //   const contactsLS = JSON.parse(localStorage.getItem('phonebookformclass'));
  //   if (contacts?.length) {
  //     setContacts({ contactsLS });
  //   }
  // }

  // const componentDidUpdate = (prevProps, prevContacts) => {
  //   if (contacts.length !== prevContacts.contacts.length)
  //     localStorage.setItem('phonebookformclass', JSON.stringify(contacts));
  // };

  const handleFilter = ({ target }) => {
    setFilter(() => {
      return target.value;
    });
  };

  const contactsFilter = findCntct(filter, contacts);
  const elementsLi = contactsFilter.map(({ id, name, number }) => (
    <li className={styles.li} key={id}>
      {name} : {number}
      <button
        onClick={() => removeContact(id)}
        className={`${styles.btn} ${styles.deleteBtn}`}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return (
    <>
      <h3 className={styles.mainTitle}>Phonebook Form</h3>

      <ContactForm onSubmit={addContact} />
      <h3 className={styles.mainTitle}>Contacts</h3>
      <div className={styles.find}>
        <FindContact handleFilter={handleFilter} />
        <ul>{elementsLi}</ul>
      </div>
    </>
  );
};

export default Phonebook;





/*class Phonebook extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (this.isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      return { contacts: [...contacts, newContact] };
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  removeContact(id) {
    this.setState(({ contacts }) => {
      const newList = contacts.filter(contact => contact.id !== id);
      return { contacts: [...newList] };
    });
  }

  isDublicate(name) {
    const nameLower = name.toLowerCase();
    const { contacts } = this.state;
    const dublicate = contacts.find(
      contact => contact.name.toLowerCase() === nameLower
    );
    return Boolean(dublicate);
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('phonebookformclass'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts.length !== prevState.contacts.length)
      localStorage.setItem('phonebookformclass', JSON.stringify(contacts));
  }

  render() {
    const contacts = findCntct(this.state.filter, this.state.contacts);
    const elementsLi = contacts.map(({ id, name, number }) => (
      <li className={styles.li} key={id}>
        {name} : {number}
        <button
          onClick={() => this.removeContact(id)}
          className={`${styles.btn} ${styles.deleteBtn}`}
          type="button"
        >
          Delete
        </button>
      </li>
    ));
    const { addContact, handleChange } = this;
    return (
      <>
        <h3 className={styles.mainTitle}>Phonebook Form</h3>

        <ContactForm onSubmit={addContact} />
        <h3 className={styles.mainTitle}>Contacts</h3>
        <div className={styles.find}>
          <FindContact handleChange={handleChange} />
          <ul>{elementsLi}</ul>
        </div>
      </>
    );
  }
}
*/
