import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Filter, PersonForm, Persons } from './components';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleNameChange = (e) => setNewName(e.target.value);
  const handlePhoneChange = (e) => setNewPhone(e.target.value);
  const handleSearchTextChange = (e) => setSearchText(e.target.value);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/persons`)
      .then((res) => setPersons(res.data));
  }, []);

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
