import { useState, useEffect } from "react";
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from "components/Contacts/Contacts";
import { Title } from "components/Contacts/Contacts.styled";
import { Filter } from 'components/Filter/Filter';
import Notiflix from 'notiflix';

export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const formSubmitHandler = (data) => {
    const includeContact = contacts.map(contact => contact.name.toLowerCase().includes(data.name.toLowerCase()))
    if (includeContact.includes(true)) {
      return Notiflix.Notify.warning(`${data.name} is already in contacts`);
    }
    let newContacts = [];
    newContacts.push(data);
    setContacts(prev => ([...prev, ...newContacts]));
  };

  const filterUpdate = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const contactsFilter = () => {
      const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filteredContacts;
  };

  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updatedContacts);
  };

   return (<div>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={formSubmitHandler} />
      <Title>Contacts</Title>
      <Filter method={filterUpdate} filter={filter} />
      <Contacts contacts={contactsFilter()} deleteItem={deleteContact} />
    </div>
   )
}
