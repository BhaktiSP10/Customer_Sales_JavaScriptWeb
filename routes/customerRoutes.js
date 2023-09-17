const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customerController');

router
    .route('/')
    .get(customersController.getAllCustomers)
    .post(customersController.createNewCustomers);

router
    .route('/:id')
    .get(customersController.getAllCustomers)
    .patch(customersController.patchCustomersById)
    .delete(customersController.deleteCustomersByID);

module.exports = router;