const Company = require('../../db/models/company')


class CompanyController {
    async showCompanies(req, res) {
        const companies = await Company.find();
        res.json(companies)
    }

}

module.exports = new CompanyController