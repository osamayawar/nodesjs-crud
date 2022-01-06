import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let users = [];

router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
  const newUsers = req.body;
  newUsers.forEach(user => {
    users.push({ ...user, "id": uuidv4() });
  });
  res.send(`Users successfully added`);
});

router.get('/:id', (req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  res.send(user);
});

router.delete('/:id', (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send(`User with id: ${req.params.id} has been successfully deleted`);
});

export default router;
