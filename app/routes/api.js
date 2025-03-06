const express = require('express');
const router = new express.Router();
const CompanyController = require('../controllers/api/company-controler')

router.get('/companies', CompanyController.showCompanies);

module.exports = router;