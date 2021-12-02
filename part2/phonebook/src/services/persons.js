import axios from 'axios';
const baseUrl = '/api/persons';

const getAllPersons = () =>
  axios.get(baseUrl).then((response) => {
    console.log('get all persons', response);
    return response.data;
  });

const addPerson = (data) =>
  axios.post(baseUrl, data).then((response) => {
    console.log('add person', response);
    return response.data;
  });

const updateNumber = (id, data) =>
  axios.put(`${baseUrl}/${id}`, data).then((response) => {
    console.log('update number', response);
    return response.data;
  });

const deletePerson = (id) =>
  axios.delete(`${baseUrl}/${id}`).then((response) => {
    console.log('delete person', response);
    return response;
  });

export default {
  getAllPersons,
  addPerson,
  updateNumber,
  deletePerson,
};
