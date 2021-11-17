import React from 'react';

const Total = ({ course }) => {
  const result = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return <strong>total of {result} exercises</strong>;
};

export default Total;
