import React from 'react';

const Person = ({ person, removePerson }) => {
  return (
    <p key={person.id}>
      {person.name} {person.number}{' '}
      <button
        type="button"
        onClick={() => {
          if (window.confirm(`Delete ${person.name}?`)) {
            removePerson();
          }
        }}
      >
        delete
      </button>
    </p>
  );
};

export default Person;
