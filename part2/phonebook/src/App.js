import React, { useState, useEffect } from 'react';
import { Filter, PersonForm, Persons, Notification } from './components';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [searchText, setSearchText] = useState('');
  const [message, setMessage] = useState({ content: null, type: null });

  const handleNameChange = (e) => setNewName(e.target.value);
  const handlePhoneChange = (e) => setNewPhone(e.target.value);
  const handleSearchTextChange = (e) => setSearchText(e.target.value);

  useEffect(() => {
    personService.getAllPersons().then((data) => setPersons(data));
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    const foundPerson = persons.find((person) => person.name === newName);

    if (foundPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        updateNumber(foundPerson.id);
      }
    } else {
      personService
        .addPerson({ name: newName, number: newPhone })
        .then((newPerson) => {
          console.log('newPerson', newPerson);
          setPersons([...persons, newPerson]);
          setNewName('');
          setNewPhone('');
          setMessage({
            content: `Added ${newPerson.name}`,
            type: 'success',
          });
          setTimeout(() => {
            setMessage({ content: null, type: null });
          }, 3000);
        });
    }
  };

  const updateNumber = (id) => {
    personService
      .updateNumber(id, { name: newName, number: newPhone })
      .then((updatedPerson) => {
        setPersons(persons.map((p) => (p.id !== id ? p : updatedPerson)));
        setNewName('');
        setNewPhone('');
        setMessage({
          content: `Phone number of ${updatedPerson.name} updated`,
          type: 'success',
        });
        setTimeout(() => {
          setMessage({ content: null, type: null });
        }, 3000);
      })
      .catch((error) => {
        setMessage({
          content: `Information of ${newName} has already been removed from server`,
          type: 'failure',
        });
        setTimeout(() => {
          setMessage({ content: null, type: null });
        }, 3000);
        setNewName('');
        setNewPhone('');
        setPersons(persons.filter((p) => p.id !== id));
      });
  };

  const deletePerson = (id) => {
    personService
      .deletePerson(id)
      .then(() => setPersons(persons.filter((p) => p.id !== id)));
  };

  const peopleToShow =
    searchText === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Persons peopleToShow={peopleToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
