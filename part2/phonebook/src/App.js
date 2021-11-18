import React, { useState } from 'react';
import { Filter, PersonForm, Persons } from './components';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleNameChange = (e) => setNewName(e.target.value);
  const handlePhoneChange = (e) => setNewPhone(e.target.value);
  const handleSearchTextChange = (e) => setSearchText(e.target.value);

  const addPerson = (e) => {
    e.preventDefault();
    const personExisted =
      persons.findIndex((person) => person.name === newName) !== -1;

    if (personExisted) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, phone: newPhone }]);
      setNewName('');
      setNewPhone('');
    }
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
      <Persons peopleToShow={peopleToShow} />
    </div>
  );
};

export default App;
