const Company = require('../db/models/company')

class CompanyController {

  async showCompanies(req, res) {
    const { q, sort, countmin, countmax } = req.query;

    const where = {};
    if (q) {
      where.name = { $regex: q, $options: 'i' };
    }
    if (countmin || countmax) {
      where.employeesCount = {};
      if (countmin) where.employeesCount.$gte = countmin;
      if (countmax) where.employeesCount.$lte = countmax;
    }

    let query = Company.find(where);
    if (sort) {
      const s = sort.split('|')
      query = query.sort({ [s[0]]: s[1] });
    }
    const companies = await query.exec();

    res.render('pages/companies/companies', {
      companies, q
    });
  }

  async showCompany(req, res) {
    const { name } = req.params;
    const company = await Company.findOne({ slug: name });

    res.render('pages/companies/company', {
      name: company?.name,
      title: company?.name ?? 'Brak wyników',
    });
  }

  showCreateCompanyForm(req, res) {
    res.render('pages/companies/create')
  }

  async createCompany(req, res) {
    const company = new Company({
      name: req.body.name,
      slug: req.body.slug,
      employeesCount: req.body.employeesCount || undefined, // linijka 32, company-controller.js
    })

    try {
      await company.save();
      res.redirect('/firmy')
    } catch (e) {
      res.render('pages/companies/create', {
        errors: e.errors,
        form: req.body
      })
    }
  }

  async showEditCompanyForm(req, res) {
    const { name } = req.params;
    const company = await Company.findOne({ slug: name })
    res.render('pages/companies/edit', {
      form: company
    })
  }

  async editCompany(req, res) {
    const { name } = req.params;
    const company = await Company.findOne({ slug: name })
    company.name = req.body.name;
    company.slug = req.body.slug;
    company.employeesCount = req.body.employeesCount

    try {
      await company.save();
      res.redirect('/firmy')
    } catch (e) {
      res.render('pages/companies/edit', {
        errors: e.errors,
        form: req.body
      })
    }

  }

  async deleteCompany(req, res) {
    const { name } = req.params;

    try {
      await Company.deleteOne({ slug: name });
      res.redirect('/firmy');
    }
    catch (e) {

    }
  }

}

module.exports = new CompanyController();