import React from 'react';

const Notification = ({ message }) => {
  const { content, type } = message;
  const successStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  const failureStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  if (content === null) {
    return null;
  }

  return (
    <div style={type === 'success' ? successStyle : failureStyle}>
      {content}
    </div>
  );
};

export default Notification;
