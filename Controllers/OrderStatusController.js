const express = require('express');
const bodyParser = require('body-parser');
const orderStausModel = require('../Models/OrderStatus');
const orderStatusgive = async (req, res, next) => {
  const { orderStatus, userEmail, serviceName, price, functionDate } = req.body;
  console.log(orderStatus, userEmail, serviceName, price, functionDate);
  const orderRecieved = new orderStausModel({
    orderStatus,
    serviceName,
    userEmail,
    price,
    functionDate,
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
  console.log(req.query.email, 'jjjjja');

  orderStausModel
    .find({ userEmail: req.query.email })

    .then((dataL) => {
      res.status(200).send({
        dataL,
      });
      console.log(
        dataL.map((st) => st.orderStatus),
        'finddddd meeee'
      );
    })
    .catch((err) => {
      res.status(500).json(err);
      console.log(err);
    });
};

module.exports = { orderStatusgive, getOrderStatus };
