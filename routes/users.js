import express from 'express';

const router = express.Router();
const users = [
  {
    "firstName": "John",
    "lastName": "Doe",
    "age": "25"
  },
  {
    "firstName": "Jame",
    "lastName": "Doe",
    "age": "24"
  }
];

router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
  users.push(req.body);
  res.send(`User with the name ${req.body.firstName} has been added to the database`);
});

export default router;
