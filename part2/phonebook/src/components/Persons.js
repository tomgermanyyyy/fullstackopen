import React from 'react';
import { Person } from '.';

const Persons = ({ peopleToShow, deletePerson }) => {
  return peopleToShow.map((person) => (
    <Person person={person} removePerson={() => deletePerson(person.id)} />
  ));
};

export default Persons;
