const express = require('express');
const router = express.Router();
const orderstatusController = require('../Controllers/OrderStatusController');
router.post('/view-order-Status', orderstatusController.orderStatusgive);
router.get('/get-order-status', orderstatusController.getOrderStatus);
module.exports = router;
