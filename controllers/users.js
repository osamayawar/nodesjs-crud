import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const newUsers = req.body;
  newUsers.forEach(user => {
    users.push({ ...user, "id": uuidv4() });
  });
  res.send(`Users successfully added`);
};

export const getUser = (req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  res.send(user);
};

export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send(`User with id: ${req.params.id} has been successfully deleted`);
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  const { firstName, lastName, age } = req.body;

  if(firstName) {
    user.firstName = firstName;
  }

  if(lastName) {
    user.lastName = lastName;
  }

  if(age) {
    user.age = age;
  }

  res.send(`User with id: ${req.params.id} has been successfully updated`);
}