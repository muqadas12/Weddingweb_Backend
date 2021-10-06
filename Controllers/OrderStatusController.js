const express = require('express');
const bodyParser = require('body-parser');
const orderStausModel = require('../Models/OrderStatus');
const orderStatusgive = async (req, res, next) => {
  const { orderStatus, email, serviceName } = req.body;
  console.log(orderStatus, email, serviceName);
  const orderRecieved = new orderStausModel({
    orderStatus,
    serviceName,
  });
  orderRecieved
    .save()
    .then((saveData) => {
      console.log(saveData);
      res.status(201).json({ orderStatusData: saveData });
    })
    .catch((err) => {
      console.log(err);
    });
};
const getOrderStatus = (req, res) => {
  orderStausModel
    .find()

    .then((dataL) => {
      res.status(200).send({
        dataL,
      });
      console.log(dataL);
    })
    .catch((err) => {
      res.status(500).json(err);
      console.log(err);
    });
};

module.exports = { orderStatusgive, getOrderStatus };
