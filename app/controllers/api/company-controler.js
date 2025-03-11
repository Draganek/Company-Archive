const Company = require('../../db/models/company')


class CompanyController {
    async showCompanies(req, res) {
        const companies = await Company.find();
        res.json(companies)
    }

    async create(req, res) {
        const company = new Company({
            name: req.body.name,
            slug: req.body.slug,
            employeesCount: req.body.employeesCount || undefined, // linijka 32, company-controller.js
            user: req.session.user._id,
            image: req.file.filename
        })

        try {
            await company.save();
            res.status(201).json(company)
        } catch (e) {
            res.status(422).json({ errors: e.errors });
        }
    }

    async edit(req, res) {
        const { slug } = req.params;
        const company = await Company.findOne({ slug })
        if (req.body.name) company.name = req.body.name;
        if (req.body.slug) company.slug = req.body.slug;
        if (req.body.employeesCount) company.employeesCount = req.body.employeesCount;

        if (req.file.filename && company.image) {
            fs.unlinkSync('public/uploads/' + company.image)
        }
        if (req.file.filename) {
            company.image = req.file.filename;
        }

        try {
            await company.save();
            res.status(201).json(company)
        } catch (e) {
            res.status(422).json({ errors: e.errors });
        }

    }

}

module.exports = new CompanyController