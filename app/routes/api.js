const express = require('express');
const router = new express.Router();
const CompanyController = require('../controllers/api/company-controler')

router.get('/companies', CompanyController.showCompanies);
router.post('/companies', CompanyController.create);
router.out('/companies/:slug', CompanyController.edit);

module.exports = router;