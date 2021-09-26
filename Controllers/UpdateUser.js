const users = require('../Models/UserModel');
const express = require('express');
const app = express();

const updateUsers = (req, res, next) => {
  const query = { $set: req.body };
  console.log(req.body);
  users.findByIdAndUpdate(
    req.params.id,
    query,
    { upsert: true, new: true },
    (err, doc) => {
      if (err) {
        res.status(500);
        next(new Error(`Internal Server Error, Please Try later.`));
      } else {
        res.status(200).send({ doc });
      }
    }
  );
};

const delUsers = app.delete('/delete/:id', function (req, res, next) {
  const id = req.params.id;
  users.findByIdAndRemove(id).exec();
  res.send('deleted users!');
});
module.exports = { updateUsers, delUsers };
