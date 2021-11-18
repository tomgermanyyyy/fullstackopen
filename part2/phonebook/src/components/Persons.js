import React from 'react';
import { Person } from '.';

const Persons = ({ peopleToShow }) => {
  return peopleToShow.map((person) => <Person person={person} />);
};

export default Persons;
